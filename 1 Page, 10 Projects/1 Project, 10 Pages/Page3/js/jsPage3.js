const text = "Hola a todos! Soy un texto constante que simula ser escrito";

let index = 0;

function writeText(){

    document.body.innerText = text.slice(0,index);
    index++;

    if(index == text.length)
    {
        setTimeout(function(){
            index = 0;
        },3000);
    }
}

setInterval(writeText, 100);