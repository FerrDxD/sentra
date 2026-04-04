// ============================================================
//  DOKUMENTASI — Article + Photo Grid System
//  SENTRA · OSIS Nawasena
// ============================================================

// Narasi default per event (bisa dioverride dari data.json via field "narasi")
const defaultNarasi = {
    "Hari Guru Nasional": `
        <p>Setiap tahun, tanggal 25 November menjadi momen istimewa bagi seluruh warga SMAN 2 Jonggol untuk merayakan Hari Guru Nasional — sebuah hari yang didedikasikan penuh bagi para pendidik yang telah mencurahkan tenaga, pikiran, dan hati mereka demi mencerdaskan generasi penerus bangsa.</p>
        <p>OSIS Nawasena mengambil inisiatif untuk menjadikan perayaan ini lebih bermakna dari sekadar upacara. Rangkaian acara dirancang dengan penuh ketulusan: mulai dari upacara pengibaran bendera yang khidmat, hingga pentas seni siswa yang menjadi ungkapan kasih sayang kepada para guru.</p>
        <p>Momen paling mengharukan hadir ketika para siswa menyampaikan kesan dan pesan secara langsung kepada guru-guru mereka. Kalimat-kalimat sederhana yang keluar dari hati ternyata mampu menghadirkan kehangatan yang tak ternilai — bukti nyata bahwa hubungan antara guru dan murid jauh melampaui batas kelas.</p>
    `,
    "EPOK S10": `
        <p>EPOK — singkatan dari Ekshibishi Pekan Olahraga Kelas — merupakan salah satu program kerja unggulan OSIS Nawasena yang paling ditunggu-tunggu. Di edisi ke-10 ini, antusiasme siswa terasa begitu membuncah sejak jauh-jauh hari sebelum hari pelaksanaan.</p>
        <p>Kompetisi olahraga ini bukan sekadar ajang unjuk kemampuan, melainkan ruang bagi setiap kelas untuk mempererat kebersamaan. Di lapangan futsal, energi persaingan yang sehat terasa menyengat. Di panggung seni, keindahan tari tradisional dan modern dance berdampingan — membuktikan bahwa siswa SMAN 2 Jonggol kaya akan talenta.</p>
        <p>Di sisi lain, deretan stand makanan dan minuman yang dikelola siswa menambah semarak suasana, sekaligus menjadi ajang latihan kewirausahaan yang nyata. EPOK S10 berakhir dengan catatan: bahwa kompetisi yang sesungguhnya bukan soal menang atau kalah, melainkan soal seberapa jauh kita tumbuh bersama.</p>
    `,
    "Ngobrolin Kampus": `
        <p>Bagi siswa kelas XII, pertanyaan tentang masa depan kerap menjadi beban yang tak terucapkan. Ke mana setelah lulus? Jurusan apa yang tepat? Bagaimana cara masuk universitas impian? Ngobrolin Kampus hadir sebagai ruang aman untuk menjawab semua itu.</p>
        <p>Acara yang diinisiasi OSIS Nawasena ini menghadirkan para alumni SMAN 2 Jonggol yang kini telah berhasil menempuh jalan masing-masing di berbagai universitas bergengsi. Mereka berbagi bukan hanya strategi, tetapi juga cerita jatuh-bangun yang jarang terdengar — bahwa perjalanan menuju kampus impian tidak selalu mulus, dan itu adalah hal yang sangat manusiawi.</p>
        <p>Sesi tanya jawab yang interaktif membuat suasana terasa seperti percakapan antara kakak dan adik, bukan seminar formal. Di akhir acara, banyak siswa yang pulang bukan hanya membawa informasi, tetapi juga membawa keberanian untuk bermimpi lebih besar.</p>
    `
};

// State lightbox
let lbImages = [];
let lbIndex = 0;
let lbEventTitle = '';

// ============================================================
//  LOAD & RENDER GALLERY
// ============================================================

