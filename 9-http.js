const http = require("http");

const myServer = http.createServer((req, res) => {
	console.log(req);
	console.log(res);
	if (req.url === "/") {
		res.write("Welcome to our home page!");
		res.end();
	} else if (req.url === "/about") {
		res.end("Here is some details about our project");
	}
	res.write(
		`<h1>OOPS!</h1><p>Sorry we were unable to fetch your request</p><a href=" /
			">Back Home</a>`
	);
});
myServer.listen(5000, () => {
	console.log(`Server is running on port 5000`);
});
