var http = require("http");
var URL = require("url");

http.createServer(function (request, response) {
    myURL = "https://shop.rangs.com.bd/sony-camera?sort_by=all&category=&brands=";
    myURLObject = URL.parse(myURL, true);
    console.log(myURLObject);
    

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(request.url);
  })
  .listen(5050);
// Console will print the message
console.log("Server running at http://127.0.0.1:5050/");
