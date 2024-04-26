let list = [
  { text: "milk", cost: 4, need: false },
  { text: "egg", cost: 10, need: false },
  { text: "butter", cost: 5, need: false },
  { text: "bread", cost: 3, need: true },
  { text: "orange", cost: 4, need: true },
];
let html = "";
let total = 0;

// for (let index = 0; index < list.length; index++) {
//   let item = list[index];

//   if (item.need) {
//     html += `<li>${item.text}</li>`;
//     total += item.cost;
//   }
// }
let index = 0;
let item = list[index];

while (item) {
  if (item.need) {
    html += `<li>${item.text}</li>`;
    total += item.cost;
  }
  item = list[index++];
}
document.getElementById("list").innerHTML = html;
document.getElementById("cost").innerHTML = `$${total}`;

