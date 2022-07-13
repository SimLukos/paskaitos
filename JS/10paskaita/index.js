let num1 = 3.11;
let num2 = 1992;

let str1 = "Atrakcijonas";
let str2 = "Lenkijoje";

// console.log(num1.toFixed(1));
// console.log(num1.toString());
const index = 3;

const what = () => {
  return num1
    .toFixed(5)
    .replace(".", ",")
    .substring(0, index + 1);
};

const toWhat = () => {
  return num1.toFixed(5).replace(".", ",").substring(0, index).concat("9");
};

let result = num1.toFixed(5).replace(".", ",").replace(what(), toWhat());

console.log(typeof result);

console.log(result);
