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

for tweet in tweets:
	for term in edu_terms:
		if term.lower() in tweet[' Tweet Text'].lower():
			edu_tweets.append(tweet)
			break

print(len(edu_tweets))
attrib = edu_tweets[0].keys()

with open('edu_tweets.csv','w') as f:
	d_wr = csv.DictWriter(f, attrib)
	d_wr.writeheader()
	d_wr.writerows(edu_tweets)

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

with open('college_aff_tweets.csv','w') as f:
	d_wr = csv.DictWriter(f, attrib)
	d_wr.writeheader()
	d_wr.writerows(college_aff_tweets)

cand_coll_aff_count = {}

for tweet in college_aff_tweets:
	cand = tweet['Candidate']
	if cand in cand_coll_aff_count:
		cand_coll_aff_count[cand] += 1
	else:
		cand_coll_aff_count[cand] = 1
