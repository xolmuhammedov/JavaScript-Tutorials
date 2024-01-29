let username;

document.getElementById(`btn`).onclick = function () {
  username = document.getElementById(`inp`).value;
  document.getElementById(`text`).textContent = `Hello ${username}`;
};
