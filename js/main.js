// ========================================
// PORTFOLIO JAVASCRIPT
// Day 1: Basic functionality
// ========================================

// ========================================
// LIVE CLOCK (Japanese aesthetic touch)
// ========================================

function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return;
    
    const now = new Date();
    
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const timeElement = clockElement.querySelector('.clock__time');
    const periodElement = clockElement.querySelector('.clock__period');
    
    if (timeElement) timeElement.textContent = timeString;
    if (periodElement) periodElement.textContent = period;
}

// Update immediately and then every second
updateClock();
setInterval(updateClock, 1000);


// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Calculate offset for fixed header
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// ========================================
// HEADER SCROLL BEHAVIOR
// Add shadow on scroll
// ========================================

const header = document.querySelector('.header');

function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
}

window.addEventListener('scroll', handleHeaderScroll);


// ========================================
// INTERSECTION OBSERVER
// For scroll-triggered animations (Day 3)
// Basic setup for now
// ========================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});


// ========================================
// UTILITY: Debounce function
// Useful for scroll/resize events
// ========================================

function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


// ========================================
// PAGE LOAD COMPLETE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio site loaded successfully!');
    console.log('Day 1 complete - structure in place.');
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('is-loaded');
});


// ========================================
// PLACEHOLDER: Future features (Day 3+)
// ========================================

// Project card hover video preview
// Parallax effects
// Scroll-triggered animations
// Mobile menu toggle
// Form validation (if contact form added)
