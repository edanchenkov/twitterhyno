import TwitterApi from "./twitterApi";
import config = require("./../config");

interface ITwitterResponse {
    token: string;
}

window.onload = () => {
    if (window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has("oauth_token") && urlParams.has("oauth_verifier")) {
            TwitterApi.verify(urlParams.get("oauth_token") as string, urlParams.get("oauth_verifier") as string).then(() => {
                console.info("done");
            });
        }
    }

    let twitterButton = document.querySelector("button") as HTMLElement;

    twitterButton.onclick = () => {
        TwitterApi.auth().then((data: ITwitterResponse) => {
            window.open(config.authenticateUrl + data.token, "_self");
        });
    };
};
