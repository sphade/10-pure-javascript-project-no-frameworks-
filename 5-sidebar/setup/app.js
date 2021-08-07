let sideBar = document.querySelector(".sidebar");
let btn = document.querySelector(".sidebar-toggle");
let closeBtn = document.querySelector('.close-btn')

btn.addEventListener("click", () => {
  // sideBar.classList.toggle('show-sidebar')
  sideBar.classList.contains("show-sidebar")
    ? sideBar.classList.remove("show-sidebar")
    : sideBar.classList.add("show-sidebar");
});



closeBtn.addEventListener("click", () => {
  sideBar.classList.remove('show-sidebar')
  });
  