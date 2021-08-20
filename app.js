const ham= document.getElementById('hamberger');
const navList = document.getElementById("nav-list");
const btns = document.getElementById("left");

ham.addEventListener("click", () =>{
    navList.classList.toggle("show");
    btns.classList.toggle("show");
    console.log("click");
})