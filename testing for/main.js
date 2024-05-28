console.time('loopDuration');

for (let i = 0; i < 10000; i++) {
    console.log(i);
}
// function newFunc(params) {
//     let fruit = params;
//     return fruit
// }
// console.log(newFunc("apple"));

console.timeEnd('loopDuration');
