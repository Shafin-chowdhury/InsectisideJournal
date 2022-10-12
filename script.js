const nav2 = document.querySelector(".nav2");
window.addEventListener ("scroll", function() {
   

    nav2.classList.toggle ("sticky", window.scrollY > 0);
})