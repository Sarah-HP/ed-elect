#!/usr/bin/env python3

#This script gets tweets for a user off the twitter api and writes csvs
#I thought I was cool and called it a scraper
#I have since learned better
#it runs from the command line with argument "candidate name" 
# "account_name" "twitter user id"

import tweepy
import csv
import argparse

# I adopted this from the official argparser documentation
# with help from some good ol' fashioned guess and check
# This part of the code defines the arguments the program will
#take from the command line
parser=argparse.ArgumentParser(description="make name and ID # usable for scraper file")
parser.add_argument("cand_name")
parser.add_argument("account_name")
parser.add_argument("user_id",type=int)
args=parser.parse_args()

#make those variable names easier to deal with:
cand_name=args.cand_name
account_name=args.account_name
user_id=args.user_id

#enter my twitter info (I'd say please keep this secret
#but it's already public on github (where you are reading it), so...
#the Tweepy docs walked through how to do this bit
consumer_key="jJevgPoZqCvvlaEaDfCjSo3T4"
consumer_secret="s5uGQVieitvw5CT5FVBj7yM08aP84zf8HNpm4Ya99RtxsTnBA2"

access_token="1083483578359599104-iesJJeVOjPKmTB4peDWVIWzIJCl0rU"
access_token_secret="QREgbBttdMhWRCE7xBtXAIzNN0tG65QsvIstMxmgjcrt3"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

#Find ID of most recent Tweet:
first_tweet=api.user_timeline(user_id,count=1)

#set first max ID number for Tweets:
max_id=first_tweet[0].id+1

#setting up a file naming convention
file_name = account_name+"_tweets.csv"

#set it up to write a csv; putting everything in quotes
#because who knows what funky punctuation these tweets will use
with open(file_name, 'w', newline='') as csvfile:
	csvwriter = csv.writer(csvfile, quoting=csv.QUOTE_ALL)
	#Iterate through all Tweets. Set the list to be this random
	#thing at first so it will be longer than 0 and not mess with
	#the while statement that comes after it
	poli_tweets=[1,2]
	#until the api stops letting us access tweets, keep going
	#through and getting more; set the max id each time to be
	#one less than the last one we got so we'll always get new
	#tweets
	while len(poli_tweets) > 0:
		poli_tweets = api.user_timeline(user_id, max_id=(max_id-1), count=100, tweet_mode="extended")
		#print so I can see how progress is going
		print(len(poli_tweets))
		#for each tweet, print this attributes out in a csv
		#I didn't put a header because I'm going to concatenate with
		#the command line and will use that to put a header on the whole
		#thing at once
		for tweet in poli_tweets:
			csvwriter.writerow([cand_name]+[account_name]+[tweet.id]+[tweet.created_at]+[tweet.full_text]+[tweet.place]+[tweet.retweet_count]+[tweet.favorite_count])
			max_id=tweet.id