let btn = document.querySelector(".form-check-input");
let body = document.querySelector("body");
let cols = document.querySelectorAll(".col-md-3");
let text = document.querySelector(".form-check-label");
let h6 = document.querySelector("h6");

btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  cols.forEach((col) => {
    col.classList.toggle("dark-mode-col");
  });
  h6.classList.toggle("dark-mode-h");
  if (text.innerHTML === "Light Mode") {
    text.innerHTML = "Dark Mode";
  } else {
    text.innerHTML = "Light Mode";
  }
});

function checkbox() {}
