// Funksjon for å generere navigasjonsmeny
function generateNavigation() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    const navigationItems = [
        { href: 'index.html#maal', text: 'Mål for planen' },
        { href: 'progresjon.html', text: 'Digitale ferdigheter' },
        { href: 'vurdering.html', text: 'Vurdering' },
        { href: 'ressurser.html', text: 'Ressurser for lærere' }
    ];

    const ul = document.createElement('ul');
    navigationItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
}

// Kjør funksjonen når dokumentet er lastet
document.addEventListener('DOMContentLoaded', generateNavigation); 