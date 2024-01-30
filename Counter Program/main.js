const label = document.getElementById(`label`);
const increaseBtn = document.getElementById(`inc`);
const decreaseBtn = document.getElementById(`dec`);
const resetBtn = document.getElementById(`res`);

let count = 0;
increaseBtn.onclick = function () {
  count++;
  label.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  label.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  label.textContent = count;
};
