let username = sessionStorage.getItem('username')
let point = sessionStorage.getItem('points')
let time = sessionStorage.getItem('time')
let totalPoint = sessionStorage.getItem('totalPoints')


document.querySelector('.name').innerHTML = username
document.querySelector('.points').innerHTML = point + ' / ' + totalPoint
document.querySelector('.time').innerHTML = time