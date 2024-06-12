// dog.js

var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function(req, res, next) {
    request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.render('dog', { imageURL: data.message }); // dog.jade をレンダリングし、画像URLを渡す
        } else {
            next(error); // エラーがあれば次のミドルウェアに処理を渡す
        }
    });
});

module.exports = router;
