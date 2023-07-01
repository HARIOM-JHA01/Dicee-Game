// Random Number Generation for Image1

document.querySelector("button").addEventListener("click", function () {
  var number1 = Math.floor(Math.random() * 6 + 1);
  var x = "./images/dice" + number1 + ".png";
  document.querySelector(".img1").setAttribute("src", x);
  // Random Number Generation for Image2

  var number2 = Math.floor(Math.random() * 6 + 1);
  var y = "./images/dice" + number2 + ".png";
  document.querySelector(".img2").setAttribute("src", y);

  if (number1 > number2)
    document.querySelector("h1").textContent = "🚩 Player 1 won";
  else if (number1 === number2)
    document.querySelector("h1").textContent = "🚩 Draw";
  else document.querySelector("h1").textContent = "🚩 Player 2 Won";
});
