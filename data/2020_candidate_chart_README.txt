This is the chart that appears on the 2020 candidates page.

The data from this chart comes from our Twitter API data. The method for collecting that was described in tweet_collection_README.txt.

I took the dataset from there--scraping/aggregated.csv (the copy of which in our data folder has, for readability purposes, been renamed all_tweets_aggregated.csv)--and plugged it into tweet_filter.py. One of the files that script outputs is data/cand_2020_sorted.tsv, which is the data that does into this plot.

The javascript for this plot is cand_chart_scr_sorted.js (sorted b/c the candidates are ordered by tweet percentage). The original visualization is at http://bl.ocks.org/Caged/6476579. The changes I made are described in the script file. The major changes were to change the colors, change the data, and add labels/a title. I also had to play with the margins to get the label to show. I also made the x-labels sit at an angle, which isn't very impressive but took a surprisingly long time.

The CSS file is cand_chart.css. I have commented on changes I made there as well.