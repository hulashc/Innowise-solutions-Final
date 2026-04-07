/**
 * Innowise Solutions - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileMenu();
  initScrollReveal();
  initContactForm();
});

function initNavigation() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  function updateHeader() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      header.classList.remove('transparent');
    } else {
      header.classList.remove('scrolled');
      header.classList.add('transparent');
    }
  }
  
  updateHeader();
  
  window.addEventListener('scroll', updateHeader, { passive: true });
}

function initMobileMenu() {
  const menuBtn = document.querySelector('.header__menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.mobile-nav .header__nav-link');
  
  if (!menuBtn || !mobileNav) return;
  
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      menuBtn.classList.remove('active');
    });
  });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  if (!reveals.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (successMessage) {
      successMessage.style.display = 'block';
      form.reset();
      
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    }
  });
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
    const top = element.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  }
}
