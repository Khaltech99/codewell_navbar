"use strict";
const menu = document.querySelector(".nav-menu");
const cancel = document.querySelector(".close");
const sidedrop = document.querySelector(".dropside");
const product = document.querySelector(".product");
const dropdown = document.querySelector(".dropdownhide");

function open() {
    sidedrop.style.display = `block`;
}

function close() {
    sidedrop.style.display = `none`;
}

function drop() {
    dropdown.style.display = dropdown.style.display == "none" ? "block" : "none";
}
menu.addEventListener("click", open);
cancel.addEventListener("click", close);
product.addEventListener("click", drop);