const emptydiv = document.querySelector("div");

// triangle
document.getElementById("triangle").addEventListener("click", () => {
  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "* ";
    }
    string += "<br>";
  }
  emptydiv.innerHTML = string;
});

// Pyramid
document.getElementById("pyramid").addEventListener("click", () => {
  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let tar = 1; tar <= n - i; tar++) {
      string += "&nbsp";
    }
    for (let z = 0; z < 2 * i - 1; z++) {
      string += "*";
    }
    string += "<br>";
  }
  emptydiv.innerHTML = string;
});

// Reverse Pyramid
document.getElementById("reverse").addEventListener("click", () => {
  let n = 5;
  let string = "";
  for (let i = 0; i < n; i++) {
    //   tarpams
    for (let tar = 0; tar < i; tar++) {
      string += "&nbsp";
    }
    // zvaigzdems
    for (let z = 0; z < 2 * (n - i) - 1; z++) {
      string += "*";
    }
    string += "<br>";
  }
  emptydiv.innerHTML = string;
});

// clear
document.getElementById("clear").addEventListener("click", () => {
  let string = "";
  emptydiv.innerHTML = string;
});
