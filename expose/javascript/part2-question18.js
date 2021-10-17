function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    // console.clear(); // -> Added this line just to make the console work more like a ticking clock
    console.log(time);
}

setInterval(printTime, 1000);