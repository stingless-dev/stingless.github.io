document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }

  // Ensure mailto opens even when page is served from file:// or in strict contexts
  const emailLink = document.querySelector(".icon-btn-email");
  if (emailLink) {
    emailLink.addEventListener("click", (e) => {
      const href = emailLink.getAttribute("href");
      if (href && href.startsWith("mailto:")) {
        window.location.href = href;
      }
    });
  }
});

