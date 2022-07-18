/* Load NodeJS Modules */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname));
var port = process.env.PORT || 30002;

app.listen(port, function () {
    console.log('GitHub bot container app listening on port ' + port);
});
