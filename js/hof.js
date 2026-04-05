/* ═══════════════════════════════════════════════
   HOF.JS — Hall of Fame
   OSIS Nawasena 2025/2026
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── 1. STAR FIELD GENERATOR ───────────────
       Membuat bintang-bintang acak yang berkedip
       di background hero.
    ─────────────────────────────────────────── */
    const starField = document.getElementById('starField');

    if (starField) {
        const STAR_COUNT = 140;

        for (let i = 0; i < STAR_COUNT; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            const size  = Math.random() * 2.2 + 0.4;          // 0.4 – 2.6 px
            const x     = Math.random() * 100;                 // % horizontal
            const y     = Math.random() * 100;                 // % vertical
            const dur   = (Math.random() * 4 + 2).toFixed(1); // 2 – 6 s
            const delay = (Math.random() * 6).toFixed(2);      // 0 – 6 s
            const lo    = (Math.random() * 0.12 + 0.04).toFixed(2); // dim opacity
            const hi    = (Math.random() * 0.55 + 0.35).toFixed(2); // bright opacity

            star.style.cssText = `
                width:  ${size}px;
                height: ${size}px;
                left:   ${x}%;
                top:    ${y}%;
                --dur:   ${dur}s;
                --delay: ${delay}s;
                --lo:    ${lo};
                --hi:    ${hi};
            `;

            starField.appendChild(star);
        }
    }


    /* ── 2. SCROLL REVEAL ──────────────────────
       Elemen .reveal muncul saat masuk viewport.
    ─────────────────────────────────────────── */
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                revealObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


    /* ── 3. SMOOTH ANCHOR SCROLL ───────────────
       Link "#demisioner" scroll halus.
    ─────────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


    /* ── 4. CARD PARALLAX ON MOUSE MOVE ────────
       Efek tilt halus saat mouse bergerak di
       atas .hof-card dan .dev-card.
    ─────────────────────────────────────────── */
    const tiltCards = document.querySelectorAll('.hof-card, .dev-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect   = card.getBoundingClientRect();
            const cx     = rect.left + rect.width  / 2;
            const cy     = rect.top  + rect.height / 2;
            const dx     = (e.clientX - cx) / (rect.width  / 2); // –1 to 1
            const dy     = (e.clientY - cy) / (rect.height / 2); // –1 to 1
            const tiltX  = dy * -6;  // degrees
            const tiltY  = dx *  6;

            card.style.transform = `
                translateY(-8px)
                rotateX(${tiltX}deg)
                rotateY(${tiltY}deg)
            `;
            card.style.transition = 'transform .1s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform .45s ease';
        });
    });

});