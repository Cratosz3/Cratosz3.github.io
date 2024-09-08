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
        document.getElementById("intro").style.display = "flex";
    }
}, 1000);

// Bypass Timer Function
function bypassTimer() {
    clearInterval(countdownFunction); // Stop the countdown
    document.getElementById("intro").style.display = "flex"; // Show the message
    document.getElementById("countdown").style.display = "none"; // Hide the countdown
}

// Listen for the "0" key press to bypass the timer
document.addEventListener('keydown', function(event) {
    if (event.key === '0') { // If the "0" key is pressed
        bypassTimer(); // Call the bypass function
    }
});
