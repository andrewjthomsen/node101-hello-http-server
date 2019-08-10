// write your code here
const http = require("http");

// write your code here
  const server = http.createServer((req, res) => {
  console.log("Received" + req.method + " request for: " + req.url);

  res.writeHead(200, { "content-type": "text/plain" });

  res.end("Hello world!");
});

server.listen(8080, "localhost", null, function() {
  console.log("Server is listening on localhost:8080");
});
