let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let mobileHeader = document.getElementById("mobile-header-div");

openBtn.addEventListener("click", function() {
    mobileHeader.classList.add("active");
});

closeBtn.addEventListener("click", function() {
    mobileHeader.classList.remove("active");
});