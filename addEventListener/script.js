const cube = document.querySelector(".block1");
const cube2 = document.querySelector(".block2");
const cube3 = document.querySelector(".block3");

// cube.onclick = function changeCube() {
//     cube.style.backgroundColor = "blue";
// }
// changeCube();

cube.addEventListener('click' , () => {
    cube.classList.add(cube2);
})
