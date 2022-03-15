#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Oct  7 18:56:02 2021

@author: adampowley & Pranay Jain
"""

import pandas as pd
from sklearn.cluster import KMeans
from sklearn import preprocessing
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
import playlist_exp



def visualize_cluster(data):

    #Initialize the class object
    kmeans = KMeans(n_clusters= 5)
 
    #predict the labels of clusters.
    label = kmeans.fit_predict(data)
    filtered_label_1 = data[label==1]
    filtered_label_2 = data[label==2]
    filtered_label_3 = data[label==3]
    filtered_label_4 = data[label==4]
    filtered_label_5 = data[label==5]
    plt.scatter(filtered_label_1[:,0] , filtered_label_1[:,1] , color = 'red')
    plt.scatter(filtered_label_2[:,0] , filtered_label_2[:,1] , color = 'black')
    plt.scatter(filtered_label_3[:,0] , filtered_label_3[:,1] , color = 'blue')
    plt.scatter(filtered_label_4[:,0] , filtered_label_4[:,1] , color = 'green')
    plt.scatter(filtered_label_5[:,0] , filtered_label_5[:,1] , color = 'orange')
    plt.show()
 
# read dataset
dataset = pd.read_csv("big_song_list.csv")
x = dataset.iloc[:, 5:15].values # column 5-15, not yet including duration or time signature
songname = dataset.iloc[:,1]

# scale values
min_max_scaler = preprocessing.MinMaxScaler()
x = min_max_scaler.fit_transform(x)

#Perform PCA to reduce correlated variables to 95% of variance
pca = PCA(0.95)
x = pca.fit_transform(x)

visualize_cluster(x)

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

kmeans = KMeans(n_clusters=7, init='k-means++', random_state=42)
y_kmeans = kmeans.fit_predict(x)
x_axis = 3 # coresponding column in dataset for x axis
y_axis = 6 # coresponding column in dataset for x axis
z_axis = 2

fig = plt.figure()
ax = plt.axes(projection='3d')

ax.scatter3D(x[y_kmeans == 0, x_axis], x[y_kmeans == 0, y_axis], x[y_kmeans == 0, z_axis], s=100, c='red', label='Cluster 1')
ax.scatter3D(x[y_kmeans == 1, x_axis], x[y_kmeans == 1, y_axis], x[y_kmeans == 1, z_axis], s=100, c='blue', label='Cluster 2')
ax.scatter3D(x[y_kmeans == 2, x_axis], x[y_kmeans == 2, y_axis], x[y_kmeans == 2, z_axis], s=100, c='green', label='Cluster 3')
ax.scatter3D(x[y_kmeans == 3, x_axis], x[y_kmeans == 3, y_axis], x[y_kmeans == 3, z_axis], s=100, c='cyan', label='Cluster 4')
ax.scatter3D(x[y_kmeans == 4, x_axis], x[y_kmeans == 4, y_axis], x[y_kmeans == 4, z_axis], s=100, c='magenta', label='Cluster 5')
ax.scatter3D(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s=300, c='yellow', label='Centroids')
plt.title('Clusters of Songs')

plt.show()

playlist_exp.make(dataset,y_kmeans,7,'Test')




    

