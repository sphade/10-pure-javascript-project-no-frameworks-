// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
let btn = document.querySelector(".nav-toggle");
let link = document.querySelector(".links");

btn.addEventListener("click", () => {
    
//   link.classList.contains("show-links")
//     ? (link.classList.remove ("show-links"))
//     : (link.classList.add ("show-links"));
    link.classList.toggle('show-links')
});
