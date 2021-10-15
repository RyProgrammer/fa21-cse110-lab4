function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.clear();
    console.log(time);
}

setInterval(printTime, 1000);