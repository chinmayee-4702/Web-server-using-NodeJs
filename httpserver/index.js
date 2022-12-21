// The http.createServer() methd includes request and response parameters which are supplied by Node.js

//request object can be used to get information about the current HTTP request.


const http = require("http");
// A callback function with parameters request and response is used in createServer method
const server = http.createServer((req,res) => {
    res.end('This is an Acknowlegement from other side');
})
//The request is read by following function
server.listen(8000,"127.0.0.1",() => {
    console.log("Listening to the port number 8000");
});
//port number and local host(ip address of local host) are provided
