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

// Using the JS Timing API I can set an interval for this
// function to run at, async (sort of). A better version
// would be to use a "Web Worker" though that may be
// a tad overkill for a clock.
window.setInterval(updateTimeTwo, 1000);
