document.addEventListener("submit", myfunction);

function myfunction(event) {
  event.preventDefault();
  const metai = document.getElementById("metai").value;
  if (metai < 20 && metai >= 10) {
    document.getElementById("output-bonus").textContent =
      "Jusu bonusas: " + 100 + " eur.";
  } else if (metai >= 20) {
    document.getElementById("output-bonus").textContent =
      "Jusu bonusas: " + 200 + " eur.";
  } else {
    document.getElementById("output-bonus").textContent =
      "Jusu bonusas: " + 50 + " eur.";
  }
}
