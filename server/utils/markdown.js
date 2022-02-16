const fs = require("fs");
const path = require("path");

function readMarkdown(name) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, `../../gitbook/${name}`),
      "utf8",
      (error, content) => {
        if (error) reject(error);
        resolve(content);
      }
    );
  });
}

function setMarkdown(pathValue, value) {
  return new Promise((resolve, reject) => {
    const p = path.join(__dirname, pathValue);
    if (fs.existsSync(p)) {
      fs.writeFile(p, value, "utf8", (err) => {
        if (err) reject(err);
        resolve();
      });
    } else {
      resolve("未找到文件");
    }
  });
}

module.exports = {
  readMarkdown,
  setMarkdown,
};
