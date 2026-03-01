// State untuk gallery
        let currentEvent = null;
        let currentImageIndex = 0;
        let galleryImages = [];

        // Fungsi untuk memuat data dari JSON
        async function loadGalleryData() {
            try {
                // Coba load dari file JSON
                const response = await fetch('assets/gallery/data.json');
                if (!response.ok) {
                    throw new Error('Gagal memuat data');
                }
                const data = await response.json();
                renderGallery(data);
            } catch (error) {
                console.log('Menggunakan data default (fallback)');
                // Data default jika JSON tidak tersedia
                const defaultData = {
                    events: [
                        {
                            id: 1,
                            title: "Hari Guru Nasional",
                            date: "10 Oktober 2025",
                            description: "Perayaan Hari Guru Nasional dengan berbagai kegiatan seru untuk menghormati jasa para guru.",
                            thumbnail: "assets/event/hgn/hdr.webp",
                            images: [
                                {
                                    url: "assets/event/hgn/1.webp",
                                    caption: "Upacara Pengibaran Sang Merah Putih"
                                },
                                {
                                    url: "assets/event/hgn/2.webp",
                                    caption: "Parade dan Penyerahan Kue kepada Guru"
                                },
                                {
                                    url: "assets/event/hgn/3.webp",
                                    caption: "Penyampaian Kesan dan Pesan Siswa untuk Guru"
                                },
                                {
                                    url: "assets/event/hgn/4.webp",
                                    caption: "Silih Asih dan Pemberian Hadiah untuk Guru"
                                },
                                {
                                    url: "assets/event/hgn/5.webp",
                                    caption: "Pentas Seni Siswa"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "EPOK S10",
                            date: "15 Desember 2025",
                            description: "Kompetisi olahraga dan seni antar kelas untuk mempererat solidaritas siswa.",
                            thumbnail: "assets/event/epok/hdr.webp",
                            images: [
                                {
                                    url: "assets/event/epok/1.webp",
                                    caption: "Upacara Pembukaan EPOK S10"
                                },
                                {
                                    url: "assets/event/epok/2.webp",
                                    caption: "Absensi Peserta"
                                },
                                {
                                    url: "assets/event/epok/3.webp",
                                    caption: "Penampilan Modern Dance"
                                },
                                {
                                    url: "assets/event/epok/4.webp",
                                    caption: "Penampilan Tari Tradisional"
                                },
                                {
                                    url: "assets/event/epok/5.webp",
                                    caption: "Pertandingan Futsal Antar Kelas"
                                },
                                {
                                    url: "assets/event/epok/6.webp",
                                    caption: "Pertandingan Basket Antar Kelas"
                                },
                                {
                                    url: "assets/event/epok/7.webp",
                                    caption: "Pertandingan Dodgeball Antar Kelas"
                                },
                                {
                                    url: "assets/event/epok/8.webp",
                                    caption: "Stand Jualan Makanan dan Minuman"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Ngobrolin Kampus",
                            date: "17  Januari 2026",
                            description: "Acara edukatif dengan tujuan membantu siswa naik level pendidikan, menampilkan kampus fest, dan diskusi interaktif.",
                            thumbnail: "assets/event/ngmps/hdr.webp",
                            images: [
                                {
                                    url: "assets/event/ngmps/1.webp",
                                    caption: "Sesi pembukaan dengan sambutan"
                                },
                                {
                                    url: "assets/event/ngmps/2.webp",
                                    caption: "Penampilan Tari Tradisional sebagai pembuka acara"
                                },
                                {
                                    url: "assets/event/ngmps/4.webp",
                                    caption: "Pengenalan Alumni yang sukses di berbagai bidang"
                                },
                                {
                                    url: "assets/event/ngmps/5.webp",
                                    caption: "Penampilan Modern Dance oleh siswa sebagai hiburan intermezzo"
                                },
                                {
                                    url: "assets/event/ngmps/6.webp",
                                    caption: "Seminar dan diskusi interaktif dengan alumni dan perwakilan kampus"
                                }
                            ]
                        }
                    ]
                };
                renderGallery(defaultData);
            }
        }

        // Fungsi untuk merender gallery
        function renderGallery(data) {
            const container = document.getElementById('gallery-container');
            container.innerHTML = data.events.map(event => `
                <div class="event-card" onclick="openGallery(${event.id})">
                    <img src="${event.thumbnail}" alt="${event.title}" style="width:100%; border-radius: 12px; margin-bottom: 1rem;">
                    <div class="event-info">
                        <small style="color: var(--accent);">${event.date}</small>
                        <h3>${event.title}</h3>
                        <p style="font-size: 0.85rem; color: var(--text-muted);">${event.description}</p>
                        <small style="color: var(--accent); display: block; margin-top: 0.5rem;">
                            ${event.images.length} foto
                        </small>
                    </div>
                </div>
            `).join('');

            // Simpan data events untuk digunakan nanti
            window.galleryEvents = data.events.reduce((acc, event) => {
                acc[event.id] = event;
                return acc;
            }, {});
        }

        // Fungsi untuk membuka gallery
        function openGallery(eventId) {
            const event = window.galleryEvents[eventId];
            if (!event) return;

            currentEvent = event;
            currentImageIndex = 0;
            galleryImages = event.images;

            // Update header
            document.getElementById('modalEventTitle').textContent = event.title;
            document.getElementById('modalEventDate').textContent = event.date;

            // Update main image
            updateMainImage();

            // Render thumbnails
            renderThumbnails();

            // Tampilkan modal
            const modal = document.getElementById('galleryModal');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Fungsi untuk update gambar utama
        function updateMainImage() {
            const image = galleryImages[currentImageIndex];
            const mainImage = document.getElementById('mainImage');
            const imageCaption = document.getElementById('imageCaption');
            const imageCounter = document.getElementById('imageCounter');

            mainImage.src = image.url;
            imageCaption.textContent = image.caption;
            imageCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;

            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
                if (index === currentImageIndex) {
                    thumb.classList.add('active');
                    // Scroll thumbnail ke tengah
                    thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } else {
                    thumb.classList.remove('active');
                }
            });
        }

        // Fungsi untuk render thumbnails
        function renderThumbnails() {
            const thumbnailList = document.getElementById('thumbnailList');
            thumbnailList.innerHTML = galleryImages.map((image, index) => `
                <img 
                    src="${image.url}" 
                    alt="${image.caption}"
                    class="thumbnail ${index === currentImageIndex ? 'active' : ''}"
                    onclick="jumpToImage(${index})"
                >
            `).join('');
        }

        // Fungsi navigasi
        function nextImage() {
            if (currentImageIndex < galleryImages.length - 1) {
                currentImageIndex++;
                updateMainImage();
            }
        }

        function prevImage() {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                updateMainImage();
            }
        }

        function jumpToImage(index) {
            if (index >= 0 && index < galleryImages.length) {
                currentImageIndex = index;
                updateMainImage();
            }
        }

        // Fungsi tutup gallery
        function closeGallery() {
            const modal = document.getElementById('galleryModal');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('galleryModal');
            if (!modal.classList.contains('show')) return;

            switch(e.key) {
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'Escape':
                    closeGallery();
                    break;
            }
        });

        // Load data saat halaman dimuat
        document.addEventListener('DOMContentLoaded', () => {
            loadGalleryData();
        });