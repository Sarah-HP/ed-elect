import csv

#First time through needed to install stuff
#import nltk
#nltk.download('stopwords')

from nltk.corpus import stopwords

#read in list of all candidate tweets
with open('tweets_with_terms.csv', 'r') as f:
	reader=csv.DictReader(f)
	rows = list(reader)

#read in the tweets as a dictionary
tweets=[]
for row in rows:
	item=dict(row)
	tweets.append(item)

#make a list with just the tweets' text
text = []
for tweet in tweets:
	text.append(tweet['Tweet.Text'])

#list of words I don't want to count
useless = set(stopwords.words('english'))

#make a list of just the words
words = []
for i in text:
	#make all lowercase
	lower_i = i.lower()
	#split each tweet into list of words
	lower_i_split = lower_i.split()
	#loop through word lists
	for j in lower_i_split:
		if j not in useless:
			words.append(j)

#make dictionary of word counts
word_count = {}
for word in words:
	if word in word_count:
		word_count[word] += 1
	else:
		word_count[word] = 1

print(len(word_count))