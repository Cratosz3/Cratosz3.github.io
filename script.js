// Set the date we're counting down to
const countdownDate = new Date("September 13, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown div
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is finished, reveal the message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "It's Time!";
        document.getElementById("intro").style.display = "flex"; // Show the message
    }
}, 1000);

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
