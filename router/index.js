var express = require('express');

var router = express.Router();

/* Get HomePage */
router.get('/', (_, res) => {
    res.render('index', {
        title : "안녕하세요~"
    });
});


module.exports = router;