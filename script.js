/* ============================================================
   AADYA ENT & CARDIAC CLINIC - Shared Script
   Pages: index.html, ent.html, cardiac.html, media.html
   ============================================================ */

/* ===== CLINIC CONFIGURATION ===== */
const CLINIC = {
    name: "AADYA ENT & CARDIAC CLINIC",
    phone: "9389148342",
    whatsapp: "",
    email: "ADD_EMAIL",
    address: "Mothorowala Rd, Bengali Kothi, Tehri Nagar, Dehradun, Uttarakhand, India",
    timings: "ADD_CLINIC_TIMINGS",
    googleMaps: "https://maps.app.goo.gl/fVJf5kMqRvjPF76bA"
};

const HAS_WHATSAPP = !!CLINIC.whatsapp && CLINIC.whatsapp !== "";

/* ===== DOM ELEMENTS ===== */
const nav = document.getElementById('siteNav');
const navToggle = document.getElementById('navToggle');
const backToTop = document.getElementById('backToTop');
const lightbox = document.getElementById('appLightbox');
const lightboxImg = document.getElementById('appLightboxImg');
const lightboxCaption = document.getElementById('appLightboxCaption');
const lightboxClose = document.getElementById('appLightboxClose');
const lightboxPrev = document.getElementById('appLightboxPrev');
const lightboxNext = document.getElementById('appLightboxNext');
const reelModal = document.getElementById('appReelModal');
const reelModalVideo = document.getElementById('appReelModalVideo');
const reelModalClose = document.getElementById('appReelModalClose');

/* ===== TOAST ===== */
let toastEl = null;

function showToast(message) {
    if (!toastEl) {
        toastEl = document.createElement('div');
        toastEl.id = 'toastMessage';
        toastEl.className = 'toast';
        toastEl.setAttribute('role', 'status');
        toastEl.setAttribute('aria-live', 'polite');
        document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(() => {
        toastEl.classList.remove('show');
    }, 3200);
}

/* ===== CALL CLINIC ===== */
function callClinic() {
    if (!CLINIC.phone || CLINIC.phone === "9389148342") {
        showToast("Clinic phone number will be added soon.");
        return;
    }
    window.location.href = 'tel:' + CLINIC.phone;
}

/* ===== GOOGLE MAPS ===== */
function getDirections() {
    if (!CLINIC.googleMaps || CLINIC.googleMaps === "") {https://www.google.com/maps/place/Aadya+Clinic/@30.2838355,78.0395574,17z/data=!3m1!4b1!4m6!3m5!1s0x390929b9e0a78301:0xb882c0504a2b6ed!8m2!3d30.2838355!4d78.0395574!16s%2Fg%2F11pfbfgjjp?entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D
        showToast("Google Maps link will be added soon.");
        return;
    }
    window.open(CLINIC.googleMaps, '_blank');
}

/* ===== MOBILE MENU ===== */
function toggleMenu() {
    if (!nav || !navToggle) return;
    const open = nav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function closeMenu() {
    if (nav) nav.classList.remove('open');
    if (navToggle) {
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    }
}

if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
}

document.addEventListener('click', (e) => {
    if (!nav || !nav.classList.contains('open')) return;
    if (nav.contains(e.target) || (navToggle && navToggle.contains(e.target))) return;
    closeMenu();
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

/* ===== ACTIVE NAVIGATION ===== */
function basename() {
    const parts = window.location.pathname.split('/');
    return parts[parts.length - 1] || 'index.html';
}

function updateActiveNav() {
    const current = basename();
    const links = document.querySelectorAll('.nav-link');
    const isHomePage = current === 'index.html' || current === '';

    links.forEach(link => {
        const href = link.getAttribute('href') || '';
        link.classList.remove('active');
        if (isHomePage) {
            if (href === 'index.html') link.classList.add('active');
        } else if (href === current) {
            link.classList.add('active');
        }
    });
}

updateActiveNav();

/* Scroll spy for Why Choose Us / Contact on the homepage */
function applyScrollSpy() {
    const links = document.querySelectorAll('.nav-link');
    if (basename() !== 'index.html' && basename() !== '') return;
    const homeLink = document.querySelector('.nav-link[href="index.html"]');
    const whyLink = document.querySelector('.nav-link[href="index.html#why-choose-us"]');
    const contactLink = document.querySelector('.nav-link[href="index.html#contact"]');
    const whySection = document.getElementById('why-choose-us');
    const contactSection = document.getElementById('contact');

    links.forEach(l => {
        if (l === homeLink || l === whyLink || l === contactLink) l.classList.remove('active');
    });

    const marker = Math.min(window.innerHeight * 0.4, 200);
    let active = homeLink;
    if (whySection && whySection.getBoundingClientRect().top <= marker) active = whyLink;
    if (contactSection && contactSection.getBoundingClientRect().top <= marker) active = contactLink;
    if (active) active.classList.add('active');
}

/* ===== SCROLL: back to top + scroll spy ===== */
function onScroll() {
    if (backToTop) {
        backToTop.classList.toggle('show', window.scrollY > 320);
    }
    applyScrollSpy();
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ===== IMAGE FALLBACK ===== */
function handleImageError(img) {
    img.onerror = null;
    img.style.display = 'none';
    const placeholder = img.nextElementSibling;
    if (placeholder && placeholder.classList.contains('img-placeholder')) {
        placeholder.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        const current = img.getAttribute('src') || '';
        if (!current || current.startsWith('ADD_')) {
            handleImageError(img);
            return;
        }
        img.addEventListener('error', () => handleImageError(img));
    });
});

/* ===== VIDEO FALLBACK ===== */
function handleVideoError(video) {
    video.onerror = null;
    video.style.display = 'none';
    const placeholder = video.nextElementSibling;
    if (placeholder && placeholder.classList.contains('img-placeholder')) {
        placeholder.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('error', () => handleVideoError(video));
    });
});

