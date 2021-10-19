from flask import Flask, request
from dotenv import load_dotenv
load_dotenv()
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/cluster", methods=['POST'])
def cluster():
  data = request.json
  print(data['data'])
  #testlets see
  return "Request received"

"""
Returned data will be:
  new playlists to be displayed 

Data passed in:
  access token
  list of songs (FULL CSV STYLE DATA)
  number of clusters
  root name
"""