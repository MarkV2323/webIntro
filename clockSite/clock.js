// Get browser time in mil format
function getTimeString () {
    const d = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const timeString = `${hour}:${min}:${sec}`
    return timeString;
}

const timeS = getTimeString();
console.log(timeS);
