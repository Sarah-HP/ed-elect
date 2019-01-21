There are a lot of moving pieces on this site, so here's an overall guide to the visualizations we used and the readmes that go with them:
Generally applicable/probably best to read first:
	tweet_collection_README.txt

On the 2020 Candidates page:
	2020 Candidates Chart - 2020_candidate_chart_README.txt

On the College Affordability page:
	Opinions on Free College - free-college-opinion-README.txt
	Frequency of Tweets about Affordability - affordability-tweet-frequency-chart-README.txt
	Display of tweets about affordability - display-school-affordability-tweets-README.txt

On the School Safety page:
	Opinions on guns by region - 
	  data/pew_W26_Apr17/readme.txt
	    (see also: "ExploratoryDataAnalysis" - this folder contains the stata script for cleaning)
	Fear for students' safety over time - school-safety-opinion-poll-README.txt
	Candidate school safety tweet frequency - school-safety-tweets-chart-README.txt
	Display of tweets about school safety - display-school-safety-tweets-README.txt

On the School Choice page:
	Highest Concentrations of Charter Schools in Midwest, Southwest, and Florida [map]--
	    data/charterschools/charterschools_documenation.txt
	"Republicans more favorable toward charter schools" & "Support for school choice is mixed overall, though majority of Hispanic and Black respondents favor vouchers"--
	   data/schoolchoicepopularity_education_next/readme.txt
	"Vouchers Now Outstrip Charters in Popularity among Surveyed Democrats"--initial summary is available in:
	   data/schoolchoicepopularity_education_next/readme.txt
	  Further details can be found in the .js file, which is quite annotated:
	   scripts/schoolchoiced3.js



Copies of all the scripts used for the site are in the scripts folder. Copies of all styles are in the styles folder. Copies of all data are in the data folder. Also in the data folder are csvs of the candidates' tweets filtered by subject, which can be used to review the tweets referenced in the profiles of the candidates on the site. The scraping folder was where much of the actual work of creating the site was done, and so has been left intact, but does not contain anything vital at this point to the site's operation (and has some cool stuff we didn't end up using, like a geographical filter for tweets--geo_filter.py).

We drew the list of candidates we considered from several sources. Most came from general knowledge. We also referred to the following articles:
https://www.politico.com/story/2018/11/07/2020-presidential-candidates-955261
https://abc11.com/politics/whos-running-for-president-in-2020-list-of-possible-dem-candidates/5047818/
https://fivethirtyeight.com/features/what-the-potential-2020-candidates-are-doing-and-saying-vol-1/

We found Twitter handles primarily through googling and checking candidate websites, but this site was helpful for finding senators' accounts: https://www.socialseer.com/resources/us-senator-twitter-accounts/