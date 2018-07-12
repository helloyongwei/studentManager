var express = require('express');
var router = express.Router();
var connection = require('../database/mysql')

//查看学生
router.get('/select', function(req, res) {
    var sql = "select * from student";
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        res.render('student', {rows: rows})
    });
})

//编辑学生
router.get('/:sid/edit', function(req, res) {
    var sid = req.params.sid;
    var sql = "select * from student where sid = " + sid;
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        res.render('student-edit', {rows: rows})
    });
})

//删除学生
router.get('/:sid/delete', function(req, res) {
    var sid = req.params.sid;
    var sql = "delete from student where sid = " + sid;
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        res.render('success')
    })
})


//添加学生
router.get('/addOne', function(req, res) {
    res.render('addOne.html')
})

// 提交
router.post('/addOne/submit', function(req, res) {
    var {name, sex, birth} = req.body
    var sql = "insert into student(name, sex, birth) values('"
    + name + "','" + sex + "','" + birth + "')";
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        res.render('success')
    })
})





module.exports = router;
