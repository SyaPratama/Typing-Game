const paragraphGen = [
    "Penulis sering salah mengartikan selada sebagai legenda rakyat, padahal sebenarnya rasanya lebih seperti daging tanpa kutukan Jarak yang ditempuh menunjukkan bagaimana ibu mertua bisa menjadi seperti Charles Penulis sering salah mengartikan singa sebagai sains yang penuh dengan cacing, padahal sebenarnya lebih seperti lasagna yang terinfeksi lepra Terlepas dari kontroversi baru-baru ini, band mereka, pada saat ini, terlihat seperti setelan berbunga Kumpulan lelucon menjadi kursi dengan toga Catur acar pertama adalah",
    "Di zaman modern, anak kucing yang kurus adalah, dalam caranya sendiri, sebuah input Seekor burung unta adalah pemula dari panggang Sebuah knalpot yang tertekan adalah senjata dari pikiran Rekaman pesanan adalah nilai dari sudut pandang yang benar Sebuah higenis adalah lonceng sapi dari kulit Sedikit yang bisa menyebut Brazil yang suram yang bukan ruang bermain bergengsi Binatang yang tidak diinginkan berasal dari oksigen berduri Rasa hormat dari keunggulan yang diasuransikan datang bersamaan dengan pemikiran bahwa spesialis yang jernih adalah solusi",
    "17 Desember 1903 adalah tanggal lahir semua pesawat Orville dan Wilbur Wright mulai membangun glider pada tahun 1900 Pada tahun 1903, mereka membangun motor dan baling-baling untuk glider mereka Orville melakukan penerbangan pertama yang berlangsung 12 detik dan terbang sejauh 120 kaki Penerbangan Wilbur mencapai 852 kaki dalam 59 detik Penerbangan pertama ini di tahun 1903 hanyalah awal dari evolusi pesawat terbang Pada tahun 1909, Bleriot telah berhasil melintasi Selat Inggris",
    "Dua istilah umum yang digunakan untuk menggambarkan seorang tenaga penjual adalah 'Petani' dan 'Pemburu' Realitanya adalah bahwa sebagian besar tenaga penjual profesional memiliki sedikit dari kedua istilah tersebut Pemburu sering dikaitkan dengan kepribadian agresif yang menggunakan teknik penjualan agresif Dalam hal metodologi penjualan, pemburu merujuk pada seseorang yang fokus pada membawa masuk dan menutup transaksi Proses ini disebut 'penangkapan penjualan' Contohnya adalah penjualan komoditas seperti tenaga penjual jarak jauh, tenaga penjual sepatu, dan sampai tingkat tertentu, tenaga penjual mobil. Tugas mereka adalah menemukan dan mengonversi pembeli. Seorang petani penjualan adalah seseorang yang menciptakan permintaan penjualan melalui aktivitas yang secara langsung memengaruhi dan mengubah proses pembelian.",
    "Seekor angsa yang besar adalah simbol ketahanan dalam dunia burung Mereka sering terlihat berenang dengan anggun di danau-danau, tetapi di balik ketenangan mereka ada keberanian untuk melawan ancaman yang mendekat Tidak jarang melihat angsa mempertahankan wilayah mereka dari predator dengan serangan cepat dan tajam Meskipun anggun di air, angsa bisa sangat protektif dan memiliki keberanian luar biasa dalam menjaga anak-anak mereka",
    "Seiring waktu, anjing telah menjadi sahabat manusia yang paling setia Dalam banyak kebudayaan, anjing dianggap sebagai simbol kesetiaan dan pengabdian Mereka tak hanya menjaga rumah dari penyusup, tetapi juga menjadi teman dekat manusia dalam kehidupan sehari-hari Berbagai ras anjing memiliki keunikan tersendiri, mulai dari kecerdasan, keberanian, hingga sifat penyayang yang membuat mereka dicintai oleh banyak orang di seluruh dunia",
    "Bambu adalah salah satu tumbuhan paling serbaguna di dunia Dalam budaya Asia, bambu melambangkan ketahanan dan kekuatan Bambu dapat tumbuh dengan cepat dan fleksibel dalam berbagai kondisi lingkungan, menjadikannya simbol dari kemampuan untuk beradaptasi dan bertahan di tengah perubahan Di beberapa tempat, bambu digunakan untuk membangun rumah, membuat alat musik, bahkan sebagai makanan pokok bagi hewan seperti panda",
    "Di dunia kuliner, lasagna dikenal sebagai makanan yang kaya rasa dan memiliki sejarah panjang di Italia Lapisan pasta yang dipadukan dengan daging cincang, saus tomat, dan keju memberikan kombinasi rasa yang memanjakan lidah Tidak heran jika lasagna menjadi salah satu makanan yang populer di berbagai belahan dunia Setiap gigitan lasagna memberikan kenikmatan yang mengingatkan kita akan kehangatan keluarga dan tradisi yang mendalam",
    "Sejarah pesawat terbang tidak bisa lepas dari nama Wright bersaudara Penerbangan pertama yang mereka lakukan menjadi tonggak penting dalam perkembangan teknologi penerbangan Dari glider sederhana hingga pesawat bermesin, mereka membuktikan bahwa mimpi manusia untuk terbang bukanlah hal yang mustahil Hingga kini, kontribusi mereka dalam dunia penerbangan masih dihargai sebagai salah satu pencapaian terbesar dalam sejarah manusia",
    "Tenaga penjual memiliki peran penting dalam dunia bisnis Mereka adalah jembatan antara produk dan konsumen Ada dua jenis tenaga penjual: petani yang membangun hubungan dengan konsumen dan pemburu yang fokus pada transaksi cepat Keduanya memiliki metode yang berbeda, tetapi sama-sama penting dalam memastikan produk dapat diterima oleh pasar dengan baik"
  ];

