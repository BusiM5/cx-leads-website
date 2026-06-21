// Contact form success message
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  successMessage.textContent = "Thank you! Your enquiry has been received. CX Leads will contact you soon.";

  contactForm.reset();

  setTimeout(() => {
    successMessage.textContent = "";
  }, 5000);
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".custom-navbar", {
  y: -80,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".eyebrow", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.2
});

gsap.from(".hero-text h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.35,
  ease: "power3.out"
});

gsap.from(".hero-text p", {
  y: 40,
  opacity: 0,
  duration: 0.9,
  delay: 0.55
});

gsap.from(".hero-actions .btn", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.75,
  stagger: 0.15
});

gsap.from(".hero-card", {
  x: 80,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: "power3.out"
});

gsap.to(".shape-one", {
  y: 40,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".shape-two", {
  y: -35,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.utils.toArray(".service-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.1,
    ease: "power3.out"
  });
});

gsap.from(".about-section h2, .about-text", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%"
  },
  y: 45,
  opacity: 0,
  duration: 0.9,
  stagger: 0.2
});

gsap.from(".cta-box", {
  scrollTrigger: {
    trigger: ".cta-box",
    start: "top 85%"
  },
  scale: 0.92,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".contact-section h2, .contact-section p, .contact-points, .contact-form", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 75%"
  },
  y: 50,
  opacity: 0,
  duration: 0.9,
  stagger: 0.16
});