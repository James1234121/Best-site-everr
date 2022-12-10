var express = require("express");
var fs = require("fs");
var app = express();
app.use((req, res) => {
  var path = req.path;
  var exists = fs.existsSync(__dirname + path);
  if (path.indexOf(".") < 0) path = path.replace(/\/$/g, "") + "/index.html";
  if (path.endsWith(".html") || !exists) res.status(404);
  res.sendFile(__dirname + (exists ? path : "/404.html"));
});
app.use(express.static(__dirname));
app.listen(8080);
