/* ═══════════════════════════════════════════════
   SPONSOR.JS — Sponsorship & Kerjasama Page
   OSIS Nawasena 2025/2026
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── 1. SCROLL REVEAL ──────────────────────
       Elemen dengan class .reveal akan muncul
       saat masuk viewport.
    ───────────────────────────────────────────── */
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


    /* ── 2. ANIMATED COUNTER ───────────────────
       Angka pada .stat-num akan animasi naik
       saat stats-row pertama kali terlihat.
    ───────────────────────────────────────────── */
    function runCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const steps = Math.ceil(duration / 16);
        const inc = target / steps;
        let cur = 0;

        const timer = setInterval(() => {
            cur = Math.min(cur + inc, target);
            el.textContent = Math.floor(cur) + suffix;
            if (cur >= target) clearInterval(timer);
        }, 16);
    }

    const statsObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('[data-target]').forEach(runCounter);
                statsObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.4 });

    const statsRow = document.querySelector('.stats-row');
    if (statsRow) statsObs.observe(statsRow);


    /* ── 3. MARQUEE DUPLICATE ──────────────────
       Menduplikasi isi marquee agar loop
       terlihat mulus tanpa jeda.
    ───────────────────────────────────────────── */
    const track = document.getElementById('marqueeTrack');
    if (track) {
        track.innerHTML += track.innerHTML;
    }


    /* ── 4. FORM SUBMIT ────────────────────────
       Mencegah submit default, menampilkan
       toast konfirmasi, lalu reset form.
    ───────────────────────────────────────────── */
    const sponsorForm = document.getElementById('sponsorForm');
    const toast = document.getElementById('spToast');

    sponsorForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        if (toast) {
            toast.classList.add('on');
            setTimeout(() => toast.classList.remove('on'), 4500);
        }

        sponsorForm.reset();
    });


    /* ── 5. SMOOTH ANCHOR SCROLL ───────────────
       Klik link "#paket" atau "#formulir"
       akan scroll halus ke target.
    ───────────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});