import { Questions } from './questionsDb.js';

var questionNo
var difficultyLevel
var timerReq 
var sortedQues = {}
const timer = document.querySelectorAll('.timer');
const difficulty = document.querySelectorAll('.difficulty')
const main = document.querySelector('.main');
const inputBtn = document.querySelector('.input_btn');
const submitBtn = document.querySelector('.submit_btn');
// const resetBtn = document.querySelector('.reset_btn')


const sortQuestion = () => {
    var i = 0;
    Questions.forEach(
        (ques) => {
            if(ques.difficulty == difficultyLevel){
                sortedQues[i] = ques
                i++;
            }
        }
    )
}

const inputValue = () => {
    timerReq = getTimer();
    difficultyLevel = getDifficulty();
    console.log(difficultyLevel)
    console.log(timerReq)
    questionNo = document.querySelector('#NoQ').value;
    if(questionNo == 0){
        // console.log(questionNo)
        return errorQuiz();
    }
    else{
        main.classList.remove("hidden")
        // console.log(questionNo)
        sortQuestion(difficulty);
        scrollToNext('box')
        loadQues();
    }
}

const scrollToNext = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

const getTimer = () => {
    let timerResult;
    timer.forEach(
        (input) => {
            if(input.checked){
                timerResult = input.value;
            }
        }
    )
    return timerResult;
}

const getDifficulty = () =>{
    let difficultyResult;
    difficulty.forEach(
        (input) => {
            if(input.checked){
                difficultyResult = input.value;
            }
        }
    )
    return difficultyResult;
}

let index = 0;
let right = 0, wrong = 0;

const question = document.querySelector('.question')
const option = document.querySelectorAll('.option')


const loadQues = () => {

    if(index == questionNo){
        return endQuiz();
    }
    
    reset();
    const data = sortedQues[index];
    question.innerText = `${index+1}) ${data.question}`;
    option[0].nextElementSibling.innerText = data.a
    option[1].nextElementSibling.innerText = data.b
    option[2].nextElementSibling.innerText = data.c
    option[3].nextElementSibling.innerText = data.d
}

const submitQuiz = () => {
    const data = sortedQues[index]
    const ans = getAnswer()
    if(ans == data.answer){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQues();
    return;
}

const getAnswer = () => {
    let result;
    option.forEach(
        (input) => {
            if(input.checked){
                result = input.value;
            }
        }
    )
    return result;
}

const reset = () => {
    option.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const errorQuiz = () => {
    alert("Please select an total no. of question");
}

const endQuiz = () =>{
    document.querySelector('#box').innerHTML = `Your score = ${right} / ${questionNo} <br>
    Quiz will be reset after 10 seconds`
    setTimeout(() => {
        location.reload();
    }, 10000);
}




inputBtn.addEventListener("click", inputValue);
submitBtn.addEventListener("click", submitQuiz);





    