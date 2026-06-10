// =========================
// NAVBAR SCROLL EFFECT
// =========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".hero, #projects, #about"
);

function revealOnScroll() {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.85) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =========================
// HERO FADE IN
// =========================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// =========================
// HERO IMAGE PARALLAX
// =========================

const heroImage = document.querySelector(".hero img");

window.addEventListener("scroll", () => {
    if (!heroImage) return;

    const scrollPosition = window.scrollY;

    heroImage.style.transform =
        `translateY(${scrollPosition * 0.05}px)`;
});

// =========================
// ACTIVE NAVIGATION LINKS
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }
    });
});

// =========================
// BUTTON HOVER EFFECT
// =========================

document.querySelectorAll(".btn").forEach((button) => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});