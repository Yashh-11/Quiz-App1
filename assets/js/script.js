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

let leftSec = document.querySelector('.left-section');
mcqArray.forEach((value, index) => {
    let queBtn = document.createElement('button');
    queBtn.innerHTML = index + 1
    queBtn.classList.add('btn', 'btn-outline-danger', 'm-2', 'py-2', 'px-3')
    leftSec.appendChild(queBtn);
})

let questionBtn = document.querySelectorAll('.left-section button');
let displayQus = document.querySelector('.card-header')
let displayOps = document.querySelector('ul')

questionBtn.forEach((button) => {
    button.addEventListener('click', function(e) {
        displayOps.textContent = '';
        let value = e.target.innerHTML;
        // console.log(value);
        displayQus.textContent = mcqArray[value - 1].question
        // console.log(displayQus);
        // console.log();
        
        // options 
        mcqArray[value - 1].options.forEach((option)=>{
            let li = document.createElement('li');
            li.innerHTML = 
            `
            <input type="radio" name="option" value="${option}"/>
            <label>${option}<label/>
            `
            // radio.style.cursor = "pointer";
            displayOps.appendChild(li);
        })
    })
})

let start = document.querySelector('.start-btn');
let ready=document.querySelector('.quiz-container');

start.addEventListener('click',function(e){
    ready.classList.add('d-none');
})
