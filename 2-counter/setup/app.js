// let value = document.getElementById("value");
// let increase = document.querySelector(".increase");
// let decrease = document.querySelector(".decrease");
// let reset = document.querySelector(".reset");

// let count = 0;

// increase.addEventListener("click", () => {
//   count = count + 1;
//   value.style.color = "green";

//   value.textContent = count;
// });

// decrease.addEventListener("click", () => {
//   count--;
//   value.style.color = "red";

//   value.textContent = count;
// });

// reset.addEventListener("click", () => {
//   count = 0;
//   value.style.color = "black";

//   value.textContent = count;
// });

// if (count == 0) {
//   value.style.color = "black";
// }

let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count >= 1) {
      value.style.color = "green";
    }

    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});
