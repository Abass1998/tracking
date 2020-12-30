const hamburger  = document.getElementById("hamburger");
const navLinks  = document.getElementById("nav-ul");
hamburger.addEventListener( "click", () =>{
    navLinks.classList.toggle("show");
});
