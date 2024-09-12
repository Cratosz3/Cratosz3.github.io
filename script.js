// Countdown Timer
const countdownDate = new Date("September 13, 2024 00:00:00").getTime();

const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // When countdown reaches zero, show the "Tap to Continue" button
    if (distance < 0) {
        clearInterval(countdownFunction);
        showTapToContinue(); // Show "Tap to Continue" button when countdown ends
    }
}, 1000);

// Show Tap to Continue Button and Replace Countdown Text
function showTapToContinue() {
    clearInterval(countdownFunction); // Stop countdown function
    document.querySelector(".countdown-container").style.display = "none"; // Hide countdown container
    document.getElementById("tap-to-continue-container").style.display = "flex"; // Show the "Tap to Continue" button
}

// Bypass Timer with "L" key (keyCode 76 for both upper and lower L)
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 76) { // 76 is the keyCode for both 'L' and 'l'
        showTapToContinue(); // Trigger bypass and show "Tap to Continue" button
    }
});

// Show Message When "Tap to Continue" Button is Pressed
function showMessage() {
    document.getElementById("tap-to-continue-container").style.display = "none"; // Hide the "Tap to Continue" button
    document.getElementById("intro").style.display = "flex"; // Show the birthday message
}

// Show Activities Page When "Continue to Activities" Button is Pressed
function showActivities() {
    document.getElementById("intro").style.display = "none"; // Hide the birthday message
    document.getElementById("activities").style.display = "block"; // Show the activities grid
}

// Navigate to individual activity pages
function goToPage(pageId) {
    document.getElementById("activities").style.display = "none"; // Hide the activities grid
    document.getElementById(pageId).style.display = "block"; // Show the selected page
}

// Go back to activities grid from individual activity pages
function goBack() {
    const pages = ["playlists", "quizzes", "quotes", "click-for-attention"];
    pages.forEach(page => document.getElementById(page).style.display = "none");
    document.getElementById("activities").style.display = "block"; // Show the activities grid again
}

// Track clicks for the "Click for Attention" feature
let clickCounter = 0;

function trackClicks() {
    clickCounter += 1;
    document.getElementById("clicks-counter").innerText = `Clicks: ${clickCounter}`;
}
