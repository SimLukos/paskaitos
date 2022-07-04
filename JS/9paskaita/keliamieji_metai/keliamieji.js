document.addEventListener("submit", (event) => {
  event.preventDefault();
  const metai = document.getElementById("years").value;
  if (metai % 4 == 0 || (metai % 100 == 0 && metai % 400 == 0)) {
    document.getElementById("output").textContent =
      metai + " m. yra keliamieji.";
  } else {
    document.getElementById("output").textContent =
      metai + " m. yra nekeliamieji.";
  }
});
