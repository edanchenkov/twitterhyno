import config = require("./../config");

/* ADD PORT HERE */
const baseUrl = config.server.protocol + "://" + config.server.host + ":" + config.server.port;

class TwitterApi {
    public static auth(): Promise<object> {
        return fetch(`${baseUrl}/auth/request_token`).then((res) => {
            return res.json();
        });
    }

    public static verify(oauthToken: string, oauthVerifier: string): Promise<object> {
        return fetch(`${baseUrl}/auth/verify?oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`).then((res) => {
            return res.json();
        });
    }
}

export default TwitterApi;
