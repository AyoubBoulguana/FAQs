const accordionBox = document.querySelectorAll(".faq-box");

accordionBox.forEach((ele) => {
  ele.firstElementChild.addEventListener("click", (x) => {
    document.querySelector(x.target.dataset.tab).classList.toggle("show");
    const plus = ele.firstElementChild.lastElementChild;
    plus.classList.toggle("hide");
    plus.previousElementSibling.classList.toggle("hide");
  });
});
