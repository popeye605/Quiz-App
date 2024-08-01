const quizData=[
    {
        question:"which Language runs in a web browser?",
        a:"java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct:"d"
    },
    {
        question:"Which of the following is the correct HTML element for inserting a line break??",
        a: "<break>",
        b: "<lb>",
        c: "<br>",
        d: "<linebreak>",
        correct: "c",
    },
    {
        question:"Which HTML attribute is used to define inline styles?",
        a:"attributes",
        b: "style",
        c: "font",
        d: "styles",
        correct:"b",
    },
    {
        question:"Which property is used to change the background color of an element?",
        a: "color",
        b: "bgcolor",
        c: "background-color",
        d: "background",
        correct: "c",
    },
    {
        question:"Which of the following is the correct syntax to create a function in JavaScript?",
        a: "function = myFunction() {}",
        b: "function myFunction() {}",
        c: "create myFunction() {}",
        d: "def myFunction() {}",
        correct: "b",
    },

];
const quiz =document.getElementById('quiz')
const answerEls=document.getElementsByName('answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()
function loadQuiz(){

    deselectAnswers()
    const currentQuizData=quizData[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d

}
function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked =  false)
}
function getSelected(){
    let answer;console.log(answerEls);
    answerEls.forEach(answerEl=>{
        console.log("Answer El:",answerEl)
        if(answerEl.checked){
            answer=answerEl.id
            console.log(answer)
            }
        })
        return answer
    }

    submitBtn.addEventListener('click',()=>{
        const answer=getSelected()
      console.log("Currrent Quiz Index:",currentQuiz)
        console.log("Current Quiz: ",quizData[currentQuiz]);
        if(answer){
            console.log("answer:",answer);
            if(answer===quizData[currentQuiz].correct){
                score++
                console.log("Score",score)
            }
            currentQuiz++
            if(currentQuiz<quizData.length){
                loadQuiz()
            } else{
                console.log("Quiz:",quiz);
                quiz.innerHTML=`
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
                `
                
            }
           
        }
       
    })



