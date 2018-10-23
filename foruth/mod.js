var request = require('request');
request('http://google.com', function (err, response, body) {
    console.log(response);
});
