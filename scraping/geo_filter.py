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

for i in tweets:
    print(i['Location'])


#List of state abbreviations taken from https://gist.github.com/rogerallen/1583593
us_state_abbrev = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY',
}




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
