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


e_count<- as.data.frame(table(edu_tweets$Candidate))
e_count<-mutate(e_count,ed_t_count = Freq)
e_count<-select(e_count,-Freq)
t_count <- as.data.frame(table(tweets$Candidate))
t_count<-mutate(t_count,t_count = Freq)
t_count<-select(t_count,-Freq)
totals<-left_join(e_count,t_count,by="Var1")
totals<-mutate(totals,ed_perc = ed_t_count/t_count)



ggplot(totals,aes(Var1,ed_perc))+geom_col()+theme(axis.text.x=element_text(angle = 90))+labs(title="Percent of Candidate Tweets Containing Terms Related to Education",x="Candidate Name", y="Percent of Teeets Containing Education-\nRelated Terms")
ggplot(totals,aes(reorder(Var1,-ed_perc,sum),ed_perc))+geom_col()+theme(axis.text.x=element_text(angle = 90))+labs(title="Percent of Candidate Tweets Containing Terms Related to Education",x="Candidate Name", y="Percent of Teeets Containing Education-\nRelated Terms")



