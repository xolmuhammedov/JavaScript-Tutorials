const hi = "name";
pet = {name: "Spicies" , height:40 , age: 1.5};

//console.log(pet[hi]) //Spices becasue it is equal to that name key

//console.log(pet["greetings"] = "bye") // you can add keys and values
//like this "greetings" is a key "bye" is a value
pet[true] = "In London" // this is adding this key


pet.bark = function(){
    return "WOOF!!! WOOF!!!"
}

//All KEYS get stringified they will be STRINGS

// if you try to acces a variable that doesn't exist it
// it return's undefined
///////////////////////////////////////////////////////////

const ac1 = {
    name: "Webbrain Academy",
    major: "Frontend",
};

const ac2 = {
    name: "Webbrain Academy",
    major: "Frontend",
};
const ac3 = ac1
console.log(ac1 == ac3);
console.log(ac1 === ac3);
ac1.major


ac1.name = "stcvx";
const ac4 = structuredClone(ac1);
console.log(ac4);









const account = {
    name: "Webbrain Academy",
    major: "Frontend, bunker", //agar 1ta key 2marta yasalgan bolsa ohirisi chiqadi
    name: "Webbrain academy",
    founded: 2020,
    "full name": "hELLO",
    0:25452,
}
Object.freeze(account); // bizda object CONSTda berilyapti lekn uni ichidagi
// keylarni ozgartirsak boladi objectni ozini emas Object.freeze() 
// key yoki value larni ham ozgartirishga tosqinlik qiladi muzlatadi tamom

Object.seal(account) // bu bor ma'lumotni ozgartirishga huquq beradi
// ochirib yoki qoshib bolmaydi bu berilgan dan keyin
account.founded = 5; // update qilish
delete account.major // key ni ochirib yuborish
console.log(account);







//let name = "major";
//console.log(account.name);
//console.log(account[name]);
//console.log(account["name"]);
//console.log(account.name) // bu oddiy chaqirish usului
//console.log(account["full name"]) // agar keyni orasida joy bolsa shunday chaqiriladi
//console.log(account[0]); // raqamli key larni shunday chaqiramiz
// tortburchak qovus bilan chaqirishni dynamic deyishadi

// let key = "major";
// console.log(account.key)
// console.log(account[key])



let name = "Webbrain Academy";
let major = "Frontend";

let user = {
    name, // agar value variable korinishida kelsa va
    major, // variabe key bilan bir xil bolsa ozini yozib ketsak boladi
}
console.log(user) // va bu bizga key va value daqa bir xil ishlaydi



// in keyword haqida 
// bu bizga birorta element objectni ichida bor yoki yoqligi check qiladi
console.log(`major` in user) // bu faqat boolean type


// Object.assign() haqida // bir objectni boshqasiga tayinlaydi
const target = {a:1 , b:2};
const source = {b:4 , c:5};
Object.assign(target , source)
console.log(target) // source ni targetga qoshib qoyyabdi 


for (let i in account){
    console.log(i)
} // only taking the KEYS

for (let key in account) {
    if (account.hasOwnProperty(key)) {
        console.log(account[key])
    } // only taking the VALUES
}

const fruits = {
    first:"apple",
    second:"pear",
};
console.log(fruits.first);
fruits.first = "grape";
console.log(fruits.first);
