// Wait until the HTML is ready before using its elements.
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const navigation = document.getElementById("navigation");
    const navLinks = document.querySelectorAll(".nav-link");
    const scrollTopButton = document.getElementById("scroll-top");

    // Open and close the mobile navigation menu.
    menuButton.addEventListener("click", function () {
        const menuIsOpen = navigation.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", menuIsOpen);
        menuButton.textContent = menuIsOpen ? "✕" : "☰";
    });

    // Close the mobile menu after a navigation link is selected.
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰";
        });
    });

    // Show the scroll-to-top button after the page has moved down.
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add("visible");
        } else {
            scrollTopButton.classList.remove("visible");
        }
    });

    // Return to the top with smooth scrolling.
    scrollTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Add a simple active state to the navigation while scrolling.
    const sections = document.querySelectorAll("main section[id]");
    window.addEventListener("scroll", function () {
        let currentSection = "home";

        sections.forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 120) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + currentSection);
        });
    });

    // Insert the current year into the footer.
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
