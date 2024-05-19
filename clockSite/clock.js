// Get browser time in mil format
function getTimeString () {
    const d = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const timeString = `${hour}:${min}:${sec}`
    return timeString;
}

// Update rt-clock time
function updateTime () {
    const timeS = getTimeString();
    document.getElementById("rt-clock").innerHTML = timeS;
}

// Update rt-clock time
function updateTimeTwo () {
    const timeS = getTimeString();
    document.getElementById("rt-clock-two").innerHTML = timeS;
}

// In order to update an HTML element, the script
// must be run either after it loads (check HTML)
// or specificed via an window.onload (not done here)
updateTime();
updateTimeTwo();
