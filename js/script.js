// Set current year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Smooth scroll behavior for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Only prevent default if it's an internal anchor
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Add scroll animation to elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-card, .interest-card').forEach(card => {
  observer.observe(card);
});
