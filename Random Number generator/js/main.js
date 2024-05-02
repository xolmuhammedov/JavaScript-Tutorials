const MyButton = document.getElementById("MyButton");
const MyLabel = document.getElementById("MyLabel");
const min = 1;
const max = 100; //maksimal raqamni hohlagan raqamga o'zgratrishi mumkun!!!
let randomNum;

MyButton.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  MyLabel.textContent = randomNum;
};


//i am trying to understand all of these codes man