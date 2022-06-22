document.querySelector("#alert").addEventListener("click", () => {
  alert("Paspaudei ir gana!");
});

document.querySelector("#text").addEventListener("click", () => {
  document.querySelector("h1").setAttribute("style", "display: block;");
});
