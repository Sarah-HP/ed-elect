import csv

#Read in Tweets
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
edu_terms = ['Education', 'school', 'teacher', 'student', 'Sandy Hook', 'Newtown', 'Columbine', 'Stoneman Douglas', '#edpolicy', '#edreform', '#ESSA', '#putkidsfirst', '#achievementgap', '#edgap', '#literacy', '#nclb', '#essea', 'college', 'devos', 'highered', 'tuition', 'pre-k', 'kindergarten', 'achievement gap', 'K-12', 'k12', '#parentalchoice', '#parentpower', '#titleix', 'Title ix']

#search through all tweets' text and add the ones with text from the term list to a new list
for tweet in tweets:
	for term in edu_terms:
		if term.lower() in tweet[' Tweet Text'].lower():
			edu_tweets.append(tweet)
			break

#write the list of educational tweets to a csv
attrib = edu_tweets[0].keys()
with open('edu_tweets.csv','w') as f:
	d_wr = csv.DictWriter(f, attrib)
	d_wr.writeheader()
	d_wr.writerows(edu_tweets)

#filter the educational tweets to ones dealing with college affordability--sorry for the mess of terms
#I didn't want generic uses of "college", for example, to get added to this, so I required mixes of terms, except for some specific stuff (e.g. Pell Grant, Bloomberg's hashtag ActivateTalent about a college affordability program) that could only really be about college affordability
college_aff_tweets = []
for tweet in edu_tweets:
	if ('afford' in tweet[' Tweet Text'].lower()) and ('higher education' in tweet[' Tweet Text'].lower() or 'college' in tweet[' Tweet Text'].lower() or 'university' in tweet[' Tweet Text'].lower() or 'education' in tweet[' Tweet Text'].lower() or 'tuition' in tweet[' Tweet Text'].lower()):
		college_aff_tweets.append(tweet)
	#all these things could've gone in one long if statement, but it involved too much scrolling right and this might save some computing power I think if the first statement happens to be true
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

#Create list of lists with list for each candidate with # of aff tweets, # of edu tweets, and # of total tweets
#First make list of candidates - there are more efficient ways of doing this, but just in case there's one with no tweets about edu or something I'll use the complete list of aggregated tweets:
cand_list=[]
for tweet in tweets:
	cand = tweet['Candidate']
	if cand not in cand_list:
		cand_list.append(cand)
#now make list of lists:
cand_summary = []
#avoid any key errors in case a candidate has no entries in either the edu tweet count or aff tweet count (looking at you, Ojeda):
for i in cand_list:
	if i not in cand_edu_tweet_count:
		cand_edu_tweet_count[i] = 0
	if i not in cand_coll_aff_count:
		cand_coll_aff_count[i] = 0

#now pull together cand name, edu tweet count, and college aff tweet count
for i in cand_list:
	cand_summary.append([i, cand_tweet_count[i], cand_edu_tweet_count[i], cand_coll_aff_count[i]])

#Write candidate summary to a CSV
with open('edu_tweet_counts_by_cand.csv','w') as f:
    writer = csv.writer(f)
    writer.writerow(['candidate','tweets','education_tweets','college_affordability_tweets'])
    for j in cand_summary:
        writer.writerow(j)

#Create list with education tweet % for each candidate:
edu_tweet_perc = []
for i in cand_summary:
	edu_tweet_perc.append([i[0],i[2]/i[1]])

#Write percentage of educational tweets to tsv as data for plot of candidate tweet %
with open ('../data/cand_2020.tsv','w') as f:
	tsv_writer = csv.writer(f, delimiter = '\t')
	tsv_writer.writerow(['candidate', 'ed_perc'])
	for i in edu_tweet_perc:
		tsv_writer.writerow(i)