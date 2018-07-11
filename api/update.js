//update.js
const express = require('express');
const http = require('http');
const app = express()
var router = express.Router();
const connection = require('../database/mysql');//导入mysq配置文件

// connection.connect();

app.get('/', function(req, res) {
    console.log(req.params.sid)
    // var sid = req.params.sid;
    //执行SQL语句,这里是一条简单的MySQL查询语句
    // var sql = "select * from student where sid = " + sid;
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        console.log(rows)
        // res.send(rows)  //这里在页面上输出数据
        res.render('student', {rows: rows})
    });
    
})
// connection.end();

 module.exports = app

