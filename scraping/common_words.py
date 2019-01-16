import csv
from operator import itemgetter

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

#Strip punctuation--set-up adapted from https://www.programiz.com/python-programming/examples/remove-punctuation
#Leaving in # and @ because they mean stuff on Twitter
text_no_punc = []
punctuations = '''!()-[]{};:'"\,<>./?$%^&*_~'''
for tweet in text:
	no_punc = ''
	for char in tweet:
		if char not in punctuations:
			no_punc = no_punc + char
	text_no_punc.append(no_punc)


#list of words I don't want to count
useless = set(stopwords.words('english'))

#make a list of just the words
words = []
for i in text_no_punc:
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

#turn this into an ordered list of lists to produce ordered csv
word_pair = []
for i, j in word_count.items():
	word_pair.append([i,j])

sorted_word_pair = sorted(word_pair,key = itemgetter(1), reverse = True)

with open('common_words.csv','w') as f:
	writer = csv.writer(f)
	writer.writerow(['Word','Frequency'])
	for pair in sorted_word_pair:
		writer.writerow(pair)

	# i, j in word_count.items():
	#	writer.writerow([i, j])