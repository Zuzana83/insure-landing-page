const toggleBtn = document.querySelector(".toggle-btn");
const openIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const pageNav = document.querySelector(".page-navigation");

toggleBtn.addEventListener("click", ()=> {
    pageNav.classList.toggle("expand");
    if(pageNav.classList.contains("expand")) {
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    }

})