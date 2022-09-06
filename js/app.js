

const text = document.querySelector(".box")


const strText = text.textContent;


text.textContent = "";

for(let i=0; i < strText.length; i++){
    text.innerHTML +=   "<span>"+  strText[i]  + "</span>" ;
}

let char = 0;
let timer = setInterval(onTick, 40);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade')
    char++
    if(char === strText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer)
    timer = null;
}

