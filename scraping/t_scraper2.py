#!/usr/bin/env python3

import tweepy
import csv

consumer_key="jJevgPoZqCvvlaEaDfCjSo3T4"
consumer_secret="s5uGQVieitvw5CT5FVBj7yM08aP84zf8HNpm4Ya99RtxsTnBA2"

access_token="1083483578359599104-iesJJeVOjPKmTB4peDWVIWzIJCl0rU"
access_token_secret="QREgbBttdMhWRCE7xBtXAIzNN0tG65QsvIstMxmgjcrt3"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

file_name="testing.csv"

with open(file_name, 'w', newline='') as csvfile:
	csvwriter = csv.writer(csvfile, quoting=csv.QUOTE_ALL)
	#Iterate through all Tweets:
	poli_tweets=[1,2]
#	while len(poli_tweets) > 0:
	poli_tweets = api.search(q="#schoolchoice", count = 10, tweet_mode="extended")
	print(len(poli_tweets))
	for tweet in poli_tweets:
		csvwriter.writerow([tweet.user.name]+[tweet.user.location]+[tweet.user.verified]+[tweet.id]+[tweet.created_at]+[tweet.full_text]+[tweet.place]+[tweet.retweet_count]+[tweet.favorite_count])
		max_id=tweet.id









#output = [2,3,4]
#while len(output) > 0:
#	output = api.search('soup')
#	print(output)


#with open(file_name, 'w', newline='') as csvfile:
#	csvwriter = csv.writer(csvfile, quoting=csv.QUOTE_ALL)
#	#Iterate through all Tweets:
#	poli_tweets=[1,2]
#	while len(poli_tweets) > 0:
#		poli_tweets = api.user_timeline(user_id, max_id=(max_id-1), count=100, tweet_mode="extended")
#		print(len(poli_tweets))
#		for tweet in poli_tweets:
#			csvwriter.writerow([cand_name]+[account_name]+[tweet.id]+[tweet.created_at]+[tweet.full_text]+[tweet.place]+[tweet.retweet_count]+[tweet.favorite_count])
#			max_id=tweet.id