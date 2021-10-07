#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Oct  7 18:56:02 2021

@author: adampowley
"""

import pandas as pd
from sklearn.cluster import KMeans
from sklearn import preprocessing
import matplotlib.pyplot as plt

# read dataset
dataset = pd.read_csv("big_song_list.csv")
x = dataset.iloc[:, 5:15].values # column 5-15, not yet including duration or time signature

# scale values
min_max_scaler = preprocessing.MinMaxScaler()
x = min_max_scaler.fit_transform(x)

# elbow methood to graph different clusterings
wcss = []
for i in range(1, 11):
    kmeans = KMeans(n_clusters=i, init='k-means++', random_state=42)
    kmeans.fit(x)
    wcss.append(kmeans.inertia_)

plt.plot(range(1, 11), wcss)
plt.title('The Elbow Method')
plt.xlabel('Number of Clusters')
plt.ylabel('WCSS')
plt.show()

# fitting and plotting given cluster size

kmeans = KMeans(n_clusters=4, init='k-means++', random_state=42)
y_kmeans = kmeans.fit_predict(x)
x_axis = 5 # coresponding column in dataset for x axis
y_axis = 8 # coresponding column in dataset for x axis

plt.scatter(x[y_kmeans == 0, x_axis], x[y_kmeans == 0, y_axis], s=100, c='red', label='Cluster 1')
plt.scatter(x[y_kmeans == 1, x_axis], x[y_kmeans == 1, y_axis], s=100, c='blue', label='Cluster 2')
plt.scatter(x[y_kmeans == 2, x_axis], x[y_kmeans == 2, y_axis], s=100, c='green', label='Cluster 3')
plt.scatter(x[y_kmeans == 3, x_axis], x[y_kmeans == 3, y_axis], s=100, c='cyan', label='Cluster 4')
plt.scatter(x[y_kmeans == 4, x_axis], x[y_kmeans == 4, y_axis], s=100, c='magenta', label='Cluster 5')
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s=300, c='yellow', label='Centroids')
plt.title('Clusters of Songs')
columns = list(dataset.columns)
plt.xlabel(columns[x_axis])
plt.ylabel(columns[y_axis])
plt.show()

