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
                            description: "Perayaan Hari Guru Nasional dengan berbagai kegiatan kreatif dan edukatif.",
                            thumbnail: "assets/event/hgn/hdr.webp",
                            images: [
                                {
                                    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200",
                                    caption: "Pembukaan LDKS oleh Kepala Sekolah"
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
                                    caption: "Sesi materi kepemimpinan"
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200",
                                    caption: "Diskusi kelompok"
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200",
                                    caption: "Games seru"
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200",
                                    caption: "Foto bersama"
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
                                    url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200",
                                    caption: "Penampilan band siswa"
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200",
                                    caption: "Tari tradisional"
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200",
                                    caption: "Penampilan solo vokal"
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1200",
                                    caption: "Penampilan teater"
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
                                    url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200",
                                    caption: "Pembukaan rapat"
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=1200",
                                    caption: "Diskusi program kerja"
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
                                    caption: "Penyampaian aspirasi"
                                },
                                {
                                    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200",
                                    caption: "Momen kebersamaan"
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