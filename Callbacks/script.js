"use strict";

function first(){
    setTimeout(() => {
        console.log(1)
    }, 1000)
}
first();
function second(){
    console.log(2)
}
second();

function teach(subject , friend){
    console.log(`I want to teach ${subject}`)
    friend();
}
teach("Javascript" , function() {
    console.log("That's great");
})
