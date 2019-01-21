This is the bar chart of tweet percentage that appears on the college affordability page.

The data from this chart comes from our Twitter API data. The method for collecting that was described in tweet_collection_README.txt.

I took the dataset from there--scraping/aggregated.csv (the copy of which in our data folder has, for readability purposes, been renamed all_tweets_aggregated.csv)--and plugged it into tweet_filter.py (I ran it on the copy in the scraping folder, but there is now also one in the scripts folder). One of the files that script outputs is data/cand_aff_2020.tsv, which is the data that does into this plot.

The javascript for this plot is cand_aff_cht.js. The original visualization is at http://bl.ocks.org/Caged/6476579. This particular plot I made by slightly modifying my bar chart from the 2020 Candidates page. The annotations in the .js file show the limited changes I made from there.

The CSS file is cand_chart.css, as it is for all three of the charts like this (on the 2020 candidates page, the school safety page, and the affordability page). I have commented on changes I made there as well.
