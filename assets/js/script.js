const start_btn = document.querySelector(".start-btn button");
const instructions_box = document.querySelector(".instructions-box");
const escape_btn = instructions_box.querySelector(".buttons .escape-btn");
const continue_btn = document.querySelector(".buttons .restart-btn");
const quiz_board = document.querySelector(".quiz-board");

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
}

let question_count = 0;
let question_number = 1;

const next_button = quiz_board.querySelector("#next-btn");

next_button.onclick = ()=>{
    if(question_count < questions.length -1){
        question_count++;
        question_number++;
        showQuestion(question_count);
        questionCounter(question_number);
    }else{
        console.log("Questions completed");
    }
}

function showQuestion(index){
    const question = document.querySelector(".quiz");
    const option_list = document.querySelector(".option_list");
    let question_tag ='<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
    let option_tag = '';
    for(let i = 0; i < questions[index].options.length; i++) {
        option_tag += '<div class="option">'+ questions[index].options[i] +'<span></span></div>';
    }
    question.innerHTML = question_tag;
    option_list.innerHTML = option_tag; // Append the options to the option_list element
    const option = option_list.querySelectorAll(".option");
    for  (let i = 0; i <  option.length; i++) {
        option[i].addEventListener("click", function() {
            optionSelected(this);
        });
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[question_count].answer;
    let correctOption = answer.querySelector("span");
    let correctOptionText = correctOption.textContent;
    if(userAnswer.trim() == correctOptionText.trim()){
        console.log("Correct Answer");
    }else{
        console.log("Incorrect Answer");
    }
}


function questionCounter(index){
    const footer_question_count = quiz_board.querySelector(".progress");
    let totalQuestionTag  = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    footer_question_count.innerHTML = totalQuestionTag;
}














/*
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });      
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>  {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

'<div class="option">'+ questions[index].options[0] +'<span></span</div>'
                 + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                 + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                 + '<div class="option">'+ questions[index].options[3] +'<span></span></div>'
    question.innerHTML = question_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
*/