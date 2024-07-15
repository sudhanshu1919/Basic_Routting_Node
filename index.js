var http = require("http");

var port = 1414;

var app = http.createServer(function (req, res) {
  const url = req.url;
  if (url === "/about") {
    res.write("Welcome to About Page..!");
    res.end();
  } else if (url === "/contact") {
    res.write("Welcome to Contact Page..!");
    res.end();
  } else {
    res.write("This is Basic Routing in Node JS..!");
    res.end();
  }
});

app.listen(port, () => {
  console.log("Server Started on ", port);
});
