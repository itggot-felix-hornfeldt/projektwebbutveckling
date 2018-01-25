function showDropdown() {
    document.querySelector('.headerContentBox').style.display = "none";
    document.querySelector('main').style.display = "none";
    document.querySelector('footer').style.display = "none";
    document.querySelector('.headerDropdownContent').style.display = "grid";
}

function removeDropdown() {
    document.querySelector('.headerContentBox').style.display = "grid";
    document.querySelector('main').style.display = "grid";
    document.querySelector('footer').style.display = "grid";
    document.querySelector('.headerDropdownContent').style.display = "none";
}