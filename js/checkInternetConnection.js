function checkInternetConnection() {
    return navigator.onLine;
}
function togglePages() {
    let internetPage = document.getElementById('internetPage');
    let noInternetPage = document.getElementById('noInternetPage');

    if (checkInternetConnection()) {
        internetPage.style.display = 'block';
        noInternetPage.style.display = 'none';
    } else {
        internetPage.style.display = 'none';
        noInternetPage.style.display = 'block';
    }
}

togglePages();
window.addEventListener('online', togglePages);
window.addEventListener('offline', togglePages);