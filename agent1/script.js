const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll('.nav-links a[href^="#"], .logo[href^="#"], .button[href^="#"]');
const sections = document.querySelectorAll("main section[id], main#inicio");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

const closeMenu = () => {
  document.body.classList.remove("nav-open");
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  document.body.classList.toggle("nav-open", !isOpen);
  navLinks.classList.toggle("is-open", !isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
});

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.id;
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
);

sections.forEach((section) => activeObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Gracias. Recibimos tu mensaje y te responderemos con calma.";
  contactForm.reset();
});
