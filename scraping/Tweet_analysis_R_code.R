library(dplyr)
library(haven)
library(ggplot2)

tweets<-read.csv("Coding for Policymakers/aggregated.csv")
edu_tweets<-filter(tweets,grepl('Education|school|teacher|student|Sandy hook|Newtown',Tweet.Text,ignore.case=TRUE))
table(edu_tweets$Candidate)
write.csv(edu_tweets,"Coding for Policymakers/tweets_with_terms.csv")
TD_tweets<-filter(tweets,grepl('TeachersDay|teachersday',Tweet.Text))
SA_tweets<-filter(edu_tweets,grepl('sexual assault',Tweet.Text,ignore.case=TRUE))
TIX_tweets<-filter(edu_tweets,grepl('title ix|titleix',Tweet.Text,ignore.case = TRUE))
HE_tweets<-filter(edu_tweets,grepl('higher education|college',Tweet.Text,ignore.case = TRUE))
gun_tweets<-filter(edu_tweets,grepl('NRA|gun|shoot|March for our lives|Newtown|sandy hook',Tweet.Text,ignore.case = TRUE))











