var boxCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  // Load and append the initial box when the "Add Box" button is clicked
  document
    .getElementById("load-box-btn")
    .addEventListener("click", createNewBox);
});

// Function to load and add new box element
function createNewBox() {
  const boxContainer = document.getElementById("box-container");

  // Fetch from url
  fetch("box-component/box.html")
    .then((response) => response.text())
    .then((htmlData) => {
      boxCount++;

      // Create DOM element for box html
      const domParser = new DOMParser();
      const htmlDocument = domParser.parseFromString(htmlData, "text/html");

      const label = htmlDocument.querySelector("div.color label");
      label.textContent = boxCount;

      // Add box DOM element in main body
      boxContainer.appendChild(htmlDocument.body.firstChild);

      // Add partail HTML data of box.html in main HTML page
      // boxContainer.innerHTML = htmlData;

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "box-component/box.js";

      document.body.appendChild(script);
    })
    .catch((error) => {
      console.error("Error loading the box:", error);
    });
}
