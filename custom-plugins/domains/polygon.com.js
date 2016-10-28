var utils = require('../../utils');

module.exports = {

    re: /(https?:\/\/)(www\.)?polygon\.com\.*/i,

    mixins: [],

    getMeta: function() {
        return {
            title: 'github_user_data'.title,
            description: 'github_user_data.description',
            site: "Github"
        };
    },

    tests: [
        "https://www.dropbox.com/s/5nscrc87w4qroii/Boston%20City%20Flow.jpg",
        "https://www.dropbox.com/sh/qw7pbihspj9qr1n/r43kxdHz-9/Let%27s%20Play%20Mafia%202%20-%20Let%27s%20Play%20Mafia%202%20-%20Let%27s%20Play%20Mafia%202%20Part%205%20-%20Sneaky%20Sneaky.mp4",
        "https://www.dropbox.com/s/95nitprloknc65t/FOSS4G%20NA%202013%20-%20Big%20Data.pdf",
        "https://www.dropbox.com/s/y1azvmnal9tl9nh/2013SLCTChamps9thInn.mp3"
    ]
};
