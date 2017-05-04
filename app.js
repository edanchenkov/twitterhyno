var express = require('express');
var request = require('request');
var qs = require('querystring');
var config = require('./config');

var app = express();

var oauth = {
    callback : config.server.protocol + '://' + config.server.host + ':' + config.server.port,
    consumer_key : config.twitterApp.consumerKey,
    consumer_secret : config.twitterApp.consumerSecret
};

/* Serve index html, css and js */
app.use('/', express.static('build'));

app.get('/auth/request_token', function (req, res, next) {
    request.post({
        url : config.requestTokenUrl, oauth : oauth
    }, function (error, response, body) {
        var data = qs.parse(body);

        data = {
            token : data.oauth_token,
            tokenSecret : data.oauth_token_secret
        };

        res.status(302).send(data);
    });
});

app.get('/auth/verify', function (req, res) {
    var oauth = {
        verifier : req.query.oauth_verifier,
        token : req.query.oauth_token
    };

    request.post({
        url : config.accessTokenUrl, oauth : oauth
    }, function (error, response, body) {
        var data = qs.parse(body);
        request.get({
            url : config.verifyCredentials,
            oauth : {
                token_secret : data.oauth_token_secret,
                token : data.oauth_token,
                consumer_key : config.twitterApp.consumerKey,
                consumer_secret : config.twitterApp.consumerSecret
            }
        }, function (error, response, body) {
            var data = qs.parse(body);
            res.send(data)
        });
    });
});

app.listen(config.server.port, function () {
    console.log('Example app listening on port', config.server.port);
});
