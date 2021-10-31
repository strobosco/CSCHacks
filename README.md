# Spotify Playlist Creation & K-Means Clustering

## Project Description

Our project consists in clustering songs belonging to a user's playlists and outputting new playlists. The algorithm takes as an input the number of playlists the user wants to create and proceeds to extract the songs from the playlists the user chooses. The basic data flow is as follows:

User selects which playlists to extract and how many to create -> songs are clustered into new playlists

---
## Directory Structure

```
+-- backend -> Flask API server
| |
| +-- server.py -> server entrypoint
|
+-- frontend -> React frontend
|
+-- EDA -> initial EDA file
|
+-- Sptofy Clustering -> clustering testing/tuning
```

---
## Instructions

As of right now the app can only be run locally. to view setup instructions refer to the [MVP](MVP.md) guide. 

**WARNING:** the app currently functions so clicking "Create" will in fact create a playlist on your user account.

---
## Challenges

The challenges we anticipate in developing a properly functioning model are:

  1. User authorization to interact with the Spotify Web API
  2. Data extraction, both in gathering the data and choosing what data to use, hence point 3.
  3. Feature extraction and engineering
  4. Connecting a React-based frontend to a Flask API
  5. Full-stack development

The skills we will need to learn are:

  1. Exploratory Data Analysis using Pandas, Seaborn, and Matplotlib
  2. Feature Extraction to improve accuracy and reduce training time
  3. Model building
  4. Key Performance Indicators to measure our progress
  5. Full stack web development

## Team Information

Niccolo Nobili
* Pitt CS, 2025
* NIN49@pitt.edu
* Check out my [Personal website](https://niccolonobili.netlify.app/) or [LinkedIn](https://www.linkedin.com/in/niccolonobili/)

Amaan Kazi
* Pitt Bioengineering, 2022
* ank211@pitt.edu
* Check out my [LinkedIn](https://www.linkedin.com/in/amaan-kazi-64a682191)

Pranay Jain
* Pitt Bioengineering, 2022
* Prj19@pitt.edu
* Check out my [Personal website](https://pranay99jain.wixsite.com/portfolio) or [LinkedIn](https://www.linkedin.com/in/pranayj7/)

Adam Powley
* Pitt Computational Biology, 2024
* ASP102@pitt.edu