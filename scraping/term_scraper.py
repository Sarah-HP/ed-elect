#!/usr/bin/env python3


# Run this search directly from the command line. Input format:
# ./term_scraper.py "[search term]"
# Put quotation marks around the search term
# Example input:
# ./term_scraper.py "#potentialgrizzlies"
# You can use AND or OR to get results for multiple terms

# Results print to term_search_results folder

import tweepy
import csv
import argparse

parser=argparse.ArgumentParser(description="scrape Twitter for terms")
parser.add_argument("search_term")
args=parser.parse_args()

search_for=args.search_term

consumer_key="jJevgPoZqCvvlaEaDfCjSo3T4"
consumer_secret="s5uGQVieitvw5CT5FVBj7yM08aP84zf8HNpm4Ya99RtxsTnBA2"

access_token="1083483578359599104-iesJJeVOjPKmTB4peDWVIWzIJCl0rU"
access_token_secret="QREgbBttdMhWRCE7xBtXAIzNN0tG65QsvIstMxmgjcrt3"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

start_date = "2016-01-01"
file_name = "term_search_results/results_for_" + search_for + ".csv"
file_name=file_name.replace(" ","_")


with open(file_name, 'w', newline='') as csvfile:
	csvwriter = csv.writer(csvfile, quoting=csv.QUOTE_ALL)
	csvwriter.writerow(["Username", "Location", "Verified User?", "Tweet ID", "Tweet Time", "Tweet Text", "Tweet Place", "Retweet Count", "Favorite Count"])
	poli_tweets = tweepy.Cursor(api.search,q=search_for, count = 100, tweet_mode="extended", since=start_date, wait_on_rate_limit=True, wait_on_rate_limit_notify=True).items()
	for tweet in poli_tweets:
		csvwriter.writerow([tweet.user.name]+[tweet.user.location]+[tweet.user.verified]+[tweet.id]+[tweet.created_at]+[tweet.full_text]+[tweet.place]+[tweet.retweet_count]+[tweet.favorite_count])