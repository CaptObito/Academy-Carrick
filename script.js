
function goToLayer(layerId) {
    document.getElementById(layerId).scrollIntoView({ behavior: 'smooth' });
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
