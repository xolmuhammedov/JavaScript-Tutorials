// click / dbclick
//contxtmenu
//mouseover / mouseup
//mousemove

const btn = document.getElementById('btn');
const rasm = document.getElementById('rasm');
const I = document.querySelector('.box i');
const box = document.querySelector('.box');
btn.addEventListener("click" , function (event) {
    console.log(event);
})
rasm.addEventListener("dblclick", function(hello) {
    rasm.style = "transform: scale(1.5);";
    console.log(hello);
})

box.onmousemove = (e) => {
    console.log(e);
    I.style = `top: ${e.offsetY}px; left: ${e.offsetX}px;`;
}