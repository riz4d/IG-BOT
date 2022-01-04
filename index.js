const { chalk, inquirer, print } = require("./method/index.js");
var moment = require("moment");
var colors = require("colors");
var userHome = require("user-home");

// DETECT IP *START!
var os = require("os");
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === "IPv4" && !address.internal) {
            addresses.push(address.address);
        }
    }
}
// DETECT IP *END!

const questionTools = [
    "Ξ Information",
    "Ξ Bot Like Timeline",
    "Ξ Bot Like Target User",
    "Ξ Mass Delete Post/Photo",

    "Ξ Followers Target (follow,like)",
    "Ξ Followers Target (like,comment)",

    "Ξ Followers Target (follow,like,comment)",
    "Ξ Followers Target ver2 (follow,like,comment)",

    "Ξ Followers Target ver3 (follow,like,comment)",

    "Ξ Followers Target (follow,like,message)",
    "Ξ Followers Target ver2 (follow,like,message)",

    "Ξ Hashtag Target (follow,like,comment)",
    "Ξ Hashtag Target (like,comment)",
    "Ξ Location Target (follow,like,comment)",

    "Ξ Unfollow All Following",
    "Ξ Unfollow Not Followback",
    "\n",
];

const menuQuestion = {
    type: "list",
    name: "choice",
    choices: questionTools,
};

const main = async () => {
    try {
        const { choice } = await inquirer.prompt(menuQuestion);
        choice == questionTools[0] && require("./method/info.js");
        choice == questionTools[1] && require("./method/liketimeline.js");
        choice == questionTools[2] && require("./method/liketarget.js");
        choice == questionTools[3] && require("./method/delallmedia.js");
        choice == questionTools[4] && require("./method/flonly.js");
        choice == questionTools[5] && require("./method/iconly.js");
        choice == questionTools[6] && require("./method/fftauto.js");
        choice == questionTools[7] && require("./method/fftbetaauto.js");
        choice == questionTools[8] && require("./method/fftautov2.js");
        choice == questionTools[9] && require("./method/fftdmauto.js");
        choice == questionTools[10] && require("./method/fftdmbetaauto.js");
        choice == questionTools[11] && require("./method/fhtauto.js");
        choice == questionTools[12] && require("./method/htagnw.js");
        choice == questionTools[13] && require("./method/fltauto.js");
        choice == questionTools[14] && require("./method/unfollowall.js");
        choice == questionTools[15] && require("./method/unfollnotfollback.js");
        choice == questionTools[16] && process.exit();
    } catch (err) {
        print(err, "err");
    }
};

console.log(chalk`{bold.yellow

██╗░██████╗░  ██████╗░░█████╗░████████╗
██║██╔════╝░  ██╔══██╗██╔══██╗╚══██╔══╝
██║██║░░██╗░  ██████╦╝██║░░██║░░░██║░░░
██║██║░░╚██╗  ██╔══██╗██║░░██║░░░██║░░░
██║╚██████╔╝  ██████╦╝╚█████╔╝░░░██║░░░
╚═╝░╚═════╝░  ╚═════╝░░╚════╝░░░░╚═╝░░░

  Ξ Developer  : Mohamed Rizad (riz4d)
  Ξ Email  : rizadmuhammed@protonmail.com
  Ξ Instagram : @riz.4d
  Ξ Website : https://rizad.ml
  }`);
console.log("  Ξ YOUR IP  : ".bold.red + addresses);

console.log(chalk`{bold.yellow
  •••••••••••••••••••••••••••••••••••••••••}\n`);
main();
