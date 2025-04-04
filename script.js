document.addEventListener('DOMContentLoaded', function() {
    // Håndterer smooth scroll med offset for header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobil meny
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Håndtere dropdowns på mobil
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const dropbtn = dropdown.querySelector('.dropbtn');
            
            if (dropbtn) {
                dropbtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    const icon = dropbtn.querySelector('i');
                    if (icon.classList.contains('fa-chevron-down')) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    } else {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                });
            }
        });
    }

    // Håndterer faner
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function activateTab(tabId) {
        // Deaktiver alle faner
        tabButtons.forEach(button => {
            button.classList.remove('active');
            button.setAttribute('aria-selected', 'false');
        });
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Aktiver valgt fane
        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(tabId);
        
        if (selectedButton && selectedContent) {
            selectedButton.classList.add('active');
            selectedButton.setAttribute('aria-selected', 'true');
            selectedContent.classList.add('active');
            
            // Oppdater overskriften for å vise aktivt årstrinn
            const yearText = selectedButton.textContent;
            const yearTitle = document.querySelector('.year-title');
            if (yearTitle) {
                yearTitle.textContent = yearText;
            }
        }
    }

    // Håndterer klikk på faneknapper
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            history.pushState(null, '', `#${tabId}`);
            activateTab(tabId);
        });
    });

    // Håndterer hash-endringer
    function handleHashChange() {
        const hash = window.location.hash.substring(1) || 'trinn2';
        activateTab(hash);
    }

    // Lytter etter hash-endringer
    window.addEventListener('hashchange', handleHashChange);
    
    // Håndterer initial hash
    handleHashChange();
    
    // Interaktive kort - legg til hover-effekt på berøringsskjermer
    const interactiveCards = document.querySelectorAll('.area-card, .progression-card');
    
    interactiveCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('hover');
        }, {passive: true});
        
        card.addEventListener('touchend', function() {
            this.classList.remove('hover');
        }, {passive: true});
    });
    
    // Oppdater sist oppdatert dato
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const today = new Date();
        const months = [
            'januar', 'februar', 'mars', 'april', 'mai', 'juni', 
            'juli', 'august', 'september', 'oktober', 'november', 'desember'
        ];
        
        lastUpdatedElement.textContent = today.getDate() + '. ' + months[today.getMonth()] + ' ' + today.getFullYear();
    }

    // Modal-funksjonalitet
    const modal = document.getElementById('goalModal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        const modalBody = modal.querySelector('.modal-body');
        const closeButton = modal.querySelector('.modal-close');

        // Gjør alle mål klikkbare
        document.querySelectorAll('.competence-table td[data-title="Mål for opplæringen"] ul li').forEach(goal => {
            goal.style.cursor = 'pointer';
            goal.addEventListener('click', () => {
                const competenceArea = goal.closest('tr').querySelector('.competence-area').textContent;
                const currentPage = document.body.className;
                const competenceKey = competenceArea.toLowerCase().replace(/\s+/g, '-');
                
                // Vis modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        // Lukk modal når man klikker på lukkeknappen
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Lukk modal når man klikker utenfor
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Lukk modal med Escape-tasten
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}); 