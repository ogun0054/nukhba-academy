// Create particle background
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random size
    const size = Math.random() * 20 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation duration
    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = `${duration}s`;

    // Random animation delay
    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
  }
}

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".feature-card, .pricing-card, .job-card"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add("animated");
    }
  });
}

// Initialize animations
window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", () => {
  createParticles();
  animateOnScroll();
});

// Form submission
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Form validation
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;

  if (!fullName || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  // Show success message
  alert(
    "Thank you for your registration! Our team will contact you shortly to complete your enrollment."
  );

  // Reset form
  registrationForm.reset();
});

// Job filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    this.classList.add("active");

    // In a real implementation, this would filter job listings
    // For this demo, we'll just show a message
    alert(`Showing ${this.textContent} positions`);
  });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      document.getElementById("mainNav").classList.remove("active");
    }
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

// Testimonial carousel
const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
let currentSlide = 0;

function showSlide(index) {
  // Hide all slides
  testimonialSlides.forEach((slide) => slide.classList.remove("active"));

  // Remove active class from all dots
  testimonialDots.forEach((dot) => dot.classList.remove("active"));

  // Show current slide
  testimonialSlides[index].classList.add("active");

  // Activate current dot
  testimonialDots[index].classList.add("active");

  currentSlide = index;
}

// Add click events to dots
testimonialDots.forEach((dot) => {
  dot.addEventListener("click", function () {
    const slideIndex = parseInt(this.getAttribute("data-slide"));
    showSlide(slideIndex);
  });
});

// Auto-rotate testimonials
setInterval(() => {
  let nextSlide = currentSlide + 1;
  if (nextSlide >= testimonialSlides.length) {
    nextSlide = 0;
  }
  showSlide(nextSlide);
}, 7000);
