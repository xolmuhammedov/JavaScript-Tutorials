class Triangle {
    getArea(){
        return (this.a * this.b) / 2;
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 +
        this.b **2)
    }
}

const gpa = (a = 0 , b = 0 , c = 0 , d = 0 ) => {
    let res = (a + b + c + d) / 4;
    return console.log(res);
}
console.log(gpa(3.5 , 4 , 4 , 3.5));