const paragraph = [];

const typingText = document.querySelector(".typing-text p"),
  inpField = document.querySelector(".container .input-field"),
  tryAgain = document.querySelector(".content button"),
  timeTag = document.querySelector(".time span b"),
  mistakeTag = document.querySelector(".mistake span"),
  wpmTag = document.querySelector(".wpm span"),
  cpmTag = document.querySelector(".cpm span");


  inpField.addEventListener('keydown', function(e){
    const key = e.key;

    if (key === 'Backspace' || key === 'Delete') {
      e.preventDefault();
    }
  });
  
let timer,
  maxTime = 90,
  timeLeft = maxTime,
  charIndex = (mistake = isTyping = 0);

const generateParagraph = (arrText, row) => {
  const newArr = arrText.join("").split(" ");
  const text = [];
  for (let i = 0; i < 20; i++) {
    const random = Math.floor(Math.random() * newArr.length - 1);
    text.push(newArr[random]);
  }
  for (let j = 0; j < row; j++) {
    paragraph.push(text.join(" "));
    text.shift();
  }
};

const loadParagraph = () => {
  const randIndex = Math.floor(Math.random() * paragraph.length);
  if (paragraph.length > 0) {
    paragraph[randIndex].split("").forEach((char) => {
      let span = `<span>${char}</span>`;
      typingText.innerHTML += span;
    });
  }
  typingText.querySelectorAll("span")[0].classList.add("active");
  const type = typingText.querySelectorAll('span');
  typingText.querySelectorAll('span')[type.length - 1].innerHTML += "<span>.</span>";
  typingText.querySelectorAll('span')[type.length - 1].innerHTML += "<span> </span>";
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
};

const init = () => {
  let characters = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];
  if (charIndex < characters.length - 1 && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }
    if (typedChar == null) {
      if (charIndex > 0) {
        return charIndex;
      }
    } else {
      if (characters[charIndex].innerText == typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        mistake++;
        characters[charIndex].classList.add("incorrect");
      }
      if (charIndex > characters.length * 0.8) {
        generateParagraph(paragraphGen, 1);
        loadParagraph();
      }
      charIndex++;
    }
    characters.forEach((span) => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    let wpm = Math.round(
      ((charIndex - mistake) / 5 / (maxTime - timeLeft)) * 60
    );
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

    wpmTag.innerText = wpm;
    mistakeTag.innerText = mistake;
    cpmTag.innerText = charIndex - mistake;
  } else {
    clearInterval(timer);
    inpField.value = "";
  }
};

const initTimer = () => {
  if (timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
    let wpm = Math.round(
      ((charIndex - mistake) / 5 / (maxTime - timeLeft)) * 60
    );
    wpmTag.innerText = wpm;
  } else {
    clearInterval(timer);
  }
};

const resetType = () => {
  generateParagraph(paragraphGen,1);
  loadParagraph();
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = mistakes = isTyping = 0;
  inpField.value = "";
  timeTag.innerText = timeLeft;
  wpmTag.innerText = 0;
  mistakeTag.innerText = 0;
  cpmTag.innerText = 0;
};

generateParagraph(paragraphGen, 1);
typingText.innerHTML = "";
loadParagraph();
inpField.addEventListener("input", init);
tryAgain.addEventListener("click", resetType);
