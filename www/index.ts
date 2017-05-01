import TwitterApi from "./twitterApi";
import config = require("./../config");

const client = new TwitterApi("test", "test");

let twitterButton = document.querySelector("button");

interface ITwitterResponse {
    oauth_token: string;
}

if (typeof twitterButton !== "undefined" && twitterButton !== null) {
    twitterButton.onclick = () => {
        client.auth().then((data: ITwitterResponse) => {
            // window.open(config.authenticateUrl + data.oauth_token, "_blank", "toolbar=0,location=0,menubar=0");
            window.open(config.authenticateUrl + data.oauth_token, "_self");
        });
    };
}