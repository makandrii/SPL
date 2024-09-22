document.addEventListener("DOMContentLoaded", () => {
    let modal: Element | null = document.querySelector('[data-id="modal"]');
    if (modal) {
        document.querySelectorAll(".read_bt").forEach(button => {
            button.addEventListener("click", () => {
                modal.classList.toggle("hidden");
            })
        })

        let button: Element | null = document.querySelector('[data-id="modal-btn"]');
        if (button) {
            button.addEventListener("click", () => {
                modal.classList.toggle("hidden");
            })
        }
    }
})