async function loadGalleryData() {
    try {
        const response = await fetch('assets/gallery/data.json');
        if (!response.ok) throw new Error('Gagal memuat data');
        const data = await response.json();
        renderGallery(data);
    } catch {
        // Fallback data
        const defaultData = {
            events: [
                {
                    id: 1,
                    title: "Hari Guru Nasional",
                    date: "25 November 2025",
                    description: "Perayaan Hari Guru Nasional dengan berbagai kegiatan seru untuk menghormati jasa para guru.",
                    thumbnail: "assets/event/hgn/hdr.webp",
                    images: [
                        { url: "assets/event/hgn/1.webp", caption: "Upacara Pengibaran Sang Merah Putih" },
                        { url: "assets/event/hgn/2.webp", caption: "Parade dan Penyerahan Kue kepada Guru" },
                        { url: "assets/event/hgn/3.webp", caption: "Penyampaian Kesan dan Pesan Siswa untuk Guru" },
                        { url: "assets/event/hgn/4.webp", caption: "Silih Asih dan Pemberian Hadiah untuk Guru" },
                        { url: "assets/event/hgn/5.webp", caption: "Pentas Seni Siswa" }
                    ]
                },
                {
                    id: 2,
                    title: "EPOK S10",
                    date: "15 Desember 2025",
                    description: "Kompetisi olahraga dan seni antar kelas untuk mempererat solidaritas siswa.",
                    thumbnail: "assets/event/epok/hdr.webp",
                    images: [
                        { url: "assets/event/epok/1.webp", caption: "Upacara Pembukaan EPOK S10" },
                        { url: "assets/event/epok/2.webp", caption: "Absensi Peserta" },
                        { url: "assets/event/epok/3.webp", caption: "Penampilan Modern Dance" },
                        { url: "assets/event/epok/4.webp", caption: "Penampilan Tari Tradisional" },
                        { url: "assets/event/epok/5.webp", caption: "Pertandingan Futsal Antar Kelas" },
                        { url: "assets/event/epok/6.webp", caption: "Pertandingan Basket Antar Kelas" },
                        { url: "assets/event/epok/7.webp", caption: "Pertandingan Dodgeball Antar Kelas" },
                        { url: "assets/event/epok/8.webp", caption: "Stand Jualan Makanan dan Minuman" }
                    ]
                },
                {
                    id: 3,
                    title: "Ngobrolin Kampus",
                    date: "17 Januari 2026",
                    description: "Acara edukatif dengan tujuan membantu siswa naik level pendidikan, menampilkan campus fest dan diskusi interaktif.",
                    thumbnail: "assets/event/ngmps/hdr.webp",
                    images: [
                        { url: "assets/event/ngmps/1.webp", caption: "Sesi pembukaan dengan sambutan" },
                        { url: "assets/event/ngmps/2.webp", caption: "Penampilan Tari Tradisional sebagai pembuka acara" },
                        { url: "assets/event/ngmps/4.webp", caption: "Pengenalan Alumni yang sukses di berbagai bidang" },
                        { url: "assets/event/ngmps/5.webp", caption: "Penampilan Modern Dance oleh siswa" },
                        { url: "assets/event/ngmps/6.webp", caption: "Seminar dan diskusi interaktif dengan alumni" }
                    ]
                }
            ]
        };
        renderGallery(defaultData);
    }
}

function renderGallery(data) {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    container.innerHTML = data.events.map(event => `
        <div class="event-card" onclick="openArticle(${event.id})">
            <div class="card-thumb">
                <img src="${event.thumbnail}" alt="${event.title}" loading="lazy">
                <span class="card-tag">Kegiatan</span>
                <span class="card-photo-count">${event.images.length} Foto</span>
            </div>
            <div class="card-body">
                <span class="card-date">${event.date}</span>
                <h3 class="card-title">${event.title}</h3>
                <p class="card-desc">${event.description}</p>
                <div class="card-cta">
                    Baca Artikel <span class="material-symbols-outlined" style="font-size:1rem;">arrow_forward</span>
                </div>
            </div>
        </div>
    `).join('');

    // Simpan events untuk akses nanti
    window.galleryEvents = data.events.reduce((acc, ev) => {
        acc[ev.id] = ev;
        return acc;
    }, {});
}

