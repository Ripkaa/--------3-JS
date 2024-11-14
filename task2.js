Date.prototype.isEatTime = function() {
    const hours = this.getHours();
    const minutes = this.getMinutes();
    return (hours === 6 && minutes >= 0 && minutes < 30) ||
           (hours === 12) ||
           (hours === 19);
/*     return (hours === 6 && minutes >= 0 && minutes <= 30) ||
           (hours === 12) ||
           (hours === 13 && minutes === 0) ||
           (hours === 19) ||
           (hours === 20 && minutes === 0); */
};

function checkEatTime() {
    const inputTimeValue = document.getElementById('inputTime').value;
    if (!inputTimeValue) {
        document.getElementById('eatTimeResult').textContent = "Пожалуйста, введите время.";
        return;
    }

    const [hours, minutes] = inputTimeValue.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0); 

    const isEatTime = date.isEatTime();
    document.getElementById('eatTimeResult').textContent = isEatTime ? "Это время для еды!" : "Это не время для еды.";
}