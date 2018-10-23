var request = require('request');
var s = request('http://google.com');
s.on('data', function (chunk) {
    console.log(chunk);
});
s.on('end', function () {
    console.log('stop');
});