// ============================================================
//  ARTICLE MODAL
// ============================================================

function openArticle(eventId) {
    const event = window.galleryEvents?.[eventId];
    if (!event) return;

    // Tentukan narasi
    const narasi = event.narasi || defaultNarasi[event.title] || `<p>${event.description}</p>`;

    // Tentukan berapa foto yang ditampilkan di grid artikel (maks 8, sisanya di lightbox)
    const previewCount = Math.min(event.images.length, 8);
    const hasMore = event.images.length > previewCount;
    const gridImages = event.images.slice(0, previewCount);

    // Buat HTML grid foto
    const photoGridHTML = `
        <div class="article-photo-grid" data-count="${previewCount}">
            ${gridImages.map((img, i) => `
                <div class="photo-item" onclick="openLightbox(${eventId}, ${i})">
                    <img src="${img.url}" alt="${img.caption}" loading="lazy">
                    <div class="photo-caption-hover">
                        <span class="photo-caption-text">${img.caption}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        ${hasMore ? `
            <button class="btn-more-photos" onclick="openLightbox(${eventId}, ${previewCount})">
                <span class="material-symbols-outlined" style="font-size:1rem;">photo_library</span>
                Lihat semua ${event.images.length} foto
            </button>
        ` : ''}
    `;

    // Inject modal
    document.getElementById('articleModalHero').src = event.thumbnail;
    document.getElementById('articleModalTitle').textContent = event.title;
    document.getElementById('articleModalDate').textContent = event.date;
    document.getElementById('articleModalNarasi').innerHTML = narasi;
    document.getElementById('articleModalPhotos').innerHTML = photoGridHTML;

    // Tampilkan modal
    const modal = document.getElementById('articleModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeArticle() {
    document.getElementById('articleModal').classList.remove('show');
    document.body.style.overflow = '';
}

// Klik di luar container = tutup
document.getElementById('articleModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeArticle();
});

// ============================================================
//  LIGHTBOX
// ============================================================

function openLightbox(eventId, startIndex = 0) {
    const event = window.galleryEvents?.[eventId];
    if (!event) return;

    lbImages = event.images;
    lbIndex = startIndex;
    lbEventTitle = event.title;

    renderLightbox();
    document.getElementById('lightboxModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function renderLightbox() {
    const img = lbImages[lbIndex];

    document.getElementById('lbMainImage').src = img.url;
    document.getElementById('lbCaption').textContent = img.caption;
    document.getElementById('lbCounter').textContent = `${lbIndex + 1} / ${lbImages.length}`;
    document.getElementById('lbEventTitle').textContent = lbEventTitle;

    // Render thumbnails
    const thumbList = document.getElementById('lbThumbList');
    thumbList.innerHTML = lbImages.map((im, i) => `
        <img src="${im.url}" alt="${im.caption}"
             class="lb-thumb ${i === lbIndex ? 'active' : ''}"
             onclick="lbJump(${i})"
             loading="lazy">
    `).join('');

    // Scroll thumbnail ke tengah
    const activeThumb = thumbList.querySelectorAll('.lb-thumb')[lbIndex];
    activeThumb?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function lbNext() {
    if (lbIndex < lbImages.length - 1) {
        lbIndex++;
        renderLightbox();
    }
}

function lbPrev() {
    if (lbIndex > 0) {
        lbIndex--;
        renderLightbox();
    }
}

function lbJump(i) {
    lbIndex = i;
    renderLightbox();
}

function closeLightbox() {
    document.getElementById('lightboxModal').classList.remove('show');
    document.body.style.overflow = '';
}

// Keyboard
document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightboxModal').classList.contains('show')) {
        if (e.key === 'ArrowRight') lbNext();
        else if (e.key === 'ArrowLeft') lbPrev();
        else if (e.key === 'Escape') closeLightbox();
        return;
    }
    if (document.getElementById('articleModal').classList.contains('show')) {
        if (e.key === 'Escape') closeArticle();
    }
});

// Klik luar lightbox
document.getElementById('lightboxModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});

// ============================================================
//  INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    loadGalleryData();
});