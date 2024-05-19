let obj = {
    name: "webbrain",
    age:23,
    child: {
        name: "eshmat",
        age: 11,
        child: {
            name: "toshmat",
            age: 33,
        },
    }, 
};
let sum = 0;
while(obj){
    sum += obj.age;
     
    obj = obj.child
}


// let nums = [1,5,5625,"hello"];

// for(let i of nums){
//     console.log(i)
// }


// const digits = [0, 5, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const index in digits) {
//   console.log(index);
// }
// let b = 'hello';
// console.log(b += ' world')