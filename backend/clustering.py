#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Oct  7 18:56:02 2021

@author: adampowley
"""

import pandas as pd
from scipy.sparse import data
from sklearn.cluster import KMeans
from sklearn import preprocessing
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
# import playlist_exp



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
 
    
def create_clust(dataset, num_clust, pca_percent, categories):
    # read dataset
    # dataset = pd.read_csv(fname)
    # x = dataset[['danceability', 'energy', 'loudness', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence', 'tempo']] # column 5-15, not yet including duration or time signature
    x = dataset[categories]

    # scale values
    min_max_scaler = preprocessing.MinMaxScaler()
    x = min_max_scaler.fit_transform(x)
    
    #Perform PCA to reduce correlated variables to 95% of variance
    pca = PCA(pca_percent)
    x = pca.fit_transform(x)
    
    
    kmeans = KMeans(n_clusters=num_clust, init='k-means++', random_state=42)
    y_kmeans = kmeans.fit_predict(x)
    
    uri_clusters = []
    clusters = [] # list of songs in cluster, where index + 1 = numebr of 
    for i in range(num_clust):
        clusters.append(dataset.iloc[:,1][y_kmeans==i].tolist())
        uri_clusters.append(dataset.iloc[:,15][y_kmeans==i].tolist())
    
    # if create == True:
    #     playlist_exp.make(dataset,y_kmeans,7,"Test")

    return clusters, uri_clusters
    
        

def elb(x):
    # elbow methood to graph different clusterings
    wcss = []
    for i in range(1, 11):
        kmeans = KMeans(n_clusters=i, init='k-means++', random_state=42)
        kmeans.fit(x)
        wcss.append(kmeans.inertia_)







    

