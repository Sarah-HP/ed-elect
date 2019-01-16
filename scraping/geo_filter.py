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


#create lists of states including spelled out and abbreviated to filter for
#Upper case abbreviations OK without spaces b/c most likely states
#lower case abbreviations require spaces on either side so as not to catch the middles of words 
state_list = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming','District of Columbia','Puerto Rico']
lc_state_list = []
for state in state_list:
    lc_state_list.append(state.lower())
state_abbrev_list = ['AK', 'AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI']
lc_state_abbrev_list_generator = [' AK ', ' AL ', ' AZ ', ' AR ', ' CA ', ' CO ', ' CT ', ' DE ', ' FL ', ' GA ', ' HI ', ' ID ', ' IL ', ' IN ', ' IA ', ' KS ', ' KY ', ' LA ', ' ME ', ' MD ', ' MA ', ' MI ', ' MN ', ' MS ', ' MO ', ' MT ', ' NE ', ' NV ', ' NH ', ' NJ ', ' NM ', ' NY ', ' NC ', ' ND ', ' OH ', ' OK ', ' OR ', ' PA ', 'PR ', ' RI ', ' SC ', ' SD ', ' TN ', ' TX ', ' UT ', ' VT ', ' VA ', ' WA ', ' WV ', ' WI ']
lc_state_abbrev_list = []
for state in lc_state_abbrev_list_generator:
    lc_state_abbrev_list.append(state.lower())

#combine all lists into one list
all_state_info = state_list + lc_state_list + state_abbrev_list + lc_state_abbrev_list


#loop through tweets, see if include state label or name
located_tweets = []
for dict in tweets:
    #deal with DC first b/c it and Washington state will cause problems otherwise
    if ('DC' in dict['Location'] or ' dc ' in dict['Location'] or 'Washington, DC' in dict['Location'] or 'washington dc' in dict['Location'] or 'Washington, dc' in dict['Location'] or 'Washington DC' in dict['Location'] or 'District of Columbia' in dict['Location']):
        dict['State'] = 'DC'
        located_tweets.append(dict)
    else:
        for state in all_state_info:
            if state in dict['Location']:
                dict['State'] = state #will need to standardize state format (this will match whatever format Twitter account used)
                located_tweets.append(dict)
                break

#Make dictionary of all state abbrevations to standardize state format. Adapted from https://gist.github.com/rogerallen/1583593

state_dictionary = {'AL': ['Alabama', 'alabama', 'AL', ' al '], 'AK': ['Alaska', 'alaska', 'AK', ' ak '], 'AZ': ['Arizona', 'arizona', 'AZ', ' az '], 'AR': ['Arkansas', 'arkansas', 'AR', ' ar '], 'CA': ['California', 'california', 'CA', ' ca '], 'CO': ['Colorado', 'colorado', 'CO', ' co '], 'CT': ['Connecticut', 'connecticut', 'CT' ' ct '], 'DE': ['Delaware', 'delaware', 'DE', ' de '], 'FL': ['Florida', 'florida', 'FL' ' fl '], 'GA': ['Georgia', 'georgia', 'GA', ' ga '], 'HI': ['Hawaii', 'hawaii', 'HI', 'hi'], 'ID': ['Idaho', 'idaho', 'ID', ' id '], 'IL': ['Illinois', 'illinois', 'IL', ' il '], 'IN': ['Indiana', 'indiana', 'IN', ' in '], 'IA': ['Iowa', 'iowa', 'IA', ' ia '], 'KS': ['Kansas', 'kansas', 'KS', ' ks '], 'KY': ['Kentucky', 'kentucky', 'KY', ' ky '], 'LA': ['Louisiana', 'louisiana', 'LA', ' la '], 'MA': ['Massachusetts', 'massachusetts', 'MA', ' ma '], 'ME': ['Maine', 'maine', 'ME', ' me '], 'MD': ['Maryland', 'maryland', 'MD', ' md '], 'MI': ['Michigan', 'michigan', 'MI', ' mi '], 'MN': ['Minnesota', 'minnesota', 'MN', ' mn '], 'MS': ['Mississippi', 'mississippi', 'MS', ' ms '], 'MO': ['Missouri', 'missouri', 'MO', ' mo '], 'MT': ['Montana', 'montana', 'MT', ' mt '], 'NE': ['Nebraska', 'nebraska', 'NE', ' ne '], 'NV': ['Nevada', 'nevada', 'NV', ' nv '], 'NH': ['New Hampshire', 'new hampshire', 'NH', ' nh '], 'NJ': ['New Jersey', 'new jersey', 'NJ', ' nj '], 'NM': ['New Mexico', 'new mexico', 'NM', ' nm '], 'NY': ['New York', 'new york', 'NY', ' ny '], 'NC': ['North Carolina', 'north carolina', 'NC', ' nc '], 'ND': ['North Dakota', 'north dakota', 'ND', ' nd '], 'OH': ['Ohio', 'ohio', 'OH', ' oh '], 'OK': ['Oklahoma', 'oklahoma', 'OK', ' ok '], 'OR': ['Oregon', 'oregon', 'OR', ' or '], 'PA': ['Pennsylvania', 'pennsylvania', 'PA', ' pa '], 'RI': ['Rhode Island', 'rhode island', 'RI', ' ri '], 'SC': ['South Carolina', 'south carolina', 'SC', ' sc '], 'SD': ['South Dakota', 'south dakota', 'SD', ' sd '], 'TN': ['Tennessee', 'tennessee', 'TN', ' tn '], 'TX': ['Texas', 'texas', 'TX', ' tx '], 'UT': ['Utah', 'utah', 'UT', ' ut '], 'VT': ['Vermont', 'vermont', 'VT', ' vt '], 'VA': ['Virginia', 'virginia', 'VA', ' va '], 'WA': ['Washington', 'washington', 'WA', ' wa '], 'WV': ['West Virginia', 'west virginia', 'WV', ' wv '], 'WI': ['Wisconsin', 'wisconsin', 'WI', ' wi '], 'WY': ['Wyoming', 'wyoming', 'WY', ' wy '], 'PR': ['Puerto Rico', 'puerto rico', 'PR', ' pr ']} 

#Loop through tweets, states to make state column used postal abbreviation for all tweets
for tweet in located_tweets:
    for key in state_dictionary:
        if tweet['State'] in state_dictionary[key]:
            tweet['State'] = key

#convert tweet dictionaries to lists to write to csv
l_tweets_list = []
for i in located_tweets:
    l_tweets_list.append([i['Search Term'], i['Username'], i['Location'],i['State'], i['Verified User?'], i['Tweet ID'], i['Tweet Time'], i['Tweet Text'], i['Tweet Place'], i['Retweet Count'], i['Favorite Count']])

#write to csv
with open('located_tweets.csv','w') as f:
    writer = csv.writer(f)
    writer.writerow(['Search Term', 'Username', 'Location','State', 'Verified User?', 'Tweet ID', 'Tweet Time', 'Tweet Text', 'Tweet Place', 'Retweet Count', 'Favorite Count'])
    for j in l_tweets_list:
        writer.writerow(j)