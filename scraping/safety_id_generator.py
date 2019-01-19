import csv
from operator import itemgetter

#Read in Tweets
with open('safety_tweets.csv','r') as f:
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

#sort tweets by date so we get most recent
tweets_sorted = sorted(tweets, key = itemgetter(' Date'), reverse = True)

#create dictionary to collect Tweet IDs from each candidate:
cand_count = {}
for i in cand:
	cand_count[i]=[]

for tweet in tweets_sorted:
	if len(cand_count[tweet['Candidate']]) <5:
		cand_count[tweet['Candidate']].append(tweet[' Tweet ID'])

#Sort list of candidates to set up for convenient Tweet order:
sorted_cand=sorted(cand)

for i in range(1,len(sorted_cand)+1):
	print('var ID'+ str(i) + ' = ' +  str(cand_count[sorted_cand[i-1]])+ ''' //''' +str(sorted_cand[i-1]))

