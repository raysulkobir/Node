var http = require("http");
var URL = require("url");
var fs = require('fs');

http.createServer(function (request, response) {
    myURL = "https://shop.rangs.com.bd/sony-camera?sort_by=all&category=&brands=";
    myURLObject = URL.parse(myURL, true);
    console.log(myURLObject);
    

    

    // fs.readFile('file/index.html', function(error, data){
    //   response.writeHead(200, { "Content-Type": "text/plain" });
    //   response.write(data);
    //   response.end();
    // });

    let myData = fs.readFileSync('file/index.html');
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(myData);
    response.end();


  })
  .listen(5050);
// Console will print the message
console.log("Server running at http://127.0.0.1:5050/");
