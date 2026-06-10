const sentences = [
  // SAPAAN & PERKENALAN
  { id: 1, id_text: "Nama saya adalah Bima.", en: ["My", "name", "is", "Bima."], cat: "Sapaan" },
  { id: 2, id_text: "Senang bertemu dengan kamu.", en: ["Nice", "to", "meet", "you."], cat: "Sapaan" },
  { id: 3, id_text: "Apa kabar kamu hari ini?", en: ["How", "are", "you", "today?"], cat: "Sapaan" },
  { id: 4, id_text: "Saya baik-baik saja, terima kasih.", en: ["I", "am", "fine,", "thank", "you."], cat: "Sapaan" },
  { id: 5, id_text: "Sampai jumpa besok!", en: ["See", "you", "tomorrow!"], cat: "Sapaan" },
  { id: 6, id_text: "Hati-hati di jalan ya.", en: ["Please", "be", "careful", "on", "the", "road."], cat: "Sapaan" },
  { id: 7, id_text: "Selamat datang di rumah saya.", en: ["Welcome", "to", "my", "house."], cat: "Sapaan" },
  { id: 8, id_text: "Saya dari Indonesia.", en: ["I", "am", "from", "Indonesia."], cat: "Sapaan" },

  // KELUARGA
  { id: 9, id_text: "Ibu saya adalah seorang guru.", en: ["My", "mother", "is", "a", "teacher."], cat: "Keluarga" },
  { id: 10, id_text: "Ayah saya bekerja di kantor.", en: ["My", "father", "works", "in", "the", "office."], cat: "Keluarga" },
  { id: 11, id_text: "Saya punya satu kakak laki-laki.", en: ["I", "have", "one", "older", "brother."], cat: "Keluarga" },
  { id: 12, id_text: "Adik perempuan saya sangat lucu.", en: ["My", "younger", "sister", "is", "very", "cute."], cat: "Keluarga" },
  { id: 13, id_text: "Kakek saya tinggal di desa.", en: ["My", "grandfather", "lives", "in", "the", "village."], cat: "Keluarga" },
  { id: 14, id_text: "Kami makan malam bersama setiap hari.", en: ["We", "have", "dinner", "together", "every", "day."], cat: "Keluarga" },

  // MAKANAN & MINUMAN
  { id: 15, id_text: "Saya suka makan nasi goreng.", en: ["I", "like", "to", "eat", "fried", "rice."], cat: "Makanan" },
  { id: 16, id_text: "Apakah kamu sudah sarapan?", en: ["Have", "you", "had", "breakfast?"], cat: "Makanan" },
  { id: 17, id_text: "Kopi ini terlalu manis untuk saya.", en: ["This", "coffee", "is", "too", "sweet", "for", "me."], cat: "Makanan" },
  { id: 18, id_text: "Mari kita makan siang bersama.", en: ["Let's", "have", "lunch", "together."], cat: "Makanan" },
  { id: 19, id_text: "Saya lapar sekali sekarang.", en: ["I", "am", "very", "hungry", "now."], cat: "Makanan" },
  { id: 20, id_text: "Tolong tambahkan gula ke teh saya.", en: ["Please", "add", "sugar", "to", "my", "tea."], cat: "Makanan" },
  { id: 21, id_text: "Makanan ini sangat lezat!", en: ["This", "food", "is", "very", "delicious!"], cat: "Makanan" },
  { id: 22, id_text: "Saya minum air putih setiap pagi.", en: ["I", "drink", "water", "every", "morning."], cat: "Makanan" },

  // SEKOLAH & BELAJAR
  { id: 23, id_text: "Saya belajar bahasa Inggris setiap hari.", en: ["I", "study", "English", "every", "day."], cat: "Sekolah" },
  { id: 24, id_text: "Ujian matematika sangat sulit.", en: ["The", "math", "exam", "is", "very", "difficult."], cat: "Sekolah" },
  { id: 25, id_text: "Tolong kerjakan PR kamu sekarang.", en: ["Please", "do", "your", "homework", "now."], cat: "Sekolah" },
  { id: 26, id_text: "Perpustakaan sekolah saya sangat besar.", en: ["My", "school", "library", "is", "very", "big."], cat: "Sekolah" },
  { id: 27, id_text: "Guru kami sangat sabar dan baik.", en: ["Our", "teacher", "is", "very", "patient", "and", "kind."], cat: "Sekolah" },
  { id: 28, id_text: "Saya lupa membawa buku pelajaran.", en: ["I", "forgot", "to", "bring", "my", "textbook."], cat: "Sekolah" },

  // PEKERJAAN
  { id: 29, id_text: "Saya bekerja di sebuah perusahaan besar.", en: ["I", "work", "at", "a", "big", "company."], cat: "Pekerjaan" },
  { id: 30, id_text: "Rapat dimulai jam sembilan pagi.", en: ["The", "meeting", "starts", "at", "nine", "in", "the", "morning."], cat: "Pekerjaan" },
  { id: 31, id_text: "Batas waktu laporan adalah besok.", en: ["The", "deadline", "for", "the", "report", "is", "tomorrow."], cat: "Pekerjaan" },
  { id: 32, id_text: "Dia mendapatkan kenaikan gaji bulan ini.", en: ["He", "got", "a", "salary", "raise", "this", "month."], cat: "Pekerjaan" },
  { id: 33, id_text: "Saya perlu mengirim email penting hari ini.", en: ["I", "need", "to", "send", "an", "important", "email", "today."], cat: "Pekerjaan" },

  // TRANSPORTASI
  { id: 34, id_text: "Bus sudah berangkat lima menit lalu.", en: ["The", "bus", "left", "five", "minutes", "ago."], cat: "Transportasi" },
  { id: 35, id_text: "Berapa lama perjalanan ke bandara?", en: ["How", "long", "is", "the", "trip", "to", "the", "airport?"], cat: "Transportasi" },
  { id: 36, id_text: "Jangan lupa beli tiket kereta api.", en: ["Don't", "forget", "to", "buy", "the", "train", "ticket."], cat: "Transportasi" },
  { id: 37, id_text: "Kemacetan lalu lintas sangat parah hari ini.", en: ["The", "traffic", "jam", "is", "very", "bad", "today."], cat: "Transportasi" },
  { id: 38, id_text: "Saya naik taksi ke kantor setiap hari.", en: ["I", "take", "a", "taxi", "to", "the", "office", "every", "day."], cat: "Transportasi" },

  // PERASAAN & EMOSI
  { id: 39, id_text: "Saya sangat bahagia mendengar kabar itu.", en: ["I", "am", "very", "happy", "to", "hear", "that", "news."], cat: "Perasaan" },
  { id: 40, id_text: "Dia terlihat sangat sedih hari ini.", en: ["She", "looks", "very", "sad", "today."], cat: "Perasaan" },
  { id: 41, id_text: "Jangan khawatir, semuanya akan baik-baik saja.", en: ["Don't", "worry,", "everything", "will", "be", "okay."], cat: "Perasaan" },
  { id: 42, id_text: "Saya merasa lelah setelah bekerja seharian.", en: ["I", "feel", "tired", "after", "working", "all", "day."], cat: "Perasaan" },
  { id: 43, id_text: "Kami sangat bersemangat untuk liburan ini.", en: ["We", "are", "very", "excited", "about", "this", "holiday."], cat: "Perasaan" },
  { id: 44, id_text: "Dia merasa bangga dengan pencapaiannya.", en: ["He", "feels", "proud", "of", "his", "achievement."], cat: "Perasaan" },

  // RUMAH & KEHIDUPAN SEHARI-HARI
  { id: 45, id_text: "Tolong tutup pintu sebelum tidur.", en: ["Please", "close", "the", "door", "before", "sleeping."], cat: "Rumah" },
  { id: 46, id_text: "Kamar tidur saya sangat nyaman.", en: ["My", "bedroom", "is", "very", "comfortable."], cat: "Rumah" },
  { id: 47, id_text: "Saya bangun jam enam setiap pagi.", en: ["I", "wake", "up", "at", "six", "every", "morning."], cat: "Rumah" },
  { id: 48, id_text: "Tolong matikan lampu sebelum keluar.", en: ["Please", "turn", "off", "the", "light", "before", "leaving."], cat: "Rumah" },
  { id: 49, id_text: "Ibu sedang memasak di dapur.", en: ["Mother", "is", "cooking", "in", "the", "kitchen."], cat: "Rumah" },
  { id: 50, id_text: "Kami menonton televisi bersama malam ini.", en: ["We", "watch", "television", "together", "tonight."], cat: "Rumah" },

  // BELANJA
  { id: 51, id_text: "Berapa harga baju ini?", en: ["How", "much", "is", "this", "shirt?"], cat: "Belanja" },
  { id: 52, id_text: "Apakah ada diskon untuk produk ini?", en: ["Is", "there", "a", "discount", "for", "this", "product?"], cat: "Belanja" },
  { id: 53, id_text: "Saya ingin membeli sepatu baru.", en: ["I", "want", "to", "buy", "new", "shoes."], cat: "Belanja" },
  { id: 54, id_text: "Harga barang ini terlalu mahal.", en: ["The", "price", "of", "this", "item", "is", "too", "expensive."], cat: "Belanja" },
  { id: 55, id_text: "Boleh saya bayar dengan kartu kredit?", en: ["Can", "I", "pay", "with", "a", "credit", "card?"], cat: "Belanja" },
  { id: 56, id_text: "Tolong simpan struk belanja saya.", en: ["Please", "keep", "my", "shopping", "receipt."], cat: "Belanja" },

  // TEKNOLOGI
  { id: 57, id_text: "Baterai HP saya hampir habis.", en: ["My", "phone", "battery", "is", "almost", "dead."], cat: "Teknologi" },
  { id: 58, id_text: "Koneksi internet hari ini sangat lambat.", en: ["The", "internet", "connection", "is", "very", "slow", "today."], cat: "Teknologi" },
  { id: 59, id_text: "Tolong kirimkan file itu lewat email.", en: ["Please", "send", "that", "file", "via", "email."], cat: "Teknologi" },
  { id: 60, id_text: "Saya perlu mengunduh aplikasi baru.", en: ["I", "need", "to", "download", "a", "new", "application."], cat: "Teknologi" },
  { id: 61, id_text: "Kata sandi kamu harus lebih kuat.", en: ["Your", "password", "needs", "to", "be", "stronger."], cat: "Teknologi" },

  // KESEHATAN
  { id: 62, id_text: "Saya perlu pergi ke dokter hari ini.", en: ["I", "need", "to", "go", "to", "the", "doctor", "today."], cat: "Kesehatan" },
  { id: 63, id_text: "Jangan lupa minum obat setelah makan.", en: ["Don't", "forget", "to", "take", "your", "medicine", "after", "eating."], cat: "Kesehatan" },
  { id: 64, id_text: "Olahraga setiap hari sangat baik untuk kesehatan.", en: ["Exercising", "every", "day", "is", "very", "good", "for", "health."], cat: "Kesehatan" },
  { id: 65, id_text: "Kepala saya sakit sejak tadi pagi.", en: ["My", "head", "has", "been", "hurting", "since", "this", "morning."], cat: "Kesehatan" },
  { id: 66, id_text: "Saya harus istirahat yang cukup malam ini.", en: ["I", "need", "to", "get", "enough", "rest", "tonight."], cat: "Kesehatan" },

  // ALAM & CUACA
  { id: 67, id_text: "Cuaca hari ini sangat panas.", en: ["The", "weather", "is", "very", "hot", "today."], cat: "Alam" },
  { id: 68, id_text: "Bawa payung karena akan hujan.", en: ["Bring", "an", "umbrella", "because", "it", "will", "rain."], cat: "Alam" },
  { id: 69, id_text: "Pemandangan matahari terbenam sangat indah.", en: ["The", "sunset", "view", "is", "very", "beautiful."], cat: "Alam" },
  { id: 70, id_text: "Gunung itu sangat tinggi dan megah.", en: ["That", "mountain", "is", "very", "tall", "and", "majestic."], cat: "Alam" },
  { id: 71, id_text: "Kami pergi ke pantai akhir pekan lalu.", en: ["We", "went", "to", "the", "beach", "last", "weekend."], cat: "Alam" },

  // OLAHRAGA & HOBI
  { id: 72, id_text: "Saya suka bermain bulu tangkis setiap sore.", en: ["I", "like", "to", "play", "badminton", "every", "afternoon."], cat: "Olahraga" },
  { id: 73, id_text: "Tim kami memenangkan pertandingan kemarin.", en: ["Our", "team", "won", "the", "match", "yesterday."], cat: "Olahraga" },
  { id: 74, id_text: "Berenang adalah olahraga yang menyehatkan.", en: ["Swimming", "is", "a", "healthy", "sport."], cat: "Olahraga" },
  { id: 75, id_text: "Saya berlatih lari setiap pagi selama satu jam.", en: ["I", "practice", "running", "every", "morning", "for", "one", "hour."], cat: "Olahraga" },
  { id: 76, id_text: "Fotografi adalah hobi favorit saya.", en: ["Photography", "is", "my", "favorite", "hobby."], cat: "Olahraga" },

  // WISATA & PERJALANAN
  { id: 77, id_text: "Saya ingin berlibur ke Bali tahun depan.", en: ["I", "want", "to", "vacation", "in", "Bali", "next", "year."], cat: "Wisata" },
  { id: 78, id_text: "Jangan lupa membawa paspor kamu.", en: ["Don't", "forget", "to", "bring", "your", "passport."], cat: "Wisata" },
  { id: 79, id_text: "Hotel ini memiliki pemandangan yang luar biasa.", en: ["This", "hotel", "has", "an", "amazing", "view."], cat: "Wisata" },
  { id: 80, id_text: "Kami sudah memesan tiket pesawat.", en: ["We", "have", "already", "booked", "the", "plane", "ticket."], cat: "Wisata" },
  { id: 81, id_text: "Panduan wisata itu sangat membantu kami.", en: ["The", "tour", "guide", "was", "very", "helpful", "to", "us."], cat: "Wisata" },

  // BISNIS
  { id: 82, id_text: "Kami perlu mendiskusikan strategi baru.", en: ["We", "need", "to", "discuss", "a", "new", "strategy."], cat: "Bisnis" },
  { id: 83, id_text: "Klien itu sangat puas dengan layanan kami.", en: ["The", "client", "is", "very", "satisfied", "with", "our", "service."], cat: "Bisnis" },
  { id: 84, id_text: "Pendapatan perusahaan meningkat bulan ini.", en: ["The", "company's", "revenue", "increased", "this", "month."], cat: "Bisnis" },
  { id: 85, id_text: "Proposal proyek harus selesai minggu depan.", en: ["The", "project", "proposal", "must", "be", "finished", "next", "week."], cat: "Bisnis" },

  // PERCAKAPAN UMUM
  { id: 86, id_text: "Bisakah kamu tolong bantu saya?", en: ["Can", "you", "please", "help", "me?"], cat: "Percakapan" },
  { id: 87, id_text: "Maaf, saya tidak mengerti apa yang kamu maksud.", en: ["Sorry,", "I", "don't", "understand", "what", "you", "mean."], cat: "Percakapan" },
  { id: 88, id_text: "Bisakah kamu berbicara lebih lambat?", en: ["Can", "you", "speak", "more", "slowly?"], cat: "Percakapan" },
  { id: 89, id_text: "Tentu saja, saya dengan senang hati membantu.", en: ["Of", "course,", "I", "am", "happy", "to", "help."], cat: "Percakapan" },
  { id: 90, id_text: "Menurut saya, ide itu sangat bagus.", en: ["In", "my", "opinion,", "that", "idea", "is", "very", "good."], cat: "Percakapan" },
  { id: 91, id_text: "Ngomong-ngomong, kamu sudah makan belum?", en: ["By", "the", "way,", "have", "you", "eaten", "yet?"], cat: "Percakapan" },
  { id: 92, id_text: "Saya setuju dengan pendapat kamu.", en: ["I", "agree", "with", "your", "opinion."], cat: "Percakapan" },
  { id: 93, id_text: "Maukah kamu pergi ke bioskop malam ini?", en: ["Would", "you", "like", "to", "go", "to", "the", "cinema", "tonight?"], cat: "Percakapan" },

  // IDIOM & UNGKAPAN
  { id: 94, id_text: "Soal itu mudah sekali bagiku.", en: ["That", "problem", "is", "a", "piece", "of", "cake", "for", "me."], cat: "Idiom" },
  { id: 95, id_text: "Semoga sukses dalam ujianmu!", en: ["Break", "a", "leg", "in", "your", "exam!"], cat: "Idiom" },
  { id: 96, id_text: "Dia tidak pernah datang tepat waktu.", en: ["He", "never", "comes", "on", "time."], cat: "Idiom" },
  { id: 97, id_text: "Aku tidak enak badan hari ini.", en: ["I", "am", "feeling", "under", "the", "weather", "today."], cat: "Idiom" },

  // MOTIVASI & INSPIRASI
  { id: 98, id_text: "Jangan pernah menyerah pada mimpimu.", en: ["Never", "give", "up", "on", "your", "dreams."], cat: "Motivasi" },
  { id: 99, id_text: "Setiap hari adalah kesempatan baru untuk belajar.", en: ["Every", "day", "is", "a", "new", "opportunity", "to", "learn."], cat: "Motivasi" },
  { id: 100, id_text: "Kamu pasti bisa jika kamu terus berusaha.", en: ["You", "can", "do", "it", "if", "you", "keep", "trying."], cat: "Motivasi" },
];
