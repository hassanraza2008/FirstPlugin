// Create a <style> element to hold the CSS
const style = document.createElement("style");
style.innerHTML = `
  .copy_code_fcc_btn {
    position: relative;
    border: 1px solid black;
    border-radius: 4px;
    text-align: center;
    color: #000;
    cursor: pointer;
    background-color: #f0f0f0;
  }

  .copy_code_fcc_btn:hover {
    background-color: lightgray;
  }
`;

// Append the <style> element to the document's <head>
document.head.appendChild(style);

// Get all <pre> elements
var arr = document.getElementsByTagName("pre");

for (let i = 0; i < arr.length; i++) {
  // Create a button element
  var btn = document.createElement("button");
  btn.classList.add("copy_code_fcc_btn");
  btn.appendChild(document.createTextNode("Copy"));
  arr[i].appendChild(btn);

  // Set ARIA label for accessibility
  btn.setAttribute("aria-label", "Copy Code");

  // Position the button based on the <pre> element's dimensions
  if (
    arr[i].scrollWidth === arr[i].offsetWidth &&
    arr[i].scrollHeight === arr[i].offsetHeight
  ) {
    btn.style.left = `${arr[i].offsetWidth - 70}px`;
  } else if (
    arr[i].scrollWidth != arr[i].offsetWidth &&
    arr[i].scrollHeight === arr[i].offsetWidth
  ) {
    btn.style.left = `${arr[i].offsetWidth - 200}px`;
  } else {
    btn.style.left = `${arr[i].offsetWidth - 150}px`;
  }

  if (arr[i].scrollHeight === arr[i].offsetHeight) {
    btn.style.bottom = `${arr[i].offsetHeight - 50}px`;
  } else {
    btn.style.bottom = `${arr[i].scrollHeight - 50}px`;
  }

  console.log("Appended");
}

// Select all buttons with the class 'copy_code_fcc_btn'
var button = document.querySelectorAll(".copy_code_fcc_btn");

// Add click event listeners to all buttons
button.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    // Store the original width of the button
    const originalWidth = elm.offsetWidth;

    // Get the text content of the <pre> element
    const textToCopy = elm.parentNode.childNodes[0].innerText;

    // Copy text to clipboard
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        // Change button text to 'Copied!'
        elm.textContent = "Copied!";

        // Calculate the new width of the button
        const newWidth = elm.offsetWidth;

        // Calculate the amount to shift the button to maintain its position
        const shiftAmount = originalWidth - newWidth;

        // Apply the shift
        elm.style.transform = `translateX(${shiftAmount}px)`;

        // Change back to 'Copy' after 4 seconds
        setTimeout(() => {
          elm.textContent = "Copy";
          elm.style.transform = "translateX(0)";
        }, 4000);
      })
      .catch((err) => {
        // Handle errors
        console.error("Failed to Copy Text: ", err);
        alert("Failed to copy to Clipboard!");
      });
  });
});
