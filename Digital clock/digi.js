function showTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours%12}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}
setInterval(showTime, 1000);
showTime();
