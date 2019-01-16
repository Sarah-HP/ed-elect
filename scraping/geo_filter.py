import csv

#read in list of tweets
with open('term_search_aggregated.csv', 'r') as f:
	reader=csv.DictReader(f)
	rows = list(reader)

#read in the tweets as a list of dictionaries
tweets=[]
for row in rows:
	item=dict(row)
	tweets.append(item)

#Remove location punctuation so we don't miss locations like N.Y. This code adapted from common_words.py, which is adapted from https://www.programiz.com/python-programming/examples/remove-punctuation
for tweet in tweets:
    period = '.'
    no_punc_loc = ''
    for char in tweet['Location']:
        if char not in period:
            no_punc_loc = no_punc_loc + char
    tweet['Location'] = no_punc_loc

state_list = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming','District of Columbia','Puerto Rico','Guam','American Samoa','U.S. Virgin Islands','Northern Mariana Islands']
lc_state_list = []
for state in state_list:
    lc_state_list.append(state.lower())
state_abbrev_list = ['AK', 'AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI']
lc_state_abbrev_list_generator = [' AK ', ' AL ', ' AZ ', ' AR ', ' CA ', ' CO ', ' CT ', ' DE ', ' FL ', ' GA ', ' HI ', ' ID ', ' IL ', ' IN ', ' IA ', ' KS ', ' KY ', ' LA ', ' ME ', ' MD ', ' MA ', ' MI ', ' MN ', ' MS ', ' MO ', ' MT ', ' NE ', ' NV ', ' NH ', ' NJ ', ' NM ', ' NY ', ' NC ', ' ND ', ' OH ', ' OK ', ' OR ', ' PA ', ' RI ', ' SC ', ' SD ', ' TN ', ' TX ', ' UT ', ' VT ', ' VA ', ' WA ', ' WV ', ' WI ']
lc_state_abbrev_list = []
for state in lc_state_abbrev_list_generator:
    lc_state_abbrev_list.append(state.lower())

all_state_info = state_list + lc_state_list + state_abbrev_list + lc_state_abbrev_list

located_tweets = []
for dict in tweets:
    for state in all_state_info:
        if state in dict['Location']:
            dict['State'] = state
            located_tweets.append(dict)

#make a list with just the tweets' text
#location = []
#for tweet in tweets:
#	location.append(tweet['Location'])

#print(location[0:10])

# loop through the rows in the original csv
#for row in reader:
	# filter rows
#    if 'CARPET' in row['PURPOSE'] and float(row['AMOUNT']) > 500:
    	# write rows that match above filter
#        writer.writerow(row)
