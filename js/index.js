console.log("Your index.js file is loaded correctly!");

document.getElementById("hover-red").addEventListener("mouseover", mouseOver);
document.getElementById("hover-red").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("hover-red").style.color = "#B83224";
}

function mouseOut() {
  document.getElementById("hover-red").style.color = "black";
}
