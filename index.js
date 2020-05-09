const { upload_file } = require("./qiniu");
const config = require("./config")
var request = require("request");
var fs = require("fs");
const express = require("express");
const app = express();
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "后台管理端网址");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Expose-Headers, Platform, Token, Uid"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS, HEAD"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "text/html; charset=utf-8");
  next();
});
app.get("/", function (req, res) {
  res.send("ok");
  request(, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      fs.writeFile("wenda.txt", body, function (err) {
        if (err) {
          return console.error(err);
        }
        fs.readFile("input.txt", function (err, data) {
          if (err) {
            return console.error(err);
          }
          upload_file("wenda.txt", "./wenda.txt");
        });
      });
    }
  });
});

app.listen(3000);
