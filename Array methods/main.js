// CONCAT = immutable
const array1 = [1, 4];
const array2 = [2, "A", 3, 7];
const result = array1.concat(array2);
//console.log(result);


// FIND = immutable
const findValue = (string) => string === "A";
const foundValue = result.find(findValue);
console.log(foundValue)


// FILTER = immuatble
const filterValues = number => number > 5;
const filteredValues = result.filter(filterValues);
console.log(filteredValues)


//forEach
let arr = [1,2,3,4,5];
arr.forEach(function(item, index, array){
    console.log(`item: ${item}, index: ${index}, array: ${array}`)
// item bu forEach to'xtgan element;
// index o'sha ma'lumotning indeksi;
// array bu forEach ishlayatgan arrayni ozi 
})

let text = ["Lorem" , "ipsum", "dolor" , "eheksegdsdzxgxzdg"]
const textL = text.map(item => item.length);
console.log(textL)
let something = new String("Hello");
console.log(typeof something) //object







// let arr2 = [1,2,3,4,5]
// const functMap = arr2.map(param => param)
// console.log(functMap)


// const arr = [1,6,8,8,9,8,4,6040,4,15,15];
// const uniqueNumbers = new Set(arr);
// uniqueNumbers.delete(6040)
// console.log(uniqueNumbers)
// console.log(typeof uniqueNumbers) // object

// if (uniqueNumbers instanceof Set) {
//     console.log(true)
// }else{
//     console.log(false)
// }
