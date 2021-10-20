from flask import Flask, request
from dotenv import load_dotenv
load_dotenv()
from flask_cors import CORS

from feature_extraction import feature_extraction

app = Flask(__name__)
CORS(app)

@app.route("/cluster", methods=['POST'])
def cluster():
  data = request.json['data']
  accessToken = data['accessToken']
  playlists = data['selectedPlaylists']
  username = data['username']
  results =  feature_extraction(accessToken=accessToken, selectedPlaylists=playlists, currentUsername=username)
  return "Request received"

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