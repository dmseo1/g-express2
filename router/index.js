var express = require('express');

var router = express.Router();

/* Get HomePage */

//라우팅 함수 get(<경로>, 콜백함수);
//콜백함수 full parameter: (err, req, res, next)
router.get('/', (req, res, next) => {
  
    res.render('index', {
        title : "안녕하세요~"
    });

 });

module.exports = router;