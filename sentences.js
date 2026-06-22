const sentences = [
  // SAPAAN & PERKENALAN
  { id: 1, id_text: "Nama saya adalah Nathan.", en: ["My", "name", "is", "Nathan."], cat: "Sapaan" },
  { id: 2, id_text: "Senang bertemu dengan kamu.", en: ["Nice", "to", "meet", "you."], cat: "Sapaan" },
  { id: 3, id_text: "Apa kabar kamu hari ini?", en: ["How", "are", "you", "today?"], cat: "Sapaan" },
  { id: 4, id_text: "Saya baik-baik saja, terima kasih.", en: ["I", "am", "fine,", "thank", "you."], cat: "Sapaan" },
  { id: 5, id_text: "Sampai jumpa besok!", en: ["See", "you", "tomorrow!"], cat: "Sapaan" },
  { id: 6, id_text: "Hati-hati di jalan ya.", en: ["Please", "be", "careful", "on", "the", "road."], cat: "Sapaan" },
  { id: 7, id_text: "Selamat datang di rumah saya.", en: ["Welcome", "to", "my", "house."], cat: "Sapaan" },
  { id: 8, id_text: "Saya dari Indonesia.", en: ["I", "am", "from", "Indonesia."], cat: "Sapaan" },
  { id: 9, id_text: "Sudah lama tidak bertemu.", en: ["Long", "time", "no", "see."], cat: "Sapaan" },
  { id: 10, id_text: "Selamat pagi, semoga harimu menyenangkan.", en: ["Good", "morning,", "have", "a", "nice", "day."], cat: "Sapaan" },
  { id: 11, id_text: "Saya tinggal di Jakarta.", en: ["I", "live", "in", "Jakarta."], cat: "Sapaan" },
  { id: 12, id_text: "Berapa umur kamu?", en: ["How", "old", "are", "you?"], cat: "Sapaan" },
  { id: 13, id_text: "Saya berumur dua puluh tahun.", en: ["I", "am", "twenty", "years", "old."], cat: "Sapaan" },
  { id: 14, id_text: "Apa pekerjaan kamu?", en: ["What", "is", "your", "job?"], cat: "Sapaan" },
  { id: 15, id_text: "Senang bisa berbicara dengan kamu.", en: ["It", "is", "nice", "to", "talk", "to", "you."], cat: "Sapaan" },

  // KELUARGA
  { id: 16, id_text: "Ibu saya adalah seorang guru.", en: ["My", "mother", "is", "a", "teacher."], cat: "Keluarga" },
  { id: 17, id_text: "Ayah saya bekerja di kantor.", en: ["My", "father", "works", "in", "the", "office."], cat: "Keluarga" },
  { id: 18, id_text: "Saya punya satu kakak laki-laki.", en: ["I", "have", "one", "older", "brother."], cat: "Keluarga" },
  { id: 19, id_text: "Adik perempuan saya sangat lucu.", en: ["My", "younger", "sister", "is", "very", "cute."], cat: "Keluarga" },
  { id: 20, id_text: "Kakek saya tinggal di desa.", en: ["My", "grandfather", "lives", "in", "the", "village."], cat: "Keluarga" },
  { id: 21, id_text: "Kami makan malam bersama setiap hari.", en: ["We", "have", "dinner", "together", "every", "day."], cat: "Keluarga" },
  { id: 22, id_text: "Nenek saya memasak makanan terlezat.", en: ["My", "grandmother", "cooks", "the", "most", "delicious", "food."], cat: "Keluarga" },
  { id: 23, id_text: "Kami adalah keluarga yang bahagia.", en: ["We", "are", "a", "happy", "family."], cat: "Keluarga" },
  { id: 24, id_text: "Sepupu saya tinggal di Bandung.", en: ["My", "cousin", "lives", "in", "Bandung."], cat: "Keluarga" },
  { id: 25, id_text: "Paman saya baru saja membeli mobil baru.", en: ["My", "uncle", "just", "bought", "a", "new", "car."], cat: "Keluarga" },

  // MAKANAN & MINUMAN
  { id: 26, id_text: "Saya suka makan nasi goreng.", en: ["I", "like", "to", "eat", "fried", "rice."], cat: "Makanan" },
  { id: 27, id_text: "Apakah kamu sudah sarapan?", en: ["Have", "you", "had", "breakfast?"], cat: "Makanan" },
  { id: 28, id_text: "Kopi ini terlalu manis untuk saya.", en: ["This", "coffee", "is", "too", "sweet", "for", "me."], cat: "Makanan" },
  { id: 29, id_text: "Mari kita makan siang bersama.", en: ["Let's", "have", "lunch", "together."], cat: "Makanan" },
  { id: 30, id_text: "Saya lapar sekali sekarang.", en: ["I", "am", "very", "hungry", "now."], cat: "Makanan" },
  { id: 31, id_text: "Tolong tambahkan gula ke teh saya.", en: ["Please", "add", "sugar", "to", "my", "tea."], cat: "Makanan" },
  { id: 32, id_text: "Makanan ini sangat lezat!", en: ["This", "food", "is", "very", "delicious!"], cat: "Makanan" },
  { id: 33, id_text: "Saya minum air putih setiap pagi.", en: ["I", "drink", "water", "every", "morning."], cat: "Makanan" },
  { id: 34, id_text: "Mangga adalah buah favorit saya.", en: ["Mango", "is", "my", "favorite", "fruit."], cat: "Makanan" },
  { id: 35, id_text: "Tolong pesan makanan untuk saya.", en: ["Please", "order", "food", "for", "me."], cat: "Makanan" },
  { id: 36, id_text: "Saya tidak suka makanan yang terlalu pedas.", en: ["I", "do", "not", "like", "food", "that", "is", "too", "spicy."], cat: "Makanan" },
  { id: 37, id_text: "Restoran ini menyajikan masakan Indonesia.", en: ["This", "restaurant", "serves", "Indonesian", "cuisine."], cat: "Makanan" },
  { id: 38, id_text: "Saya ingin memesan segelas jus jeruk.", en: ["I", "want", "to", "order", "a", "glass", "of", "orange", "juice."], cat: "Makanan" },

  // SEKOLAH & BELAJAR
  { id: 39, id_text: "Saya belajar bahasa Inggris setiap hari.", en: ["I", "study", "English", "every", "day."], cat: "Sekolah" },
  { id: 40, id_text: "Ujian matematika sangat sulit.", en: ["The", "math", "exam", "is", "very", "difficult."], cat: "Sekolah" },
  { id: 41, id_text: "Tolong kerjakan PR kamu sekarang.", en: ["Please", "do", "your", "homework", "now."], cat: "Sekolah" },
  { id: 42, id_text: "Perpustakaan sekolah saya sangat besar.", en: ["My", "school", "library", "is", "very", "big."], cat: "Sekolah" },
  { id: 43, id_text: "Guru kami sangat sabar dan baik.", en: ["Our", "teacher", "is", "very", "patient", "and", "kind."], cat: "Sekolah" },
  { id: 44, id_text: "Saya lupa membawa buku pelajaran.", en: ["I", "forgot", "to", "bring", "my", "textbook."], cat: "Sekolah" },
  { id: 45, id_text: "Kelas dimulai pukul tujuh pagi.", en: ["Class", "starts", "at", "seven", "in", "the", "morning."], cat: "Sekolah" },
  { id: 46, id_text: "Saya mendapat nilai bagus di ujian.", en: ["I", "got", "a", "good", "grade", "on", "the", "exam."], cat: "Sekolah" },
  { id: 47, id_text: "Kami berdiskusi tentang sejarah Indonesia.", en: ["We", "discuss", "about", "Indonesian", "history."], cat: "Sekolah" },
  { id: 48, id_text: "Tolong pinjamkan pensil kamu kepadaku.", en: ["Please", "lend", "me", "your", "pencil."], cat: "Sekolah" },
  { id: 49, id_text: "Presentasi saya akan dilakukan besok.", en: ["My", "presentation", "will", "be", "done", "tomorrow."], cat: "Sekolah" },
  { id: 50, id_text: "Saya mendaftar ke universitas impian saya.", en: ["I", "applied", "to", "my", "dream", "university."], cat: "Sekolah" },

  // PEKERJAAN
  { id: 51, id_text: "Saya bekerja di sebuah perusahaan besar.", en: ["I", "work", "at", "a", "big", "company."], cat: "Pekerjaan" },
  { id: 52, id_text: "Rapat dimulai jam sembilan pagi.", en: ["The", "meeting", "starts", "at", "nine", "in", "the", "morning."], cat: "Pekerjaan" },
  { id: 53, id_text: "Batas waktu laporan adalah besok.", en: ["The", "deadline", "for", "the", "report", "is", "tomorrow."], cat: "Pekerjaan" },
  { id: 54, id_text: "Dia mendapatkan kenaikan gaji bulan ini.", en: ["He", "got", "a", "salary", "raise", "this", "month."], cat: "Pekerjaan" },
  { id: 55, id_text: "Saya perlu mengirim email penting hari ini.", en: ["I", "need", "to", "send", "an", "important", "email", "today."], cat: "Pekerjaan" },
  { id: 56, id_text: "Rekan kerja saya sangat membantu.", en: ["My", "colleague", "is", "very", "helpful."], cat: "Pekerjaan" },
  { id: 57, id_text: "Saya sedang mengerjakan proyek baru.", en: ["I", "am", "working", "on", "a", "new", "project."], cat: "Pekerjaan" },
  { id: 58, id_text: "Atasan saya memberikan umpan balik yang baik.", en: ["My", "boss", "gave", "me", "good", "feedback."], cat: "Pekerjaan" },
  { id: 59, id_text: "Kantor kami terletak di pusat kota.", en: ["Our", "office", "is", "located", "in", "the", "city", "center."], cat: "Pekerjaan" },
  { id: 60, id_text: "Saya ingin melamar pekerjaan baru.", en: ["I", "want", "to", "apply", "for", "a", "new", "job."], cat: "Pekerjaan" },

  // TRANSPORTASI
  { id: 61, id_text: "Bus sudah berangkat lima menit lalu.", en: ["The", "bus", "left", "five", "minutes", "ago."], cat: "Transportasi" },
  { id: 62, id_text: "Berapa lama perjalanan ke bandara?", en: ["How", "long", "is", "the", "trip", "to", "the", "airport?"], cat: "Transportasi" },
  { id: 63, id_text: "Jangan lupa beli tiket kereta api.", en: ["Don't", "forget", "to", "buy", "the", "train", "ticket."], cat: "Transportasi" },
  { id: 64, id_text: "Kemacetan lalu lintas sangat parah hari ini.", en: ["The", "traffic", "jam", "is", "very", "bad", "today."], cat: "Transportasi" },
  { id: 65, id_text: "Saya naik taksi ke kantor setiap hari.", en: ["I", "take", "a", "taxi", "to", "the", "office", "every", "day."], cat: "Transportasi" },
  { id: 66, id_text: "Pesawat akan berangkat dalam satu jam.", en: ["The", "airplane", "will", "depart", "in", "one", "hour."], cat: "Transportasi" },
  { id: 67, id_text: "Di mana stasiun kereta terdekat?", en: ["Where", "is", "the", "nearest", "train", "station?"], cat: "Transportasi" },
  { id: 68, id_text: "Tolong hentikan taksi untuk saya.", en: ["Please", "stop", "a", "taxi", "for", "me."], cat: "Transportasi" },
  { id: 69, id_text: "Saya lebih suka naik sepeda ke tempat kerja.", en: ["I", "prefer", "to", "ride", "a", "bicycle", "to", "work."], cat: "Transportasi" },
  { id: 70, id_text: "Jembatan itu sangat panjang dan indah.", en: ["That", "bridge", "is", "very", "long", "and", "beautiful."], cat: "Transportasi" },

  // PERASAAN & EMOSI
  { id: 71, id_text: "Saya sangat bahagia mendengar kabar itu.", en: ["I", "am", "very", "happy", "to", "hear", "that", "news."], cat: "Perasaan" },
  { id: 72, id_text: "Dia terlihat sangat sedih hari ini.", en: ["She", "looks", "very", "sad", "today."], cat: "Perasaan" },
  { id: 73, id_text: "Jangan khawatir, semuanya akan baik-baik saja.", en: ["Don't", "worry,", "everything", "will", "be", "okay."], cat: "Perasaan" },
  { id: 74, id_text: "Saya merasa lelah setelah bekerja seharian.", en: ["I", "feel", "tired", "after", "working", "all", "day."], cat: "Perasaan" },
  { id: 75, id_text: "Kami sangat bersemangat untuk liburan ini.", en: ["We", "are", "very", "excited", "about", "this", "holiday."], cat: "Perasaan" },
  { id: 76, id_text: "Dia merasa bangga dengan pencapaiannya.", en: ["He", "feels", "proud", "of", "his", "achievement."], cat: "Perasaan" },
  { id: 77, id_text: "Saya merasa gugup sebelum presentasi.", en: ["I", "feel", "nervous", "before", "the", "presentation."], cat: "Perasaan" },
  { id: 78, id_text: "Dia sangat terkejut mendengar berita itu.", en: ["She", "was", "very", "surprised", "to", "hear", "the", "news."], cat: "Perasaan" },
  { id: 79, id_text: "Saya merasa bersyukur atas semua yang saya miliki.", en: ["I", "feel", "grateful", "for", "everything", "I", "have."], cat: "Perasaan" },
  { id: 80, id_text: "Jangan marah, mari bicarakan baik-baik.", en: ["Don't", "be", "angry,", "let's", "talk", "it", "out."], cat: "Perasaan" },

  // RUMAH & KEHIDUPAN SEHARI-HARI
  { id: 81, id_text: "Tolong tutup pintu sebelum tidur.", en: ["Please", "close", "the", "door", "before", "sleeping."], cat: "Rumah" },
  { id: 82, id_text: "Kamar tidur saya sangat nyaman.", en: ["My", "bedroom", "is", "very", "comfortable."], cat: "Rumah" },
  { id: 83, id_text: "Saya bangun jam enam setiap pagi.", en: ["I", "wake", "up", "at", "six", "every", "morning."], cat: "Rumah" },
  { id: 84, id_text: "Tolong matikan lampu sebelum keluar.", en: ["Please", "turn", "off", "the", "light", "before", "leaving."], cat: "Rumah" },
  { id: 85, id_text: "Ibu sedang memasak di dapur.", en: ["Mother", "is", "cooking", "in", "the", "kitchen."], cat: "Rumah" },
  { id: 86, id_text: "Kami menonton televisi bersama malam ini.", en: ["We", "watch", "television", "together", "tonight."], cat: "Rumah" },
  { id: 87, id_text: "Tolong buka jendela agar udara masuk.", en: ["Please", "open", "the", "window", "to", "let", "air", "in."], cat: "Rumah" },
  { id: 88, id_text: "Saya membersihkan kamar setiap akhir pekan.", en: ["I", "clean", "my", "room", "every", "weekend."], cat: "Rumah" },
  { id: 89, id_text: "Kulkas kami sudah penuh dengan makanan.", en: ["Our", "refrigerator", "is", "already", "full", "of", "food."], cat: "Rumah" },
  { id: 90, id_text: "Rumah kami memiliki taman yang indah.", en: ["Our", "house", "has", "a", "beautiful", "garden."], cat: "Rumah" },

  // BELANJA
  { id: 91, id_text: "Berapa harga baju ini?", en: ["How", "much", "is", "this", "shirt?"], cat: "Belanja" },
  { id: 92, id_text: "Apakah ada diskon untuk produk ini?", en: ["Is", "there", "a", "discount", "for", "this", "product?"], cat: "Belanja" },
  { id: 93, id_text: "Saya ingin membeli sepatu baru.", en: ["I", "want", "to", "buy", "new", "shoes."], cat: "Belanja" },
  { id: 94, id_text: "Harga barang ini terlalu mahal.", en: ["The", "price", "of", "this", "item", "is", "too", "expensive."], cat: "Belanja" },
  { id: 95, id_text: "Boleh saya bayar dengan kartu kredit?", en: ["Can", "I", "pay", "with", "a", "credit", "card?"], cat: "Belanja" },
  { id: 96, id_text: "Tolong simpan struk belanja saya.", en: ["Please", "keep", "my", "shopping", "receipt."], cat: "Belanja" },
  { id: 97, id_text: "Ada diskon lima puluh persen hari ini.", en: ["There", "is", "a", "fifty", "percent", "discount", "today."], cat: "Belanja" },
  { id: 98, id_text: "Saya ingin menukar barang ini.", en: ["I", "want", "to", "exchange", "this", "item."], cat: "Belanja" },
  { id: 99, id_text: "Apakah ada ukuran yang lebih besar?", en: ["Is", "there", "a", "bigger", "size?"], cat: "Belanja" },
  { id: 100, id_text: "Kasir itu sangat ramah dan membantu.", en: ["The", "cashier", "is", "very", "friendly", "and", "helpful."], cat: "Belanja" },

  // TEKNOLOGI
  { id: 101, id_text: "Baterai HP saya hampir habis.", en: ["My", "phone", "battery", "is", "almost", "dead."], cat: "Teknologi" },
  { id: 102, id_text: "Koneksi internet hari ini sangat lambat.", en: ["The", "internet", "connection", "is", "very", "slow", "today."], cat: "Teknologi" },
  { id: 103, id_text: "Tolong kirimkan file itu lewat email.", en: ["Please", "send", "that", "file", "via", "email."], cat: "Teknologi" },
  { id: 104, id_text: "Saya perlu mengunduh aplikasi baru.", en: ["I", "need", "to", "download", "a", "new", "application."], cat: "Teknologi" },
  { id: 105, id_text: "Kata sandi kamu harus lebih kuat.", en: ["Your", "password", "needs", "to", "be", "stronger."], cat: "Teknologi" },
  { id: 106, id_text: "Tolong hidupkan komputer saya.", en: ["Please", "turn", "on", "my", "computer."], cat: "Teknologi" },
  { id: 107, id_text: "Saya tidak bisa terhubung ke wifi.", en: ["I", "cannot", "connect", "to", "the", "wifi."], cat: "Teknologi" },
  { id: 108, id_text: "Aplikasi ini sangat mudah digunakan.", en: ["This", "application", "is", "very", "easy", "to", "use."], cat: "Teknologi" },
  { id: 109, id_text: "Tolong perbarui perangkat lunak kamu.", en: ["Please", "update", "your", "software."], cat: "Teknologi" },
  { id: 110, id_text: "Layar HP saya retak karena jatuh.", en: ["My", "phone", "screen", "cracked", "because", "it", "fell."], cat: "Teknologi" },

  // KESEHATAN
  { id: 111, id_text: "Saya perlu pergi ke dokter hari ini.", en: ["I", "need", "to", "go", "to", "the", "doctor", "today."], cat: "Kesehatan" },
  { id: 112, id_text: "Jangan lupa minum obat setelah makan.", en: ["Don't", "forget", "to", "take", "your", "medicine", "after", "eating."], cat: "Kesehatan" },
  { id: 113, id_text: "Olahraga setiap hari sangat baik untuk kesehatan.", en: ["Exercising", "every", "day", "is", "very", "good", "for", "health."], cat: "Kesehatan" },
  { id: 114, id_text: "Kepala saya sakit sejak tadi pagi.", en: ["My", "head", "has", "been", "hurting", "since", "this", "morning."], cat: "Kesehatan" },
  { id: 115, id_text: "Saya harus istirahat yang cukup malam ini.", en: ["I", "need", "to", "get", "enough", "rest", "tonight."], cat: "Kesehatan" },
  { id: 116, id_text: "Dia demam dan harus tinggal di rumah.", en: ["She", "has", "a", "fever", "and", "must", "stay", "at", "home."], cat: "Kesehatan" },
  { id: 117, id_text: "Tolong hubungi ambulans segera.", en: ["Please", "call", "the", "ambulance", "immediately."], cat: "Kesehatan" },
  { id: 118, id_text: "Makan sayuran dan buah setiap hari.", en: ["Eat", "vegetables", "and", "fruits", "every", "day."], cat: "Kesehatan" },
  { id: 119, id_text: "Saya alergi terhadap beberapa jenis makanan.", en: ["I", "am", "allergic", "to", "some", "types", "of", "food."], cat: "Kesehatan" },
  { id: 120, id_text: "Cuci tangan sebelum dan sesudah makan.", en: ["Wash", "your", "hands", "before", "and", "after", "eating."], cat: "Kesehatan" },

  // ALAM & CUACA
  { id: 121, id_text: "Cuaca hari ini sangat panas.", en: ["The", "weather", "is", "very", "hot", "today."], cat: "Alam" },
  { id: 122, id_text: "Bawa payung karena akan hujan.", en: ["Bring", "an", "umbrella", "because", "it", "will", "rain."], cat: "Alam" },
  { id: 123, id_text: "Pemandangan matahari terbenam sangat indah.", en: ["The", "sunset", "view", "is", "very", "beautiful."], cat: "Alam" },
  { id: 124, id_text: "Gunung itu sangat tinggi dan megah.", en: ["That", "mountain", "is", "very", "tall", "and", "majestic."], cat: "Alam" },
  { id: 125, id_text: "Kami pergi ke pantai akhir pekan lalu.", en: ["We", "went", "to", "the", "beach", "last", "weekend."], cat: "Alam" },
  { id: 126, id_text: "Sungai itu mengalir dengan deras.", en: ["The", "river", "flows", "very", "fast."], cat: "Alam" },
  { id: 127, id_text: "Hutan ini memiliki banyak pohon yang tinggi.", en: ["This", "forest", "has", "many", "tall", "trees."], cat: "Alam" },
  { id: 128, id_text: "Langit malam dipenuhi oleh bintang.", en: ["The", "night", "sky", "is", "full", "of", "stars."], cat: "Alam" },
  { id: 129, id_text: "Angin bertiup kencang hari ini.", en: ["The", "wind", "is", "blowing", "strongly", "today."], cat: "Alam" },
  { id: 130, id_text: "Pelangi muncul setelah hujan berhenti.", en: ["A", "rainbow", "appeared", "after", "the", "rain", "stopped."], cat: "Alam" },

  // OLAHRAGA & HOBI
  { id: 131, id_text: "Saya suka bermain bulu tangkis setiap sore.", en: ["I", "like", "to", "play", "badminton", "every", "afternoon."], cat: "Olahraga" },
  { id: 132, id_text: "Tim kami memenangkan pertandingan kemarin.", en: ["Our", "team", "won", "the", "match", "yesterday."], cat: "Olahraga" },
  { id: 133, id_text: "Berenang adalah olahraga yang menyehatkan.", en: ["Swimming", "is", "a", "healthy", "sport."], cat: "Olahraga" },
  { id: 134, id_text: "Saya berlatih lari setiap pagi selama satu jam.", en: ["I", "practice", "running", "every", "morning", "for", "one", "hour."], cat: "Olahraga" },
  { id: 135, id_text: "Fotografi adalah hobi favorit saya.", en: ["Photography", "is", "my", "favorite", "hobby."], cat: "Olahraga" },
  { id: 136, id_text: "Dia adalah pemain sepak bola yang hebat.", en: ["He", "is", "a", "great", "soccer", "player."], cat: "Olahraga" },
  { id: 137, id_text: "Kami berlatih yoga setiap hari Minggu.", en: ["We", "practice", "yoga", "every", "Sunday."], cat: "Olahraga" },
  { id: 138, id_text: "Mendaki gunung adalah pengalaman yang luar biasa.", en: ["Hiking", "a", "mountain", "is", "an", "amazing", "experience."], cat: "Olahraga" },
  { id: 139, id_text: "Saya suka membaca buku di waktu luang.", en: ["I", "like", "to", "read", "books", "in", "my", "free", "time."], cat: "Olahraga" },
  { id: 140, id_text: "Dia suka melukis dan menggambar.", en: ["She", "likes", "to", "paint", "and", "draw."], cat: "Olahraga" },

  // WISATA & PERJALANAN
  { id: 141, id_text: "Saya ingin berlibur ke Bali tahun depan.", en: ["I", "want", "to", "vacation", "in", "Bali", "next", "year."], cat: "Wisata" },
  { id: 142, id_text: "Jangan lupa membawa paspor kamu.", en: ["Don't", "forget", "to", "bring", "your", "passport."], cat: "Wisata" },
  { id: 143, id_text: "Hotel ini memiliki pemandangan yang luar biasa.", en: ["This", "hotel", "has", "an", "amazing", "view."], cat: "Wisata" },
  { id: 144, id_text: "Kami sudah memesan tiket pesawat.", en: ["We", "have", "already", "booked", "the", "plane", "ticket."], cat: "Wisata" },
  { id: 145, id_text: "Panduan wisata itu sangat membantu kami.", en: ["The", "tour", "guide", "was", "very", "helpful", "to", "us."], cat: "Wisata" },
  { id: 146, id_text: "Kami mengunjungi banyak tempat bersejarah.", en: ["We", "visited", "many", "historical", "places."], cat: "Wisata" },
  { id: 147, id_text: "Suvenir di sini sangat unik dan murah.", en: ["The", "souvenirs", "here", "are", "very", "unique", "and", "cheap."], cat: "Wisata" },
  { id: 148, id_text: "Perjalanan ini adalah yang terbaik dalam hidup saya.", en: ["This", "trip", "is", "the", "best", "in", "my", "life."], cat: "Wisata" },
  { id: 149, id_text: "Kita harus tiba di bandara dua jam lebih awal.", en: ["We", "must", "arrive", "at", "the", "airport", "two", "hours", "early."], cat: "Wisata" },
  { id: 150, id_text: "Visa saya sudah disetujui minggu lalu.", en: ["My", "visa", "was", "approved", "last", "week."], cat: "Wisata" },

  // BISNIS
  { id: 151, id_text: "Kami perlu mendiskusikan strategi baru.", en: ["We", "need", "to", "discuss", "a", "new", "strategy."], cat: "Bisnis" },
  { id: 152, id_text: "Klien itu sangat puas dengan layanan kami.", en: ["The", "client", "is", "very", "satisfied", "with", "our", "service."], cat: "Bisnis" },
  { id: 153, id_text: "Pendapatan perusahaan meningkat bulan ini.", en: ["The", "company's", "revenue", "increased", "this", "month."], cat: "Bisnis" },
  { id: 154, id_text: "Proposal proyek harus selesai minggu depan.", en: ["The", "project", "proposal", "must", "be", "finished", "next", "week."], cat: "Bisnis" },
  { id: 155, id_text: "Kami menandatangani kontrak kerja sama hari ini.", en: ["We", "signed", "a", "cooperation", "contract", "today."], cat: "Bisnis" },
  { id: 156, id_text: "Target penjualan bulan ini sudah tercapai.", en: ["The", "sales", "target", "for", "this", "month", "has", "been", "achieved."], cat: "Bisnis" },
  { id: 157, id_text: "Investor baru tertarik dengan perusahaan kami.", en: ["A", "new", "investor", "is", "interested", "in", "our", "company."], cat: "Bisnis" },
  { id: 158, id_text: "Kami akan meluncurkan produk baru bulan depan.", en: ["We", "will", "launch", "a", "new", "product", "next", "month."], cat: "Bisnis" },

  // PERCAKAPAN UMUM
  { id: 159, id_text: "Bisakah kamu tolong bantu saya?", en: ["Can", "you", "please", "help", "me?"], cat: "Percakapan" },
  { id: 160, id_text: "Maaf, saya tidak mengerti apa yang kamu maksud.", en: ["Sorry,", "I", "don't", "understand", "what", "you", "mean."], cat: "Percakapan" },
  { id: 161, id_text: "Bisakah kamu berbicara lebih lambat?", en: ["Can", "you", "speak", "more", "slowly?"], cat: "Percakapan" },
  { id: 162, id_text: "Tentu saja, saya dengan senang hati membantu.", en: ["Of", "course,", "I", "am", "happy", "to", "help."], cat: "Percakapan" },
  { id: 163, id_text: "Menurut saya, ide itu sangat bagus.", en: ["In", "my", "opinion,", "that", "idea", "is", "very", "good."], cat: "Percakapan" },
  { id: 164, id_text: "Ngomong-ngomong, kamu sudah makan belum?", en: ["By", "the", "way,", "have", "you", "eaten", "yet?"], cat: "Percakapan" },
  { id: 165, id_text: "Saya setuju dengan pendapat kamu.", en: ["I", "agree", "with", "your", "opinion."], cat: "Percakapan" },
  { id: 166, id_text: "Maukah kamu pergi ke bioskop malam ini?", en: ["Would", "you", "like", "to", "go", "to", "the", "cinema", "tonight?"], cat: "Percakapan" },
  { id: 167, id_text: "Ini adalah pertama kalinya saya ke sini.", en: ["This", "is", "my", "first", "time", "here."], cat: "Percakapan" },
  { id: 168, id_text: "Boleh saya meminjam ponsel kamu sebentar?", en: ["May", "I", "borrow", "your", "phone", "for", "a", "moment?"], cat: "Percakapan" },
  { id: 169, id_text: "Jam berapa sekarang?", en: ["What", "time", "is", "it", "now?"], cat: "Percakapan" },
  { id: 170, id_text: "Di mana toilet terdekat?", en: ["Where", "is", "the", "nearest", "toilet?"], cat: "Percakapan" },

  // IDIOM & UNGKAPAN
  { id: 171, id_text: "Soal itu mudah sekali bagiku.", en: ["That", "problem", "is", "a", "piece", "of", "cake", "for", "me."], cat: "Idiom" },
  { id: 172, id_text: "Semoga sukses dalam ujianmu!", en: ["Break", "a", "leg", "in", "your", "exam!"], cat: "Idiom" },
  { id: 173, id_text: "Dia tidak pernah datang tepat waktu.", en: ["He", "never", "comes", "on", "time."], cat: "Idiom" },
  { id: 174, id_text: "Aku tidak enak badan hari ini.", en: ["I", "am", "feeling", "under", "the", "weather", "today."], cat: "Idiom" },
  { id: 175, id_text: "Kita sekali jalan bisa menyelesaikan dua masalah.", en: ["We", "can", "kill", "two", "birds", "with", "one", "stone."], cat: "Idiom" },
  { id: 176, id_text: "Dia membocorkan rahasia kepada semua orang.", en: ["He", "let", "the", "cat", "out", "of", "the", "bag."], cat: "Idiom" },
  { id: 177, id_text: "Jangan menyerah, terus berjuang.", en: ["Hang", "in", "there,", "keep", "fighting."], cat: "Idiom" },
  { id: 178, id_text: "Itu sangat mahal sekali harganya.", en: ["That", "costs", "an", "arm", "and", "a", "leg."], cat: "Idiom" },

  // MOTIVASI & INSPIRASI
  { id: 179, id_text: "Jangan pernah menyerah pada mimpimu.", en: ["Never", "give", "up", "on", "your", "dreams."], cat: "Motivasi" },
  { id: 180, id_text: "Setiap hari adalah kesempatan baru untuk belajar.", en: ["Every", "day", "is", "a", "new", "opportunity", "to", "learn."], cat: "Motivasi" },
  { id: 181, id_text: "Kamu pasti bisa jika kamu terus berusaha.", en: ["You", "can", "do", "it", "if", "you", "keep", "trying."], cat: "Motivasi" },
  { id: 182, id_text: "Kesuksesan datang dari kerja keras.", en: ["Success", "comes", "from", "hard", "work."], cat: "Motivasi" },
  { id: 183, id_text: "Percayalah pada diri sendiri.", en: ["Believe", "in", "yourself."], cat: "Motivasi" },
  { id: 184, id_text: "Kegagalan adalah awal dari kesuksesan.", en: ["Failure", "is", "the", "beginning", "of", "success."], cat: "Motivasi" },
  { id: 185, id_text: "Tetaplah positif meskipun situasi sulit.", en: ["Stay", "positive", "even", "when", "the", "situation", "is", "difficult."], cat: "Motivasi" },
  { id: 186, id_text: "Setiap langkah kecil membawamu lebih dekat ke tujuan.", en: ["Every", "small", "step", "brings", "you", "closer", "to", "your", "goal."], cat: "Motivasi" },

  // MEDIA SOSIAL
  { id: 187, id_text: "Tolong ikuti akun saya di media sosial.", en: ["Please", "follow", "my", "account", "on", "social", "media."], cat: "MediaSosial" },
  { id: 188, id_text: "Foto ini mendapat banyak suka.", en: ["This", "photo", "got", "a", "lot", "of", "likes."], cat: "MediaSosial" },
  { id: 189, id_text: "Konten ini sedang viral di internet.", en: ["This", "content", "is", "going", "viral", "on", "the", "internet."], cat: "MediaSosial" },
  { id: 190, id_text: "Tolong bagikan postingan ini kepada teman-temanmu.", en: ["Please", "share", "this", "post", "with", "your", "friends."], cat: "MediaSosial" },

  // PENDIDIKAN LANJUTAN
  { id: 191, id_text: "Saya ingin melanjutkan studi ke luar negeri.", en: ["I", "want", "to", "continue", "my", "studies", "abroad."], cat: "Pendidikan" },
  { id: 192, id_text: "Beasiswa itu sangat membantu saya.", en: ["The", "scholarship", "helped", "me", "a", "lot."], cat: "Pendidikan" },
  { id: 193, id_text: "Skripsi saya akan selesai bulan depan.", en: ["My", "thesis", "will", "be", "finished", "next", "month."], cat: "Pendidikan" },
  { id: 194, id_text: "Profesor itu sangat berpengalaman di bidangnya.", en: ["That", "professor", "is", "very", "experienced", "in", "his", "field."], cat: "Pendidikan" },

  // LINGKUNGAN
  { id: 195, id_text: "Kita harus menjaga kebersihan lingkungan.", en: ["We", "must", "keep", "our", "environment", "clean."], cat: "Lingkungan" },
  { id: 196, id_text: "Daur ulang sampah adalah hal yang penting.", en: ["Recycling", "waste", "is", "a", "very", "important", "thing."], cat: "Lingkungan" },
  { id: 197, id_text: "Pemanasan global adalah masalah serius.", en: ["Global", "warming", "is", "a", "serious", "problem."], cat: "Lingkungan" },
  { id: 198, id_text: "Tanam pohon untuk menjaga bumi kita.", en: ["Plant", "trees", "to", "protect", "our", "earth."], cat: "Lingkungan" },

  // KEUANGAN
  { id: 199, id_text: "Saya menabung setiap bulan untuk masa depan.", en: ["I", "save", "money", "every", "month", "for", "the", "future."], cat: "Keuangan" },
  { id: 200, id_text: "Saldo rekening saya hampir habis.", en: ["My", "account", "balance", "is", "almost", "empty."], cat: "Keuangan" },

  // ===== KALIMAT BARU TAMBAHAN =====

  // KEHIDUPAN SEHARI-HARI (Daily Life)
  { id: 201, id_text: "Saya menyikat gigi dua kali sehari.", en: ["I", "brush", "my", "teeth", "twice", "a", "day."], cat: "Rumah" },
  { id: 202, id_text: "Dia sedang mandi ketika telepon berdering.", en: ["He", "was", "taking", "a", "shower", "when", "the", "phone", "rang."], cat: "Rumah" },
  { id: 203, id_text: "Saya selalu sarapan sebelum berangkat kerja.", en: ["I", "always", "eat", "breakfast", "before", "going", "to", "work."], cat: "Rumah" },
  { id: 204, id_text: "Tolong cuci piring setelah makan.", en: ["Please", "wash", "the", "dishes", "after", "eating."], cat: "Rumah" },
  { id: 205, id_text: "Saya tidur sekitar jam sepuluh malam.", en: ["I", "go", "to", "sleep", "at", "around", "ten", "at", "night."], cat: "Rumah" },
  { id: 206, id_text: "Kami perlu membeli bahan makanan hari ini.", en: ["We", "need", "to", "buy", "groceries", "today."], cat: "Rumah" },
  { id: 207, id_text: "Saya menyetrika baju setiap minggu.", en: ["I", "iron", "my", "clothes", "every", "week."], cat: "Rumah" },
  { id: 208, id_text: "Kucing saya suka tidur di sofa.", en: ["My", "cat", "likes", "to", "sleep", "on", "the", "sofa."], cat: "Rumah" },

  // PERMINTAAN & SOPAN SANTUN (Requests & Politeness)
  { id: 209, id_text: "Boleh saya minta tolong?", en: ["May", "I", "ask", "for", "your", "help?"], cat: "Percakapan" },
  { id: 210, id_text: "Terima kasih banyak atas bantuanmu.", en: ["Thank", "you", "so", "much", "for", "your", "help."], cat: "Percakapan" },
  { id: 211, id_text: "Maaf sudah mengganggu waktu kamu.", en: ["Sorry", "for", "disturbing", "your", "time."], cat: "Percakapan" },
  { id: 212, id_text: "Silakan duduk dan santai.", en: ["Please", "sit", "down", "and", "relax."], cat: "Percakapan" },
  { id: 213, id_text: "Bolehkah saya bertanya sesuatu?", en: ["May", "I", "ask", "you", "something?"], cat: "Percakapan" },
  { id: 214, id_text: "Dengan senang hati saya akan membantu.", en: ["I", "will", "help", "you", "with", "pleasure."], cat: "Percakapan" },
  { id: 215, id_text: "Tolong ulangi apa yang kamu katakan tadi.", en: ["Please", "repeat", "what", "you", "just", "said."], cat: "Percakapan" },
  { id: 216, id_text: "Saya tidak bermaksud menyinggung perasaanmu.", en: ["I", "did", "not", "mean", "to", "hurt", "your", "feelings."], cat: "Percakapan" },

  // WAKTU & JADWAL (Time & Schedule)
  { id: 217, id_text: "Kita bertemu besok jam tiga sore.", en: ["We", "will", "meet", "tomorrow", "at", "three", "in", "the", "afternoon."], cat: "Waktu" },
  { id: 218, id_text: "Saya sudah menunggu selama dua jam.", en: ["I", "have", "been", "waiting", "for", "two", "hours."], cat: "Waktu" },
  { id: 219, id_text: "Acara dimulai tepat pukul delapan malam.", en: ["The", "event", "starts", "exactly", "at", "eight", "in", "the", "evening."], cat: "Waktu" },
  { id: 220, id_text: "Hari ini adalah hari Senin.", en: ["Today", "is", "Monday."], cat: "Waktu" },
  { id: 221, id_text: "Saya sudah belajar bahasa Inggris selama dua tahun.", en: ["I", "have", "been", "studying", "English", "for", "two", "years."], cat: "Waktu" },
  { id: 222, id_text: "Liburan sekolah dimulai minggu depan.", en: ["The", "school", "holiday", "starts", "next", "week."], cat: "Waktu" },
  { id: 223, id_text: "Saya akan kembali dalam lima menit.", en: ["I", "will", "be", "back", "in", "five", "minutes."], cat: "Waktu" },
  { id: 224, id_text: "Jangan terlambat untuk rapat besok pagi.", en: ["Don't", "be", "late", "for", "the", "meeting", "tomorrow", "morning."], cat: "Waktu" },

  // TEMPAT & ARAH (Places & Directions)
  { id: 225, id_text: "Belok kiri di lampu merah pertama.", en: ["Turn", "left", "at", "the", "first", "traffic", "light."], cat: "Tempat" },
  { id: 226, id_text: "Bank itu ada di seberang jalan.", en: ["The", "bank", "is", "across", "the", "street."], cat: "Tempat" },
  { id: 227, id_text: "Jalan lurus terus sampai ke persimpangan.", en: ["Go", "straight", "until", "you", "reach", "the", "intersection."], cat: "Tempat" },
  { id: 228, id_text: "Rumah sakit ada di dekat taman kota.", en: ["The", "hospital", "is", "near", "the", "city", "park."], cat: "Tempat" },
  { id: 229, id_text: "Tolong tunjukkan jalan ke stasiun kereta.", en: ["Please", "show", "me", "the", "way", "to", "the", "train", "station."], cat: "Tempat" },
  { id: 230, id_text: "Toko itu buka dari jam delapan pagi.", en: ["The", "store", "opens", "from", "eight", "in", "the", "morning."], cat: "Tempat" },

  // EKSPRESI SEHARI-HARI (Common Expressions)
  { id: 231, id_text: "Itu bukan masalah besar.", en: ["It", "is", "not", "a", "big", "deal."], cat: "Percakapan" },
  { id: 232, id_text: "Kamu benar sekali.", en: ["You", "are", "absolutely", "right."], cat: "Percakapan" },
  { id: 233, id_text: "Saya tidak yakin dengan hal itu.", en: ["I", "am", "not", "sure", "about", "that."], cat: "Percakapan" },
  { id: 234, id_text: "Itu tergantung situasinya.", en: ["It", "depends", "on", "the", "situation."], cat: "Percakapan" },
  { id: 235, id_text: "Saya akan coba yang terbaik.", en: ["I", "will", "try", "my", "best."], cat: "Percakapan" },
  { id: 236, id_text: "Kamu bisa melakukannya!", en: ["You", "can", "do", "it!"], cat: "Percakapan" },
  { id: 237, id_text: "Saya tidak punya cukup waktu sekarang.", en: ["I", "don't", "have", "enough", "time", "right", "now."], cat: "Percakapan" },
  { id: 238, id_text: "Mari kita coba lagi dari awal.", en: ["Let's", "try", "again", "from", "the", "beginning."], cat: "Percakapan" },
  { id: 239, id_text: "Itu ide yang sangat kreatif!", en: ["That", "is", "a", "very", "creative", "idea!"], cat: "Percakapan" },
  { id: 240, id_text: "Saya perlu waktu untuk memikirkannya.", en: ["I", "need", "time", "to", "think", "about", "it."], cat: "Percakapan" },

  // TATA BAHASA PENTING (Grammar Practice)
  { id: 241, id_text: "Saya sedang membaca buku yang menarik.", en: ["I", "am", "reading", "an", "interesting", "book."], cat: "Grammar" },
  { id: 242, id_text: "Dia sudah pergi sebelum saya tiba.", en: ["She", "had", "already", "left", "before", "I", "arrived."], cat: "Grammar" },
  { id: 243, id_text: "Mereka akan pergi berlibur minggu depan.", en: ["They", "will", "go", "on", "vacation", "next", "week."], cat: "Grammar" },
  { id: 244, id_text: "Apakah kamu pernah ke Jepang?", en: ["Have", "you", "ever", "been", "to", "Japan?"], cat: "Grammar" },
  { id: 245, id_text: "Saya belum pernah makan sushi sebelumnya.", en: ["I", "have", "never", "eaten", "sushi", "before."], cat: "Grammar" },
  { id: 246, id_text: "Kalau hujan, kita tidak akan pergi.", en: ["If", "it", "rains,", "we", "will", "not", "go."], cat: "Grammar" },
  { id: 247, id_text: "Dia lebih pintar dari yang saya kira.", en: ["He", "is", "smarter", "than", "I", "thought."], cat: "Grammar" },
  { id: 248, id_text: "Semakin banyak belajar, semakin pintar kamu.", en: ["The", "more", "you", "study,", "the", "smarter", "you", "become."], cat: "Grammar" },
  { id: 249, id_text: "Saya ingin kamu datang ke pestaku.", en: ["I", "want", "you", "to", "come", "to", "my", "party."], cat: "Grammar" },
  { id: 250, id_text: "Dia memintaku untuk membantunya.", en: ["She", "asked", "me", "to", "help", "her."], cat: "Grammar" },

  // SITUASI DARURAT (Emergency Situations)
  { id: 251, id_text: "Tolong panggil polisi sekarang!", en: ["Please", "call", "the", "police", "now!"], cat: "Darurat" },
  { id: 252, id_text: "Ada kebakaran di gedung sebelah!", en: ["There", "is", "a", "fire", "in", "the", "next", "building!"], cat: "Darurat" },
  { id: 253, id_text: "Saya membutuhkan pertolongan segera.", en: ["I", "need", "help", "immediately."], cat: "Darurat" },
  { id: 254, id_text: "Tolong jangan tinggalkan saya sendirian.", en: ["Please", "don't", "leave", "me", "alone."], cat: "Darurat" },
  { id: 255, id_text: "Nomor berapa yang harus dihubungi saat darurat?", en: ["What", "number", "should", "I", "call", "in", "an", "emergency?"], cat: "Darurat" },

  // HOBI & MINAT (Hobbies & Interests)
  { id: 256, id_text: "Saya suka mendengarkan musik saat bersantai.", en: ["I", "like", "to", "listen", "to", "music", "when", "relaxing."], cat: "Hobi" },
  { id: 257, id_text: "Dia gemar memasak makanan dari berbagai negara.", en: ["He", "loves", "cooking", "food", "from", "different", "countries."], cat: "Hobi" },
  { id: 258, id_text: "Kami berkumpul setiap minggu untuk bermain game.", en: ["We", "gather", "every", "week", "to", "play", "games."], cat: "Hobi" },
  { id: 259, id_text: "Saya mulai belajar gitar sejak kecil.", en: ["I", "started", "learning", "guitar", "since", "I", "was", "young."], cat: "Hobi" },
  { id: 260, id_text: "Melukis membuatku merasa tenang dan bahagia.", en: ["Painting", "makes", "me", "feel", "calm", "and", "happy."], cat: "Hobi" },

  // PERTEMANAN (Friendship)
  { id: 261, id_text: "Dia adalah teman terbaik yang pernah saya miliki.", en: ["He", "is", "the", "best", "friend", "I", "have", "ever", "had."], cat: "Percakapan" },
  { id: 262, id_text: "Kami sudah berteman sejak sekolah dasar.", en: ["We", "have", "been", "friends", "since", "primary", "school."], cat: "Percakapan" },
  { id: 263, id_text: "Teman sejati selalu ada saat kamu butuh.", en: ["A", "true", "friend", "is", "always", "there", "when", "you", "need", "them."], cat: "Percakapan" },
  { id: 264, id_text: "Ayo nongkrong bersama akhir pekan ini.", en: ["Let's", "hang", "out", "together", "this", "weekend."], cat: "Percakapan" },
  { id: 265, id_text: "Saya sangat merindukan kamu.", en: ["I", "really", "miss", "you."], cat: "Percakapan" },

  // SEKOLAH LANJUTAN (More School)
  { id: 266, id_text: "Saya harus mengulang ujian besok.", en: ["I", "have", "to", "retake", "the", "exam", "tomorrow."], cat: "Sekolah" },
  { id: 267, id_text: "Nilai rata-rata kelas kami sangat tinggi.", en: ["The", "average", "grade", "of", "our", "class", "is", "very", "high."], cat: "Sekolah" },
  { id: 268, id_text: "Guru meminta kami membuat esai tentang lingkungan.", en: ["The", "teacher", "asked", "us", "to", "write", "an", "essay", "about", "the", "environment."], cat: "Sekolah" },
  { id: 269, id_text: "Saya ikut les bahasa Inggris tiga kali seminggu.", en: ["I", "take", "English", "lessons", "three", "times", "a", "week."], cat: "Sekolah" },
  { id: 270, id_text: "Perpustakaan tutup pada hari Minggu.", en: ["The", "library", "is", "closed", "on", "Sundays."], cat: "Sekolah" },

  // TEKNOLOGI LANJUTAN (More Technology)
  { id: 271, id_text: "Tolong matikan notifikasi HP kamu saat rapat.", en: ["Please", "turn", "off", "your", "phone", "notifications", "during", "the", "meeting."], cat: "Teknologi" },
  { id: 272, id_text: "Saya lupa kata sandi akun saya.", en: ["I", "forgot", "the", "password", "of", "my", "account."], cat: "Teknologi" },
  { id: 273, id_text: "Video itu sudah ditonton jutaan orang.", en: ["That", "video", "has", "been", "watched", "by", "millions", "of", "people."], cat: "Teknologi" },
  { id: 274, id_text: "Laptop saya rusak dan perlu diperbaiki.", en: ["My", "laptop", "is", "broken", "and", "needs", "to", "be", "repaired."], cat: "Teknologi" },
  { id: 275, id_text: "Saya menggunakan aplikasi ini untuk belajar bahasa.", en: ["I", "use", "this", "application", "to", "learn", "languages."], cat: "Teknologi" },

  // RESTORAN & MAKANAN LANJUTAN (More Restaurant)
  { id: 276, id_text: "Meja untuk dua orang sudah tersedia.", en: ["A", "table", "for", "two", "is", "already", "available."], cat: "Makanan" },
  { id: 277, id_text: "Apakah ada menu vegetarian di sini?", en: ["Is", "there", "a", "vegetarian", "menu", "here?"], cat: "Makanan" },
  { id: 278, id_text: "Makanan ini terlalu asin untuk selera saya.", en: ["This", "food", "is", "too", "salty", "for", "my", "taste."], cat: "Makanan" },
  { id: 279, id_text: "Bisakah saya minta air putih tambahan?", en: ["Can", "I", "have", "some", "extra", "water", "please?"], cat: "Makanan" },
  { id: 280, id_text: "Pelayan itu sangat cepat dan profesional.", en: ["The", "waiter", "is", "very", "fast", "and", "professional."], cat: "Makanan" },

  // KESEHATAN LANJUTAN (More Health)
  { id: 281, id_text: "Dokter menyarankan saya untuk banyak minum air.", en: ["The", "doctor", "advised", "me", "to", "drink", "a", "lot", "of", "water."], cat: "Kesehatan" },
  { id: 282, id_text: "Saya sudah divaksin bulan lalu.", en: ["I", "was", "vaccinated", "last", "month."], cat: "Kesehatan" },
  { id: 283, id_text: "Tidur cukup sangat penting untuk kesehatan.", en: ["Getting", "enough", "sleep", "is", "very", "important", "for", "health."], cat: "Kesehatan" },
  { id: 284, id_text: "Saya merasa lebih baik setelah minum obat.", en: ["I", "feel", "better", "after", "taking", "the", "medicine."], cat: "Kesehatan" },
  { id: 285, id_text: "Jangan merokok karena berbahaya bagi kesehatan.", en: ["Don't", "smoke", "because", "it", "is", "dangerous", "for", "your", "health."], cat: "Kesehatan" },

  // CUACA LANJUTAN (More Weather)
  { id: 286, id_text: "Prakiraan cuaca mengatakan akan ada badai malam ini.", en: ["The", "weather", "forecast", "says", "there", "will", "be", "a", "storm", "tonight."], cat: "Alam" },
  { id: 287, id_text: "Musim hujan biasanya dimulai bulan Oktober.", en: ["The", "rainy", "season", "usually", "starts", "in", "October."], cat: "Alam" },
  { id: 288, id_text: "Suhu hari ini mencapai tiga puluh lima derajat.", en: ["The", "temperature", "today", "reaches", "thirty", "five", "degrees."], cat: "Alam" },
  { id: 289, id_text: "Langit sangat cerah dan biru hari ini.", en: ["The", "sky", "is", "very", "clear", "and", "blue", "today."], cat: "Alam" },
  { id: 290, id_text: "Angin kencang menyebabkan pohon tumbang.", en: ["Strong", "winds", "caused", "trees", "to", "fall", "down."], cat: "Alam" },

  // PERJALANAN LANJUTAN (More Travel)
  { id: 291, id_text: "Saya memesan kamar hotel untuk dua malam.", en: ["I", "booked", "a", "hotel", "room", "for", "two", "nights."], cat: "Wisata" },
  { id: 292, id_text: "Penerbangan kami ditunda selama tiga jam.", en: ["Our", "flight", "was", "delayed", "for", "three", "hours."], cat: "Wisata" },
  { id: 293, id_text: "Saya selalu membawa koper kecil saat bepergian.", en: ["I", "always", "bring", "a", "small", "suitcase", "when", "traveling."], cat: "Wisata" },
  { id: 294, id_text: "Tempat wisata itu sangat ramai saat akhir pekan.", en: ["That", "tourist", "spot", "is", "very", "crowded", "on", "weekends."], cat: "Wisata" },
  { id: 295, id_text: "Saya suka mencicipi makanan lokal saat berwisata.", en: ["I", "love", "trying", "local", "food", "when", "traveling."], cat: "Wisata" },

  // LINGKUNGAN LANJUTAN (More Environment)
  { id: 296, id_text: "Kita harus mengurangi penggunaan plastik.", en: ["We", "must", "reduce", "the", "use", "of", "plastic."], cat: "Lingkungan" },
  { id: 297, id_text: "Sampah harus dibuang pada tempatnya.", en: ["Trash", "must", "be", "thrown", "in", "the", "right", "place."], cat: "Lingkungan" },
  { id: 298, id_text: "Air bersih adalah hak semua orang.", en: ["Clean", "water", "is", "the", "right", "of", "everyone."], cat: "Lingkungan" },
  { id: 299, id_text: "Hutan hujan tropis sangat penting bagi bumi.", en: ["Tropical", "rainforests", "are", "very", "important", "for", "the", "earth."], cat: "Lingkungan" },
  { id: 300, id_text: "Mari jaga bumi kita untuk generasi mendatang.", en: ["Let's", "protect", "our", "earth", "for", "future", "generations."], cat: "Lingkungan" },

  // ===== KALIMAT TENSES =====
  { id: 301, id_text: "Saya sedang memasak makan malam sekarang.", en: ["I", "am", "cooking", "dinner", "right", "now."], cat: "Grammar" },
  { id: 302, id_text: "Dia pergi ke sekolah setiap hari Senin.", en: ["She", "goes", "to", "school", "every", "Monday."], cat: "Grammar" },
  { id: 303, id_text: "Kami sudah menyelesaikan proyek itu kemarin.", en: ["We", "finished", "that", "project", "yesterday."], cat: "Grammar" },
  { id: 304, id_text: "Mereka akan mengadakan pesta minggu depan.", en: ["They", "will", "hold", "a", "party", "next", "week."], cat: "Grammar" },
  { id: 305, id_text: "Saya telah belajar bahasa Inggris selama tiga tahun.", en: ["I", "have", "been", "learning", "English", "for", "three", "years."], cat: "Grammar" },
  { id: 306, id_text: "Dia sedang tidur ketika saya meneleponnya.", en: ["She", "was", "sleeping", "when", "I", "called", "her."], cat: "Grammar" },
  { id: 307, id_text: "Kami akan sedang makan saat kamu tiba.", en: ["We", "will", "be", "eating", "when", "you", "arrive."], cat: "Grammar" },
  { id: 308, id_text: "Apakah kamu pernah mencoba makanan Jepang?", en: ["Have", "you", "ever", "tried", "Japanese", "food?"], cat: "Grammar" },
  { id: 309, id_text: "Saya belum pernah naik pesawat sebelumnya.", en: ["I", "have", "never", "been", "on", "a", "plane", "before."], cat: "Grammar" },
  { id: 310, id_text: "Dia sudah pergi sebelum saya sampai.", en: ["He", "had", "already", "left", "before", "I", "arrived."], cat: "Grammar" },

  // ===== CONDITIONAL (KALIMAT IF) =====
  { id: 311, id_text: "Jika kamu belajar keras, kamu akan lulus ujian.", en: ["If", "you", "study", "hard,", "you", "will", "pass", "the", "exam."], cat: "Grammar" },
  { id: 312, id_text: "Kalau hujan, saya tidak akan keluar rumah.", en: ["If", "it", "rains,", "I", "will", "not", "go", "outside."], cat: "Grammar" },
  { id: 313, id_text: "Seandainya saya kaya, saya akan keliling dunia.", en: ["If", "I", "were", "rich,", "I", "would", "travel", "the", "world."], cat: "Grammar" },
  { id: 314, id_text: "Kalau kamu lapar, ambillah makanan di kulkas.", en: ["If", "you", "are", "hungry,", "take", "some", "food", "from", "the", "fridge."], cat: "Grammar" },
  { id: 315, id_text: "Jika saya tahu jawabannya, saya akan memberitahumu.", en: ["If", "I", "knew", "the", "answer,", "I", "would", "tell", "you."], cat: "Grammar" },

  // ===== PASSIVE VOICE =====
  { id: 316, id_text: "Buku itu ditulis oleh penulis terkenal.", en: ["The", "book", "was", "written", "by", "a", "famous", "author."], cat: "Grammar" },
  { id: 317, id_text: "Jembatan itu sedang dibangun oleh pemerintah.", en: ["The", "bridge", "is", "being", "built", "by", "the", "government."], cat: "Grammar" },
  { id: 318, id_text: "Hadiah itu sudah dikirimkan kemarin.", en: ["The", "gift", "has", "already", "been", "sent", "yesterday."], cat: "Grammar" },
  { id: 319, id_text: "Mobil itu diperbaiki oleh montir handal.", en: ["The", "car", "was", "repaired", "by", "a", "skilled", "mechanic."], cat: "Grammar" },
  { id: 320, id_text: "Pengumuman itu akan dibacakan besok pagi.", en: ["The", "announcement", "will", "be", "read", "tomorrow", "morning."], cat: "Grammar" },

  // ===== EKSPRESI FILLER & TRANSISI =====
  { id: 321, id_text: "Sebenarnya, saya tidak setuju dengan pendapat itu.", en: ["Actually,", "I", "disagree", "with", "that", "opinion."], cat: "Ekspresi" },
  { id: 322, id_text: "Jujur saja, saya tidak tahu jawabannya.", en: ["To", "be", "honest,", "I", "don't", "know", "the", "answer."], cat: "Ekspresi" },
  { id: 323, id_text: "Maksud saya adalah kita perlu bekerja sama.", en: ["What", "I", "mean", "is", "we", "need", "to", "work", "together."], cat: "Ekspresi" },
  { id: 324, id_text: "Omong-omong, sudahkah kamu membaca buku itu?", en: ["By", "the", "way,", "have", "you", "read", "that", "book?"], cat: "Ekspresi" },
  { id: 325, id_text: "Selain itu, ada hal lain yang perlu dibahas.", en: ["Besides", "that,", "there", "is", "something", "else", "to", "discuss."], cat: "Ekspresi" },
  { id: 326, id_text: "Dengan kata lain, kamu harus lebih berusaha.", en: ["In", "other", "words,", "you", "need", "to", "try", "harder."], cat: "Ekspresi" },
  { id: 327, id_text: "Bagaimanapun juga, kita harus menyelesaikan ini.", en: ["Anyway,", "we", "need", "to", "finish", "this."], cat: "Ekspresi" },
  { id: 328, id_text: "Pada akhirnya, kerja keras selalu membuahkan hasil.", en: ["In", "the", "end,", "hard", "work", "always", "pays", "off."], cat: "Ekspresi" },
  { id: 329, id_text: "Sementara itu, tolong siapkan bahan presentasinya.", en: ["Meanwhile,", "please", "prepare", "the", "presentation", "materials."], cat: "Ekspresi" },
  { id: 330, id_text: "Sebagai kesimpulan, proyek ini berhasil diselesaikan.", en: ["In", "conclusion,", "this", "project", "was", "completed", "successfully."], cat: "Ekspresi" },

  // ===== SOPAN SANTUN FORMAL =====
  { id: 331, id_text: "Bisakah kamu tolong ulangi pertanyaan itu?", en: ["Could", "you", "please", "repeat", "that", "question?"], cat: "Formal" },
  { id: 332, id_text: "Saya mohon maaf atas keterlambatan saya.", en: ["I", "sincerely", "apologize", "for", "my", "lateness."], cat: "Formal" },
  { id: 333, id_text: "Terima kasih atas waktu dan perhatian Anda.", en: ["Thank", "you", "for", "your", "time", "and", "attention."], cat: "Formal" },
  { id: 334, id_text: "Saya sangat menghargai bantuan yang Anda berikan.", en: ["I", "truly", "appreciate", "the", "help", "you", "have", "given."], cat: "Formal" },
  { id: 335, id_text: "Boleh saya menyampaikan pendapat saya?", en: ["May", "I", "share", "my", "opinion?"], cat: "Formal" },
  { id: 336, id_text: "Dengan hormat, saya ingin mengajukan pertanyaan.", en: ["With", "all", "due", "respect,", "I", "would", "like", "to", "ask", "a", "question."], cat: "Formal" },
  { id: 337, id_text: "Saya berharap dapat bekerja sama dengan Anda.", en: ["I", "hope", "to", "work", "together", "with", "you."], cat: "Formal" },
  { id: 338, id_text: "Tolong beritahu saya jika ada yang bisa saya bantu.", en: ["Please", "let", "me", "know", "if", "there", "is", "anything", "I", "can", "help", "with."], cat: "Formal" },

  // ===== INFORMAL / SLANG =====
  { id: 339, id_text: "Ayo kita pergi! Sudah terlambat nih.", en: ["Let's", "go!", "We", "are", "already", "late."], cat: "Informal" },
  { id: 340, id_text: "Santai saja, tidak ada yang perlu dikhawatirkan.", en: ["Chill", "out,", "there", "is", "nothing", "to", "worry", "about."], cat: "Informal" },
  { id: 341, id_text: "Itu ide gila tapi aku suka!", en: ["That", "is", "a", "crazy", "idea", "but", "I", "love", "it!"], cat: "Informal" },
  { id: 342, id_text: "Kamu bercanda kan? Masa iya begitu!", en: ["Are", "you", "kidding", "me?", "No", "way!"], cat: "Informal" },
  { id: 343, id_text: "Tenang saja, aku ada di sini untukmu.", en: ["Don't", "worry,", "I", "got", "you."], cat: "Informal" },
  { id: 344, id_text: "Dia sangat keren dan berbakat!", en: ["He", "is", "so", "cool", "and", "talented!"], cat: "Informal" },
  { id: 345, id_text: "Itu berita yang luar biasa banget!", en: ["That", "is", "such", "amazing", "news!"], cat: "Informal" },
  { id: 346, id_text: "Aku sudah bilang dari tadi kan?", en: ["I", "told", "you", "so!"], cat: "Informal" },
  { id: 347, id_text: "Gampang kok, kamu pasti bisa!", en: ["It", "is", "easy,", "you", "can", "definitely", "do", "it!"], cat: "Informal" },
  { id: 348, id_text: "Sudah lama banget kita tidak ketemu!", en: ["It", "has", "been", "so", "long", "since", "we", "last", "met!"], cat: "Informal" },

  // ===== PRESENTASI & DISKUSI =====
  { id: 349, id_text: "Menurut saya, masalah ini perlu segera diselesaikan.", en: ["In", "my", "opinion,", "this", "problem", "needs", "to", "be", "solved", "immediately."], cat: "Bisnis" },
  { id: 350, id_text: "Berdasarkan data yang ada, penjualan meningkat pesat.", en: ["Based", "on", "the", "data,", "sales", "have", "increased", "rapidly."], cat: "Bisnis" },
  { id: 351, id_text: "Izinkan saya memperkenalkan topik hari ini.", en: ["Allow", "me", "to", "introduce", "today's", "topic."], cat: "Bisnis" },
  { id: 352, id_text: "Apakah ada pertanyaan setelah presentasi ini?", en: ["Are", "there", "any", "questions", "after", "this", "presentation?"], cat: "Bisnis" },
  { id: 353, id_text: "Saya setuju dengan poin yang kamu sampaikan tadi.", en: ["I", "agree", "with", "the", "point", "you", "just", "made."], cat: "Bisnis" },
  { id: 354, id_text: "Mari kita fokus pada solusi bukan masalahnya.", en: ["Let's", "focus", "on", "the", "solution,", "not", "the", "problem."], cat: "Bisnis" },
  { id: 355, id_text: "Kita perlu mendiskusikan hal ini lebih lanjut.", en: ["We", "need", "to", "discuss", "this", "further."], cat: "Bisnis" },

  // ===== TEKNOLOGI & MEDIA SOSIAL =====
  { id: 356, id_text: "Postingan ini mendapat banyak komentar positif.", en: ["This", "post", "received", "a", "lot", "of", "positive", "comments."], cat: "MediaSosial" },
  { id: 357, id_text: "Tolong tag saya di foto itu ya.", en: ["Please", "tag", "me", "in", "that", "photo."], cat: "MediaSosial" },
  { id: 358, id_text: "Video ini sudah viral di seluruh dunia.", en: ["This", "video", "has", "gone", "viral", "all", "over", "the", "world."], cat: "MediaSosial" },
  { id: 359, id_text: "Saya baru saja mengunggah foto liburan saya.", en: ["I", "just", "uploaded", "my", "vacation", "photos."], cat: "MediaSosial" },
  { id: 360, id_text: "Apakah kamu sudah mengikuti akun resmi kami?", en: ["Have", "you", "already", "followed", "our", "official", "account?"], cat: "MediaSosial" },
  { id: 361, id_text: "Jangan lupa nyalakan notifikasi agar tidak ketinggalan.", en: ["Don't", "forget", "to", "turn", "on", "notifications", "so", "you", "don't", "miss", "anything."], cat: "MediaSosial" },
  { id: 362, id_text: "Saya menghabiskan terlalu banyak waktu di media sosial.", en: ["I", "spend", "too", "much", "time", "on", "social", "media."], cat: "MediaSosial" },

  // ===== HUMOR & IDIOM BARU =====
  { id: 363, id_text: "Dia selalu datang terlambat, sudah jadi kebiasaan.", en: ["He", "always", "arrives", "late,", "it", "has", "become", "a", "habit."], cat: "Idiom" },
  { id: 364, id_text: "Lebih baik terlambat daripada tidak sama sekali.", en: ["Better", "late", "than", "never."], cat: "Idiom" },
  { id: 365, id_text: "Dua kepala lebih baik daripada satu.", en: ["Two", "heads", "are", "better", "than", "one."], cat: "Idiom" },
  { id: 366, id_text: "Jangan menilai buku dari sampulnya.", en: ["Don't", "judge", "a", "book", "by", "its", "cover."], cat: "Idiom" },
  { id: 367, id_text: "Praktik membuat sempurna.", en: ["Practice", "makes", "perfect."], cat: "Idiom" },
  { id: 368, id_text: "Waktu adalah uang, jangan sia-siakan.", en: ["Time", "is", "money,", "don't", "waste", "it."], cat: "Idiom" },
  { id: 369, id_text: "Di mana ada kemauan, di situ ada jalan.", en: ["Where", "there", "is", "a", "will,", "there", "is", "a", "way."], cat: "Idiom" },
  { id: 370, id_text: "Seribu mil perjalanan dimulai dari satu langkah.", en: ["A", "journey", "of", "a", "thousand", "miles", "begins", "with", "a", "single", "step."], cat: "Idiom" },

  // ===== SITUASI NYATA =====
  { id: 371, id_text: "Maaf, bisakah kamu bergeser sedikit?", en: ["Excuse", "me,", "could", "you", "move", "a", "little?"], cat: "Percakapan" },
  { id: 372, id_text: "Saya tidak sengaja menabrak kamu, maaf ya.", en: ["I", "accidentally", "bumped", "into", "you,", "I'm", "sorry."], cat: "Percakapan" },
  { id: 373, id_text: "Boleh saya duduk di sini?", en: ["May", "I", "sit", "here?"], cat: "Percakapan" },
  { id: 374, id_text: "Antrian ini sangat panjang sekali.", en: ["This", "queue", "is", "very", "long."], cat: "Percakapan" },
  { id: 375, id_text: "Apakah tempat ini buka sampai jam berapa?", en: ["What", "time", "does", "this", "place", "close?"], cat: "Percakapan" },
  { id: 376, id_text: "Saya mencari jalan keluar dari gedung ini.", en: ["I", "am", "looking", "for", "the", "exit", "of", "this", "building."], cat: "Percakapan" },
  { id: 377, id_text: "Bisakah kamu foto saya di depan gedung ini?", en: ["Could", "you", "take", "a", "photo", "of", "me", "in", "front", "of", "this", "building?"], cat: "Percakapan" },
  { id: 378, id_text: "Sinyal HP saya sedang buruk di sini.", en: ["My", "phone", "signal", "is", "very", "bad", "here."], cat: "Percakapan" },
  { id: 379, id_text: "Tolong matikan suaramu saat di perpustakaan.", en: ["Please", "keep", "your", "voice", "down", "in", "the", "library."], cat: "Percakapan" },
  { id: 380, id_text: "Saya tidak membawa uang tunai, hanya kartu.", en: ["I", "don't", "have", "cash,", "only", "a", "card."], cat: "Percakapan" },

  // ===== PERASAAN LANJUTAN =====
  { id: 381, id_text: "Saya merasa sangat termotivasi setelah membaca buku itu.", en: ["I", "feel", "very", "motivated", "after", "reading", "that", "book."], cat: "Perasaan" },
  { id: 382, id_text: "Dia terlihat cemas menjelang ujian besok.", en: ["She", "looks", "anxious", "before", "tomorrow's", "exam."], cat: "Perasaan" },
  { id: 383, id_text: "Saya merasa damai saat berada di alam terbuka.", en: ["I", "feel", "peaceful", "when", "I", "am", "in", "nature."], cat: "Perasaan" },
  { id: 384, id_text: "Betapa bahagianya saya hari ini!", en: ["How", "happy", "I", "am", "today!"], cat: "Perasaan" },
  { id: 385, id_text: "Saya kecewa karena tidak bisa hadir di acaramu.", en: ["I", "am", "disappointed", "because", "I", "could", "not", "attend", "your", "event."], cat: "Perasaan" },
  { id: 386, id_text: "Kami sangat antusias dengan rencana liburan ini.", en: ["We", "are", "very", "enthusiastic", "about", "this", "holiday", "plan."], cat: "Perasaan" },
  { id: 387, id_text: "Saya merasa sangat bersemangat memulai hari ini.", en: ["I", "feel", "very", "energetic", "to", "start", "this", "day."], cat: "Perasaan" },

  // ===== SAINS & TEKNOLOGI =====
  { id: 388, id_text: "Kecerdasan buatan mengubah cara kita bekerja.", en: ["Artificial", "intelligence", "is", "changing", "the", "way", "we", "work."], cat: "Teknologi" },
  { id: 389, id_text: "Energi surya adalah sumber energi yang ramah lingkungan.", en: ["Solar", "energy", "is", "an", "environmentally", "friendly", "energy", "source."], cat: "Sains" },
  { id: 390, id_text: "Para ilmuwan menemukan planet baru di luar galaksi kita.", en: ["Scientists", "discovered", "a", "new", "planet", "outside", "our", "galaxy."], cat: "Sains" },
  { id: 391, id_text: "Teknologi semakin berkembang setiap harinya.", en: ["Technology", "is", "growing", "more", "advanced", "every", "day."], cat: "Teknologi" },
  { id: 392, id_text: "Robot mulai menggantikan pekerjaan manusia di pabrik.", en: ["Robots", "are", "starting", "to", "replace", "human", "jobs", "in", "factories."], cat: "Teknologi" },

  // ===== MOTIVASI LANJUTAN =====
  { id: 393, id_text: "Setiap kegagalan adalah pelajaran berharga.", en: ["Every", "failure", "is", "a", "valuable", "lesson."], cat: "Motivasi" },
  { id: 394, id_text: "Jangan takut untuk bermimpi besar.", en: ["Don't", "be", "afraid", "to", "dream", "big."], cat: "Motivasi" },
  { id: 395, id_text: "Konsistensi adalah kunci menuju kesuksesan.", en: ["Consistency", "is", "the", "key", "to", "success."], cat: "Motivasi" },
  { id: 396, id_text: "Mulailah dari hal kecil dan terus berkembang.", en: ["Start", "small", "and", "keep", "growing."], cat: "Motivasi" },
  { id: 397, id_text: "Orang sukses tidak berhenti belajar.", en: ["Successful", "people", "never", "stop", "learning."], cat: "Motivasi" },
  { id: 398, id_text: "Tantangan adalah kesempatan untuk menjadi lebih kuat.", en: ["Challenges", "are", "opportunities", "to", "become", "stronger."], cat: "Motivasi" },
  { id: 399, id_text: "Percayalah bahwa yang terbaik akan datang.", en: ["Believe", "that", "the", "best", "is", "yet", "to", "come."], cat: "Motivasi" },
  { id: 400, id_text: "Kerja keras hari ini adalah hadiah untuk masa depanmu.", en: ["Hard", "work", "today", "is", "a", "gift", "for", "your", "future."], cat: "Motivasi" },
];
