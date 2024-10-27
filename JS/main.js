let scrollsTop = document.querySelector(".scrollTop");
let navbar = document.querySelector(".navbar .container-fluid");

window.addEventListener("scroll", navScrollChanges);
function navScrollChanges() {
  if (window.scrollY > 200) {
    navbar.classList.replace("text-bg-transparent", "bg-black");
  } else {
    navbar.classList.replace("bg-black", "text-bg-transparent");
  }
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

scrollsTop.addEventListener("click", scrollTop);

const topBtn = () => {
  if (window.scrollY >= 100) {
    scrollsTop.classList.replace("d-none", "d-flex");
  } else {
    scrollsTop.classList.replace("d-flex", "d-none");
  }
};

window.addEventListener("scroll", topBtn);
