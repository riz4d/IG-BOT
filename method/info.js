const { chalk, inquirer, _, fs, instagram, print, delay } = require("./index.js");
const okInfo = [
    {
        type: "list",
        name: "Read",
        message: "About:\n",
        choices: ["Ξ About Project", "Ξ Developer", "Ξ License", "\n"],
    },
];
const main = async () => {
    try {
        var okChoise = await inquirer.prompt(okInfo);
        okChoise = okChoise.Read;
        switch (okChoise) {
            case "Ξ About Project":
                print(
                    chalk`{bold.green
Instagram bots are a type of software that automates your interactions across Instagram. 
Depending on the type of bot you use, they can like posts, make comments, answer polls,
send direct messages, and follow new profiles all on your behalf. Bots take the drudgery
out of maintaining your own social accounts.}`
                );
                break;

            case "Ξ Developer":
                print(
                    chalk`{bold.green
  Github    (https://github.com/riz4d)
  Instagram (https://instagram.com/riz.4d)
  Telegram  (https://telegram.me/riz4d)}`
                );
                break;

            case "Ξ License":
                print(
                    chalk`{bold.red
 License
                    
Copyright (c) 2021 Mohamed Rizad

Permission is hereby granted, to any user obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software restricted,this script haven't any rights to modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software except @riz4d(developer), and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.}`
                );
                break;

            default:
                console.log("\n ERROR:".red.bold, "oops !! Something went wrong!\n".green.bold);
        }
    } catch (e) {}
};
console.log("\n");
main();
