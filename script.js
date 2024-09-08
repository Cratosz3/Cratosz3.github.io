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
        showMessage(); // Show the message and hide the timer when the countdown finishes
    }
}, 1000);

// Bypass Timer with "L" key (keyCode 76 for both upper and lower L)
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 76) {  // 76 is the keyCode for both 'L' and 'l'
        showMessage(); // Show the message and hide the timer when bypassed
    }
});

// Function to show the message and hide the entire countdown section
function showMessage() {
    clearInterval(countdownFunction); // Stop the countdown
    document.getElementById("intro").style.display = "flex"; // Show the message and keep it centered
    document.querySelector(".countdown-container").style.display = "none"; // Hide the entire countdown container (including the heading)
}

// Function to handle when the "Tap to Continue" button is clicked
function openMenu() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function playGame() {
    alert('Game functionality coming soon!'); // Placeholder for game function
}

function showQuiz() {
    alert('Quiz functionality coming soon!'); // Placeholder for quiz function
}

function openPlaylist() {
    window.location.href = "https://open.spotify.com/playlist/yourplaylistID"; // Replace with your friend's playlist URL
}
