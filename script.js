let clickCounter = 0;

function showMessage() {
    document.getElementById('tap-to-continue-container').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
}

function showActivities() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('activities').style.display = 'block';
}

function goToPage(pageId) {
    document.getElementById('activities').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
}

function goBack() {
    const pages = ['playlists', 'quizzes', 'quotes', 'click-for-attention'];
    pages.forEach(page => document.getElementById(page).style.display = 'none');
    document.getElementById('activities').style.display = 'block';
}

function trackClicks() {
    clickCounter += 1;
    document.getElementById('clicks-counter').innerText = `Clicks: ${clickCounter}`;
}
