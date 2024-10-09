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
const preElements = document.querySelectorAll("pre");

preElements.forEach((pre) => {
  // Create a button element
  const btn = document.createElement("button");
  btn.classList.add("copy_code_fcc_btn");
  btn.textContent = "Copy";

  // Set ARIA label for accessibility
  btn.setAttribute("aria-label", "Copy code from this snippet");

  // Position the button based on the <pre> element's dimensions
  btn.style.left = `${pre.offsetWidth - 70}px`;
  btn.style.bottom = `${pre.scrollHeight - 50}px`;

  pre.appendChild(btn);
  console.log("Appended");
});

// Check if the Clipboard API is supported
if (navigator.clipboard) {
  // Add click event listeners using event delegation
  document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("copy_code_fcc_btn")) {
      const btn = event.target;
      const pre = btn.parentNode;
      const textToCopy = pre.querySelector("code").innerText;

      // Store the original width of the button
      const originalWidth = btn.offsetWidth;

      // Copy text to clipboard
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Change button text to 'Copied!'
          btn.textContent = "Copied!";

          // Calculate the new width of the button
          const newWidth = btn.offsetWidth;

          // Calculate the amount to shift the button to maintain its position
          const shiftAmount = originalWidth - newWidth;

          // Apply the shift
          btn.style.transform = `translateX(${shiftAmount}px)`;

          // Change back to 'Copy' after 4 seconds
          setTimeout(() => {
            btn.textContent = "Copy";
            btn.style.transform = "translateX(0)";
          }, 4000);
        })
        .catch((err) => {
          // Handle errors
          console.error("Failed to copy text: ", err);
          alert("Failed to copy to clipboard!");
        });
    }
  });
} else {
  alert("The Clipboard feature is not supported in your browser!");
}
