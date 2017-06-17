const express = require('express');
const app = express();
var path = require('path')
var bodyParser = require('body-parser')
var DocumentConversionV1 = require('watson-developer-cloud/document-conversion/v1');
var fs = require('fs');

app.set('port', 3001);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var document_conversion = new DocumentConversionV1({
  username: '658053ca-02f9-4fce-bb13-d59eef267a1f',
  password: 'Ut8SF35w1IV5',
  version_date: '2015-12-01'
});

app.get('/hello', (req, res, next) => {
  console.log("hello")
  res.send("yay it works")
    .catch(console.error)
})

app.post('/convert', (req, res, next) => {
  console.log("BODY", req.body)
  // convert a single document
  document_conversion.convert({
    // (JSON) ANSWER_UNITS, NORMALIZED_HTML, or NORMALIZED_TEXT
    file: fs.createReadStream('/Users/keziyahlewis/Desktop/' + req.body.path),
    conversion_target: 
    document_conversion.conversion_target.NORMALIZED_HTML,
    // Add custom configuration properties or omit for defaults
  }, function (err, response) {
    if (err) {
      console.error(err);
    } else {
      var htmlres = JSON.stringify(response, null, 2)
      // console.log(JSON.stringify(response, null, 2));
      res.send(htmlres)
    }
  });
  // res.send("you have uploaded a thing. supposedly")
})


app.listen(app.get('port'), () => {
  console.log(`Server started at: http://localhost:${app.get('port')}/`);
})

