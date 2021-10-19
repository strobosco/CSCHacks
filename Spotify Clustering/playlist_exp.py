# -*- coding: utf-8 -*-
"""
Spyder Editor

Author: Pranay Jain
"""

import spotipy
import os
from spotipy.oauth2 import SpotifyOAuth
from spotipy.oauth2 import SpotifyClientCredentials
import pandas as pd

def make(data, y_kmeans, nclust, pname):
    
    
    os.environ["SPOTIPY_CLIENT_ID"] = 'd72ae6e43f6c49b49c6956da258e7beb'
    os.environ["SPOTIPY_CLIENT_SECRET"] = '7bfac3e92e6c4822b17f168d5c12d8cb'
    os.environ["SPOTIPY_REDIRECT_URI"] = 'http://example.com'
    
    
    
    scope = 'playlist-modify-public'
    auth_manager=SpotifyOAuth(scope=scope)
    #auth_manager = SpotifyClientCredentials()
    sp = spotipy.Spotify(auth_manager=auth_manager)
    
    
    songs = data.iloc[:,17]

   
    
    user = sp.me()['id']
    for i in range(nclust):
        newplay = sp.user_playlist_create(user, pname + str(i+1), public=True, collaborative=False, description='Playlist Created from SPotify K-Means')
        playlist_id = newplay['id']
        cursongs = songs[y_kmeans==i]
        j=0
        while j < cursongs.size:
            addsong = cursongs[j:j+49]
            tracks = addsong.tolist()
            sp.playlist_add_items(playlist_id, tracks, position=None)
            j=j+50
        
            


            
        
    
    
