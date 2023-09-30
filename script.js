const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];


let index = 0;
let data = quizData[index];
let right = 0;
let wrong = 0;
let queBox = document.getElementById("queBox");
let opctions = document.querySelectorAll(".opctons");
function loadQuest(){
    data = quizData[index];
    if(index === quizData.length){
        
        return endGame();
    
    }else{
        queBox.innerText = `${index+1}: ${data.question}`;
        opctions[0].nextElementSibling.innerText = data.a;
        opctions[1].nextElementSibling.innerText = data.b;
        opctions[2].nextElementSibling.innerText = data.c;
        opctions[3].nextElementSibling.innerText = data.d;
    }
    

}


let submit = document.querySelector(".btn");
submit.addEventListener("click" , ()=>{

    let userAns = getAns();
    if(userAns === data.correct){
      right++;
    }else{
        wrong++;
    }
    index++;
    loadQuest();
    reset();
});

function getAns(){
    let ans;
    opctions.forEach((inp)=>{
     if(inp.checked){
      ans = inp.value;
     }
    })
    return ans;
}

function reset(){
    opctions.forEach((inp)=>{
        inp.checked = false;
    });
};

function endGame(){
    document.getElementById("box").innerHTML = `<h2>THANK YOU FOR PLAYING THE GAME</h2> <hr> <h3>right Ans: ${right},  Wrong Ans: ${wrong} </h3>`
}
loadQuest();