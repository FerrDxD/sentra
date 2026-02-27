// Data Pengurus Inti
        const pengurusData = {
            ketua: {
                id: 'ketua',
                nama: 'Cecillia Natasya Sonthani',
                jabatan: 'Ketua Umum',
                foto: 'assets/pp/cece.webp',
                kelas: 'XI.2',
                tempatLahir: 'Bekasi',
                tanggalLahir: '11 Januari 2009',
                alamat: 'Citra Indah City, Bukit Mahoni Luar Blok S.00 No. 110',
                hobi: 'Membaca Buku, Bernyanyi, Dance',
                motto: 'Be yourself, for yourself',
                visi: 'Menjadikan OSIS SMAN 2 Jonggol organisasi yang dapat dipercaya sekolah, berprestasi, aktif, bertanggung jawab, dan memiliki rasa kekeluargaan yang erat.',
                misi: [
                    'Meningkatkan kreativitas tiap anggota OSIS',
                    'Meningkatkan rasa persatuan dan kesatuan tiap anggota OSIS',
                    'Meningkatkan ketaqwaan siswa/i kepada Tuhan YME',
                    'Mengedepankan adab tiap anggota OSIS dengan berjalan nya 5S di mana saja'
                ],
                programKerja: [
                    {
                        nama: 'Monthly Strategy Alignment (MSA)',
                        deskripsi: 'Mengadakan rapat koordinasi rutin setiap 1 bulan sekali untuk evaluasi dan perencanaan kegiatan organisasi',
                        target: 'Seluruh pengurus OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Revival 24',
                        deskripsi: 'Melaksanakan kembali program JAMPARIKU, LISA, dan Kotak Aspirasi Siswa',
                        target: 'Seluruh Siswa',
                        status: 'Berjalan'
                    },
                    {
                         nama: 'The Patriot Games',
                        deskripsi: 'Mengadakan kompetisi bertema wawasan kebangsaan antar kelas untuk meningkatkan rasa nasionalisme',
                        target: 'Seluruh siswa',
                        status: 'Rencana'
                    },
                    {
                         nama: 'OSIS News & Info Creative',
                        deskripsi: 'Menjalankan mading informatif dan kreativitas',
                        target: 'Seluruh Siswa',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Operation Zero Plastic',
                        deskripsi: 'Mengadakan kegiatan pengurangan penggunaan plastik di lingkungan sekolah selama satu hari penuh',
                        target: 'Seluruh Siswa',
                        status: 'Rencana'
                    }
                ]
            },
            wakil1: {
                id: 'wakil1',
                nama: 'Adam Abdulloh Mu\'arif',
                jabatan: 'Wakil Ketua 1',
                foto: 'assets/pp/adam.webp',
                kelas: 'XI.5',
                tempatLahir: 'bogor',
                tanggalLahir: '18 Juli 2008',
                alamat: 'Rawabogo Weninggalih, Jonggol, Bogor, Jawa Barat, Indonesia',
                hobi: 'Memasak, Traveling, Komunikasi',
                motto: 'Sesungguh Bersama Kesulitan Ada Kemudahan.',
                programKerja: [
                    {
                        nama: 'Integrasi',
                        deskripsi: 'Membantu Ketua OSIS dalam merencanakan, mengoordinasikan, dan melaksanakan seluruh kegiatan OSIS.',
                        target: 'Ketua OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Networking',
                        deskripsi: 'Menjaga komunikasi antara pengurus OSIS dengan pihak sekolah dan siswa.',
                        target: 'Seluruh Warga Sekolah',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Monitoring Lapangan',
                        deskripsi: 'Membantu mengawasi kinerja setiap seksi bidang agar program kerja berjalan sesuai jadwal.',
                        target: 'Seluruh Sekbid',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Pembinaan karakter',
                        deskripsi: 'Mengadakan kegiatan atau perlombaan kelas terbersih dan terkreatif.',
                        target: 'Seluruh Siswa',
                        status: 'Rencana'
                    },
                    {
                        nama: 'Pengembangan Wawasan',
                        deskripsi: 'Mengadakan lomba cerdas cermat dalam event cerdas cermat.',
                        target: 'Seluruh Siswa',
                        status: 'Rencana'
                    }
                ]
            },
            wakil2: {
                id: 'wakil2',
                nama: 'Muhammad Fadhli Hidayatullah',
                jabatan: 'Wakil Ketua 2',
                foto: 'assets/pp/adi.webp',
                kelas: 'X.7',
                tempatLahir: 'Bekasi',
                tanggalLahir: '13 Desember 2009',
                alamat: ' Citra Indah City, Bukit Palem Blok S.21 no. 11',
                hobi: 'Ngonten, Menyanyi',
                motto: 'Pelan tapi konsisten, kecil tapi berdampak.',
                programKerja: [
                    {
                        nama: 'Kartini of The Year',
                        deskripsi: 'Program pemilihan figur siswi teladan tahunan.',
                        target: 'Seluruh siswi',
                        status: 'Rencana'
                    },
                    {
                        nama: 'Voice Box',
                        deskripsi: 'Wadah bagi siswa menyampaikan ide, saran, kritik dan sebagainya.',
                        target: 'Seluruh siswa/i',
                        status: 'Rencana'
                    },
                    {
                        nama: 'Cinema Edutalk',
                        deskripsi: 'Membuka wawasan siswa melalui film pendek.',
                        target: 'Seluruh siswa/i',
                        status: 'Rencana'
                    }
                ]
            },
            sekum: {
                id: 'sekum',
                nama: 'Maulana Ferdi Irawan',
                jabatan: 'Sekretaris Umum',
                foto: 'assets/pp/pe.webp',
                kelas: 'XI.2',
                tempatLahir: 'Bogor',
                tanggalLahir: '4 Agustus 2008',
                alamat: 'Jl. Desa Sukamaju No.43 Kp. Menan',
                hobi: 'Menulis, Desain Grafis, Coding',
                motto: 'Yang kau dengar itu opini, yang kau lihat itu persepsi',
                programKerja: [
                    {
                        nama: 'Ekspedisi Makna',
                        deskripsi: 'Mengonstruksi narasi filosofis dan makna simbolik di balik logo Nawasena, melalui proses analisis mendalam terhadap bentuk, warna, tipografi, dan komposisinya, lalu menerjemahkannya ke dalam prinsip-prinsip panduan (guiding principles) yang koheren.',
                        target: 'Seluruh pengurus',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'INFRA-SUARA',
                        deskripsi: 'Mengembangkan dan menyediakan platform media yang mudah diakses dan inklusif sebagai infrastruktur pendukung utama bagi keberlangsungan program kotak suara, guna memastikan partisipasi yang luas dan setara dari seluruh pemangku kepentingan.',
                        target: 'Seluruh warga sekolah',
                        status: 'Rencana'
                    },
                    {
                        nama: 'Sistem Elektronik Terpadu',
                        deskripsi: 'Merancang solusi dashboard digital berbasis website yang memfasilitasi monitoring performa kegiatan dan manajemen arsip OSIS secara terpusat, transparan, dan mudah diakses oleh seluruh pemangku kepentingan.',
                        target: 'Seluruh pengurus',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Diplomasi Eksternal',
                        deskripsi: 'Mengelola hubungan eksternal  dan memimpin negosiasi dengan calon mitra serta sponsor potensial, guna membangun aliansi yang saling menguntungkan dan mendukung keberlanjutan program organisasi.',
                        target: 'Membangun Relasi dengan Pihak Eksternal',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Ethos, Pathos, Logos',
                        deskripsi: 'Membangun sistem manajemen talenta dan pengembangan pengurus OSIS melalui instrumen kredit skor yang terukur. Sistem ini berfungsi ganda: (a) sebagai peta kompetensi (competency mapping) untuk memetakan keaktifan dan kontribusi, serta (b) sebagai panduan pengembangan (development roadmap) yang berorientasi pada penciptaan individu yang unggul (great) dan beretika (ethical).',
                        target: 'Seluruh pengurus',
                        status: 'Rencana'
                    },
                    {
                        nama: 'Manufaktur Administrasi',
                        deskripsi: 'Menyusun dan memproduksi seluruh dokumen administratif sekolah yang diperlukan, meliputi laporan kegiatan, surat menyurat resmi (undangan, edaran), proposal program, lembar pertanggungjawaban keuangan (LPJ), serta invoice dan dokumen pendukung lainnya.',
                        target: 'Administrasi OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Navigator Strategis',
                        deskripsi: 'Bertindak sebagai penasihat pendamping bagi Ketua dengan menyediakan kajian mendalam, alternatif solusi, serta analisis risiko guna menyelaraskan keputusan dengan tujuan strategis organisasi dan memastikan implementasi yang tepat sasaran.',
                        target: 'Pematangan keputusan strategis',
                        status: 'Berjalan'
                    }
                ]
            },
            sek1: {
                id: 'sek1',
                nama: 'Anggun Permata Jalasena Putri',
                jabatan: 'Sekretaris 1',
                foto: 'assets/pp/anggun.webp',
                kelas: 'XI.5',
                tempatLahir: 'Jakarta',
                tanggalLahir: '2 November 2008',
                alamat: 'Komplek TNI AL Sukamanah Jonggol Bogor Jawa Barat Indonesia',
                hobi: 'Memasak, traveling, olahraga',
                motto: 'Jadilah versi terbaik dari dirimu setiap hari.',
                programKerja: [
                    {
                        nama: 'Narative Keeper',
                        deskripsi: 'Mencatat notulen rapat OSIS dan rapat kepanitiaan.',
                        target: 'Setiap rapat OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'InfoHub Command',
                        deskripsi: 'Membantu menyusun, mengarsipkan, dan mendokumentasikan surat masuk dan surat keluar.',
                        target: 'Administrasi OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Co-pilot Project',
                        deskripsi: 'Membantu Sekretaris Umum OSIS dalam menjalankan tugas administrasi organisasi.',
                        target: 'Administrasi OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Visual Report',
                        deskripsi: 'Membantu pembuatan laporan kegiatan OSIS dalam bentuk visual.',
                        target: 'Administrasi OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Data Vault',
                        deskripsi: 'Mengelola arsip, data anggota OSIS, serta dokumen penting lainnya.',
                        target: 'Administrasi OSIS',
                        status: 'Berjalan'
                    }
                ]
            },
            sek2: {
                id: 'sek2',
                nama: 'Inez Mikha Rahayu',
                jabatan: 'Sekretaris 2',
                foto: 'assets/pp/inez.webp',
                kelas: 'X.3',
                tempatLahir: 'Bogor',
                tanggalLahir: '2 November 2009',
                alamat: 'Satus Balekambang Jonggol Bogor Jawa Barat Indonesia',
                hobi: 'Memasak, Menari',
                motto: 'jangan cari yang terbaik, tapi jadilah yang terbaik.',
                programKerja: [
                    {
                        nama: 'Operasi Tangan Kanan',
                        deskripsi: 'Memberikan dukungan administratif yang komprehensif kepada Sekretaris Umum dalam mengelola agenda, korespondensi, dan dokumen organisasi.',
                        target: 'Administrasi OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Dengar, Salin, Susun',
                        deskripsi: 'Bertanggung jawab atas dokumentasi rapat yang mencakup dua aspek utama: (1) pencatatan kehadiran peserta secara tertulis, dan (2) perapian catatan hasil diskusi (minutes of meeting) menjadi sebuah notula resmi yang terstruktur, jelas, dan siap didistribusikan kepada seluruh anggota OSIS. ',
                        target: 'Administrasi OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Gudang OSIS',
                        deskripsi: 'Melakukan kurasi, penyimpanan, dan pemeliharaan arsip kegiatan OSIS (seperti foto, video, proposal, laporan, dan sertifikat) secara sistematis sebagai aset pengetahuan (knowledge assets) dan bahan evaluasi untuk perencanaan kegiatan mendatang.',
                        target: 'Administrasi OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Harmoni Tugas',
                        deskripsi: 'Berkontribusi aktif dalam perencanaan dan pengaturan jadwal kerja harian guna meningkatkan efisiensi operasional dan meminimalisir tumpang tindih tugas antar pengurus OSIS.',
                        target: 'Administrasi OSIS',
                        status: 'Berjalan'
                    }
                ]
            },
            bendum: {
                id: 'bendum',
                nama: 'Lulu Karpika',
                jabatan: 'Bendahara Umum',
                foto: 'assets/pp/lulu.webp',
                kelas: 'XI.5',
                tempatLahir: 'Bogor',
                tanggalLahir: '15 Mei 2009',
                alamat: ' Kp. Rawa Makmur Jonggol Bogor Jawa Barat Indonesia.',
                hobi: 'Memasak',
                motto: 'Hargai proses dan nikmati hasilnya.',
                programKerja: [
                    {
                        nama: 'Pengelolaan Anggaran',
                        deskripsi: 'Menyusun dan mengelola anggaran keuangan OSIS sesuai dengan proposal kegiatan dan kebijakan sekolah.',
                        target: 'Seluruh kegiatan OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Pencatatan Transaksi',
                        deskripsi: 'Mencatat setiap transaksi keuangan dengan rinci dan sistematis untuk transparansi dan akuntabilitas.',
                        target: 'Administrasi Keuangan OSIS',
                        status: 'Berjalan'
                    },
                    {
                         nama: 'Financial Governance',
                        deskripsi: 'Memastikan penyajian laporan keuangan yang wajar dan transparan, didukung oleh dokumentasi dan analisis yang memadai.',
                        target: 'Transparansi Keuangan',
                        status: 'Berjalan'
                    },
                    {
                         nama: 'Brangkas OSIS',
                        deskripsi: 'Bertanggung jawab penuh atas penyimpanan, pengamanan, dan pencatatan seluruh dana kas milik Organisasi Siswa Intra Sekolah (OSIS), serta memastikan ketersediaan fisik uang sesuai dengan catatan administrasi keuangan.',
                        target: 'Keamanan dan Ketersediaan Dana',
                        status: 'Berjalan'
                    },
                    {
                         nama: 'Audit Berkala',
                        deskripsi: 'Melakukan pemeriksaan berkala terhadap penggunaan dana dan dokumentasi keuangan OSIS',
                        target: 'Akuntabilitas Keuangan OSIS',
                        status: 'Rencana'
                    }
                ]
            },
            ben1: {
                id: 'ben1',
                nama: 'Erlangga Nuriansyah',
                jabatan: 'Bendahara 1',
                foto: 'assets/pp/angga.webp',
                kelas: 'X.8',
                tempatLahir: 'Jakarta',
                tanggalLahir: '10 Januari 2010',
                alamat: 'Citra indah city bukit lotus teratai Cg 18',
                hobi: 'Belajar, Olahraga',
                motto: 'Jatuh itu biasa, bangkit itu pilihan',
                programKerja: [
                    {
                        nama: 'Penerimaan Kas',
                        deskripsi: 'Menyusun laporan keuangan periodik terkait penerimaan kas OSIS',
                        target: 'Transparansi Keuangan OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Audit Trail',
                        deskripsi: 'Membantu memastikan penggunaan dana sesuai dengan anggaran yang telah disetujui.',
                        target: 'Akuntabilitas Keuangan OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Pembukuan Harian',
                        deskripsi: 'Membuat catatan harian transaksi keuangan dan menyimpan bukti transaksi secara rapi',
                        target: 'Transparansi Keuangan OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Garda Alternatif',
                        deskripsi: 'Pengganti Bendahara Umum Jika berhalangan hadir',
                        target: 'Keberlangsungan Operasional Keuangan OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Pengarsipan Bukti',
                        deskripsi: 'Menyimpan dan mengarsipkan bukti transaksi keuangan secara rapi dan terstruktur',
                        target: 'Transparansi Keuangan OSIS',
                        status: 'Berjalan'
                    }
                ]
            }
        };

        // Data Sekbid (tetap sama)
        const sekbidData = [
            {
                number: 1,
                name: "Keimanan dan Ketaqwaan Terhadap Tuhan Yang Maha Esa",
                members: [
                    "ALVINA DAMAYANTI - Koordinator",
                    "VIOLA BINTANG PUTRI - Anggota",
                    "IBNU AZIZ SUSANTO - Anggota",
                ],
                programs: [
                    {
                        name: "Kajian Rutin Jumat",
                        description: "Kajian keagamaan setiap hari Jumat pagi sebelum pembelajaran dimulai.",
                        status: "Berjalan"
                    },
                    {
                        name: "Peringatan Hari Besar Keagamaan",
                        description: "Menyelenggarakan kegiatan untuk memperingati hari besar keagamaan.",
                        status: "Rencana"
                    }
                ]
            },
            {
                number: 2,
                name: "Budi Pekerti atau Akhlak Mulia",
                members: [
                    "IRMA ANGGIANI - Koordinator",
                    "RORO WILISH - Anggota",
                ],
                programs: [
                    {
                        name: "Gerakan Senyum, Sapa, Salam",
                        description: "Membudayakan 3S di lingkungan sekolah.",
                        status: "Berjalan"
                    }
                ]
            },
            {
                number: 3,
                name: "Kepribadian Unggul, Wawasan Kebangsaan dan Bela Negara",
                members: [
                    "FAIZAL ARFA MUBAROQ - Koordinator",
                    "NURAFNI LIDYA YUNIAWATI - Anggota",
                    "AZKA RAIHANA PRIRA - Anggota"
                ],
                programs: [
                    {
                        name: "Upacara Bendera Kreatif",
                        description: "Upacara bendera dengan konsep yang lebih interaktif dan edukatif.",
                        status: "Berjalan"
                    },
                    {
                        name: "Kunjungan ke Museum",
                        description: "Study tour ke museum untuk menumbuhkan rasa nasionalisme.",
                        status: "Rencana"
                    }
                ]
            },
            {
                number: 4,
                name: "Prestasi Akademik, Seni, dan atau Olahraga Sesuai Minat dan Bakat",
                members: [
                    "GALUH CANDRAWATI PUTRI - Koordinator",
                    "ZASKIA INDRIANI PUTRI - Anggota",
                    "SITI NURUL FADILAH - Anggota"
                ],
                programs: [
                    {
                        name: "Olimpiade Sains Sekolah",
                        description: "Kompetisi sains antar kelas untuk menjaring bakat akademik.",
                        status: "Rencana"
                    },
                    {
                        name: "Lomba Bakat dan Kreativitas",
                        description: "Wadah bagi siswa untuk menampilkan bakat seni dan olahraga.",
                        status: "Berjalan"
                    }
                ]
            },
            {
                number: 5,
                name: "Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan dan Toleransi Sosial Dalam Konteks Masyarakat Plural",
                members: [
                    "KANIA ANANDA PRATIWI - Koordinator",
                    "K. TITHANIA WIDYA R.F - Anggota",
                    "JIHAN AIRA PUTRI- Anggota"
                ],
                programs: [
                    {
                        name: "Diskusi Demokrasi",
                        description: "Forum diskusi tentang pentingnya demokrasi di lingkungan sekolah.",
                        status: "Berjalan"
                    },
                    {
                        name: "Bakti Sosial",
                        description: "Kegiatan berbagi dengan masyarakat sekitar sekolah.",
                        status: "Rencana"
                    }
                ]
            },
            {
                number: 6,
                name: "Kreativitas, Keterampilan dan Kewirausahaan",
                members: [
                    "ADINDA SEPTIANA PUTRI - Koordinator",
                    "KEYLA ZALFA NAQIYA - Anggota",
                    "ZAKI ABDUL HAQ - Anggota"
                ],
                programs: [
                    {
                        name: "Bazar Kewirausahaan",
                        description: "Pasar siswa untuk menjual hasil karya dan produk kreatif.",
                        status: "Berjalan"
                    }
                ]
            },
            {
                number: 7,
                name: "Kualitas Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Yang Terdiversifikasi",
                members: [
                    "DEVIRA NABILIRAH - Koordinator",
                    "NURAINI - Anggota",
                ],
                programs: [
                    {
                        name: "Senam Sehat Bersama",
                        description: "Senam pagi setiap hari Jumat untuk menjaga kebugaran.",
                        status: "Berjalan"
                    },
                    {
                        name: "Pemeriksaan Kesehatan Rutin",
                        description: "Kerjasama dengan puskesmas untuk cek kesehatan berkala.",
                        status: "Rencana"
                    }
                ]
            },
            {
                number: 8,
                name: "Sastra dan Budaya",
                members: [
                    "GADIS YURA SAFA RASIKAH - Koordinator",
                    "BIANCA MYISHA NADIRA - Anggota",
                    "RENI - Anggota"
                ],
                programs: [
                    {
                        name: "Pentas Seni Budaya",
                        description: "Menampilkan berbagai kesenian tradisional dan modern.",
                        status: "Rencana"
                    }
                ]
            },
            {
                number: 9,
                name: "Teknologi, Informasi, dan Komunikasi",
                members: [
                    "AMIRAH HADJRIAH HARIS - Koordinator",
                    "NADIA KOHERUNISA - Anggota",
                    "CIKAL RAYA NUR AZKIYA - Anggota"
                ],
                programs: [
                    {
                        name: "Pelatihan Desain Grafis",
                        description: "Workshop desain untuk pemula.",
                        status: "Berjalan"
                    },
                    {
                        name: "Pengelolaan Media Sosial OSIS",
                        description: "Mengelola konten kreatif untuk Instagram dan TikTok OSIS.",
                        status: "Berjalan"
                    }
                ]
            },
            {
                number: 10,
                name: "Komunikasi Dalam Bahasa Inggris",
                members: [
                    "MARIO TEGUH JUNIOR - Koordinator",
                    "LISTIANA DEWI - Anggota",
                ],
                programs: [
                    {
                        name: "English Club",
                        description: "Kegiatan rutin untuk meningkatkan kemampuan berbahasa Inggris.",
                        status: "Berjalan"
                    },
                    {
                        name: "English Debate Competition",
                        description: "Kompetisi debat bahasa Inggris antar kelas.",
                        status: "Rencana"
                    }
                ]
            }
        ];

        // Fungsi untuk menampilkan detail pengurus
        function showPengurusDetail(id) {
            const data = pengurusData[id];
            if (!data) return;

            const modal = document.getElementById('pengurusModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('pengurusModalBody');

            modalTitle.textContent = data.jabatan;

            // Biodata items
            const biodataItems = `
                <div class="biodata-item">
                    <span class="biodata-label">Nama Lengkap</span>
                    <span class="biodata-value">${data.nama}</span>
                </div>
                <div class="biodata-item">
                    <span class="biodata-label">Kelas</span>
                    <span class="biodata-value">${data.kelas}</span>
                </div>
                <div class="biodata-item">
                    <span class="biodata-label">Tempat/Tanggal Lahir</span>
                    <span class="biodata-value">${data.tempatLahir}, ${data.tanggalLahir}</span>
                </div>
                <div class="biodata-item">
                    <span class="biodata-label">Alamat</span>
                    <span class="biodata-value">${data.alamat}</span>
                </div>
                <div class="biodata-item">
                    <span class="biodata-label">Hobi</span>
                    <span class="biodata-value">${data.hobi}</span>
                </div>
                <div class="biodata-item">
                    <span class="biodata-label">Motto</span>
                    <span class="biodata-value">"${data.motto}"</span>
                </div>
            `;

            // Program kerja items
            const programItems = data.programKerja.map(prog => `
                <div class="program-card">
                    <h5>${prog.nama}</h5>
                    <div class="program-desc">${prog.deskripsi}</div>
                    <div class="program-meta">
                        <span>Target: ${prog.target}</span>
                        <span class="program-status status-${prog.status === 'Berjalan' ? 'ongoing' : (prog.status === 'Selesai' ? 'done' : 'plan')}">
                            ${prog.status}
                        </span>
                    </div>
                </div>
            `).join('');

            // Visi Misi (khusus untuk ketua)
            const visiMisiSection = data.id === 'ketua' ? `
                <div class="visi-misi-section">
                    <h4>🎯 Visi & Misi</h4>
                    <div class="visi-item">
                        <strong>Visi:</strong>
                        <p>${data.visi}</p>
                    </div>
                    <div class="misi-item">
                        <strong>Misi:</strong>
                        <ul class="misi-list">
                            ${data.misi.map(m => `<li>${m}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            ` : '';

            modalBody.innerHTML = `
                <div class="profile-header">
                    <img src="${data.foto}" alt="${data.nama}" class="profile-avatar">
                    <div class="profile-info">
                        <h3>${data.nama}</h3>
                        <span class="profile-role">${data.jabatan}</span>
                        <div class="profile-detail">
                            <span class="detail-item"><strong>Kelas:</strong> ${data.kelas}</span>
                            <span class="detail-item"><strong>Hobi:</strong> ${data.hobi}</span>
                        </div>
                    </div>
                </div>

                <div class="biodata-section">
                    <h4>📋 Biodata Lengkap</h4>
                    <div class="biodata-grid">
                        ${biodataItems}
                    </div>
                </div>

                ${visiMisiSection}

                <div class="program-section">
                    <h4>📋 Program Kerja</h4>
                    ${programItems}
                </div>
            `;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Fungsi untuk menampilkan detail sekbid
        function showSekbidDetail(sekbidNumber) {
            const sekbid = sekbidData.find(s => s.number === sekbidNumber);
            if (!sekbid) return;

            const modal = document.getElementById('sekbidModal');
            const modalTitle = document.getElementById('sekbidModalTitle');
            const modalBody = document.getElementById('sekbidModalBody');

            modalTitle.textContent = `SEKBID ${sekbid.number}`;

            const memberItems = sekbid.members.map(member => `
                <li>
                    <span class="member-icon">${member.charAt(0)}</span>
                    <span>${member}</span>
                </li>
            `).join('');

            const programItems = sekbid.programs.map(program => `
                <div class="program-item">
                    <h4>${program.name} 
                        <span class="program-status ${program.status === 'Berjalan' ? 'status-ongoing' : 'status-plan'}">
                            ${program.status}
                        </span>
                    </h4>
                    <p>${program.description}</p>
                </div>
            `).join('');

            modalBody.innerHTML = `
                <div class="sekbid-detail">
                    <h3>Deskripsi Bidang</h3>
                    <p style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-primary); border-radius: 12px;">
                        ${sekbid.name}
                    </p>
                </div>
                
                <div class="sekbid-detail">
                    <h3>Anggota</h3>
                    <ul class="member-list">
                        ${memberItems}
                    </ul>
                </div>
                
                <div class="sekbid-detail">
                    <h3>Program Kerja</h3>
                    <div class="program-list">
                        ${programItems}
                    </div>
                </div>
            `;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Fungsi untuk menutup modal pengurus
        function closePengurusModal() {
            const modal = document.getElementById('pengurusModal');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        // Fungsi untuk menutup modal sekbid
        function closeSekbidModal() {
            const modal = document.getElementById('sekbidModal');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        // Tutup modal jika klik di luar konten modal
        window.onclick = function(event) {
            const pengurusModal = document.getElementById('pengurusModal');
            const sekbidModal = document.getElementById('sekbidModal');
            
            if (event.target === pengurusModal) {
                closePengurusModal();
            }
            if (event.target === sekbidModal) {
                closeSekbidModal();
            }
        }

        // Event listener untuk tombol ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closePengurusModal();
                closeSekbidModal();
            }
        });

        // Tampilkan sekbid di grid
        function tampilkanSekbidInteraktif() {
            const container = document.getElementById('sekbid-list');
            if (!container) return;

            container.innerHTML = sekbidData.map(sekbid => `
                <div class="sekbid-card" onclick="showSekbidDetail(${sekbid.number})">
                    <span class="sekbid-num">${sekbid.number}</span>
                    <h4>SEKBID ${sekbid.number}</h4>
                    <p>${sekbid.name}</p>
                </div>
            `).join('');
        }

        // Inisialisasi saat halaman dimuat
        document.addEventListener('DOMContentLoaded', () => {
            tampilkanSekbidInteraktif();
        });
