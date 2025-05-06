// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Welcome message
    setTimeout(() => {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'alert alert-success';
        welcomeMsg.innerHTML = `
            <strong>Welcome to Wamunyiri FC!</strong> ⚽ The home of passionate football in Western Kenya.
            <button class="close-btn" onclick="this.parentElement.style.display='none'">&times;</button>
        `;
        document.querySelector('main').prepend(welcomeMsg);
    }, 1000);
    
    // Back to top button
    const topButton = document.getElementById('topBtn');
    
    window.onscroll = function() {
        if (document.documentElement.scrollTop > 300) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    };
    
    topButton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // Navigation scroll effect
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(0, 85, 164, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.backgroundColor = 'var(--primary-color)';
            nav.style.boxShadow = 'none';
        }
    });
    
    // Image slider functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let counter = 0;
    const size = slideImages[0].clientWidth;
    
    // Set initial position
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    // Next button
    nextBtn.addEventListener('click', () => {
        if (counter >= slideImages.length - 1) return;
        counter++;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
    
    // Loop back to start/end
    slides.addEventListener('transitionend', () => {
        if (slideImages[counter].id === 'lastClone') {
            slides.style.transition = "none";
            counter = slideImages.length - 2;
            slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (slideImages[counter].id === 'firstClone') {
            slides.style.transition = "none";
            counter = slideImages.length - counter;
            slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
    
    // Auto slide change every 5 seconds
    setInterval(() => {
        if (counter >= slideImages.length - 1) {
            counter = 0;
            slides.style.transition = "none";
            slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
        } else {
            counter++;
            slides.style.transition = "transform 0.5s ease-in-out";
            slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    }, 5000);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            let isValid = true;
            
            // Clear previous errors
            document.querySelectorAll('.error-text').forEach(el => el.remove());
            
            // Name validation
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'Please enter your name');
                isValid = false;
            }
            
            // Email validation
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, 'Please enter a valid email address');
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Helper function to show error messages
    function showError(input, message) {
        const errorText = document.createElement('p');
        errorText.className = 'error-text';
        errorText.style.color = 'var(--danger-color)';
        errorText.style.marginTop = '5px';
        errorText.style.fontSize = '0.9rem';
        errorText.textContent = message;
        
        input.parentNode.appendChild(errorText);
        input.style.borderColor = 'var(--danger-color)';
        
        input.addEventListener('input', function() {
            errorText.remove();
            input.style.borderColor = '#ddd';
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Fade in animation for sections
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.ob