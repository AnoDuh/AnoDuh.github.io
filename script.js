// Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100", "translate-y-0");
            }
        });
    });

    elements.forEach(el => {
        el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
        observer.observe(el);
    });
});


function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.classList.remove("hidden");
    } else {
        console.error(`Element with id ${id} not found.`);
    }
}

function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.classList.add("hidden");
    } else {
        console.error(`Element with id ${id} not found.`);
    }
}

const audioElement = document.querySelector('audio');
if (audioElement) {
    audioElement.addEventListener('touchstart', function () {
        audioElement.play();
        audioElement.pause();
    });
} else {
    console.error('Audio element not found.');
}
