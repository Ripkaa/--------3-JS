function navigateToUrl() {
    const url = document.getElementById('urlInput').value;
    if (url) {
        window.location.href = url.startsWith('http') ? url : `http://${url}`;
    } else {
        alert("Пожалуйста, введите URL.");
    }
}

function copyUrl() {
    const url = "https://docs.google.com/spreadsheets/d/1TMUNZbJJ0fMHAX6T8bamlS7UmZD-y_50eR3hOzb7Otw/edit?gid=0#gid=0";
    navigator.clipboard.writeText(url)
        .then(() => alert("URL скопирован в буфер обмена"))
        .catch(err => console.error("Ошибка копирования:", err));
}