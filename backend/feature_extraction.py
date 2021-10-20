# -*- coding: utf-8 -*-
"""
Created on Mon Oct 18 18:20:11 2021

@author: amaan
"""

import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json
import os
import pandas as pd
import numpy as np

def feature_extraction(accessToken, selectedPlaylists, currentUsername):

    # Enter app credentials
    client_id = 'c5455611ee7e4367b44da7d1a6f3d15b' # will be deleted as soon as things work
    client_secret = 'ac6c0f30fd3b496580565cdcc128531d' # will be deleted as soon as things work

    # Set up Spotify API
    client_credentials_manager = SpotifyClientCredentials(client_id=client_id,client_secret=client_secret)
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    # // # TODO get current user or pass it in

    # Enter username of the Spotify User and the name of the playlist here
    username = currentUsername
    playlist_name = json.loads(selectedPlaylists)

    all_playlists = sp.user_playlists(username)
    df_list = list()
    not_added_playlists = list()
    for currentPlaylist in playlist_name:
        # print(currentPlaylist)
        playlist_uri = ''
        
        for playlist in all_playlists['items']:
            if currentPlaylist['name'] == playlist['name']:
                playlist_uri = playlist['uri'] 
                
        if playlist_uri == '':
            not_added_playlists.append(currentPlaylist['name'])
            continue
        else:
            # Get info from uri
            username2 = playlist_uri.split(':')[1]
            playlist_id = playlist_uri.split(':')[2]
            
            # Get all the songs from a playlist
            results = sp.user_playlist_tracks(username2, playlist_id)
            t = results['items']
            while results['next']:
                results = sp.next(results)
                t.extend(results['items'])
            
            # Get the track id, track title, and album the track is from for each song
            playlist_tracks_id = []
            playlist_tracks_titles = []
            playlist_tracks_album = []
            for track in t:
                playlist_tracks_id.append(track['track']['id'])
                playlist_tracks_titles.append(track['track']['name'])
                playlist_tracks_album.append(track['track']['album']['name'])
            
            # Create a DataFrame from the lists above
            d = {'id': playlist_tracks_id, 'title': playlist_tracks_titles, 'album': playlist_tracks_album}
            features_df = pd.DataFrame(d)
            
            # Filter out any null ids
            features_df = features_df[features_df['id'].notnull()]
            
            # Get all the audio features
            stop = features_df.shape[0]
            temp_ids = list(features_df['id'])
            features = list()
            for i in range(0,stop,100):
                features.extend(sp.audio_features(playlist_tracks_id[i:i+100]))
            features = list(filter(None, features))
            
            # Put all the audio features in a DataFrame
            audiofeatures_df = pd.DataFrame(data=features, columns=features[0].keys())
            
            # Merge the DataFrame with the track info with the one with the audio
            # features
            all_features_df = features_df.merge(audiofeatures_df, how='inner', on=['id'])
            all_features_df.rename(columns={'id':'playlist_id'},inplace=True)
            df_list.append(all_features_df)
    
    if len(df_list) > 1:
        concat_features_df = pd.concat(df_list)
        concat_features_df.reset_index(drop=True,inplace=True)
        return concat_features_df, not_added_playlists
    elif not df_list:
        return '', not_added_playlists
    else:
        return all_features_df, ''