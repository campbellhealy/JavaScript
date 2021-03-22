var express = require('express');
var router = express.Router();

/* GET About Info. */
router.get('/about', function(req, res, next) {
  res.send('Nothing Here Yet!');
});

module.exports = router;
