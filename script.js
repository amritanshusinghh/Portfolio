// let i = 0;
// let txt = 'Amritanshu.'



// function Typing(){
//     if(i<txt.length){
//         document.getElementById("name").innerText += txt.charAt(i);
//         i++
//     }
//     setTimeout(Typing,150)
// }


// Typing()







const messages = ["Web Development.","Programming.","Learning Tech."];
let currentMessageIndex = 0;
let currentCharIndex = 0;
let isErasing = false;

const typingSpeed = 100;  // Speed of typing
const erasingSpeed = 50;  // Speed of erasing
const delayBetweenMessages = 2000;  // Delay between the messages

function typeWriter() {
    const currentMessage = messages[currentMessageIndex];
    const typewriterElement = document.getElementById('change');

    if (isErasing) {
        if (currentCharIndex > 0) {
            typewriterElement.textContent = currentMessage.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(typeWriter, erasingSpeed);
        } else {
            isErasing = false;
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
            setTimeout(typeWriter, typingSpeed);
        }
    } else {
        if (currentCharIndex < currentMessage.length) {
            typewriterElement.textContent = currentMessage.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            isErasing = true;
            setTimeout(typeWriter, delayBetweenMessages);
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, typingSpeed);
});



let JobApplication = document.querySelector("#jobApplication")
JobApplication.addEventListener("click",()=>{ 
window.open("https://job-application-status.vercel.app/")
})

let FeedbackCollection = document.querySelector("#feedbackCollection")
FeedbackCollection.addEventListener("click",()=>{ 
window.open("https://feedback-collection-tool.vercel.app/")
})

let pizza = document.querySelector("#pizza")
pizza.addEventListener("click",()=>{ 
window.open("https://pizzaa-react.netlify.app/")
 
})

let water = document.querySelector("#water")
water.addEventListener("click",()=>{ 
window.open("https://water-h20.netlify.app/");
 
})

let quiz = document.querySelector("#quiz")
quiz.addEventListener("click",()=>{ 
window.open("https://quizz-reactjs.netlify.app/");
 
})



let theme = document.getElementById("theme")

theme.addEventListener('click',()=>{
    document.body.classList.toggle('theme-dark');
 
});


