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


function openPopup(popupId) {
    document.getElementById(popupId).classList.remove('hidden');
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.add('hidden');
}

