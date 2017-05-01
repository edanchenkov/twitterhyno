import config = require("./../config");

/* ADD PORT HERE */
const baseUrl = config.server.protocol + "://" + config.server.host;

class TwitterApi {
    private accessToken: string;
    private accessTokenSecret: string;

    constructor(accessToken: string, accessTokenSecret: string) {
        this.accessToken = accessToken;
        this.accessTokenSecret = accessTokenSecret;
    }

    public auth(): Promise<object> {
        return fetch(baseUrl + "/auth/request_token").then((res) => {
            return res.json();
        });
    }
}

export default TwitterApi;
