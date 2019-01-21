#this code filters for tweets related to education and college
#affordability and outputs csvs of education tweets, affordability
#tweets, and csvs of the percentage of tweets about those subjects
#to feed into charts
#I've set up the file names with ../data in the expectation the
#program is run while in the scraping folder (this is a copy that I
#put in the scripts folder)

#import packages
import csv
from operator import itemgetter

#Read in Tweets from aggregated csv of all candidate tweets
with open('aggregated.csv','r') as f:
	reader = csv.DictReader(f)
	rows = list(reader)
#make list to throw those tweets in
tweets = []

#Make each tweet a dictionary in a list of dictionaries
for row in rows:
	tweets.append(dict(row))

#filter to education tweets
edu_tweets = []

#Make list of terms to search for to classify this as an
#education Tweet:
#I came up with these terms by first thinking of common ones,
#then reading through tweets for ideas
#then checking how the filter did and adjusting/adding terms to
#improve performance
edu_terms = ['Education', 'Parkland', 'school', 'teacher', 'student', 'Sandy Hook', 'Newtown', 'Columbine', 'Stoneman Douglas', '#edpolicy', '#edreform', '#ESSA', '#putkidsfirst', '#achievementgap', '#edgap', '#literacy', '#nclb', '#essea', 'college', 'devos', 'highered', 'tuition', 'pre-k', 'kindergarten', 'achievement gap', 'K-12', 'k12', '#parentalchoice', '#parentpower', '#titleix', 'Title ix']

#search through all tweets' text and add the ones with text from the term list to a new list
for tweet in tweets:
	for term in edu_terms:
		#use lower case everything so that case won't matter
		if term.lower() in tweet[' Tweet Text'].lower():
			edu_tweets.append(tweet)
			#break so that a tweet won't get added multiple times
			#if it has multiple terms (I wish I could say I thought)
			#of that in advance)
			break

#write the list of educational tweets to a csv
attrib = edu_tweets[0].keys()
with open('edu_tweets.csv','w') as f:
	d_wr = csv.DictWriter(f, attrib)
	d_wr.writeheader()
	d_wr.writerows(edu_tweets)

#filter the educational tweets to ones dealing with college 
#affordability--sorry for the mess of terms
#I didn't want generic uses of "college", for example,
#to get added to this, so I required mixes of terms, except
#for some specific stuff (e.g. Pell Grant, Bloomberg's
#hashtag ActivateTalent about a college affordability program)
#that could only really be about college affordability
#I came up with these terms by first thinking of common ones,
#then reading through tweets for ideas
#then checking how the filter did and adjusting/adding terms to
#improve performance
#make empty list to put tweets in
college_aff_tweets = []
#loop through tweets to look for terms
for tweet in edu_tweets:
	if ('afford' in tweet[' Tweet Text'].lower()) and ('higher education' in tweet[' Tweet Text'].lower() or 'college' in tweet[' Tweet Text'].lower() or 'university' in tweet[' Tweet Text'].lower() or 'education' in tweet[' Tweet Text'].lower() or 'tuition' in tweet[' Tweet Text'].lower()):
		college_aff_tweets.append(tweet)
	#all these things could've gone in one long if statement, but
	#it involved too much scrolling right and this might save
	#some computing power I think if the first statement
	#happens to be true
	else:
		if ('tuition' in tweet[' Tweet Text'].lower()) and ('higher education' in tweet[' Tweet Text'].lower() or 'college' in tweet[' Tweet Text'].lower() or 'university' in tweet[' Tweet Text'].lower() or 'education' in tweet[' Tweet Text'].lower() or 'free' in tweet[' Tweet Text'].lower()):
			college_aff_tweets.append(tweet)
		else:
			if ('free' in tweet[' Tweet Text'].lower()) and ('college' in tweet[' Tweet Text'].lower() or 'higher education' in tweet[' Tweet Text'].lower() or 'university' in tweet[' Tweet Text'].lower() or 'education' in tweet[' Tweet Text'].lower()):
				college_aff_tweets.append(tweet)
			else:
				if ('student' in tweet[' Tweet Text'].lower()) and ('loan' in tweet[' Tweet Text'].lower() or 'debt'  in tweet[' Tweet Text'].lower()):
					college_aff_tweets.append(tweet)
				else:
					if ('cost' in tweet[' Tweet Text'].lower() or 'lower-income' in tweet[' Tweet Text'].lower()) and ('higher education' in tweet[' Tweet Text'].lower() or 'college' in tweet[' Tweet Text'].lower() or 'university' in tweet[' Tweet Text'].lower()):
						college_aff_tweets.append(tweet)
					else:
						if 'pell grant' in tweet[' Tweet Text'].lower():
							college_aff_tweets.append(tweet)
						else:
							if ('for-profit' in tweet[' Tweet Text'].lower()) and ('school' in tweet[' Tweet Text'].lower() or 'college' in tweet[' Tweet Text'].lower() or 'university' in tweet[' Tweet Text'].lower() or 'higher education' in tweet[' Tweet Text'].lower()):
								college_aff_tweets.append(tweet)
							else:
								if 'financial aid' in tweet[' Tweet Text'].lower():
									college_aff_tweets.append(tweet)
								else:
									if '#activatetalent' in tweet[' Tweet Text'].lower():
										college_aff_tweets.append(tweet)
									else:
										if 'loan' in tweet[' Tweet Text'].lower() and ('education' in tweet[' Tweet Text'].lower() or 'college' in tweet[' Tweet Text'].lower() or 'higher education' in tweet[' Tweet Text'].lower()):
											college_aff_tweets.append(tweet)

