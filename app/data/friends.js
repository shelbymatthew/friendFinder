var newUser = [2, 5, 3, 5, 6, 5, 4, 2, 5, 3];

var newAr = [];
var addedAr = []
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

//walks through the scoress answers ojects, runs them through the check scoress function
function checkNewFriend() {
    for (var j = 0; j < friends.length; j++) {
        // console.log(friends[j].scores)
        checkScores(newUser, friends[j].scores)
    }
}




//compares two arrays, and gets the total number of differences between each number in the arrays, pushes the totals to a new array.
function checkScores(scores, friendlist) {
    for (var i = 0; i < scores.length; i++) {

        newAr.push(Math.abs(scores[i] - friendlist[i]));
    } console.log(newAr)
    var added = sum(newAr);
    console.log(added)
    newAr = [];
    addedAr.push(added)
    // console.log(addedAr)
};
console.log(addedAr)
var min = Math.min.apply(Math, addedAr)
console.log(min)



var index = 0;
var value = addedAr[0];
for (var i = 1; i < addedAr.length; i++) {
    if (addedAr[i] < value) {
        value = addedAr[i];
        index = i;
    }
}
console.log("index: " + JSON.stringify(friends[index]))
// console.log(value, index)
function sum(numbers) {
    return numbers.reduce(function (a, b) {
        return a + b

    });
}