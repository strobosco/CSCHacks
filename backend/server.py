from flask import Flask

app = Flask(__name__)

@app.route("/cluster")
# run the clustering