const start_button = document.querySelector(".start-button button");
const instructions_box = document.querySelector(".instructions-box");
const escape_button = instructions_box.querySelector(".btns .escape-btn");
const continue_button = document.querySelector(".btns .again-btn");
const quiz_board = document.querySelector(".quiz-board");
const timer = quiz_board.querySelector(".countdown .countdown-secs");
const time_up = quiz_board.querySelector(".countdown .countdown-text");

const options = document.querySelector(".options");

start_button.onclick = () => {
    instructions_box.classList.add("activeInfo");
}

escape_button.onclick = () => {
    instructions_box.classList.remove("activeInfo");
}

continue_button.onclick = () => {
    instructions_box.classList.remove("activeInfo");
    quiz_board.classList.add("activeQuiz");
    showQuestion(0);
    questionCounter(1);
    startCountdown(15);
}

let question_counter = 0;
let question_number = 1;
let counter;
let timerNumber = 15;
let userScore = 0;

const next_button = quiz_board.querySelector("#next-button");
const results_page = document.querySelector(".end_page");
const restart_game = results_page.querySelector(".btns .again-btn");
const escape_game = results_page.querySelector(".btns .escape-btn");

restart_game.onclick = () => {
    quiz_board.classList.add("activeQuiz");
    results_page.classList.remove("activeResult");
    question_counter = 0;
    question_number = 1;
    let userScore = 0;
    let timerNumber = 15;
    showQuestion(question_counter);
    questionCounter(question_number);
    clearInterval(counter);
    startCountdown(timerNumber);
    time_up.textContent = "Time left";
    next_button.style.display = "none";
}

escape_game.onclick = () => {
    window.location.reload();
}

next_button.onclick = () => {
    if (question_counter < questions.length - 1) {
        question_counter++;
        question_number++;
        showQuestion(question_counter);
        questionCounter(question_number);
        clearInterval(counter);
        startCountdown(timerNumber);
        next_button.style.display = "none";
        time_up.textContent = "Time left";
    } else {
        clearInterval(counter);
        startCountdown(timerNumber);
        console.log("Questions completed");
        showResultsPage();
    }
}

function showQuestion(index) {
    const question = document.querySelector(".quiz");
    let question_label = '<span>' + questions[index].number + ". " + questions[index].question + '</span>';
    let option_label = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        option_label += '<div class="option">' + questions[index].options[i] + '<span></span></div>';
    }
    question.innerHTML = question_label;
    options.innerHTML = option_label;
    const option = options.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener("click", function () {
            optionSelected(this);
        });
    }
}

function optionSelected(answer) {
    clearInterval(counter);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[question_counter].answer;
    let everyOption = options.children.length;
    if (userAnswer.trim() == correctAnswer.trim()) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Correct Answer");
    } else {
        answer.classList.add("incorrect");
        console.log("Incorrect Answer");

        for (let i = 0; i < everyOption; i++) {
            if (options.children[i].textContent == correctAnswer) {
                options.children[i].setAttribute("class", "option correct");
            }
        }
    }

    for (let i = 0; i < everyOption; i++) {
        options.children[i].classList.add("disabled");
    }
    next_button.style.display = "block";
}

function showResultsPage() {
    instructions_box.classList.remove("activeInfo");
    quiz_board.classList.remove("activeQuiz");
    results_page.classList.add("activeResult");
    const scoreText = results_page.querySelector(".score");
    if (userScore > 3) {
        let userScoreTag = '<span>Congratulations! your final score was <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = userScoreTag;
    } else if (userScore > 1) {
        let userScoreTag = '<span>Well done, your final score was <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = userScoreTag;
    } else {
        let userScoreTag = '<span>Unfortunatley, your final score was <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = userScoreTag;
    }
}

function startCountdown(time) {
    counter = setInterval(countdown, 1000);

    function countdown() {
        timer.textContent = time;
        time--;
        if (time < 9) {
            let addTimerZero = timer.textContent;
            timer.textContent = "0" + addTimerZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timer.textContent = "00";
            time_up.textContent = "TIME UP!";

            let correctAnswer = questions[question_counter].answer;
            let everyOption = options.children.length;

            for (let i = 0; i < everyOption; i++) {
                if (options.children[i].textContent == correctAnswer) {
                    options.children[i].setAttribute("class", "option correct");
                }
            }
            for (let i = 0; i < everyOption; i++) {
                options.children[i].classList.add("disabled");
            }
            next_button.style.display = "block";
        }
    }
}

function questionCounter(index) {
    const footer_question_count = quiz_board.querySelector(".progress");
    let totalQuestionTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    footer_question_count.innerHTML = totalQuestionTag;
}