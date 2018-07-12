var express = require('express');
var router = express.Router();
var connection = require('../database/mysql')

router.get('/', function(req, res) {
    var sql = `
    select s.name as sname, t.name as tname, c.name as cname, cv.score as score
    from curriculaVariable as cv , student as s, course as c, teacher as t
    where s.sid = cv.sid and c.cid = cv.cid and t.tid = cv.tid;
    `;
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        console.log(rows)
        res.render('course', {rows: rows})
    });
})


router.post('/search', function(req, res) {
    var param = req.body.search
    console.log(param)
    var sql = `
    select s.name as sname, t.name as tname, c.name as cname, cv.score as score
    from curriculaVariable as cv , student as s, course as c, teacher as t
    where s.sid = cv.sid and c.cid = cv.cid and t.tid = cv.tid and s.name = '${param}'
    `
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        console.log(rows)
        res.render('course', {rows: rows})
    })
})

module.exports = router;