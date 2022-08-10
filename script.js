const hoursEl = document.getElementById("days");
const minsEl = document.getElementById("hours");
const secondsEl = document.getElementById("mins");
const daysEl = document.getElementById("seconds");

const newYears = '1 Jan 2023';

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const months = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    hoursEl.innerHTML = days;
    minsEl.innerHTML = months;
    secondsEl.innerHTML = minutes;
    daysEl.innerHTML = seconds;
    
}

countDown();

setInterval(countDown, 1000);