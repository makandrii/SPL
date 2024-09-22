"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let menu = document.getElementById("menu_section_2");
    if (menu) {
        let cards = menu.getElementsByClassName("menu-card");
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
            for (let i = 0; i < cards.length; i++) {
                cards[i].getElementsByClassName("lorem_text")[0].innerHTML = data[i].body;
            }
        });
    }
});
