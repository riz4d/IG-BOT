const { chalk, inquirer, _, fs, instagram, print, delay } = require("./index.js");
const okInfo = [
    {
        type: "list",
        name: "Read",
        message: "Information:\n",
        choices: ["❆ Information", "❆ Warning", "❆ License", "❆ About Me", "\n"],
    },
];
const main = async () => {
    try {
        var okChoise = await inquirer.prompt(okInfo);
        okChoise = okChoise.Read;
        switch (okChoise) {
            case "❆ Information":
                print(
                    chalk`{bold.green
  Instagram (also called IG or Insta) is a photo and
  video sharing application that allows users to take photos,
  take videos, apply digital filters and share them to various
  social networking services, including Instagram's own.}`
                );
                break;

            case "❆ Warning":
                print(
                    chalk`{bold.red
  ⚠ Use tools at your own risk.
  ⚠ Use this Tool for personal use.
  ⚠ I am not responsible for your account using this tool.
  ⚠ Make sure your account has been verified.}`
                );
                break;

            case "❆ License":
                print(
                    chalk`{bold.red
  MIT License

  Copyright (c) 2021 riz4d

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
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

            case "❆ Me":
                print(
                    chalk`{bold.green
  Github    (https://github.com/riz4d)
  Instagram (https://instagram.com/rizad__x96)
  Telegram  (https://telegram.me/rizad_x96)
  Twitter   (https://twitter.com/rizad_x96)}`
                );
                break;

            default:
                console.log("\n ERROR:".red.bold, "oops !! Something went wrong while displaying this tool!\n".green.bold);
        }
    } catch (e) {}
};
console.log("\n");
main();