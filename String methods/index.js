
// string metjods allows you to manipulate  and work with text (strings)

let userName = " BroCode    ";
//console.log(userName.charAt(1)) korstilgan elemnti chiqaradi
//console.log(userName.indexOf("C")) // elemntni indexiga qarab topib beradi
//console.log(userName.length) // uzunligini topib beradi

//console.log(userName.trim()) // boshidan yoki ohiridan tab larni olib beradi
//console.log(userName.toUpperCase()); console.log(userName.toLocaleLowerCase()) // elementni katta yoki kichik harfga ozgartirish
//console.log(userName.repeat(5)) // qaytarish 
//console.log(userName.startsWith(" ")); console.log(userName.endsWith()tart)// nima bilan boshlanishini tekshirish
// if (userName.startsWith(" ")) {
//     alert('true')
// }else{
//     alert('false')
// }\


let phoneNumber = "123-456-7890"

phoneNumber = phoneNumber.padStart(15 , "0")
console.log(phoneNumber)