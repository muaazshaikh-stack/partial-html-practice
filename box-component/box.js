// Add event listener for "Change Color" button
document.querySelectorAll("button.btn-change-color").forEach((button) => {
  button.addEventListener("click", () => {
    const boxItemContainer = button.closest("div.box-item");
    boxItemContainer.querySelector("div.color").style.backgroundColor =
      getRandomColor();
  });
});

// Add event listener for "Remove Box" button
document.querySelectorAll("button.btn-box-remove").forEach((removeButton) => {
  removeButton.addEventListener("click", () => {
    // Remove the box from document
    const boxItem = removeButton.closest("div.box-item");
    boxItem.remove();
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
