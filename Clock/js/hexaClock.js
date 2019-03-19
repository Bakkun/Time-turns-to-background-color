let clock = document.getElementById('clock');
let color = document.getElementById('color');

function hexaClock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let clockString = hours + ":" + minutes + ":" + seconds;
    let colorString = "#" + hours + minutes + seconds;

    clock.innerHTML = clockString;
    color.innerHTML = colorString;

    document.body.style.background = colorString;
}

hexaClock();
setInterval(hexaClock, 1000);