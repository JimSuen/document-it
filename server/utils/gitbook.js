const path = require("path");
const fs = require("fs");
// const childProcess = require("child_process");
const { exec } = require("child_process");

module.exports.reloadGitBook = () => {
  const gitBookDic = path.join(__dirname, "../../gitbook");
  if (fs.existsSync(gitBookDic)) {
    console.log(11111, gitBookDic);
    // const shPath = path.join(__dirname, "../gitbook.sh");
    // childProcess.execFile(shPath, (error, stdout, stderr) => {
    //   console.log("qqqqq===", error);
    //   console.log("wwwww===", stdout);
    //   console.log("eeeee===", stderr);
    // });
    exec("cd ../../gitbook/ && gitbook serve", (error, stdout, stderr) => {
      console.log("qqqqq===", error);
      console.log("wwwww===", stdout);
      console.log("eeeee===", stderr);
    });
  } else {
    console.log(22222);
  }
};
