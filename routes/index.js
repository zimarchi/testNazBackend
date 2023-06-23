var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get ('/year', function (req, res) {
  const date = new Date()
  const year = date.getFullYear()
  const goodYear = year.toString()
  console.log ("toto")
  
  res.json  ({year: goodYear})

})



module.exports = router;
