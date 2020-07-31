window.onload = function() {
    showQuestion(0)
}

function submitForm(e) {
    e.preventDefault()
    let username = document.forms['welcome_form']['username'].value
    sessionStorage.setItem('username', username);
    location.href = 'quiz.html'
}

var question_count = 0
var points = 0
var eachPoint = 10


function nextQuestion() {
    let user_answer = document.querySelector('li.option.active').innerHTML

    var totalPoints = questions.length * eachPoint
    sessionStorage.setItem('totalPoints', totalPoints)

    if (user_answer == questions[question_count].answer) {
        points += 10
        sessionStorage.setItem('points', points)

    }

    if (question_count === questions.length - 1) {
        sessionStorage.setItem('time', `${minutes} minutes and ${seconds} seconds`)
        clearInterval(quiz_timer)
        location.href = 'final.html'
        return
    }

    question_count++
    showQuestion(question_count)
}

function showQuestion(count) {
    let question = document.getElementById('questions')
    question.innerHTML = `
                    <h2>Q${question_count+1}. ${questions[count].question}</h2>
                    <ul class="option_group">
                        <li class="option">${questions[count].options[0]}</li>
                        <li class="option">${questions[count].options[1]}</li>
                        <li class="option">${questions[count].options[2]}</li>
                        <li class="option">${questions[count].options[3]}</li>
                    </ul>`

    toggleActive()

}

function toggleActive() {
    let options = document.querySelectorAll('li.option')
    for (let i = 0; i < options.length; i++) {
        options[i].onclick = function() {
            for (let j = 0; j < options.length; j++) {
                if (options[j].classList.contains('active')) {
                    options[j].classList.remove('active')
                }
            }

            options[i].classList.add('active')
        }
    }
}