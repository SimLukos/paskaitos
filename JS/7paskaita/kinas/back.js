const discount = 6 / 3;

const h1 = document.querySelector("h1");

document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault();
  const amzius = document.querySelector("input[name=age]").value;

  if (amzius < 16) {
    h1.textContent = "Kaina: " + 6 / 2 + " eur.";
  } else if (amzius > 60) {
    h1.textContent = "Kaina: " + (6 - discount) + " eur.";
  } else {
    h1.textContent = "Kaina: " + 6 + " eur.";
  }
}
