
* Date created: 15 January 2019
* Purpose: Analyze twitter data to see when school violence is trending
* Data: Multiple .csv files with twitter data
* Search terms: "school AND gun" "school AND shooting" "

* Note: I did not delete retweets, but instead allowed such entries to be marked as multiple tweets).


*--------------------------------------------------------------------------------------------------------
* Convert the data to stata format
*--------------------------------------------------------------------------------------------------------
	* Set working directory
		clear all
		cd "C:\Users\Sarah Pollnow\Desktop\Development\ed-elect\scraping\term_search_results\schoolviolence"

	* Import the .csv data in looped form and save in a stata-compatible format
		local myfilelist : dir . files"*.csv"
			foreach file of local myfilelist {
				drop _all
				insheet using `file'
				local outfile = subinstr("`file'",".csv","",.)
				save "`outfile'", replace
				}
	clear all 

*--------------------------------------------------------------------------------------------------------
* Merge the data
*--------------------------------------------------------------------------------------------------------

	* Import the first data set 
	cd "C:\Users\Sarah Pollnow\Desktop\Development\ed-elect\scraping\term_search_results\schoolviolence"
	use "results_for_school_and_shooting.dta"

	* Merge in other .csv file
	merge 1:1 tweetid using results_for_gun_and_school.dta // 4,120 tweets were redundant across these .dtas
	duplicates drop // drop duplicate entries. No entries disappeared, which suggests that duplicate tweets were not merged in
					// I double checked the totals: 33,205 observations for *school_and_shooting.dta and 26,474 for *gun_AND_school.dta = 59,679 observations total. 
					// There are 4,120 data points with _merge==3, so I would hope to have 59,679 - 4,120 = 55,559 total.
					// Stata merged correctly -- I have the number of observations that I would have expected
	* I have decided not to merge in the hashtag-based searches because #schoolshootings and #schoolviolence had very little information


