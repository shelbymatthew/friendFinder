var path = require("path");


function htmlRoutes() {
  console.log("hit");
  app.get("/home", function (req, res) {
    
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });
}

module.exports.htmlRoutes