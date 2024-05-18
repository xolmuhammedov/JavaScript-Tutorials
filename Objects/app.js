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