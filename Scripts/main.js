document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Navbar Transition
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Profile Selection & "Entrance" Animation
    const profiles = document.querySelectorAll('.profile-card');
    profiles.forEach(p => {
        p.addEventListener('click', (e) => {
            // Add a quick fade-out effect before switching pages
            document.body.style.opacity = '0';
            document.body.style.transition = '0.5s';
            // Logic to remember user (can be expanded later)
            setTimeout(() => {
                window.location.href = 'browse.html';
            }, 500);
        });
    });

    // 3. Fake Search Simulation (Works for search.html)
    const searchBox = document.getElementById('searchInput');
    const resultsContainer = document.querySelector('.results-grid');

    if (searchBox) {
        searchBox.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.movie-card');
            
            cards.forEach(card => {
                // In a real app, this would filter based on movie titles
                card.style.display = term.length > 0 ? 'block' : 'block';
                card.style.opacity = term.length > 0 ? '0.5' : '1';
            });
        });
    }

    // 4. Video Player Hover Logic
    const video = document.getElementById('mainPlayer');
    const overlay = document.querySelector('.video-overlay');
    
    if (video) {
        // Auto-hide mouse and controls after 2 seconds
        let timer;
        const hideControls = () => {
            overlay.style.opacity = '1';
            document.body.style.cursor = 'default';
            clearTimeout(timer);
            timer = setTimeout(() => {
                overlay.style.opacity = '0';
                document.body.style.cursor = 'none';
            }, 2000);
        };
        document.addEventListener('mousemove', hideControls);
    }
});