/* ===== LIGHTBOX (clinic gallery, camps gallery) ===== */
const lightboxItems = [];

function initLightbox() {
    lightboxItems.length = 0;
    document.querySelectorAll('[data-lightbox]').forEach((item, index) => {
        const img = item.querySelector('img');
        const src = img ? (img.getAttribute('src') || '') : '';
        const title = img ? (img.getAttribute('data-title') || img.getAttribute('alt') || '') : '';
        lightboxItems.push({ src, title });
        item.addEventListener('click', () => openLightbox(index));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-label', 'View image: ' + title);
    });
}

let currentLightboxIndex = -1;

function openLightbox(index) {
    if (!lightbox || !lightboxItems.length) return;
    currentLightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
    renderLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function renderLightbox() {
    const item = lightboxItems[currentLightboxIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = item.title;
    lightboxImg.onerror = () => handleImageError(lightboxImg);
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function nextLightbox() {
    openLightbox(currentLightboxIndex + 1);
}

function prevLightbox() {
    openLightbox(currentLightboxIndex - 1);
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

/* ===== REEL MODAL (media page) ===== */
function openReel(src) {
    if (!reelModal || !reelModalVideo) return;
    if (!src || src.startsWith('ADD_')) {
        showToast("Doctor reel will be added soon.");
        return;
    }
    reelModalVideo.src = src;
    reelModalVideo.onerror = () => {
        closeReelModal();
        showToast("This reel is not available yet.");
    };
    reelModal.classList.add('open');
    reelModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    reelModalVideo.play().catch(() => {});
}

function closeReelModal() {
    if (!reelModal) return;
    reelModal.classList.remove('open');
    reelModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (reelModalVideo) {
        reelModalVideo.pause();
        reelModalVideo.removeAttribute('src');
        reelModalVideo.load();
    }
}

if (reelModalClose) reelModalClose.addEventListener('click', closeReelModal);

if (reelModal) {
    reelModal.addEventListener('click', (e) => {
        if (e.target === reelModal) closeReelModal();
    });
}

function initReelCards() {
    document.querySelectorAll('.reel-card:not([data-reel-embed])').forEach(card => {
        const src = card.getAttribute('data-reel-src') || '';
        const type = card.getAttribute('data-reel-type') || 'local';
        const open = () => {
            if (!src || src.startsWith('ADD_')) {
                showToast("Doctor reel will be added soon.");
                return;
            }
            if (type === 'instagram' || type === 'youtube') {
                window.open(src, '_blank');
                return;
            }
            openReel(src);
        };
        card.addEventListener('click', open);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open();
            }
        });
    });
}

/* ===== HOME INSTAGRAM REEL CAROUSEL ===== */
function initReelCarousel() {
    const carousel = document.getElementById('homeReelCarousel');
    if (!carousel) return;
    const dotsWrap = document.getElementById('homeReelDots');
    const cards = Array.from(carousel.querySelectorAll('.reel-card'));
    if (cards.length < 2) return;

    const AUTO_INTERVAL = 4200;
    const mobileQuery = window.matchMedia('(max-width: 640px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dots = [];
    let current = 0;
    let timer = null;

    cards.forEach((card, i) => {
        const frame = card.querySelector('iframe');
        const loading = card.querySelector('.reel-loading');
        if (frame && loading) {
            frame.addEventListener('load', () => { loading.style.display = 'none'; });
            setTimeout(() => { loading.style.display = 'none'; }, 5000);
        }
        card.setAttribute('aria-hidden', i !== 0 ? 'true' : 'false');

        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'reel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Show reel ' + (i + 1));
        dot.addEventListener('click', () => { goTo(i); restart(); });
        if (dotsWrap) dotsWrap.appendChild(dot);
        dots.push(dot);
    });

    function setActive(i) {
        current = i;
        cards.forEach((card, idx) => {
            card.classList.toggle('is-active', idx === i);
            card.setAttribute('aria-hidden', idx === i ? 'false' : 'true');
        });
        dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    }

    function goTo(i) {
        setActive(i);
        if (mobileQuery.matches) {
            cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }

    function next() {
        goTo((current + 1) % cards.length);
    }

    function restart() {
        if (timer) clearInterval(timer);
        if (!reduceMotion) timer = setInterval(next, AUTO_INTERVAL);
    }

    if (mobileQuery.matches) {
        carousel.addEventListener('scroll', () => {
            clearTimeout(carousel._debounce);
            carousel._debounce = setTimeout(() => {
                const containerLeft = carousel.getBoundingClientRect().left;
                const center = containerLeft + carousel.clientWidth / 2;
                let best = 0;
                let bestDist = Infinity;
                cards.forEach((card, i) => {
                    const r = card.getBoundingClientRect();
                    const dist = Math.abs(r.left + r.width / 2 - center);
                    if (dist < bestDist) {
                        bestDist = dist;
                        best = i;
                    }
                });
                setActive(best);
            }, 120);
        });
    }

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) restart();
            });
        }, { threshold: 0.2 });
        io.observe(carousel);
    } else {
        restart();
    }
}

