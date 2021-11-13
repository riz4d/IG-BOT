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
    "➥ Information",
    "➥ Bot Like Timeline",
    "➥ Bot Like Target User",
    "➥ Mass Delete Post/Photo",

    "➥ Followers Target (follow,like)",
    "➥ Followers Target (like,comment)",

    "➥ Followers Target (follow,like,comment)",
    "➥ Followers Target ver2 (follow,like,comment)",

    "➥ Followers Target ver3 (follow,like,comment)",

    "➥ Followers Target (follow,like,message)",
    "➥ Followers Target ver2 (follow,like,message)",

    "➥ Hashtag Target (follow,like,comment)",
    "➥ Location Target (follow,like,comment)",

    "➥ Unfollow All Following",
    "➥ Unfollow Not Followback",
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
        choice == questionTools[5] && require("./method/lconly.js");
        choice == questionTools[6] && require("./method/fftauto.js");
        choice == questionTools[7] && require("./method/fftbetaauto.js");
        choice == questionTools[8] && require("./method/fftautov2.js");
        choice == questionTools[9] && require("./method/fftdmauto.js");
        choice == questionTools[10] && require("./method/fftdmbetaauto.js");
        choice == questionTools[11] && require("./method/fhtauto.js");
        choice == questionTools[12] && require("./method/fltauto.js");
        choice == questionTools[13] && require("./method/unfollowall.js");
        choice == questionTools[14] && require("./method/unfollnotfollback.js");
        choice == questionTools[15] && process.exit();
    } catch (err) {
        print(err, "err");
    }
};

console.log(chalk`{bold.green

██╗░██████╗░  ██████╗░░█████╗░████████╗
██║██╔════╝░  ██╔══██╗██╔══██╗╚══██╔══╝
██║██║░░██╗░  ██████╦╝██║░░██║░░░██║░░░
██║██║░░╚██╗  ██╔══██╗██║░░██║░░░██║░░░
██║╚██████╔╝  ██████╦╝╚█████╔╝░░░██║░░░
╚═╝░╚═════╝░  ╚═════╝░░╚════╝░░░░╚═╝░░░

  Ξ Developer  : Muhammed Rizad
  Ξ Email  : rizadmuhammed@protonmail.com
  Ξ Instagram : @rizad__x96
  Ξ Website : https://rizad.ml
  }`);
console.log("  Ξ YOUR IP  : ".bold.red + addresses);

console.log(chalk`{bold.yellow
  •••••••••••••••••••••••••••••••••••••••••}\n`);
main();
