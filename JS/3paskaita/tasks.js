// 1. Create variable with array containing values 1 to 10.
// 2. Loop over that array using for loop.
console.log("-------------------------------");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= 10; i++) {
  console.log(array[i]);
}

console.log("-------------------------------");

// 1. Create variable with String value - your name.
// 2. Write while loop that iterates 5 times, each time prints your name.

let name = "Simonas";
let skaicius = 1;

while (skaicius < 6) {
  console.log(name);
  skaicius++;
}

console.log("-------------------------------");

// 1. Use do...while loop to print your name only once.

let num = 1;

do {
  console.log(name);
  num++;
} while (num == 1);

console.log("-------------------------------");

// 1. Create variable with array containing 5 Strings. One of them has to be your name
// 2. Loop over that array using forEach, but print only when value is your name.

const masyvas = ["Ingrida", "Simonas", "Greta", "Letty", "Ignas", "Simonas"];

masyvas.forEach((value) => {
  if (value == "Simonas") {
    console.log(value);
  }
});

console.log("-------------------------------");
