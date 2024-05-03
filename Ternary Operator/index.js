// ternary operator  = a shortcut to if() and else{} statements
// helps to assign a variable based on a condition
// condition ? codeIfTrue : codeIffalse

let age = 21;
let message = age >= 19 ? "You are an adult" : "You're a minor";
console.log(message)
// this is an alternative code like this ^^^^^^^^^

let agee = 21;
let messagee;
if(age >= 18){
    messagee = "You're an adult"
}
else{
    message = "You're a minor"
}

let time = 16;
let greeting = time < 12 ? "Godd morning!" : "Good afternoon";
console.log(greeting);


let isStudent = false;
let messageee = isStudent ? "You are a student" : "You are NOT a student";
console.log(messageee);



let purchaseAmount = 164;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);



