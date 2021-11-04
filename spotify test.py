#!/usr/bin/env python
# coding: utf-8

# In[5]:


from spotipy.oauth2 import SpotifyClientCredentials
import spotipy
import pprint


client_id = "faf7865d62b5488da2f6bca05e63a075"
client_secret = "b888f07e8986499aa70950b0235d81eb"

lz_uri = 'spotify:artist:13ubrt8QOOCPljQ2FL1Kca' # ASAP Rocky

client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

results = sp.artist_top_tracks(lz_uri)

# get top 10 tracks
for track in results['tracks'][:10]:
    print('track    : ' + track['name'])
    print('audio    : ' + track['preview_url'])
    print('cover art: ' + track['album']['images'][0]['url'])
    print()

