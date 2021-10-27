from flask import Flask, request, jsonify
from dotenv import load_dotenv
load_dotenv()
from flask_cors import CORS
import json

from feature_extraction import feature_extraction
from clustering import create_clust

app = Flask(__name__)
CORS(app)

@app.route("/cluster", methods=['POST'])
def cluster():
  data = request.json['data']
  accessToken = data['accessToken']
  playlists = data['selectedPlaylists']
  username = data['username']
  numberOfPlaylists = data['userNumberOfPlaylists']
  results, not_added =  feature_extraction(accessToken=accessToken, selectedPlaylists=playlists, currentUsername=username)
  # print('results: ', results, 'results2:', not_added)
  clusters, uri_clusters = create_clust(results, numberOfPlaylists, 1, False)
  playlistDict = dict()
  uriDict = dict()
  returnDict = dict()
  for idx, cluster in enumerate(clusters):
    playlistDict[idx] = cluster
  for idx, uri in enumerate(uri_clusters):
    uriDict[idx] = uri
  returnDict = {"playlists": playlistDict, "uris": uriDict}
  return json.dumps(returnDict)

"""
Returned data will be:
  new playlists to be displayed 

Data passed in:
  DONE access token
  DONE list of playlists
  number of clusters
  root name


create_clust in clustering.py
"""