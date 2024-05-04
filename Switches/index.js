//SWITCH = can be am efficent replacement to many else if statements

let day = `1`;
switch (day) {
    case 1:
        console.log("It is Monday")
        break;
    case 2:
            console.log("It is Tuesday")
            break;
    case 3:
            console.log("It is Wednesday")
            break;
        case 4:
            console.log("It is Thursday")
            break;
    case 5:
            console.log("It is Friday")
            break;
    case 6:
            console.log("It is Saturday")
            break;
    case 6:
            console.log("It is Sunday")
            break;
    default:
        console.log(`${day} is not a day`); //default stands for else If the case are not mached we see the default;
}

// !!! it is important to put break after every case but if we don't put it every case will work it won't stop






/// TEST score checker

let testScore = 40
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A"
        break;
    case testScore >= 80:
            letterGrade = "B"
            break;
    case testScore >= 70:
            letterGrade = "C"
            break;
    case testScore >= 60:
            letterGrade = "D"
            break; 
    default:
        letterGrade = "F"                     
}

console.log(letterGrade)