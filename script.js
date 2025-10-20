const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

document.addEventListener('click', () => {
  cursor.classList.add('click');
  setTimeout(() => cursor.classList.remove('click'), 200);
});
// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  // Skills animation
function animateSkills() {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    
    skillProgresses.forEach(progress => {
        const width = progress.getAttribute('data-width');
        progress.style.setProperty('--progress-width', width);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progress.classList.add('animate');
                }
            });
        });
        
        observer.observe(progress);
    });
}
// Call the function when the page loads
document.addEventListener('DOMContentLoaded', animateSkills);
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});
// Optional: Add active class to navigation links when scrolling
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 100)) {
          current = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
      }
  });
});
// Or if you want to keep scroll-based but make it permanent:
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      // Stop observing after first trigger to make it permanent
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach((el) => {
  observer.observe(el);
});
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('open');
  menuToggle.innerHTML = menuToggle.classList.contains('open')
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Close menu when clicking overlay or link
overlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.classList.remove('open');
  menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('open');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});
