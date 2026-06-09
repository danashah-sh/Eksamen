// ---- MOBIL-MENY ----
const hamburger = document.querySelector('.hamburger');
const mobilMeny = document.querySelector('.mobil-meny');

if (hamburger && mobilMeny) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('aapen');
        mobilMeny.classList.toggle('aapen');
    });
}

// ---- AKTIV LENKE I NAV ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav ul li a, .mobil-meny a').forEach(lenke => {
    const href = lenke.getAttribute('href');
    if (href === currentPage) {
        lenke.classList.add('aktiv');
    }
});

// ---- SCROLL FADE-INN ----
const fadeElementer = document.querySelectorAll('.fade-inn');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('synlig');
            }, i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElementer.forEach(el => observer.observe(el));

// ---- FAQ ACCORDION ----
document.querySelectorAll('.faq-sporsmal').forEach(knapp => {
    knapp.addEventListener('click', () => {
        const item = knapp.closest('.faq-item');
        const svar = item.querySelector('.faq-svar');
        const erAapen = item.classList.contains('aapen');

        // Lukk alle andre
        document.querySelectorAll('.faq-item.aapen').forEach(aapen => {
            aapen.classList.remove('aapen');
            aapen.querySelector('.faq-svar').style.maxHeight = '0';
        });

        if (!erAapen) {
            item.classList.add('aapen');
            svar.style.maxHeight = svar.scrollHeight + 'px';
        }
    });
});

// ---- KONTAKTSKJEMA ----
const skjema = document.getElementById('kontaktskjema');
if (skjema) {
    skjema.addEventListener('submit', (e) => {
        e.preventDefault();
        const suksess = document.getElementById('suksess-melding');
        suksess.style.display = 'flex';
        skjema.reset();
        suksess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// ---- TELLER ANIMASJON (forside) ----
function animerTeller(element, slutt, suffix = '') {
    let start = 0;
    const varighet = 1400;
    const steg = slutt / (varighet / 16);

    const timer = setInterval(() => {
        start += steg;
        if (start >= slutt) {
            element.textContent = slutt + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
}

const tellere = document.querySelectorAll('.stat-tall[data-slutt]');
if (tellere.length > 0) {
    const tellerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                animerTeller(el, parseInt(el.dataset.slutt), el.dataset.suffix || '');
                tellerObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    tellere.forEach(t => tellerObserver.observe(t));
}