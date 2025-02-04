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

// Pop-up Functions
function openPopup() {
    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

