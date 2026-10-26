const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("open", !expanded);
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// The form posts directly to Formspree. No email credentials are stored in this code.
const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    const status = document.querySelector("#form-status");
    const action = form.getAttribute("action") || "";
    if (!action.includes("formspree.io/f/myeeeprz")) {
      event.preventDefault();
      status.textContent = "El formulario no está configurado correctamente. Contacta con BRIZON AGENCY por WhatsApp.";
      return;
    }
    // Native POST submission is intentional: the form provider handles delivery and anti-spam.
    if (status) status.textContent = "Enviando tu solicitud…";
  });
}
