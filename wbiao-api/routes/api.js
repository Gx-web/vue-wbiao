var express = require('express');
var router = express.Router();
let path = require('path');
let fs = require('fs');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
router.get('/homeinfo', (req,res) => {
    let file = path.join( __dirname,'../public/homeinfo.json');
    fs.readFile(file,'utf-8', (err,data) => {
        if(err) {
            res.send(err)
        }else {
            res.send(data)
        }
    })
})

router.get('/zixuninfo', (req,res) => {
    let file = path.join( __dirname,'../public/zixuninfo.json');
    fs.readFile(file,'utf-8', (err,data) => {
        if(err) {
            res.send(err)
        }else {
            res.send(data)
        }
    })
})

router.get('/xuaninfo', (req,res) => {
    let file = path.join( __dirname,'../public/xuaninfo.json');
    fs.readFile(file,'utf-8', (err,data) => {
        if(err) {
            res.send(err)
        }else {
            res.send(data)
        }
    })
})

module.exports = router;
