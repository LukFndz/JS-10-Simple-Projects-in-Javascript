const div = document.getElementById("container");
const img = document.querySelector("img");


div.addEventListener("mousemove",(e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
});


div.addEventListener("mouseleave",() => {

    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});