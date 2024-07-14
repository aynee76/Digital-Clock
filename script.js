let clock = document.getElementById("clock")

setInterval(() => {
    let date = new Date();
    let dateString = date.toLocaleDateString();
    let timeString = date.toLocaleTimeString();
    clock.innerHTML = `${timeString} ${dateString}`;

}, 1000);
