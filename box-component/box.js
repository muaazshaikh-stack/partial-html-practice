document.querySelectorAll("button.btn-box").forEach((button) => {
  button.addEventListener("click", () => {
    const boxItemContainer = button.closest("div.box-item");
    boxItemContainer.querySelector(
      "div.color"
    ).style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
