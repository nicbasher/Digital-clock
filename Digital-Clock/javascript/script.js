function clock() {
    // Array of month names
    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
    
    // Array of day names
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Current date
    var today = new Date();

    // Set the date
    document.getElementById('Date').innerHTML = dayNames[today.getDay()] + " " +
                                                today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    // Get current time
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // Determine AM or PM
    var dayPeriod = h < 12 ? 'AM' : 'PM';

    // Convert to 12-hour format
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'

    // Add leading zeros if necessary
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    // Set the time
    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('period').innerHTML = dayPeriod; // Add an element with id 'period' in your HTML for AM/PM
}

// Set the interval
var inter = setInterval(clock, 400);
