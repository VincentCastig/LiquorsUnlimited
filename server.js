const express = require("express");
const path = require("path");

const app = express();
const build = path.join(__dirname, "build");

app.use((req, res, next) => {
  if (
    req.headers["x-forwarded-proto"] &&
    req.headers["x-forwarded-proto"] !== "https"
  ) {
    return res.redirect(301, "https://" + req.headers.host + req.originalUrl);
  }
  next();
});

app.use(express.static(build));

app.use((req, res) => {
  res.sendFile(path.join(build, "index.html"));
});

app.listen(process.env.PORT || 3000);