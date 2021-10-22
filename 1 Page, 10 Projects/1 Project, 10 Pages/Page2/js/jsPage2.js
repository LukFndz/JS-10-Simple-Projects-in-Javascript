const btn = document.getElementById("buttonNotif");
const container = document.getElementById("container")

btn.addEventListener("click", () =>{
    createNotif();
});

function createNotif(){
    const notif = document.createElement("div");
    notif.classList.add("notification");
    
    notif.innerText = "Hi, im a notification!";

    container.appendChild(notif);

    setTimeout(() => {
       notif.remove()
    }, 3000);
    
}