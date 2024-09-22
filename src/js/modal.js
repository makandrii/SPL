"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let modal = document.querySelector('[data-id="modal"]');
    if (modal) {
        document.querySelectorAll(".read_bt").forEach(button => {
            button.addEventListener("click", () => {
                modal.classList.toggle("hidden");
            });
        });
        let button = document.querySelector('[data-id="modal-btn"]');
        if (button) {
            button.addEventListener("click", () => {
                modal.classList.toggle("hidden");
            });
        }
    }
});
