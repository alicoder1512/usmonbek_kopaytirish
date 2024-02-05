// function monthbase(month, day) {
//   document.write(month + " oyi kunlari: ");
//   for (let i = 1; i <= day; i++) {
//     document.write(i + " ");
//   }
//   document.write('<br>')
// }

// monthbase("Yanvar",31);
// monthbase("Fevral",29);
// monthbase("Mart",31);
// monthbase("Aprel",30);
// monthbase("May",31);

// {/* < > = == === != <= >= */}

// let num1 = "Usmonbek";

// if (num1 > 75) {
//   alert("75 dan katta");
// } else if (num1 < 75) {
//   alert("75 dan kichik");
// } else if (num1 == 75) {
//   alert("75 ga teng");
// } else {
//   alert("xatolik bor!");
// }
let fname = prompt('Ismizni kiriting');
let question = +prompt(fname  + " nechta savol beray?");
let answerTrue = 0;

for (i = 1; i <= question; i++) {
  let num1 = Math.floor(1 + Math.random() * 10);
  let num2 = Math.floor(1 + Math.random() * 10);
  let answer = +prompt(`${i}-savol: ${num1} * ${num2} = ?`);

  if (num1 * num2 == answer) {
    document.write(`${i}-savol: ${num1} * ${num2} = ${answer} To'g'ri <br>`);
    answerTrue++;
  } else {
    document.write(`${i}-savol: ${num1} * ${num2} = ${answer} Xato (${num1*num2}) <br>`);
  }
}

document.write('<br> <br>');
document.write(`${fname}ning to'g'ri javoblar soni: ${answerTrue} ta va <br>`);
document.write(`Xato javoblar soni: ${question - answerTrue} ta <br>`);
