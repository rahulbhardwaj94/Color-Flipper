const hex = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

let code = document.querySelector("span");

let clickMe = document.querySelector("button");

clickMe.addEventListener("click", () => {
  var bgColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 22);
    bgColor += hex[randomNum];
  }
  code.textContent = bgColor;

  document.body.style.backgroundColor = bgColor;
});
