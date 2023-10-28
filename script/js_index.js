function toggleNavigation() {
    let nav_toggle = document.getElementById("nav_toggle");
    if (nav_toggle.style.display === "none") {
        nav_toggle.style.display = "flex";
    } else {
        nav_toggle.style.display = "none";
    }
}