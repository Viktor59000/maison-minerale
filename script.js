// Animation au scroll
document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.timeline-event');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    events.forEach(event => observer.observe(event));
});

// Ajouter ce code à script.js
document.querySelectorAll('.photo-cell').forEach(cell => {
    cell.addEventListener('click', () => {
        const img = cell.querySelector('img');
        cell.classList.toggle('zoom');
        if(cell.classList.contains('zoom')) {
            img.style.transform = 'scale(1.5)';
        } else {
            img.style.transform = 'scale(1)';
        }
    });
});