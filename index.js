const ACTIVE_COUNTER_CLASSNAME = "active";

let button = document.querySelector(".counter-plus");
let buttonReset = document.querySelector(".counter-reset");
let counterText = document.querySelector(".counter");

let counter = 0;

button.addEventListener("click", function () {
  counter = counter + 1;
  counterText.innerText = counter;
  buttonReset.classList.add(ACTIVE_COUNTER_CLASSNAME);
});

buttonReset.addEventListener("click", function () {
  counter = 0;
  counterText.innerText = counter;
  buttonReset.classList.remove(ACTIVE_COUNTER_CLASSNAME);
});
