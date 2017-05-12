const pr0 = require('pr0gramm-api');
require('dotenv').config()

const api = pr0.Pr0grammAPI.createWithCookies();
async function main() {

    let loginResponse = await api.user.login(process.env.Pr0_NAME, process.env.Pr0_PWD);
    if(!loginResponse.success) {
        console.log("Could not log in :(");
        if(loginResponse.ban !== null) {
            console.log("You are banned. Reason:");
            console.log(loginResponse.ban.reason);
            return;
        }
    }
}
main();



module.exports = {
  getItems: async function(tag) {
    return mainItems = await api.items.getItems({
        promoted: true,
        flags: pr0.ItemFlags.All,
        tags: [tag]
    });
  },

  getImage: async function(tag) {

    mainItems = await api.items.getItems({
        promoted: true,
        flags: pr0.ItemFlags.All,
        tags: [tag]
    });

    console.log(mainItems.items);

    if(typeof mainItems.items === 'undefined' || mainItems.items.length === 0) {
      return "Soz, j'ai rien pour toi ;(";
    }

    let random, i = 0;
    do {
      random = Math.floor(Math.random() * mainItems.items.length);
      console.log(random);
      i++;
    }
    while (mainItems.items[random].image.substr(-3) ===  "mp4" || mainItems.items.length < i);
    //console.dir(mainItems.items[random]);
    console.log(mainItems.items[random].image);
    return url = 'http://vid.pr0gramm.com/' + mainItems.items[random].image;
  },

  getVideo:async function(tag) {
    let mainItems = await api.items.getItems({
        promoted: true,
        flags: pr0.ItemFlags.All,
        tags: [tag]
    });

    let random;

    do {
      random = Math.floor(Math.random() * mainItems.items.length) + 1;
    }
    while (mainItems.items[random].image.substr(-3) ==!  "mp4");
    //console.dir(mainItems.items[random]);

    return url = 'http://vid.pr0gramm.com/' + mainItems.items[random].image;
  },

  getVideoAndImage:async function(tag) {
    let mainItems = await api.items.getItems({
        promoted: true,
        flags: pr0.ItemFlags.All,
        tags: [tag]
    });

    let random = Math.floor(Math.random() * mainItems.items.length) + 1;

    return url = 'http://vid.pr0gramm.com/' + mainItems.items[random].image;
  },

  bar: function(req, res, next) {
    this.foo();
  }

}
