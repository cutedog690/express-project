var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let testJsonObject = {
    error: false,
    message: 'None',
    body:
      [
        {
          id: 10,
          tag: 'Alpha'
        },
        {
          id: 20,
          tag: 'Beta'
        }
      ],
  };
  res.status(200).json(testJsonObject);
});

module.exports = router;
