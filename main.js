var arr = document.getElementsByTagName("pre");

for(let i = 0; i < arr.length; i++) {
    var btn = document.createElement("button");
    btn.classList.add("copy_code_fcc_btn");
    btn.appendChild(document.createTextNode("Copy"));
    arr[i].appendChild(btn)
}