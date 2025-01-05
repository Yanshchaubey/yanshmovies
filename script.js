// Show main content after loading screen
function showMainContent() {
    document.getElementById('popup').style.visibility = 'hidden';
    document.getElementById('popup').style.opacity = '0';
    document.getElementById('mainContent').style.display = 'block';
}

// Function to hide the loading screen
window.onload = function () {
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('popup').style.visibility = 'visible';
        document.getElementById('popup').style.opacity = '1';
    }, 3000); // Loading screen visible for 3 seconds
};

// Function to open Pushpa 2 interface
function openPushpa2() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('pushpa2Interface').style.display = 'block';
}

// Function to go back to the main content
function goBack() {
    document.getElementById('pushpa2Interface').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
}

// Function to open the link for image 2
function openLink() {
    window.location.href = "https://drive.google.com/file/d/1SfRZp6PvhTV7y4579c1lw455R0U3Ao33/view?usp=sharing";
}
