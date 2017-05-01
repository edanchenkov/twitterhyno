var config = {
    server : {
        protocol : '',
        host : '',
        port : ''
    },
    twitterApp : {
        consumerKey : '',
        consumerSecret : ''
    },
    requestTokenUrl : 'https://api.twitter.com/oauth/request_token',
    authenticateUrl : 'https://api.twitter.com/oauth/authorize?oauth_token=',
    accessTokenUrl : 'https://api.twitter.com/oauth/access_token',
    verifyCredentials : 'https://api.twitter.com/1.1/account/verify_credentials.json'
};

module.exports = config;
