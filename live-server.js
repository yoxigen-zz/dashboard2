var liveServer = require("live-server");

var params = {
	open: "/src",
	ignore: 'src/mock_data'
};
liveServer.start(params);