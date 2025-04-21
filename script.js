// Reveal sections on scroll
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
});

// Form interaction
document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "🎉 Thanks for registering! We'll be in touch soon.";
  this.reset();
});

// Highlight nav links
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 200;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
