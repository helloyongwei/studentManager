var express = require('express');
var router = express.Router();
var select = require('../api/select')
var update = require('../api/update')

/* GET users listing. */
router.use('/select', select)

router.use('/:sid/edit', function(req, res, next) {
    
}, update)

router.get('/edit', function(req, res, next) {
    res.render('student-edit')
})

module.exports = router;
