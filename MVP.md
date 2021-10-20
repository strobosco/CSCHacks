# MVP Milestone description

Our project utilizes K-Means Clustering and a users publically available playlists 
  to create new playlists of their choosing.

## Where we are

So far we have achieved 50% functionality. Some functionalities have yet to be added 
  or automated, such as playlist creation or playlist visualization. 

---
## Demo instructions

In order to ran the app locally you will require the following dependencies:

- NPM (node package manager)
- Flask installation (either using pip or any virtual environment setup)

### Steps

#### 1.
Git clone or download the repository on your local machine

#### 2.
Navigate to ```frontend/``` and run ```npm run dev```. This will initialize the React frontend on ```http://localhost:3000```

#### 3.
Navigate to ```backend/```and run ```flask run```. This will initialize the Flask API at ```http://localhost:5000```. **Warning: you must create an environment variable ```FLASK_APP=server``` in order for flask to run the API**.

#### 4. 
Navigate to ```http://localhost:3000``` and click the **Spotify Login** button in the upper right-hand corner and authorize the app to use the Spotify Web API.

---
## Feedback
If you have any suggestions, comments or improvements visit our ["Suggestions, Comments, and Improvements"](https://github.com/strobosco/CSCHacks/issues/11) issue page. If you ran into any bugs visit out ["Bugs"](https://github.com/strobosco/CSCHacks/issues?q=is%3Aissue+is%3Aopen+label%3Abug) issue page.