const express = require("express");
const bodyParser = require("body-parser");
const { readMarkdown, setMarkdown } = require("./utils/markdown");
const { reloadGitBook } = require("./utils/gitbook");

const app = express();
const port = 3333;

app.use(bodyParser.json());

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  const name = "README.md";
  try {
    readMarkdown(name).then((content) => {
      res.send({
        code: 200,
        data: content,
        message: "读取成功",
      });
    });
  } catch (error) {
    res.send({
      code: 200,
      data: "",
      message: error.message,
    });
  }
});

app.post("/api/update", async (req, res) => {
  const { content } = req.body;
  if (content) {
    try {
      const path = "../../gitbook/README.md";
      await setMarkdown(path, content);
      reloadGitBook();
      res.send({
        code: 200,
        message: "更新成功",
      });
    } catch (error) {
      res.send({
        code: 500,
        message: error.message,
      });
    }
  } else {
    res.send({
      code: 500,
      message: "未取到数据",
    });
  }
});
