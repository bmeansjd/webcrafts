var express = require('express');
var router = express.Router();



const isitSiteTools = require('isit-site-tools-means');




/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});


router.get('/foo', function(req, res, next) { 'use strict';
    const foo = isitSiteTools.imageHelp.configSettings;
    console.log(foo);
    res.send({config: foo.getElvenImages()});
});


module.exports = router;
