let configProfile = {
	profile: {screenName: "jauntvr"},
	domId: "tweets",
	maxTweets: 5,
	enableLinks: true,
	showUser: true,
	showTime: true,
	showImages: true,
	lang: "en"
}
twitterFetcher.fetch(configProfile);