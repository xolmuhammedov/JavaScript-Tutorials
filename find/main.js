let text = document.querySelectorAll("li")
const dataDB = ["Hello" , "Hi"];
let ask = prompt("Type word");
//let dataFind = dataDB.find(string => string === ask)
if (dataDB.includes(ask)) {
    dataDB.map((item => {
        item.textContext = text;
    }))
}else{
    alert("NO")
}