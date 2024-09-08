// Countdown Timer
const countdownDate = new Date("September 13, 2024 00:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        showTapToContinue(); // Show "Tap to Continue" when countdown ends
    }
}, 1000);

// Show Tap to Continue Button and Replace Countdown Text
function showTapToContinue() {
    clearInterval(countdownFunction);
    document.querySelector(".countdown-container").style.display = "none"; // Hide the countdown
    document.getElementById("countdown-text").innerHTML = "LILOR!"; // Replace countdown text with LILOR!
    document.getElementById("tap-to-continue-container").style.display = "flex"; // Show the tap to continue button
}

// Bypass Timer with "L" key (keyCode 76 for both upper and lower L)
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 76) {  // 76 is the keyCode for both 'L' and 'l'
        showTapToContinue(); // Show "Tap to Continue" button
    }
});

// Show Message When "Tap to Continue" Button is Pressed
function showMessage() {
    document.getElementById("tap-to-continue-container").style.display = "none"; // Hide the "Tap to Continue" button
    document.getElementById("intro").style.display = "flex"; // Show the message
    document.getElementById("load-activities").style.display = "block"; // Show the button to load activities
}

// Show Activities When the "Continue to Activities" Button is Pressed
function showActivities() {
    document.getElementById("intro").style.display = "none"; // Hide the message
    document.getElementById("activities").style.display = "block"; // Show the activities
}
