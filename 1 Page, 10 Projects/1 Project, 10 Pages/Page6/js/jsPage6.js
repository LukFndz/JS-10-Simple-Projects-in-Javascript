const btn = document.getElementById("buttonColo");



btn.addEventListener("click", () =>{
    document.body.style.background = changeColor();
    btn.style.background = changeColor();
});

function changeColor(){
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}