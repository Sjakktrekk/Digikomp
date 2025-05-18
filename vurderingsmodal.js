// Vurderingsmetoder data
const vurderingsMetoder = [
    {
        id: 'formativ',
        tittel: 'Formativ vurdering',
        ikon: 'fas fa-clipboard-check',
        beskrivelse: 'Formativ vurdering, eller underveisvurdering, brukes kontinuerlig gjennom opplæringen for å fremme læring, tilpasse undervisningen og øke elevenes kompetanse.',
        metoder: [
            'Observasjon av elevene i arbeid med digitale verktøy',
            'Samtaler med elevene om deres digitale ferdigheter',
            'Veiledning underveis i arbeidsprosessen',
            'Egenvurdering hvor elevene reflekterer over egen læring',
            'Medelevvurdering hvor elevene gir hverandre tilbakemeldinger'
        ],
        eksempel: {
            tittel: 'Eksempel: Observasjonsskjema for 2. årstrinn',
            beskrivelse: 'Et enkelt skjema hvor læreren noterer elevens ferdigheter innen grunnleggende digital kompetanse som å logge inn, finne ressurser, bruke tastatur, osv.'
        }
    },
    {
        id: 'summativ',
        tittel: 'Summativ vurdering',
        ikon: 'fas fa-tasks',
        beskrivelse: 'Summativ vurdering brukes for å oppsummere elevenes kompetanse ved slutten av et opplæringsforløp, for eksempel ved slutten av et trinn.',
        metoder: [
            'Praktiske oppgaver som demonstrerer digital kompetanse',
            'Digitale mappeinnleveringer',
            'Vurdering av konkrete produkter eleven har laget',
            'Strukturerte oppgaver for å måle spesifikke ferdigheter'
        ],
        eksempel: {
            tittel: 'Eksempel: Digital mappe for 4. årstrinn',
            beskrivelse: 'En samling av elevens arbeid gjennom året, som inkluderer tekster, presentasjoner, lydopptak og andre digitale produkter eleven har laget.'
        }
    },
    {
        id: 'egenvurdering',
        tittel: 'Egenvurdering og refleksjon',
        ikon: 'fas fa-user-check',
        beskrivelse: 'Elevene skal involveres aktivt i vurderingen av egen kompetanse. Dette fremmer bevissthet om egen læring og utvikler metakognitive ferdigheter.',
        metoder: [
            'Refleksjonsnotat om digitale arbeidsprosesser',
            'Selvvurderingsskjemaer tilpasset alderstrinn',
            'Læringslogger hvor elevene dokumenterer egen progresjon',
            'Målark med kompetansemål som elevene kan krysse av'
        ],
        eksempel: {
            tittel: 'Eksempel: Selvvurderingsskjema for 7. årstrinn',
            beskrivelse: 'Et digitalt skjema der elevene vurderer sine ferdigheter innen digital kildebruk, kritisk tenkning, samarbeid, og produksjon av digitalt innhold.'
        }
    }
];

// Funksjon for å generere kort
function genererVurderingsKort() {
    const container = document.querySelector('.vurderings-kort');
    if (!container) return;

    vurderingsMetoder.forEach(metode => {
        const kort = document.createElement('div');
        kort.className = 'kort';
        kort.setAttribute('data-id', metode.id);
        kort.innerHTML = `
            <div class="kort-icon"><i class="${metode.ikon}"></i></div>
            <h3>${metode.tittel}</h3>
            <p>${metode.beskrivelse}</p>
        `;
        kort.addEventListener('click', () => visModal(metode));
        container.appendChild(kort);
    });
}

// Funksjon for å vise modal
function visModal(metode) {
    const modal = document.createElement('div');
    modal.className = 'vurderings-modal';
    
    // Sjekk om det er en video-URL
    const videoUrl = metode.videoUrl || metode.video;
    let videoHtml = '';
    
    if (videoUrl) {
        // Bruk embed-URL direkte
        const embedUrl = videoUrl.replace('youtu.be/', 'youtube.com/embed/')
                                .replace('watch?v=', 'embed/');
        
        videoHtml = `
            <div class="video-container">
                <iframe 
                    width="560" 
                    height="315" 
                    src="${embedUrl}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
    }

    modal.innerHTML = `
        <div class="vurderings-modal-content">
            <span class="vurderings-modal-close">&times;</span>
            <h2>${metode.tittel}</h2>
            ${videoHtml}
            <p>${metode.beskrivelse}</p>
            <h3>Metoder for ${metode.tittel.toLowerCase()}:</h3>
            <ul>
                ${metode.metoder.map(m => `<li>${m}</li>`).join('')}
            </ul>
            <div class="eksempel">
                <h4>${metode.eksempel.tittel}</h4>
                <p>${metode.eksempel.beskrivelse}</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'block';

    // Lukk modal når man klikker på X
    const closeBtn = modal.querySelector('.vurderings-modal-close');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    // Lukk modal når man klikker utenfor innholdet
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Funksjon for å håndtere faner
function initFaner() {
    const faneContainer = document.querySelector('.fane-container');
    if (!faneContainer) return;

    const faneKnapper = faneContainer.querySelectorAll('.fane-knapp');
    const faneInnhold = faneContainer.querySelectorAll('.fane-innhold');

    // Aktiver første fane som standard
    faneKnapper[0].classList.add('active');
    faneInnhold[0].classList.add('active');

    faneKnapper.forEach((knapp, index) => {
        knapp.addEventListener('click', () => {
            // Fjern aktiv klasse fra alle knapper og innhold
            faneKnapper.forEach(k => k.classList.remove('active'));
            faneInnhold.forEach(i => i.classList.remove('active'));

            // Legg til aktiv klasse på valgt fane
            knapp.classList.add('active');
            faneInnhold[index].classList.add('active');
        });
    });
}

// Fanefunksjonalitet
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const resourceSections = document.querySelectorAll('.resource-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Fjern active-klassen fra alle knapper og seksjoner
            tabButtons.forEach(btn => btn.classList.remove('active'));
            resourceSections.forEach(section => section.classList.remove('active'));

            // Legg til active-klassen på valgt knapp og tilsvarende seksjon
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

// Initialiser når DOM er lastet
document.addEventListener('DOMContentLoaded', () => {
    genererVurderingsKort();
    initFaner();
}); 