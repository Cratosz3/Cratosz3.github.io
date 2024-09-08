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
        document.getElementById("countdown").innerHTML = "It's Time!";
        document.getElementById("intro").style.display = "flex"; // Show the message
    }
}, 1000);

// Bypass Timer with "L" key
document.addEventListener('keydown', function(event) {
    if (event.key === 'L' || event.key === 'l') {
        clearInterval(countdownFunction); // Stop the countdown
        document.getElementById("intro").style.display = "flex"; // Show the message
        document.getElementById("countdown").style.display = "none"; // Hide the countdown
    }
});

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
    window.location.href = "https://open.spotify.com/playlist/https://open.spotify.com/playlist/3toccWOCeopC8xY6c9bsf0?si=96ce9e3e01b6493f&pt=04201599881e48c281f1d66aa6d70c5e"; // Replace with your friend's playlist URL
}
