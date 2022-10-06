//about page styling 
//try to fade line by line next (9/28)
const text = document.querySelector(".box")


const strText = text.textContent;


text.textContent = "";

for(let i=0; i < strText.length; i++){
    text.innerHTML +=   "<span>"+  strText[i]  + "</span>" ;
}

let char = 10;
let timer = setInterval(onTick, 50);
//timer set to 50
//each character fades into the next
function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade')
    char++
    if(char === strText.length){
        complete();
        return;
    }
}
//once character function is complete and each character is printed the timer
//the rest of the alotted time is cancelled
function complete(){
    clearInterval(timer)
    timer = null;
}