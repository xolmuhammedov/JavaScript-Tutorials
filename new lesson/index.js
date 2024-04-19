/* spread operator orqali biz elementlarni
   huddi k=bir qutidan olishga oxshatishimiz
   mumkun
   Bir nechta array larni bir-biriga
   qoshish imkoniga ham egamiz
*/

let raqamlar = [1, 2, 3, 4, 5];
//let maximum = Math.max(raqamlar); // agar biz shu holatda katta raqamni chiqarmoqchi bo'lsak NaN qaytadi
let maximum = Math.max(...raqamlar); // ushubu holatda spread operatordan foydalandim va elementlarni qutidan oldmi desa ham boladi
console.log(maximum);

let mevalar = [`Olma`, `Nok`, `Anor`, `Behi`, `Shaftoli`];
let sabzavotlar = [`Bodring`, `Piyoz`, `Karam`, `Baqilajon`];
let yangiArray = [...mevalar, ...sabzavotlar, "Qalampir", "Kartoshka"];
//ushbu holatda 2ta arrayni birlashtirish va element qo'shish mumkun
console.log(yangiArray);
