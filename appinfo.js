// App-informasjon for hvert verktøy
const appInfo = {
    // Apper og verktøy
    apps: {
        // Skape og produsere
        'book-creator': {
            title: 'Book Creator',
            description: 'Book Creator er et verktøy som lar elever lage digitale bøker med tekst, bilder og lyd. Verktøyet er intuitivt og tilpasset ulike alderstrinn.',
            useCases: [
                'Lage digitale historier',
                'Dokumentere prosjekter',
                'Lage presentasjoner',
                'Utvikle lese- og skriveferdigheter'
            ],
            image: 'book-creator.png',
            video: 'https://www.youtube.com/embed/example1'
        },
        'scratch-jrscratch': {
            title: 'Scratch Jr./Scratch',
            description: 'Scratch er et blokkbasert programmeringsverktøy som lar elever lage interaktive historier, spill og animasjoner. Scratch Jr. er en forenklet versjon for yngre elever.',
            useCases: [
                'Lære grunnleggende programmering',
                'Utvikle logisk tenkning',
                'Lage interaktive historier',
                'Utforske matematikk og geometri'
            ],
            image: 'scratch.png',
            video: 'https://www.youtube.com/embed/example2'
        },
        'garageband': {
            title: 'GarageBand',
            description: 'GarageBand er et musikkprogram som lar elever skape musikk og lydkomposisjoner. Verktøyet er tilgjengelig for både Mac og iOS.',
            useCases: [
                'Lage musikk og lydkomposisjoner',
                'Eksperimentere med ulike instrumenter',
                'Lage podcaster',
                'Utvikle rytme- og tonefølelse'
            ],
            image: 'garageband.png',
            video: 'https://www.youtube.com/embed/example3'
        },
        'microsoft-office-365': {
            title: 'Microsoft Office 365',
            description: 'Microsoft Office 365 er en samling av produktivitetsverktøy som inkluderer Word, PowerPoint, Excel og mer. Verktøyene er tilgjengelige både online og som apper.',
            useCases: [
                'Skrive og redigere tekster',
                'Lage presentasjoner',
                'Organisere data',
                'Samarbeide på dokumenter'
            ],
            image: 'office365.png',
            video: 'https://www.youtube.com/embed/example4'
        },
        'imoviefilmora-go': {
            title: 'iMovie/Filmora Go',
            description: 'iMovie og Filmora Go er videoredigeringsverktøy som lar elever lage og redigere videoer. Verktøyene er enkle å bruke og tilpasset skolebruk.',
            useCases: [
                'Lage og redigere videoer',
                'Lage dokumentarer',
                'Produsere nyhetsinnslag',
                'Utvikle fortellerferdigheter'
            ],
            image: 'imovie.png',
            video: 'https://www.youtube.com/embed/example5'
        },

        // Samhandle og kommunisere
        'microsoft-teams': {
            title: 'Microsoft Teams',
            description: 'Microsoft Teams er en digital samarbeidsplattform som lar elever og lærere kommunisere, dele filer og samarbeide i sanntid.',
            useCases: [
                'Digitalt klasserom',
                'Gruppearbeid',
                'Oppgaveinnlevering',
                'Videomøter'
            ],
            image: 'teams.png',
            video: 'https://www.youtube.com/embed/example6'
        },
        'google-classroom': {
            title: 'Google Classroom',
            description: 'Google Classroom er en plattform for digital klasseromshåndtering som lar lærere organisere undervisning og kommunisere med elever.',
            useCases: [
                'Organisere undervisning',
                'Dele ressurser',
                'Gi tilbakemeldinger',
                'Følge med på progresjon'
            ],
            image: 'classroom.png',
            video: 'https://www.youtube.com/embed/example7'
        },
        'padlet': {
            title: 'Padlet',
            description: 'Padlet er en digital oppslagstavle som lar elever og lærere samarbeide, dele ideer og organisere innhold på en visuell måte.',
            useCases: [
                'Digitale oppslagstavler',
                'Ideenøtter',
                'Prosjektplanlegging',
                'Gruppesamarbeid'
            ],
            image: 'padlet.png',
            video: 'https://www.youtube.com/embed/example8'
        },
        'showbie': {
            title: 'Showbie',
            description: 'Showbie er en plattform for oppgaveinnlevering og tilbakemelding som gjør det enkelt for lærere å administrere og vurdere elevarbeid.',
            useCases: [
                'Oppgaveinnlevering',
                'Tilbakemeldinger',
                'Portefølje',
                'Samarbeid på prosjekter'
            ],
            image: 'showbie.png',
            video: 'https://www.youtube.com/embed/example9'
        },
        'flipgrid': {
            title: 'Flipgrid',
            description: 'Flipgrid er en videodiskusjonsplattform som lar elever dele sine tanker og ideer gjennom korte videoer.',
            useCases: [
                'Videodiskusjoner',
                'Elevpresentasjoner',
                'Refleksjoner',
                'Gruppediskusjoner'
            ],
            image: 'flipgrid.png',
            video: 'https://www.youtube.com/embed/example10'
        },

        // Tilpasset opplæring
        'lingdyslingright': {
            title: 'Lingdys/Lingright',
            description: 'Lingdys og Lingright er skriveverktøy spesielt utviklet for elever med lese- og skrivevansker.',
            useCases: [
                'Støtte ved lese- og skrivevansker',
                'Utvikle skriveferdigheter',
                'Tilpasse undervisning',
                'Støtte individuell læring'
            ],
            image: 'lingdys.png',
            video: 'https://www.youtube.com/embed/example25'
        },
        'intowords': {
            title: 'Intowords',
            description: 'Intowords er et verktøy som gir lese- og skrivestøtte for elever med spesielle behov.',
            useCases: [
                'Lese- og skrivestøtte',
                'Tilpasset læring',
                'Utvikle språkferdigheter',
                'Støtte individuell progresjon'
            ],
            image: 'intowords.png',
            video: 'https://www.youtube.com/embed/example26'
        }
    },

    // Nettressurser
    web: {
        // Kildebruk og kildekritikk
        'kildekritikk-no': {
            title: 'Kildekritikk.no',
            description: 'Kildekritikk.no er en læringsressurs som hjelper elever å utvikle kritisk tenkning og kildekritikk i digitale medier.',
            useCases: [
                'Lære kildekritikk',
                'Vurdere kilder',
                'Forstå pålitelig informasjon',
                'Utvikle kritisk tenkning'
            ],
            image: 'kildekritikk.png',
            video: 'https://www.youtube.com/embed/example11'
        },
        'dubestemmer-no': {
            title: 'Dubestemmer.no',
            description: 'Dubestemmer.no tilbyr undervisningsopplegg om nettvett og digital dømmekraft for elever.',
            useCases: [
                'Lære om nettvett',
                'Forstå digitale valg',
                'Utvikle digital dømmekraft',
                'Lære om personvern'
            ],
            image: 'dubestemmer.png',
            video: 'https://www.youtube.com/embed/example12'
        },
        'creativecommons-org': {
            title: 'Creativecommons.org',
            description: 'Creative Commons er en organisasjon som tilbyr gratis lisenser for å dele og bruke kreativt innhold.',
            useCases: [
                'Forstå opphavsrett',
                'Finne gratis innhold',
                'Lære om lisenser',
                'Bruke innhold lovlig'
            ],
            image: 'creativecommons.png',
            video: 'https://www.youtube.com/embed/example13'
        },
        'pixabayunsplash': {
            title: 'Pixabay/Unsplash',
            description: 'Pixabay og Unsplash er nettsteder som tilbyr gratis bilder av høy kvalitet som kan brukes i skolearbeid.',
            useCases: [
                'Finne gratis bilder',
                'Bruke bilder i prosjekter',
                'Lære om bilderettigheter',
                'Utvikle visuell kommunikasjon'
            ],
            image: 'pixabay.png',
            video: 'https://www.youtube.com/embed/example14'
        },
        'kiddle': {
            title: 'Kiddle',
            description: 'Kiddle er en søkemotor spesielt tilpasset barn, med filtrert og sikker innhold.',
            useCases: [
                'Sikker nettsøking',
                'Finne barnesikker informasjon',
                'Utvikle søkeferdigheter',
                'Lære om pålitelige kilder'
            ],
            image: 'kiddle.png',
            video: 'https://www.youtube.com/embed/example15'
        },

        // Digital livsmestring
        'nettvett-no': {
            title: 'Nettvett.no',
            description: 'Nettvett.no tilbyr råd og veiledning om digital dømmekraft og trygg bruk av digitale medier.',
            useCases: [
                'Lære om nettvett',
                'Forstå digitale risikoer',
                'Utvikle trygge nettvaner',
                'Lære om personvern'
            ],
            image: 'nettvett.png',
            video: 'https://www.youtube.com/embed/example16'
        },
        'barnevakten-no': {
            title: 'Barnevakten.no',
            description: 'Barnevakten.no gir informasjon og råd om barn og medier, rettet mot både foreldre og lærere.',
            useCases: [
                'Forstå barn og medier',
                'Lære om medievaner',
                'Utvikle mediekompetanse',
                'Samarbeide med hjemmet'
            ],
            image: 'barnevakten.png',
            video: 'https://www.youtube.com/embed/example17'
        },
        'slettmeg-no': {
            title: 'Slettmeg.no',
            description: 'Slettmeg.no gir informasjon om personvern og hvordan man kan slette personlig informasjon fra nettet.',
            useCases: [
                'Forstå personvern',
                'Lære om digitale spor',
                'Håndtere personlig informasjon',
                'Ta kontroll over eget nettinnhold'
            ],
            image: 'slettmeg.png',
            video: 'https://www.youtube.com/embed/example18'
        },
        'medietilsynet': {
            title: 'Medietilsynet',
            description: 'Medietilsynet tilbyr ressurser og informasjon om barn og medier, samt regulering av medieinnhold.',
            useCases: [
                'Forstå medieregulering',
                'Lære om mediepåvirkning',
                'Utvikle mediekritikk',
                'Forstå medieetikk'
            ],
            image: 'medietilsynet.png',
            video: 'https://www.youtube.com/embed/example19'
        },
        'iktplan-no': {
            title: 'Iktplan.no',
            description: 'Iktplan.no er en ressurs for digitale ferdigheter i skolen, med fokus på praktisk implementering.',
            useCases: [
                'Planlegge digital undervisning',
                'Utvikle digitale ferdigheter',
                'Implementere IKT i undervisningen',
                'Lære om digitale verktøy'
            ],
            image: 'iktplan.png',
            video: 'https://www.youtube.com/embed/example20'
        },

        // Digital bevissthet
        'datatilsynet': {
            title: 'Datatilsynet',
            description: 'Datatilsynet tilbyr undervisningsopplegg og informasjon om personvern og databeskyttelse.',
            useCases: [
                'Forstå personvern',
                'Lære om databeskyttelse',
                'Utvikle digital bevissthet',
                'Forstå digitale rettigheter'
            ],
            image: 'datatilsynet.png',
            video: 'https://www.youtube.com/embed/example21'
        },
        'tenk-kritisk-no': {
            title: 'Tenk-kritisk.no',
            description: 'Tenk-kritisk.no tilbyr ressurser for å utvikle kritisk tenkning og kildekritikk i digitale medier.',
            useCases: [
                'Utvikle kritisk tenkning',
                'Lære kildekritikk',
                'Forstå påvirkning',
                'Analysere medieinnhold'
            ],
            image: 'tenkkritisk.png',
            video: 'https://www.youtube.com/embed/example22'
        },
        'nrk-skole': {
            title: 'NRK Skole',
            description: 'NRK Skole tilbyr undervisningsfilmer og ressurser om digitalisering og teknologi.',
            useCases: [
                'Lære om digitalisering',
                'Forstå teknologisk utvikling',
                'Utvikle digital bevissthet',
                'Analysere medieinnhold'
            ],
            image: 'nrkskole.png',
            video: 'https://www.youtube.com/embed/example23'
        },
        'teknologiradet': {
            title: 'Teknologirådet',
            description: 'Teknologirådet gir informasjon og analyser om teknologiutvikling og dens påvirkning på samfunnet.',
            useCases: [
                'Forstå teknologiutvikling',
                'Analysere samfunnspåvirkning',
                'Utvikle teknologiforståelse',
                'Lære om fremtidige trender'
            ],
            image: 'teknologiradet.png',
            video: 'https://www.youtube.com/embed/example24'
        },

        // Tilpasset opplæring
        'statped-no': {
            title: 'Statped.no',
            description: 'Statped.no tilbyr ressurser og veiledning for spesialpedagogikk og tilpasset opplæring.',
            useCases: [
                'Tilpasset opplæring',
                'Spesialpedagogiske tiltak',
                'Utvikle inkluderende praksis',
                'Støtte ulike læringsbehov'
            ],
            image: 'statped.png',
            video: 'https://www.youtube.com/embed/example27'
        },
        'nettbrett-i-spesialundervisning': {
            title: 'Nettbrett i spesialundervisning',
            description: 'Ressurser og veiledning for bruk av nettbrett og tilpassede apper i spesialundervisning.',
            useCases: [
                'Tilpassede læringsverktøy',
                'Støtte spesielle behov',
                'Utvikle tilgjengelighet',
                'Implementere assistive teknologier'
            ],
            image: 'nettbrett.png',
            video: 'https://www.youtube.com/embed/example28'
        }
    }
};

