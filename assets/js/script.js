const mcqArray = [
    {
        question: "Which method is used to add an element at the end of an array?",
        options: ["shift()", "push()", "pop()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["pop()", "push()", "slice()", "splice()"],
        answer: "pop()"
    },
    {
        question: "Which method adds an element at the beginning of an array?",
        options: ["push()", "unshift()", "shift()", "concat()"],
        answer: "unshift()"
    },
    {
        question: "Which method removes the first element of an array?",
        options: ["shift()", "unshift()", "pop()", "join()"],
        answer: "shift()"
    },
    {
        question: "What is the index of the first element in a JavaScript array?",
        options: ["0", "1", "-1", "2"],
        answer: "0"
    },
    {
        question: "Which property is used to find the length of an array?",
        options: ["size()", "length()", "length", "count()"],
        answer: "length"
    },
    {
        question: "Which method is used to combine two arrays?",
        options: ["merge()", "concat()", "push()", "join()"],
        answer: "concat()"
    },
    {
        question: "Which method converts an array into a string separated by commas?",
        options: ["toString()", "split()", "join()", "Both toString() and join()"],
        answer: "Both toString() and join()"
    },
    {
        question: "Which method extracts a portion of an array without changing the original array?",
        options: ["splice()", "slice()", "shift()", "pop()"],
        answer: "slice()"
    },
    {
        question: "Which method is used to add/remove elements at a specific index?",
        options: ["slice()", "splice()", "split()", "concat()"],
        answer: "splice()"
    }
];



let currentQue = 0;

let start = document.querySelector('.start-btn');
let ready = document.querySelector('.quiz-container');
let quiz = document.querySelector('.quiz-wrapper');

let displayQues = document.querySelector('.card-header');
let displayOp = document.querySelector('.options');


let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

start.addEventListener('click', () => {
    ready.classList.add('d-none');
    quiz.classList.remove('d-none');
    showQuestion();
});

let leftSec = document.querySelector('.left-section');
mcqArray.forEach((value, index) => {
    let btn = document.createElement('button');
    btn.innerText = index + 1;
    btn.className = 'btn btn-outline-danger m-1';

    btn.addEventListener('click', () => {
        currentQue = index;
        showQuestion();
        setActive(index);
    });

    leftSec.appendChild(btn);
});

function showQuestion() {
    displayQues.textContent = mcqArray[currentQue].question;
    displayOp.innerHTML = '';

    mcqArray[currentQue].options.forEach(option => {
        displayOp.innerHTML += `
                <label>
                    <input type="radio" name="option" value=${option}> ${option}
                </label><br>
        `;
        updateActive();
        startTimer();   
    });
}

nextBtn.addEventListener('click', () => {
    if (currentQue < mcqArray.length - 1) {
        currentQue++;
        showQuestion();
        updateActive();
        startTimer();

    }
});

prevBtn.addEventListener('click', () => {
    if (currentQue > 0) {
        currentQue--;
        showQuestion();
        updateActive();
        startTimer();

    }
});

function updateActive() {
    let allBtns = document.querySelectorAll('.left-section button');
    allBtns.forEach(btn => btn.classList.remove('active'));
    allBtns[currentQue].classList.add('active');
}


let time = 60;
let timerInterval;

function startTimer() {
    let timerDisplay = document.getElementById('timer');
    clearInterval(timerInterval);
    time = 60;
    timerDisplay.innerText = time;

    timerInterval = setInterval(() => {
        time--;
        timerDisplay.innerText = time;

        if (time === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}




