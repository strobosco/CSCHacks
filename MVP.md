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


#### 5. 
Click the "Get Playlists!" button and select which playlists to cluster. Their is currently a bug were the checlist does not toggle, it only applies and does not disappear. The logic is working, the check state is simply not updating.

#### 6.
Enter how many playlists you would like to create

#### 7.
Enter the base name for the new playlists (to be implemented)

#### 8.
As of now the output is only shown in the developer console. However, the final product will have a view in which the user can see the new playlists and choose which to create on their Spotify account.

### Disclaimer
We are currently aware of a bug that happens once the user submits their request initially. You may be forced to issue the request again in order to view results. We are working on it!

---
## Feedback
If you have any suggestions, comments or improvements visit our ["Suggestions, Comments, and Improvements"](https://github.com/strobosco/CSCHacks/issues/11) issue page. If you ran into any bugs visit out ["Bugs"](https://github.com/strobosco/CSCHacks/issues?q=is%3Aissue+is%3Aopen+label%3Abug) issue page.