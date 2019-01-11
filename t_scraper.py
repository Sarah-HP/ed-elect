import tweepy

consumer_key="jJevgPoZqCvvlaEaDfCjSo3T4"
consumer_secret="s5uGQVieitvw5CT5FVBj7yM08aP84zf8HNpm4Ya99RtxsTnBA2"

access_token="1083483578359599104-iesJJeVOjPKmTB4peDWVIWzIJCl0rU"
access_token_secret="QREgbBttdMhWRCE7xBtXAIzNN0tG65QsvIstMxmgjcrt3"



auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

poli_tweets = api.user_timeline(357606935, count=3000, tweet_mode="extended")
for tweet in poli_tweets:
    print(tweet.created_at, tweet.full_text)