// Modal funksjonalitet
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('appModal');
    const modalContent = modal.querySelector('.modal-content');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalUseCases = modal.querySelector('.modal-use-cases');
    const modalImage = modal.querySelector('.modal-image');
    const modalVideo = modal.querySelector('.modal-video');
    const closeBtn = modal.querySelector('.modal-close');

    // Funksjon for å vise modal
    function showModal(appId) {
        const app = appInfo.apps[appId] || appInfo.web[appId];
        if (!app) return;

        modalTitle.textContent = app.title;
        modalDescription.textContent = app.description;
        
        // Oppdater bruksområder
        modalUseCases.innerHTML = '';
        app.useCases.forEach(useCase => {
            const li = document.createElement('li');
            li.textContent = useCase;
            modalUseCases.appendChild(li);
        });

        // Oppdater bilde
        if (app.image) {
            modalImage.src = `images/${app.image}`;
            modalImage.alt = app.title;
            modalImage.style.display = 'block';
        } else {
            modalImage.style.display = 'none';
        }

        // Oppdater video
        if (app.video) {
            modalVideo.src = app.video;
            modalVideo.style.display = 'block';
        } else {
            modalVideo.style.display = 'none';
        }

        modal.style.display = 'block';
    }

    // Lukk modal
    function closeModal() {
        modal.style.display = 'none';
        modalVideo.src = ''; // Stopp video når modalen lukkes
    }

    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Legg til klikk-event på alle verktøy-lenker
    document.querySelectorAll('.resource-list li').forEach(item => {
        const strongElement = item.querySelector('strong');
        if (strongElement) {
            const appName = strongElement.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            if (appInfo.apps[appName] || appInfo.web[appName]) {
                item.style.cursor = 'pointer';
                item.addEventListener('click', function() {
                    showModal(appName);
                });
            }
        }
    });
});

// Håndtere fanebytte
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.resource-section');

    // Skjul alle seksjoner unntatt den aktive
    sections.forEach(section => {
        if (!section.classList.contains('active')) {
            section.style.display = 'none';
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Fjern active-klassen fra alle faner og seksjoner
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => {
                s.classList.remove('active');
                s.style.display = 'none';
            });

            // Legg til active-klassen på valgt fane og tilhørende seksjon
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-tab');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.style.display = 'block';
            }
        });
    });
}); 