const buttons = document.querySelectorAll(".products button");

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const close = document.querySelector(".close");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.parentElement;

        modalImage.src = product.querySelector("img").src;
        modalTitle.textContent = product.querySelector("h3").textContent;
        modalDescription.textContent = product.querySelector("p").textContent;

        modal.style.display = "flex";
    });
});

close.addEventListener("click", () => {
    modal.style.display = "none";
});