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
    
    
    os.environ["SPOTIPY_CLIENT_ID"] = 'c5455611ee7e4367b44da7d1a6f3d15b'
    os.environ["SPOTIPY_CLIENT_SECRET"] = 'ac6c0f30fd3b496580565cdcc128531d'
    os.environ["SPOTIPY_REDIRECT_URI"] = 'http://localhost:3000/redirect'
    
    
    scope = 'playlist-modify-public'
    auth_manager=SpotifyOAuth(scope=scope)
    #auth_manager = SpotifyClientCredentials()
    sp = spotipy.Spotify(auth_manager=auth_manager)
    
    songs = data.iloc[:,15]

   
    clusters = [] # list of songs in cluster, where index + 1 = numebr of 
    user = sp.me()['id']
    for i in range(nclust):
        newplay = sp.user_playlist_create(user, pname + str(i+1), public=True, collaborative=False, description='Playlist Created from SPotify K-Means')
        playlist_id = newplay['id']
        cursongs = songs[y_kmeans==i]
        clusters.append(data.iloc[:,1][y_kmeans==i])
        j=0
        while j < cursongs.size:
            addsong = cursongs[j:j+49]
            tracks = addsong.tolist()
            sp.playlist_add_items(playlist_id, tracks, position=None)
            j=j+50
    


            


            
        
    
    
