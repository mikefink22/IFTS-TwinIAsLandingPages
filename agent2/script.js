(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav__toggle");
  var navMenu = document.querySelector(".nav__menu");
  var navLinks = document.querySelectorAll(".nav__link");
  var contactForm = document.getElementById("contact-form");
  var formFeedback = document.getElementById("form-feedback");

  var sections = document.querySelectorAll("section[id], header[id]");

  /* --- Sticky header scroll state -------------------------------------- */

  function updateHeaderScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  }

  /* --- Mobile navigation ------------------------------------------------ */

  function closeNav() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menú");
    navMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function openNav() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Cerrar menú");
    navMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  /* --- Smooth scroll with header offset -------------------------------- */

  function getScrollOffset() {
    return header ? header.offsetHeight : 0;
  }

  function smoothScrollTo(target) {
    var offset = getScrollOffset();
    var targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }

  function handleAnchorClick(event) {
    var href = this.getAttribute("href");

    if (!href || href.charAt(0) !== "#" || href.length < 2) return;

    var target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    closeNav();
    smoothScrollTo(target);

    if (history.replaceState) {
      history.replaceState(null, "", href);
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", handleAnchorClick);
  });

  /* --- Active nav link on scroll --------------------------------------- */

  function updateActiveNavLink() {
    var scrollPos = window.scrollY + getScrollOffset() + 48;
    var currentId = "inicio";

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      link.classList.toggle("is-active", href === "#" + currentId);
    });
  }

  /* --- Contact form (no backend) --------------------------------------- */

  function showFeedback(message, isError) {
    if (!formFeedback) return;
    formFeedback.textContent = message;
    formFeedback.classList.toggle("is-error", !!isError);
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var nombre = contactForm.querySelector("#nombre");
      var email = contactForm.querySelector("#email");
      var mensaje = contactForm.querySelector("#mensaje");

      if (!nombre.value.trim()) {
        showFeedback("Por favor, ingresa tu nombre.", true);
        nombre.focus();
        return;
      }

      if (!email.value.trim() || !email.validity.valid) {
        showFeedback("Por favor, ingresa un correo electrónico válido.", true);
        email.focus();
        return;
      }

      if (!mensaje.value.trim()) {
        showFeedback("Por favor, escribe tu mensaje.", true);
        mensaje.focus();
        return;
      }

      showFeedback("Gracias por tu mensaje. Te responderemos pronto.", false);
      contactForm.reset();
    });
  }

  /* --- Scroll listeners (throttled) ------------------------------------ */

  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;

    window.requestAnimationFrame(function () {
      updateHeaderScroll();
      updateActiveNavLink();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      closeNav();
    }
    updateActiveNavLink();
  });

  /* --- Escape key closes mobile nav ------------------------------------ */

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  /* --- Initial state --------------------------------------------------- */

  updateHeaderScroll();
  updateActiveNavLink();
})();
