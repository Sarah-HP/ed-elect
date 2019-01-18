import csv
from operator import itemgetter

#This is based on tweet_filter.py, but adapted to look for tweets about school safety, not

with open('aggregated.csv','r') as f:
	reader = csv.DictReader(f)
	rows = list(reader)

tweets = []

#Make each Tweet a dictionary in a list of dictionaries
for row in rows:
	tweets.append(dict(row))

#filter to education tweets
edu_tweets = []

#Make list of terms to search for to classify this as an education Tweet:
edu_terms = ['Education', 'Parkland', 'school', 'teacher', 'student', 'Sandy Hook', 'Newtown', 'Columbine', 'Stoneman Douglas', '#edpolicy', '#edreform', '#ESSA', '#putkidsfirst', '#achievementgap', '#edgap', '#literacy', '#nclb', '#essea', 'college', 'devos', 'highered', 'tuition', 'pre-k', 'kindergarten', 'achievement gap', 'K-12', 'k12', '#parentalchoice', '#parentpower', '#titleix', 'Title ix']

#search through all tweets' text and add the ones with text from the term list to a new list
for tweet in tweets:
	for term in edu_terms:
		if term.lower() in tweet[' Tweet Text'].lower():
			edu_tweets.append(tweet)
			break

#filter the educational tweets to ones dealing with safety--sorry for the mess of terms
safety_tweets = []

for tweet in edu_tweets:
	if 'gun' in tweet[' Tweet Text'].lower() or 'Sandy Hook' in tweet[' Tweet Text'].lower() or 'Parkland' in tweet[' Tweet Text'].lower() or 'newtown ' in tweet[' Tweet Text'].lower() or 'Stoneman' in tweet[' Tweet Text'].lower() or 'firearm' in tweet[' Tweet Text'].lower() or 'forourlives' in tweet[' Tweet Text'].lower() or 'murder' in tweet[' Tweet Text'].lower() or 'violence' in tweet[' Tweet Text'].lower() or 'death' in tweet[' Tweet Text'].lower() or 'shooting' in tweet[' Tweet Text'].lower() or 'emma gonzalez' in tweet[' Tweet Text'].lower() or 'david hogg' in tweet[' Tweet Text'].lower() or 'alive' in tweet[' Tweet Text'].lower() or 'Columbine' in tweet[' Tweet Text'].lower() or 'armmewith' in tweet[' Tweet Text'].lower() or 'Santa fe' in tweet[' Tweet Text'].lower() or 'battlefield' in tweet[' Tweet Text'].lower() or 'tragedy' in tweet[' Tweet Text'].lower() or 'walkout' in tweet[' Tweet Text'].lower():
		safety_tweets.append(tweet)
	else:
		if 'march' in tweet[' Tweet Text'].lower() and 'lives' in tweet[' Tweet Text'].lower():
			safety_tweets.append(tweet)
		else:
			if 'arm' in tweet[' Tweet Text'].lower() and 'teacher' in tweet[' Tweet Text'].lower():
				safety_tweets.append(tweet)
			else:
				if 'safe' in tweet[' Tweet Text'].lower() and 'sexual' not in tweet[' Tweet Text'].lower():
					safety_tweets.append(tweet)


#Write safety tweets to CSV
attrib = edu_tweets[0].keys()
with open('safety_tweets.csv','w') as f:
	d_wr = csv.DictWriter(f, attrib)
	d_wr.writeheader()
	d_wr.writerows(safety_tweets)

#Count tweets about safety by candidate
cand_safety_count = {}
for tweet in safety_tweets:
	cand = tweet['Candidate']
	if cand in cand_safety_count:
		cand_safety_count[cand] += 1
	else:
		cand_safety_count[cand] = 1

#Count tweets about education by candidate
cand_edu_tweet_count = {}
for tweet in edu_tweets:
	cand = tweet['Candidate']
	if cand in cand_edu_tweet_count:
		cand_edu_tweet_count[cand] += 1
	else:
		cand_edu_tweet_count[cand] = 1

#Count total number of tweets by candidate
cand_tweet_count = {}
for tweet in tweets:
	cand = tweet['Candidate']
	if cand in cand_tweet_count:
		cand_tweet_count[cand] += 1
	else:
		cand_tweet_count[cand] = 1

#Create list of lists with list for each candidate with # of safety tweets, # of edu tweets, and # of total tweets
#First make list of candidates - there are more efficient ways of doing this, but just in case there's one with no tweets about edu or something I'll use the complete list of aggregated tweets:
cand_list=[]
for tweet in tweets:
	cand = tweet['Candidate']
	if cand not in cand_list:
		cand_list.append(cand)

#Make list of lists--[name,all tweets, edu tweets, safety tweets]


#now make list of lists:
cand_summary = []
#avoid any key errors in case a candidate has no entries in the safety tweet count 
for i in cand_list:
	if i not in cand_edu_tweet_count:
		cand_edu_tweet_count[i] = 0
	if i not in cand_safety_count:
		cand_safety_count[i] = 0

#now pull together cand name, edu tweet count, and safety tweet count
for i in cand_list:
	cand_summary.append([i, cand_tweet_count[i], cand_edu_tweet_count[i], cand_safety_count[i]])

#Write candidate summary to a CSV
with open('safety_tweet_counts_by_cand.csv','w') as f:
    writer = csv.writer(f)
    writer.writerow(['candidate','tweets','education_tweets','safety_tweets'])
    for j in cand_summary:
        writer.writerow(j)

#Create list with % of educ tweets addressing safety for each candidate:
safety_over_educ_tweet_perc = []
for i in cand_summary:
	safety_over_educ_tweet_perc.append([i[0],i[3]/i[2]])

#sort data by safety tweet percentage
safety_over_educ_tweet_perc_sorted = sorted(safety_over_educ_tweet_perc, key = itemgetter(1))

#Write percentage of educational tweets to tsv as data for plot of candidate tweet %
with open ('../data/cand_safety_2020.tsv','w') as f:
	tsv_writer = csv.writer(f, delimiter = '\t')
	tsv_writer.writerow(['candidate', 'safety_perc'])
	for i in safety_over_educ_tweet_perc_sorted:
		tsv_writer.writerow(i)