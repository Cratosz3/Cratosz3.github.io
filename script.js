let clickCounter = 0;
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
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
    if (event.keyCode === 76) {
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

// Load "Click for Attention" and start a new session
function loadClickForAttention() {
    clickCounter = 0;
    document.getElementById("clicks-counter").innerText = `Clicks: ${clickCounter}`;
    document.getElementById("leaderboard").innerHTML = displayLeaderboard();
    goToPage('click-for-attention');
}

// Track clicks for "Click for Attention"
function trackClicks() {
    clickCounter += 1;
    document.getElementById("clicks-counter").innerText = `Clicks: ${clickCounter}`;
}

// Save the session and update leaderboard
function saveSession() {
    if (leaderboard.length >= maxSessions) {
        leaderboard.shift();
    }
    leaderboard.push(clickCounter);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    document.getElementById("leaderboard").innerHTML = displayLeaderboard();
}

// Display the leaderboard
function displayLeaderboard() {
    if (leaderboard.length === 0) {
        return "<p>No sessions yet!</p>";
    }
    let leaderboardHTML = `<h3>Leaderboard (Top ${maxSessions} Click Sessions)</h3><ul>`;
    leaderboard.forEach((clicks, index) => {
        leaderboardHTML += `<li>Session ${index + 1}: ${clicks} clicks</li>`;
    });
    leaderboardHTML += "</ul>";
    return leaderboardHTML;
}

// Reset click counter and leaderboard
function resetLeaderboard() {
    leaderboard = [];
    clickCounter = 0;
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    document.getElementById("clicks-counter").innerText = "Clicks: 0";
    document.getElementById("leaderboard").innerHTML = "<p>No sessions yet!</p>";
}