/* ===== HERO BACKGROUND VIDEO ===== */
function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    const soundBtn = document.getElementById('heroSoundBtn');
    const fallbackImg = document.querySelector('.hero-fallback-img');
    if (!video) return;

    const hideVideo = () => {
        video.style.display = 'none';
        if (soundBtn) soundBtn.style.display = 'none';
    };

    const showVideo = () => {
        video.style.display = 'block';
        if (soundBtn) soundBtn.style.display = 'inline-flex';
    };

    /* If the video source cannot load, fall back to the hero image */
    video.addEventListener('error', hideVideo, { once: true });

    /* If autoplay is blocked, gracefully fall back to the hero image */
    const playPromise = video.play();
    if (playPromise) {
        playPromise.catch(hideVideo);
    }

    /* Sound toggle */
    if (soundBtn) {
        soundBtn.addEventListener('click', () => {
            if (video.style.display === 'none') return;
            video.muted = !video.muted;
            soundBtn.classList.toggle('unmuted', !video.muted);
            soundBtn.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
            soundBtn.setAttribute('title', video.muted ? 'Unmute video' : 'Mute video');
            video.play().catch(() => {});
        });
    }
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(el => observer.observe(el));
}

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
    initHeroVideo();
    initLightbox();
    initReelCards();
    initReelCarousel();
    initScrollReveal();

    /* Show the "add image" placeholder if a media file is missing */
    document.querySelectorAll('.hero-image img, .about-media-frame img, .department-card-media img').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
            const placeholder = img.nextElementSibling;
            if (placeholder && placeholder.classList.contains('img-placeholder')) {
                placeholder.style.display = 'flex';
            }
        });
    });

    if (!HAS_WHATSAPP) {
        document.querySelectorAll('.mobile-bar .btn-whatsapp').forEach(btn => {
            btn.style.display = 'none';
        });
    }

    /* Neutralize links that still point to placeholder targets */
    document.querySelectorAll('a[href^="ADD_"], a[href="ADD_PHONE_NUMBER"]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            showToast("This information will be added soon.");
        });
    });
});

/* ===== KEYBOARD SUPPORT ===== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
        if (lightbox && lightbox.classList.contains('open')) closeLightbox();
        if (reelModal && reelModal.classList.contains('open')) closeReelModal();
    }
    if (lightbox && lightbox.classList.contains('open')) {
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
    }
});

/* ===== PUBLIC API ===== */
window.AadyaClinic = {
    CLINIC,
    callClinic,
    openWhatsAppAppointment,
    getDirections,
    openLightbox,
    closeLightbox,
    openReel,
    closeReelModal,
    initReelCarousel,
    toggleMenu,
    closeMenu
};