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
cand.append('Ojeda')

#create dictionary to collect Tweet IDs from each candidate:
cand_count = {}
for i in cand:
	cand_count[i]=[]

for tweet in tweets:
	if len(cand_count[tweet['Candidate']]) <5:
		cand_count[tweet['Candidate']].append(tweet[' Tweet ID'])

print(cand_count)
