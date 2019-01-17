* Graphing social views about guns

clear all
cd "C:\Users\Sarah Pollnow\Desktop\Development\ed-elect\data\pew_W26_Apr17"
use "ATP W26.DTA"

* Preliminary graph
	graph bar GUNSOCIETY_W26, over(F_PARTY_FINAL)
	
* Make  a simpler variable for party
	codebook F_PARTY_FINAL
	generate party =.
	replace party = 1 if F_PARTY_FINAL==1
	replace party = 2 if F_PARTY_FINAL==2
	replace party = 0 if F_PARTY_FINAL==3
	replace party = 0 if F_PARTY_FINAL==4
	replace party = 0 if F_PARTY_FINAL==99
	label variable party "Political Party"
	label define partyname 1 "Republican" 2 "Democrat" 0 "Other"
	label values party partyname
	codebook party

* Make a new variable for guns in society
	generate society_gun_views = .
	replace society_gun_views=1 if GUNSOCIETY_W26==1
	replace society_gun_views=0 if GUNSOCIETY_W26==2 
	label variable society_gun_views "How society looks at most gun owners"
	label define gunview 1 "positive" 0 "negative"
	label values society_gun_views gunview
	codebook society_gun_view
	* I am dropping the 62 individuals who refused to answer

* Generate a new graph of gun views
	graph bar society_gun_views, over(party)
	* This graph is not very interesting
	
* Let's look instead at something related to gun violence
* From the Pew questions:
	/* Here is a list of things some people say contribute to gun violence. 
	How much, if at all, do you think each of the following contributes to gun violence in the country today?
		* Here is a list of things some people say contribute to gun violence. 
			a) The ease with which people can LEGALLY obtain guns
			b) The ease with which people can ILLEGALLY obtain guns
			..." */
	
	codebook GUNCONTRIBA // "1" is "a great deal" and "2" is "a fair amount"
	list GUNCONTRIBA party if GUNCONTRIBA==1
	
* Generate a new variable for individuals
	gen legalgun_problem=.
	replace legalgun_problem=1 if GUNCONTRIBA==1 | 2
	replace legalgun_problem=0 if GUNCONTRIBA!=1 & GUNCONTRIBA!=2
	label variable legalgun_problem "How the ease of legal access to guns contributes to gun violence"
	label define gunprob 1 "A great deal or a fair amount" 0 "Not too much, not at all, no answer"
	label values legalgun_problem gunprob
	codebook legalgun_problem
		
* Look at the level fo concern in each region
	graph hbar legalgun_problem, over(F_CREGION_FINAL,  sort(1)) ///
	title("Americans in the Northeast likely to see ease of legal" "access to guns as a contributor to gun violence.") ///
	ytitle("Proportion who see legal gun access as contributor to violence") ///
	blabel(bar, format(%9.1f)) ///
	note("Source of Data: The 2017 Pew Research Center's American Trends Panel," ///
		"                       Wave 26 (April 4 – April 18, 2017)")
