var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(process.cwd(), 'views' ,'index.html'));
});

module.exports = router;
