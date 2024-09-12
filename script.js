let clickCounter = 0;
let leaderboard = [];
const maxSessions = 10;

// Countdown Timer
const countdownDate = new Date("September 13, 2024 00:00:00").getTime();

const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        showTapToContinue();
    }
}, 1000);

// Show "Tap to Continue" button when countdown ends
function showTapToContinue() {
    document.querySelector(".countdown-container").style.display = "none";
    document.getElementById("tap-to-continue-container").style.display = "flex";
}

// Bypass countdown with "L" key
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 76) { // 76 is the keyCode for 'L'
        showTapToContinue();
    }
});

// Show birthday message
function showMessage() {
    document.getElementById("tap-to-continue-container").style.display = "none";
    document.getElementById("intro").style.display = "flex";
}

// Show activities page
function showActivities() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("activities").style.display = "block";
}

// Navigate to individual activity pages
function goToPage(pageId) {
    document.getElementById("activities").style.display = "none";
    document.getElementById(pageId).style.display = "block";
}

// Go back to activities grid
function goBack() {
    const pages = ["playlists", "quizzes", "quotes", "click-for-attention"];
    pages.forEach(page => document.getElementById(page).style.display = "none");
    document.getElementById("activities").style.display = "block";
}

// Track clicks for the "Click for Attention" section and manage leaderboard
function trackClicks() {
    clickCounter += 1;
    document.getElementById("clicks-counter").innerText = `Clicks: ${clickCounter}`;
    updateLeaderboard();
}

// Update leaderboard functionality
function updateLeaderboard() {
    if (leaderboard.length >= maxSessions) {
        leaderboard.shift(); // Remove the oldest session after reaching max sessions
    }
    leaderboard.push(clickCounter);

    let leaderboardHTML = `<h3>Leaderboard (Top ${maxSessions} Click Sessions)</h3>`;
    leaderboardHTML += "<ul>";
    leaderboard.forEach((clicks, index) => {
        leaderboardHTML += `<li>Session ${index + 1}: ${clicks} clicks</li>`;
    });
    leaderboardHTML += "</ul>";

    document.getElementById("leaderboard").innerHTML = leaderboardHTML;
}

// Reset click counter and leaderboard after 10 sessions
function resetLeaderboard() {
    leaderboard = [];
    clickCounter = 0;
    document.getElementById("clicks-counter").innerText = "Clicks: 0";
    document.getElementById("leaderboard").innerHTML = "<p>No sessions yet!</p>";
}
