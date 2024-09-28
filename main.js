var arr = document.getElementsByTagName("pre");

for (let i = 0; i < arr.length; i++) {
  var btn = document.createElement("button");
  btn.classList.add("copy_code_fcc_btn");
  btn.appendChild(document.createTextNode("Copy"));
  arr[i].appendChild(btn);

  //Style
  btn.style.position = 'relative';
  btn.style.border = '1px solid black';
  btn.style.borderRadius = '2px';
  btn.style.textAlign = 'center';
  btn.style.color = '#000';
  btn.style.cursor = 'pointer';

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

  //end of styling the button
  console.log("Appended");
}

var button = document.querySelectorAll(".copy_code_fcc_btn");
  button.forEach((elm) => {
    elm.addEventListener('click', (e) => {

        const originalWidth = elm.offsetWidth;

        navigator.clipboard.writeText(elm.parentNode.childNodes[0].innerText).then(() => {
            elm.textContent = "Copied!";

            const newWidth = elm.offsetWidth;

            const shiftAmount = originalWidth - newWidth;

            elm.style.transform = `translateX(${shiftAmount}px)`

            setTimeout(() => {
              elm.textContent = "Copy";
              elm.style.transform = "translateX(0)";
            }, 4000); // Change back to "Copy" after 2 seconds
          });
    })
  })