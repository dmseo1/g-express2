var express = require('express');
var router = express.Router();

router.get('/', (_, res) => {
    res.render('user', {
        name : "서동민"
    });
});

router.get('/about', (_, res) => {
    res.render('detail', {
        detail : "??????"
    });
});

module.exports = router;