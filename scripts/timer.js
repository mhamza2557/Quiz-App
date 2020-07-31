var timer = 0
var seconds = 0
var minutes = 0

let quiz_timer = setInterval(function() {
    if (seconds < 59) {
        seconds++
    } else {
        minutes++
        seconds = 0
    }

    format_seconds = 0
    if (seconds < 10) {
        format_seconds = '0' + seconds
    } else {
        format_seconds += seconds
    }

    format_minutes = 0
    if (minutes < 10) {
        format_minutes = '0' + minutes
    } else {
        format_minutes += minutes
    }
    document.querySelector('.time').innerHTML = `${format_minutes}:${format_seconds}`
}, 1000)