import csv

#read in list of all candidate tweets
#with open('aggregated.csv', 'r') as f:
#	reader=csv.DictReader(f)
#	rows = list(reader)

#read in the tweets
#tweets=[]
#for row in rows:
#	item=dict(row)
#	tweets.append(item)

#make a list with just the tweets' text
#text = []

#for tweet in testtw:
#	text.append(tweet[' Tweet Text'])


#testing with simpler list of strings
text = ['This is a sentence', 'This is too', 'So is this one']

words = []

for i in text:
	lower_i = i.lower()
	lower_i_split = lower_i.split()
	for j in lower_i_split:
		words.append(j)

word_count = {}

for word in words:
	if word in word_count:
		word_count[word] += 1
	else:
		word_count[word] = 1

print(word_count)