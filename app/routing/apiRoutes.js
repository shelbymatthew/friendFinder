
var friends = require("../data/friends");
var newResult;
module.exports = function (app) {
    app.post("/api/friends", function (req, res, res2) {

        var newFriend = req.body;
        friends.push(newFriend);
        newFriend = newFriend.scores.map(Number)

        userCompare(newFriend, friends)

        res.json(newResult);
    });

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
}

function userCompare(newInput, oldFriends) {
    var newAr = [];
    var addedAr = []
    //walks through the users answers ojects, runs them through the check users function
    for (var j = 0; j < oldFriends.length; j++) {
        // console.log(oldFriends[j].user)
        checkUsers(newInput, oldFriends[j].scores)
    }
    //compares two arrays, and gets the total number of differences between each number in the arrays, pushes the totals to a new array.
    function checkUsers(user, friendlist) {
        for (var i = 0; i < user.length; i++) {

            newAr.push(Math.abs(user[i] - friendlist[i]));
        }
        var added = sum(newAr);
        newAr = [];
        addedAr.push(added)
    };
    var min = Math.min.apply(Math, addedAr)
    var index = 0;
    var value = addedAr[0];
    for (var i = 0; i < addedAr.length - 1; i++) {
        if (addedAr[i] < value) {
            value = addedAr[i];
            index = i;
        }
    }
    newResult = JSON.stringify(oldFriends[index])
    console.log(newResult)
    function sum(numbers) {
        return numbers.reduce(function (a, b) {
            return a + b

        });
    }
}