#Write affordability tweets to CSV
#used this when writing summary of candidate positions
with open('college_aff_tweets.csv','w') as f:
	d_wr = csv.DictWriter(f, attrib)
	d_wr.writeheader()
	d_wr.writerows(college_aff_tweets)

#Count tweets about affordability by candidate
cand_coll_aff_count = {}
for tweet in college_aff_tweets:
	cand = tweet['Candidate']
	if cand in cand_coll_aff_count:
		cand_coll_aff_count[cand] += 1
	else:
		cand_coll_aff_count[cand] = 1

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

#Create list of lists with list for each candidate with
# of aff tweets, # of edu tweets, and # of total tweets
#First make list of candidates - there are more efficient
#ways of doing this, but just in case there's one with no
#tweets about edu or something I'll use the complete list
#of aggregated tweets:
cand_list=[]
for tweet in tweets:
	cand = tweet['Candidate']
	if cand not in cand_list:
		cand_list.append(cand)
#now make list of lists:
cand_summary = []
#avoid any key errors in case a candidate has no
#entries in either the edu tweet count or aff tweet
#count (looking at you, Ojeda):
for i in cand_list:
	if i not in cand_edu_tweet_count:
		cand_edu_tweet_count[i] = 0
	if i not in cand_coll_aff_count:
		cand_coll_aff_count[i] = 0

#now pull together cand name, edu tweet count, and
#college aff tweet count
for i in cand_list:
	cand_summary.append([i, cand_tweet_count[i], cand_edu_tweet_count[i], cand_coll_aff_count[i]])

#Write candidate summary to a CSV
#I basically just made this out of curiosity
with open('edu_tweet_counts_by_cand.csv','w') as f:
    writer = csv.writer(f)
    writer.writerow(['candidate','tweets','education_tweets','college_affordability_tweets'])
    for j in cand_summary:
        writer.writerow(j)

#Create list with education tweet % for each candidate
edu_tweet_perc = []
for i in cand_summary:
	edu_tweet_perc.append([i[0],i[2]/i[1]])

#Write percentage of educational tweets to tsv as data for
#plot of candidate tweet %
#this one actually got cut and I ended up using the sorted one 
#below instead
with open ('../data/cand_2020.tsv','w') as f:
	tsv_writer = csv.writer(f, delimiter = '\t')
	tsv_writer.writerow(['candidate', 'ed_perc'])
	for i in edu_tweet_perc:
		tsv_writer.writerow(i)

#sort data by education tweet percentage
edu_tweet_perc_sorted = sorted(edu_tweet_perc, key = itemgetter(1))

#Make TSV of same data but sorted alphabetically by candidate
#this is what went into the chart we ultimately used on the 
# 2020 candidates page
with open ('../data/cand_2020_sorted.tsv','w') as f:
	tsv_writer = csv.writer(f, delimiter = '\t')
	tsv_writer.writerow(['candidate', 'ed_perc'])
	for i in edu_tweet_perc_sorted:
		tsv_writer.writerow(i)

#Create list with % of educ tweets addressing affordability
#for each candidate:
aff_over_educ_tweet_perc = []
for i in cand_summary:
	aff_over_educ_tweet_perc.append([i[0],i[3]/i[2]])

#sort data by affordability tweet percentage
aff_over_educ_tweet_perc_sorted = sorted(aff_over_educ_tweet_perc, key = itemgetter(1))

#Write percentage of educational tweets to tsv as data
#for plot of candidate tweet %
with open ('../data/cand_aff_2020.tsv','w') as f:
	tsv_writer = csv.writer(f, delimiter = '\t')
	tsv_writer.writerow(['candidate', 'aff_perc'])
	for i in aff_over_educ_tweet_perc_sorted:
		tsv_writer.writerow(i)