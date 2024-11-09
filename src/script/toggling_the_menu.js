// Select elements
const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");
const categoriesMenu = document.getElementById("categories-menu");

// Toggle the main dropdown menu on click
menuToggle.addEventListener("click", function() {
    dropdownMenu.classList.toggle("active");
    categoriesMenu.classList.remove("active"); // Ensure categories menu is closed
});

// Close the main dropdown menu
function closeDropdown() {
    dropdownMenu.classList.remove("active");
}

// Open the categories submenu and hide the main dropdown menu
function openCategoriesMenu(event) {
    event.stopPropagation(); // Prevent parent menu from toggling
    dropdownMenu.classList.remove("active");
    categoriesMenu.classList.add("active");
}

// Close the categories submenu and return to the main dropdown menu
function closeCategoriesMenu() {
    categoriesMenu.classList.remove("active");
    dropdownMenu.classList.add("active");
}
