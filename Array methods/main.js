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