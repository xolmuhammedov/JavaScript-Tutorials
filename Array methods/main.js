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















const arr = [1,6,8,9,8,4,6040,4,15,15]
let arr2 = [1,2,3,4,5]
const functMap = arr2.map(param => param + 2)
console.log(functMap)