*--------------------------------------------------------------------------------------------------------
* Retain only the tweets that mention the U.S., either in the location or in the content of the tweet	
*--------------------------------------------------------------------------------------------------------
	
	* Generate a new variable and set it equal to one if a state or the country is mentioned in the location
		generate us_tweet =.
		replace us_tweet=1 if regexm(location, "USA")==1
		replace us_tweet=1 if regexm(location, "usa")==1
		replace us_tweet=1 if regexm(location, "U.S.A.")==1
		replace us_tweet=1 if regexm(location, "United States")==1
		replace us_tweet=1 if regexm(location, "U.S.")==1
		replace us_tweet=1 if regexm(location, "Alabama")==1
		replace us_tweet=1 if regexm(location, "Alaska")==1
		replace us_tweet=1 if regexm(location, "Arizona")==1
		replace us_tweet=1 if regexm(location, "Arkansas")==1
		replace us_tweet=1 if regexm(location, "California")==1
		replace us_tweet=1 if regexm(location, "Colorado")==1
		replace us_tweet=1 if regexm(location, "Connecticut")==1
		replace us_tweet=1 if regexm(location, "D.C.")==1
		replace us_tweet=1 if regexm(location, "Delaware")==1
		replace us_tweet=1 if regexm(location, "Florida")==1
		replace us_tweet=1 if regexm(location, "Georgia")==1
		replace us_tweet=1 if regexm(location, "Hawaii")==1
		replace us_tweet=1 if regexm(location, "Idaho")==1
		replace us_tweet=1 if regexm(location, "Illinois")==1
		replace us_tweet=1 if regexm(location, "Indiana")==1
		replace us_tweet=1 if regexm(location, "Iowa")==1
		replace us_tweet=1 if regexm(location, "Kansas")==1
		replace us_tweet=1 if regexm(location, "Kentucky")==1
		replace us_tweet=1 if regexm(location, "Louisiana")==1
		replace us_tweet=1 if regexm(location, "Maine")==1
		replace us_tweet=1 if regexm(location, "Maryland")==1
		replace us_tweet=1 if regexm(location, "Massachusetts")==1
		replace us_tweet=1 if regexm(location, "Michigan")==1
		replace us_tweet=1 if regexm(location, "Minnesota")==1
		replace us_tweet=1 if regexm(location, "Mississippi")==1
		replace us_tweet=1 if regexm(location, "Missouri")==1
		replace us_tweet=1 if regexm(location, "Montana")==1
		replace us_tweet=1 if regexm(location, "Nebraska")==1
		replace us_tweet=1 if regexm(location, "Nevada")==1
		replace us_tweet=1 if regexm(location, "New Jersey")==1
		replace us_tweet=1 if regexm(location, "New Mexico")==1
		replace us_tweet=1 if regexm(location, "New York")==1
		replace us_tweet=1 if regexm(location, "North Carolina")==1
		replace us_tweet=1 if regexm(location, "North Dakota")==1
		replace us_tweet=1 if regexm(location, "Ohio")==1
		replace us_tweet=1 if regexm(location, "Oklahoma")==1
		replace us_tweet=1 if regexm(location, "Oregon")==1
		replace us_tweet=1 if regexm(location, "Pennsylvania")==1
		replace us_tweet=1 if regexm(location, "Rhode Island")==1
		replace us_tweet=1 if regexm(location, "South Carolina")==1
		replace us_tweet=1 if regexm(location, "South Dakota")==1
		replace us_tweet=1 if regexm(location, "Tennessee")==1
		replace us_tweet=1 if regexm(location, "Texas")==1
		replace us_tweet=1 if regexm(location, "Utah")==1
		replace us_tweet=1 if regexm(location, "Vermont")==1
		replace us_tweet=1 if regexm(location, "Virginia")==1
		replace us_tweet=1 if regexm(location, "Washington")==1
		replace us_tweet=1 if regexm(location, "West Virginia")==1
		replace us_tweet=1 if regexm(location, "Wisconsin")==1
		replace us_tweet=1 if regexm(location, "Wyoming")==1 
		replace us_tweet=1 if regexm(location, "AL")==1  // There is some noise here, because certain all caps words (like "AUSTRALIA") sneak in. Nevertheless, listing in the observations I see that the vast majority relate to the state in question. I plan to retain these for now.
		replace us_tweet=1 if regexm(location, "AK")==1
		replace us_tweet=1 if regexm(location, "AZ")==1
		replace us_tweet=1 if regexm(location, "AS")==1
		replace us_tweet=1 if regexm(location, "CA")==1
		replace us_tweet=1 if regexm(location, "CO")==1
		replace us_tweet=1 if regexm(location, "CT")==1
		replace us_tweet=1 if regexm(location, "DL")==1
		replace us_tweet=1 if regexm(location, "FL")==1
		replace us_tweet=1 if regexm(location, "GA")==1
		replace us_tweet=1 if regexm(location, "HI")==1
		replace us_tweet=1 if regexm(location, "ID")==1
		replace us_tweet=1 if regexm(location, "IL")==1
		replace us_tweet=1 if regexm(location, "IA")==1
		replace us_tweet=1 if regexm(location, "IO")==1
		replace us_tweet=1 if regexm(location, "KS")==1
		replace us_tweet=1 if regexm(location, "KY")==1
		replace us_tweet=1 if regexm(location, "LA")==1
		replace us_tweet=1 if regexm(location, "ME")==1
		replace us_tweet=1 if regexm(location, "MD")==1
		replace us_tweet=1 if regexm(location, "MA")==1
		replace us_tweet=1 if regexm(location, "MI")==1
		replace us_tweet=1 if regexm(location, "MN")==1
		replace us_tweet=1 if regexm(location, "MS")==1
		replace us_tweet=1 if regexm(location, "MO")==1
		replace us_tweet=1 if regexm(location, "MT")==1
		replace us_tweet=1 if regexm(location, "NB")==1
		replace us_tweet=1 if regexm(location, "NV")==1
		replace us_tweet=1 if regexm(location, "NJ")==1
		replace us_tweet=1 if regexm(location, "NM")==1
		replace us_tweet=1 if regexm(location, "NY")==1
		replace us_tweet=1 if regexm(location, "NC")==1
		replace us_tweet=1 if regexm(location, "ND")==1
		replace us_tweet=1 if regexm(location, "OH")==1
		replace us_tweet=1 if regexm(location, "OK")==1
		replace us_tweet=1 if regexm(location, "OR")==1
		replace us_tweet=1 if regexm(location, "PA")==1
		replace us_tweet=1 if regexm(location, "RI")==1
		replace us_tweet=1 if regexm(location, "SC")==1
		replace us_tweet=1 if regexm(location, "SD")==1
		replace us_tweet=1 if regexm(location, "TN")==1
		replace us_tweet=1 if regexm(location, "TX")==1
		replace us_tweet=1 if regexm(location, "UT")==1
		replace us_tweet=1 if regexm(location, "VT")==1
		replace us_tweet=1 if regexm(location, "VA")==1
		replace us_tweet=1 if regexm(location, "WA")==1
		replace us_tweet=1 if regexm(location, "WV")==1
		replace us_tweet=1 if regexm(location, "WS")==1
		replace us_tweet=1 if regexm(location, "WY")==1
		
	* Also identify the tweets that mention the U.S. in the body of the tweet
		replace us_tweet=1 if regexm(tweettext, "United States")==1
		replace us_tweet=1 if regexm(tweettext, "U.S.")==1
		replace us_tweet=1 if regexm(tweettext, "U.S.A")==1
		replace us_tweet=1 if regexm(tweettext, "USA")==1
		replace us_tweet=1 if regexm(tweettext, "America")==1
			// Although "America" could refer to Latin America, it is included here because it is so frequently shorthand for schools
	
	
	* Delete tweets that make no mention of the U.S.
		keep if us_tweet==1
	
	* Quickly spot-check -- I skimmed the first 500 and found very few clearly incorrect mistakes
	* I'm deleting a few manually, but it's not worth combing through all of the observations by hand because the data is good enough
		drop if regexm(location, "Singapore")==1
		drop if regexm(location, "IMANIA")==1
		drop if regexm(location, "Cannock")==1
		drop if regexm(location, "Nottingham, England")==1
		drop if regexm(location, "Birmingham, England")==1
		drop if regexm(location, "I❤JENNIFER COMPUTER")==1
		drop if regexm(location, "skinnyheadquarters")==1
		drop if regexm(location, "Auckland, New Zealand")==1


