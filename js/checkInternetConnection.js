    function checkInternetConnection() {
    return navigator.onLine;
}

// Function to show/hide pages based on internet connection
function togglePages() {
    var internetPage = document.getElementById('internetPage');
    var noInternetPage = document.getElementById('noInternetPage');

    if (checkInternetConnection()) {
        internetPage.style.display = 'block';
        noInternetPage.style.display = 'none';
    } else {
        internetPage.style.display = 'none';
        noInternetPage.style.display = 'block';
    }
}

// Check initially and add event listener for online/offline events
togglePages();
window.addEventListener('online', togglePages);
window.addEventListener('offline', togglePages);