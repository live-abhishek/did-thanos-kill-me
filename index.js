const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index.html");
});

const port = process.env.port || process.env.PORT || 9595;
app.listen(port, () => {
  console.log("Web Server listening on port %s", port);
});
