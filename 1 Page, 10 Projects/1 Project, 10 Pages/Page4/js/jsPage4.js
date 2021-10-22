const btn = document.getElementById("btn_Open");
const contain = document.getElementById("containId");
const btnClose = document.getElementById("btn_close");


btn.addEventListener("click", () =>{
    contain.classList.add("active");
});

btnClose.addEventListener("click", () =>{
    contain.classList.remove("active");
});