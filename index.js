let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let player3Score = document.getElementById("player3-score");
let player4Score = document.getElementById("player4-score");
let player5Score = document.getElementById("player5-score");
let player6Score = document.getElementById("player6-score");

let homeH3 = document.getElementById("home-h3");
let guestH3 = document.getElementById("guest-h3");
let player3H3 = document.getElementById("player3-h3")
let player4H3 = document.getElementById("player4-h3")
let player5H3 = document.getElementById("player5-h3")
let player6H3 = document.getElementById("player6-h3")

let player3SubContainer = document.getElementById("player3-sub-container");
let player4SubContainer = document.getElementById("player4-sub-container");
let player5SubContainer = document.getElementById("player5-sub-container");
let player6SubContainer = document.getElementById("player6-sub-container");

let timeRemaining = document.getElementById("time-remaining");
let timeRemainingBox = document.getElementById("time-remaining-box");

let homeResult = 0;
let guestResult = 0;
let player3Result = 0;
let player4Result = 0;
let player5Result = 0;
let player6Result = 0;

homeScore.textContent = homeResult;
guestScore.textContent = guestResult;
player3Score.textContent = player3Result;
player4Score.textContent = player4Result;
player5Score.textContent = player5Result;
player6Score.textContent = player6Result;

function homeScoreAdd1() {
    homeResult += 1;
    homeScore.textContent = homeResult;
    highlightLeader();
}

function homeScoreAdd5() {
    homeResult += 5;
    homeScore.textContent = homeResult;
    highlightLeader();
}

function homeScoreAdd10() {
    homeResult += 10;
    homeScore.textContent = homeResult;
    highlightLeader();
}

function guestScoreAdd1() {
    guestResult += 1;
    guestScore.textContent = guestResult;
    highlightLeader();
}

function guestScoreAdd5() {
    guestResult += 5;
    guestScore.textContent = guestResult;
    highlightLeader();
}

function guestScoreAdd10() {
    guestResult += 10;
    guestScore.textContent = guestResult;
    highlightLeader();
}

function player3ScoreAdd1() {
    player3Result += 1;
    player3Score.textContent = player3Result;
    highlightLeader();
}

function player3ScoreAdd5() {
    player3Result += 5;
    player3Score.textContent = player3Result;
    highlightLeader();
}

function player3ScoreAdd10() {
    player3Result += 10;
    player3Score.textContent = player3Result;
    highlightLeader();
}

function player4ScoreAdd1() {
    player4Result += 1;
    player4Score.textContent = player4Result;
    highlightLeader();
}

function player4ScoreAdd5() {
    player4Result += 5;
    player4Score.textContent = player4Result;
    highlightLeader();
}

function player4ScoreAdd10() {
    player4Result += 10;
    player4Score.textContent = player4Result;
    highlightLeader();
}

function player5ScoreAdd1() {
    player5Result += 1;
    player5Score.textContent = player5Result;
    highlightLeader();
}

function player5ScoreAdd5() {
    player5Result += 5;
    player5Score.textContent = player5Result;
    highlightLeader();
}

function player5ScoreAdd10() {
    player5Result += 10;
    player5Score.textContent = player5Result;
    highlightLeader();
}

function player6ScoreAdd1() {
    player6Result += 1;
    player6Score.textContent = player6Result;
    highlightLeader();
}

function player6ScoreAdd5() {
    player6Result += 5;
    player6Score.textContent = player6Result;
    highlightLeader();
}

function player6ScoreAdd10() {
    player6Result += 10;
    player6Score.textContent = player6Result;
    highlightLeader();
}

function highlightLeader() {
    let listResults = [homeResult, guestResult, player3Result, player4Result, player5Result, player6Result];
    let listLeaders = [];
    let listLosers = [];
    let max = 0;

    // find the highest value among the results:

    for (let i = 0; i < listResults.length; i++){
        if (listResults[i] >= max) {
            max = listResults[i];
        }
    }

    console.log(max);

    // apply a style to h3 of players that have the highest result:

    if (homeResult == max) {
        homeH3.style.fontWeight = 700;
    }
    else {
        homeH3.style.fontWeight = 100;
    }

    if (guestResult == max) {
        guestH3.style.fontWeight = 700;
    }
    else {
        guestH3.style.fontWeight = 100;
    }

    if (player3Result == max) {
        player3H3.style.fontWeight = 700;
    }
    else {
        player3H3.style.fontWeight = 100;
    }

    if (player4Result == max) {
        player4H3.style.fontWeight = 700;
    }
    else {
        player4H3.style.fontWeight = 100;
    }

    if (player5Result == max) {
        player5H3.style.fontWeight = 700;
    }
    else {
        player5H3.style.fontWeight = 100;
    }

    if (player6Result == max) {
        player6H3.style.fontWeight = 700;
    }
    else {
        player6H3.style.fontWeight = 100;
    }
}

function newGame() {
   
    if (confirm("Save and end this game?")) { 
        homeResult = 0;
        guestResult = 0;
        player3Result = 0;
        player4Result = 0;
        player5Result = 0;
        player6Result = 0;

        homeScore.textContent = 0;
        guestScore.textContent = 0;
        player3Score.textContent = 0;
        player4Score.textContent = 0;
        player5Score.textContent = 0;
        player6Score.textContent = 0;

        homeH3.style.fontWeight = 100;
        guestH3.style.fontWeight = 100;
        player3H3.style.fontWeight = 100;
        player4H3.style.fontWeight = 100;
        player5H3.style.fontWeight = 100;
        player6H3.style.fontWeight = 100;
    }
    else {
    }
}

function addPlayer() {

    if (getComputedStyle(player3SubContainer).display === "none") {
        let playerName = prompt("Name: ");

        player3SubContainer.style.display = "block";
        player3H3.textContent = playerName;
    }
    else if (getComputedStyle(player4SubContainer).display === "none") {
        let playerName = prompt("Name: ");

        player4SubContainer.style.display = "block";
        player4H3.textContent = playerName;
    }
    else if (getComputedStyle(player5SubContainer).display === "none") {
        let playerName = prompt("Name: ");

        player5SubContainer.style.display = "block";
        player5H3.textContent = playerName;
    } 
    else if (getComputedStyle(player6SubContainer).display === "none") {
        let playerName = prompt("Name: ");

        player6SubContainer.style.display = "block";
        player6H3.textContent = playerName;
    } 
    else {
        alert("ei enempää tilaa!");
    }
}

// timer:

function setTimer() {
    let timerSeconds = prompt("How many seconds?");
    let timerMilliseconds = timerSeconds * 1000;

    
    const timerInterval = setInterval(displayTimeLeft, 1000);

    function displayTimeLeft() {
        timeRemainingBox.style.display = "flex";
        timeRemaining.textContent = timerSeconds;
        timerSeconds -= 1;
        if (timerSeconds < 0) {
            clearInterval(timerInterval);
            timeRemaining.style.color = "#e76f51";
        }
    }
}



/* 
let countDownDate = new Date("Sep 27, 2025 00:00:00").getTime();



let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    timer.textContent = days + " days " + hours + "h " + minutes + "min " + seconds + "s";
})

console.log((1485730000 % (1000 * 60 * 60 * 24)));

console.log((1485730000 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));

console.log(Math.floor((1485730000 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
 */

