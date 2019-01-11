import tweepy
import csv

consumer_key="jJevgPoZqCvvlaEaDfCjSo3T4"
consumer_secret="s5uGQVieitvw5CT5FVBj7yM08aP84zf8HNpm4Ya99RtxsTnBA2"

access_token="1083483578359599104-iesJJeVOjPKmTB4peDWVIWzIJCl0rU"
access_token_secret="QREgbBttdMhWRCE7xBtXAIzNN0tG65QsvIstMxmgjcrt3"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

user_id=357606935

#Find ID of most recent Tweet:
first_tweet=api.user_timeline(user_id,count=1)

#set first max ID number for Tweets:
max_id=first_tweet[0].id+1

file_name = str(user_id)+"_tweets.csv"

with open(file_name, 'w', newline='') as csvfile:
	csvwriter = csv.writer(csvfile, quoting=csv.QUOTE_ALL)
	#Iterate through all Tweets:
	for i in range(29):
		poli_tweets = api.user_timeline(user_id, max_id=(max_id-1), count=100, tweet_mode="extended")
		for tweet in poli_tweets:
			csvwriter.writerow([tweet.id]+[tweet.created_at]+[tweet.full_text]+[tweet.place]+[tweet.retweet_count]+[tweet.favorite_count])
		max_id=poli_tweets[-1].id
