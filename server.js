// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
require("./app/routing/htmlRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//html routes

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});
app.get("/api/friends", function (req, res) {

    return res.json(friends);
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

//api routes

app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log("new friend;" + newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
    newFriend = newFriend.scores.map(Number)
    console.log(newFriend)

  });



// app.get("/api/:friends?", function(req, res) {
//     var chosen = req.params.characters;

//     if (chosen) {
//       console.log(chosen);

//       for (var i = 0; i < characters.length; i++) {
//         if (chosen === characters[i].routeName) {
//           return res.json(characters[i]);
//         }
//       }

//       return res.json(false);
//     }
//     return res.json(characters);
//   });


var friends = [
    {
        name: "Jim",
        photo: "https://vignette.wikia.nocookie.net/theoffice/images/9/9a/Jim.jpg/revision/latest?cb=20170701084550",
        scores: [4, 4, 5, 6, 7, 5, 4, 9, 2, 10]
    },
    {
        name: "Pam",
        photo: "https://vignette.wikia.nocookie.net/theoffice/images/6/67/Pam_Beesley.jpg/revision/latest?cb=20170701084358",
        scores: [2, 5, 3, 5, 6, 4, 2, 7, 4, 10] // 0
    },
    {
        name: "Michael",
        photo: "https://vignette.wikia.nocookie.net/theoffice/images/0/02/Michael_Scott.jpg/revision/latest?cb=20170701090332",
        scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10] //12
    },

];






app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});