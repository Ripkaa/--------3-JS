function capitalizeLastLetter(str) {
    return str
        .split(' ')
        .map(word => word.slice(0, -1) + word.slice(-1).toUpperCase())
        .join(' ');
}

function transformText() {
    const inputText = document.getElementById('inputText').value;
    const resultText = capitalizeLastLetter(inputText);
    document.getElementById('resultText').textContent = resultText;
}