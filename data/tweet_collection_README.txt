Because collecting the candidate tweets was such an integral part of the data collection process and affects so many of the charts in this project, I am making a separate readme for where that data came from.

First, on January 12 I ran t_scraper.py on the command line with the following list of inputs (when I ran it I was in the scraping folder, which is where the original copy of the tweets lives. I have put a copy in the data folder as all_tweets_aggregated.csv; the rename is for readability/comprehensibility purposes):

./t_scraper.py "Booker" "Booker_office" 15808765
./t_scraper.py "Booker" "Booker_staff" 2167097881
./t_scraper.py "Booker" "Booker_campaign" 1603426344
./t_scraper.py "Brown" "Brown_office" 43910797
./t_scraper.py "Brown" "Brown_campaign" 24768753
./t_scraper.py "Gillibrand" "Gillibrand_office" 72198806
./t_scraper.py "Gillibrand" "Gillibrand_campaign" 709389393811927041
./t_scraper.py "Harris" "Harris_office" 803694179079458816
./t_scraper.py "Harris" "Harris_campaign" 30354991 
./t_scraper.py "Klobuchar" "Klobuchar_office" 22044727
./t_scraper.py "Klobuchar" "Klobuchar_campaign" 33537967
./t_scraper.py "Merkley" "Merkley_office" 29201047
./t_scraper.py "Merkley" "Merkley_campaign" 223166587
./t_scraper.py "Sanders" "Sanders_office" 29442313
./t_scraper.py "Sanders" "Sanders_staff" 216776631
./t_scraper.py "Warren" "Warren_campaign" 357606935
./t_scraper.py "Warren" "Warren_office" 970207298
./t_scraper.py "Biden" "Biden_campaign" 939091
./t_scraper.py "Bloomberg" "Bloomberg_campaign" 16581604
./t_scraper.py "Bullock" "Bullock_office" 111721601
./t_scraper.py "Bullock" "Bullock_campaign" 619255632
./t_scraper.py "Buttigieg" "Buttigieg_campaign" 226222147
./t_scraper.py "Castro" "Castro_campaign" 19682187
./t_scraper.py "Castro" "Castro_office" 2695663285
./t_scraper.py "Clinton" "Clinton_2016campaign" 702147673651027968
./t_scraper.py "Clinton" "Clinton_campaign" 1339835893
./t_scraper.py "Cuomo" "Cuomo_campaign" 2513761008
./t_scraper.py "Cuomo" "Cuomo_office" 232268199
./t_scraper.py "Delaney" "Delaney_office" 937723303
./t_scraper.py "Delaney" "Delaney_campaign" 426028646
./t_scraper.py "Gabbard" "Gabbard_campaign" 26637348
./t_scraper.py "Gabbard" "Gabbard_staff" 1064206014
./t_scraper.py "Inslee" "Inslee_office" 1077214808
./t_scraper.py "Inslee" "Inslee_campaign" 21789463
./t_scraper.py "Hickenlooper" "Hickenlooper_office" 728344273620344832 #Last tweet Jan 7; later Tweets from new gov
./t_scraper.py "Hickenlooper" "Hickenlooper_campaign" 117839957
./t_scraper.py "Landrieu" "Landrieu_campaign" 188000721
./t_scraper.py "ORourke" "ORourke_campaign" 342863309
./t_scraper.py "ORourke" "ORourke_office" 1134292500
./t_scraper.py "Ojeda" "Ojeda_campaign" 2290583342
./t_scraper.py "Steyer" "Steyer_campaign" 949934436
./t_scraper.py "Swalwell" "Swalwell_campaign" 377609596
./t_scraper.py "Swalwell" "Swalwell_office" 942156122
./t_scraper.py "Yang" "Yang_campaign" 2228878592



Those are the candidate names, the designation I gave their Twitter account, and the ID of their Twitter account (which I got from their handle using tweeterid.com). This produced separate files for each individual running of the program. This "original data" is saved in data/cand_search_results/. I aggregated these using the command line; I printed a csv-style header to a file using echo "[header--list of categories I had pulled using t_filter.py]" > aggregated.csv, then combined Tweets using cat *_tweets.csv >> aggregated.csv (again, renamed as all_tweets_aggregated.csv when copied into the data folder). 

I then manually deleted several tweets made by Hickenlooper's former account (the official CO governor account) that he had since handed over to his successor. That was the only manual alteration I made to the dataset. I did this on January 16 at ~3 PM (see commit).

That's where the aggregated dataset came from. The markdowns for individual charts explain where the subset/data values for that chart came from.