#this script outputs the tweet IDs of up to five recent tweets 
#about college affordability for each candidate
#that I then plug into display_aff_tweets.js to show 
#affordability tweets on the affordability page

import csv
from operator import itemgetter

#Read in Tweets
with open('college_aff_tweets.csv','r') as f:
	reader = csv.DictReader(f)
	rows = list(reader)

tweets = []

#Make each Tweet a dictionary in a list of dictionaries
for row in rows:
	tweets.append(dict(row))

#Create list of candidates
cand = []
for tweet in tweets:
	if tweet['Candidate'] not in cand:
		cand.append(tweet['Candidate'])

#manually add Ojeda because he has no tweets about affordability
#at least not in the data set
#he has one older one I found by accident that I will load into the
#display manually
cand.append('Ojeda')

#sort tweets by date
#got lucky and dates are already in YYYY-MM-DD HR-MIN-SEC format,
#so simple sort function will do the trick --no need to convert
# date format or anything fancy.
tweets_sorted = sorted(tweets, key = itemgetter(' Date'), reverse = True)

#create dictionary to collect Tweet IDs from each candidate:
cand_count = {}
for i in cand:
	cand_count[i]=[]

#loop through and add recent Tweets until there are 5 
#(or we're out of tweets)
for tweet in tweets_sorted:
	if len(cand_count[tweet['Candidate']]) <5:
		cand_count[tweet['Candidate']].append(tweet[' Tweet ID'])

#Sort list of candidates to set up for convenient Tweet order:
sorted_cand=sorted(cand)

#Print in format that can be plugged straight into js
#loop over list index so that I can print from multiple lists
#go from 1 to 25 so variable names will be right
for i in range(1,len(sorted_cand)+1):
	print('var ID'+ str(i) + ' = ' +  str(cand_count[sorted_cand[i-1]])+ ''' //''' +str(sorted_cand[i-1]))
