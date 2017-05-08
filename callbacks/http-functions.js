var https = require('https');

module.exports = function getHTML (options, callback) {
var html = "";


  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      html += data;
    });

    response.on('end', function() {
      callback(html);
    });

  });

}