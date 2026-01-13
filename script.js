/* ===========================================
   WILBERT TAN - PORTFOLIO SCRIPTS
   =========================================== */

// ----- Live Clock (Japanese touch) -----
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return;

    const now = new Date();

    // Format: HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
updateClock();
setInterval(updateClock, 1000);


// ----- Smooth Scroll for Navigation -----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ----- Console greeting -----
console.log('%c👋 Hello!', 'font-size: 24px; font-weight: bold;');
console.log('Curious about the code? Check out the repo!');
