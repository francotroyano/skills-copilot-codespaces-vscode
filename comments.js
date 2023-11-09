// Create web server
// Run: node comments.js
// Output:
// 1. Open browser
// 2. Go to localhost:8080
// 3. Add comments
// 4. See comments on page
// 5. Refresh browser to see updated comments

var http = require('http');
var fs = require('fs');
var url = require('url');

// Create server
http.createServer(function (request, response) {
  // Get path from url
  var pathname = url.parse(request.url).pathname;
  // Log path
  console.log('Request for ' + pathname + ' received.');

  // If path is root, send index.html
  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Read file at path
  fs.readFile(pathname.substr(1), function (err, data) {
    // If error
    if (err) {
      console.log(err);
      // Send HTTP status code 404: Not Found
      // Content Type: text/plain
      response.writeHead(404, {'Content-Type': 'text/html'});
    } else {
      // Send HTTP status code 200: OK
      // Content Type: text/plain
      response.writeHead(200, {'Content-Type': 'text/html'});
      // Write content of file to response body
      response.write(data.toString());
    }
    // Send response body
    response.end();
  });
}).listen(8080);

// Log
console.log('Server running at http://