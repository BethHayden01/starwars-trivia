const start_btn = document.querySelector(".start-btn button");
const instructions_box = document.querySelector(".instructions-box");
const escape_btn = instructions_box.querySelector(".buttons .escape-btn");
const continue_btn = document.querySelector(".buttons .restart-btn");
const quiz_board = document.querySelector(".quiz-board");
const timer = quiz_board.querySelector(".countdown .countdown-secs");
const time_up = quiz_board.querySelector(".countdown .countdown-text");

const option_list = document.querySelector(".option_list");

start_btn.onclick = () => {
    instructions_box.classList.add("activeInfo");
}

escape_btn.onclick = () => {
    instructions_box.classList.remove("activeInfo");
}

continue_btn.onclick = () => {
    instructions_box.classList.remove("activeInfo");
    quiz_board.classList.add("activeQuiz");
    showQuestion(0);
    questionCounter(1);
    startCountdown(15);
}

let question_count = 0;
let question_number = 1;
let counter;
let timeValue = 15;
let userScore = 0;

const next_button = quiz_board.querySelector("#next-btn");
const results_page = document.querySelector(".results_page");
const restart_game = results_page.querySelector(".buttons .restart-btn");
const escape_game = results_page.querySelector(".buttons .escape-btn");

restart_game.onclick = () => {
    quiz_board.classList.add("activeQuiz");
    results_page.classList.remove("activeResult");
    let question_count = 0;
    let question_number = 1;
    let timeValue = 15;
    let userScore = 0;
    showQuestion(question_count);
    questionCounter(question_number);
    clearInterval(counter);
    startCountdown(timeValue);
    next_button.style.display = "none";
    time_up.textContent = "Time left";
}

escape_game.onclick = () => {
    window.location.reload();
}

next_button.onclick = () => {
    if (question_count < questions.length - 1) {
        question_count++;
        question_number++;
        showQuestion(question_count);
        questionCounter(question_number);
        clearInterval(counter);
        startCountdown(timeValue);
        next_button.style.display = "none";
        time_up.textContent = "Time left";
    } else {
        clearInterval(counter);
        startCountdown(timeValue);
        console.log("Questions completed");
        showResultsPage();
    }
}

function showQuestion(index) {
    const question = document.querySelector(".quiz");
    let question_tag = '<span>' + questions[index].number + ". " + questions[index].question + '</span>';
    let option_tag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        option_tag += '<div class="option">' + questions[index].options[i] + '<span></span></div>';
    }
    question.innerHTML = question_tag;
    option_list.innerHTML = option_tag; // Append the options to the option_list element
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener("click", function () {
            optionSelected(this);
        });
    }
}

function optionSelected(answer) {
    clearInterval(counter);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[question_count].answer;
    let allOptions = option_list.children.length;
    if (userAnswer.trim() == correctAnswer.trim()) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Correct Answer");
    } else {
        answer.classList.add("incorrect");
        console.log("Incorrect Answer");

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAnswer) {
                option_list.children[i].setAttribute("class", "option correct");
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
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
            let addZero = timer.textContent;
            timer.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timer.textContent = "00";
            time_up.textContent = "TIME UP!";

            let correctAnswer = questions[question_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAnswer) {
                    option_list.children[i].setAttribute("class", "option correct");
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
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