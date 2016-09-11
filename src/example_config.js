var config = {
	serviceCount: 1, 
	clientPort: 7774, 
	configList: [
		{
			serviceName: '', 
			account: [
				{username: "", password: "", provider: ""}
			],
			telegramBotToken: "",
			telegramAdminUsernames: [""],
			telegramChannelID: "",
			initCenterLocation: {
				latitude: 23.9468, 
				longitude: 120.925239
			},
			showDistance: false,
			autoRestartTime: 0,
			searchSteps: 3,
			searchDelay: 1,
			whitelist: [],
			blacklist: []
		}
	]
}
module.exports = config;
