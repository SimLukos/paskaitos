document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault();
  const age = document.getElementById("age").value;

  if (age >= 18 && age <= 30 && document.getElementById("no").checked == true) {
    document.getElementById("answer").textContent = "Keliauji į kariuomenę!";
  } else if (age < 18 && document.getElementById("no").checked == true) {
    document.getElementById("answer").textContent =
      "Imk pieno. Į kariuomenę dar anksti!";
  } else if (age > 30 && document.getElementById("no").checked == true) {
    document.getElementById("answer").textContent = "Jau vėlu kariuomenei.";
  } else {
    document.getElementById("answer").textContent = "Būsi be kariuomenės.";
  }
}

document.getElementById("yes").onclick = () => {
  document.getElementById("no").checked = false;
};

document.getElementById("no").onclick = () => {
  document.getElementById("yes").checked = false;
};
