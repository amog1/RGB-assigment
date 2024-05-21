// RGB Colors

// Variables to store HTML elements
// let previewBtnEl = document.getElementById("previewBtn");
let redInEl = document.getElementById("num1");
let greenInEl = document.getElementById("num2");
let blueInEl = document.getElementById("num3");
let display = document.getElementById("display");
let text = document.getElementById("colour");

// Event listner
// change
redInEl.addEventListener("change", rgb);
greenInEl.addEventListener("change", rgb);
blueInEl.addEventListener("change", rgb);

// input
// redInEl.addEventListener("input", rgb);
// greenInEl.addEventListener("input", rgb);
// blueInEl.addEventListener("input", rgb);

// function
function rgb() {
  // input
  let n1 = +redInEl.value;
  let n2 = +greenInEl.value;
  let n3 = +blueInEl.value;

  // VAlidate colours (Costrain colours between 0 - 255)

  // red value
  if (n1 < 0) {
    n1 = 0;
    redInEl.value = 0;
  } else if (n1 > 255) {
    n1 = 255;
    redInEl.value = 255;
  }
  // green value
  if (n2 < 0) {
    n2 = 0;
    greenInEl.value = 0;
  } else if (n2 > 255) {
    n2 = 255;
    greenInEl.value = 255;
  }

  // blue value
  if (n3 < 0) {
    n3 = 0;
    blueInEl.value = 0;
  } else if (n3 > 255) {
    n3 = 255;
    blueInEl.value = 255;
  }

  // process
  let myColor = `rgb(${n1}, ${n2}, ${n3})`;

  // output
  display.style.background = myColor;
  text.innerHTML = myColor;
}

document.getElementById("black").addEventListener("click", bl);

// function

function bl() {
  display.style.backgroundColor = "black";
  text.innerHTML = `rgb(0,0,0)`;
}

document.getElementById("white").addEventListener("click", wh);

function wh() {
  display.style.backgroundColor = "white";
  text.innerHTML = `rgb(255,255,255)`;
}

// the second part
// html elements
let width1 = document.getElementById("weight");
let height1 = document.getElementById("height");

// event listner
width1.addEventListener("change", changeSize);
height1.addEventListener("change", changeSize);

// event function

function changeSize() {
  // input
  let width= +width1.value;
  let height = +height1.value;
  if (width < 50) {
    width = 50;
    width.value = 50
  } else if (width > 400) {
    width = 400;
    width.value = 400
  }

  if (height < 50) {
    height = 50;
    height.value = 50
  } else if (height > 200) {
    height = 200;
    height.value = 200
  }

 
  // output
  display.style.width = width + "px";
  display.style.height = height + "px";
}