*------------------------------------------------------------------------------------------------------
* Next Steps
*------------------------------------------------------------------------------------------------------
/* The preceding steps assembled a data sets of tweets from mentioning "school AND gun" or "school AND shooting"
	that were posted in the U.S. (although there is some noise). From here, we could:
		
		1) Make it compatible with datawrapper by...
				--> Making a variable for each state, replacing the variable with a value of 1 if the location is in that state, and then tallying up 
				
				
				Sample syntax: 
					generate in_alaska=.
						replace in_alaska=1 if regexm(location, "AK")==1
						replace in_alaska=1 if regexm(location, "Alaska")==1
					egen alaska=total(in_alaska)
				...This would then be repeated by each state
				
				PROs: We could see some geographic distribution
				CONs: Our data would have a lot of noise and some distortions(e.g. there are probably more locations mentioning "LA" that are not in Louisiana than there would be locations mentioning "TX" that are not in Texas
					   (we may also end up with some overlap between locations)
				Con #2: There are a lot of tweets identified with the USA but not necessarily with a particular state. Under this strategy we would lose that data.
				
				
				
		2) We could instead give up on the idea of finding tidy state-by-state data, and could instead focus on the frequency with which a term has occurred in the US over time
				PROs: We could use the preceding script to track the frequency of a given term/topic over time
				CONs: For this to be a successful strategy, we would need a narrower term in order to gain access to a longer stretch of time
						(This dataset, for example, has 26,000+ U.S. tweets on school shootings from January 2019 alone, it would seem. Looking at the intensity of tweeting during the month of January is probably not very interesting)
						We could look at something like "sandyhook" over time to get a sense of how U.S.-based tweets changed over time
				



*------------------------------------------------------------------------------------------------------
* References
*------------------------------------------------------------------------------------------------------
	/* Sources consulted
		https://www.statalist.org/forums/forum/general-stata-discussion/general/74053-import-multiple-csv-files
		https://www.statalist.org/forums/forum/general-stata-discussion/general/1296929-how-to-find-particular-word-in-string-in-stata
		https://www.statalist.org/forums/forum/general-stata-discussion/general/43809-how-to-merge-with-duplicates-i-e-not-dropping-the-duplicates
	*/
