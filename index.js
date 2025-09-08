const texts = ["Systems Engineering Student", "Interest in Robotics", "CAD Software", "Web Development", "Mechatronics"];
const textElement = document.getElementById('cyclingText');
let currentIndex = 0;
let isDeleting = false;
let charIndex = 0;

// Human-like typing speeds (in milliseconds)
function getTypingSpeed() {
    return Math.random() * 100 + 80; // 80-180ms variation
}

function getDeletingSpeed() {
    return Math.random() * 30 + 30; // 30-60ms variation (faster than typing)
}

function typeText() {
    const fullText = texts[currentIndex];
    
    if (!isDeleting && charIndex < fullText.length) {
        // Typing - add one character
        charIndex++;
        textElement.textContent = fullText.substring(0, charIndex);
        setTimeout(typeText, getTypingSpeed());
    } else if (!isDeleting && charIndex === fullText.length) {
        // Finished typing - pause before deleting
        setTimeout(() => {
            isDeleting = true;
            typeText();
        }, 2500); // Display complete word for 2.5 seconds
    } else if (isDeleting && charIndex > 0) {
        // Deleting - remove one character
        charIndex--;
        textElement.textContent = fullText.substring(0, charIndex);
        setTimeout(typeText, getDeletingSpeed());
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting - move to next word
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(typeText, 300); // Brief pause before next word
    }
}

// Start the animation
setTimeout(typeText, 500); // Initial delay before starting