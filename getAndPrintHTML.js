const https = require('https');

function getAndPrintHTMLChunks() {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  const emptyString = '';

  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data + ' \n' );
    emptyString += data;
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

getAndPrintHTMLChunks ();