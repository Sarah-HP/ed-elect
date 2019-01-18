# Twitter Scraper in R
# Developed by Joe McIntyre 
# Adapted on 16 January by Sarah Pollnow (new apis, etc.)


# install.packages('twitteR')
# install.packages('tidyverse')


# install.packages('twitteR')
library(twitteR)
library(tidyverse)

api_key <- "4eYCjEYePqarALTSD3Qb8HNS5"

api_secret <- "dmquKnxJk11J5z1xYCPWHWh3s3bIVQg4vOANDnhcDoFatGSPIf"

token <- "1084467121101422593-08Im0HjW7Zq5K3bR0m8GHfZFJhQLne"

token_secret <- "Pxn1gqO7MRj7JWcFsYhSnnLkOuIfYhV5EfkhZNp7zUuVz"

setup_twitter_oauth(consumer_key = api_key, consumer_secret = api_secret, access_token = token, access_secret = token_secret)

rdmTweets <- searchTwitter('school choice', n = 5000, lang = 'en')

dat <- twListToDF(rdmTweets) # put into a data frame

names(dat)
head(dat)

dat$latitude <- as.numeric(dat$latitude)
dat$longitude <- as.numeric(dat$longitude)

# dat$text
# dat2$text

sample(dat$text, 20)

write.table(dt, "schoolchoice.csv", sep=",", row.names=F)

availableTrendLocations()$name
availableTrendLocations()[c(461)] # Shows what is trending in the U.S.
trend_loc <- availableTrendLocations()[461, 'woeid']
getTrends(trend_loc)
# trend_loc <- availableTrendLocations()[381, 'woeid']
getTrends(trend_loc)

#djt <- getUser('@realDonaldTrump')
#djt$getFriends()
#djt$lastStatus
