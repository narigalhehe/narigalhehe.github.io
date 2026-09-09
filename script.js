// 1. DATA SPESIES — tinggal copy satu blok { ... } untuk menambah data baru
const daftarSpesies = [
  {
    nama: "Komodo",
    namaLatin: "Varanus komodoensis",
    kategori: "hewan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Komodo_dragon_%28Varanus_komodoensis%29_4.jpg/500px-Komodo_dragon_%28Varanus_komodoensis%29_4.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Pulau Komodo, Rinca & Flores (NTT)",
    status: "Terancam Punah",
    deskripsi:
      "Kadal terbesar di dunia, bisa tumbuh hingga 3 meter. Hanya hidup di alam liar di beberapa pulau kecil Nusa Tenggara Timur.",
  },

  {
    nama: "Orangutan Kalimantan",
    namaLatin: "Pongo pygmaeus",
    kategori: "hewan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/500px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Hutan hujan Kalimantan",
    status: "Kritis (Sangat Terancam)",
    deskripsi:
      "Primata besar berbulu oranye yang sangat cerdas dan sebagian besar hidup di atas pohon. Populasinya terus menurun akibat hilangnya hutan.",
  },

  {
    nama: "Harimau Sumatera",
    namaLatin: "Panthera tigris sumatrae",
    kategori: "hewan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Sumatran_Tiger_Berlin_Tierpark.jpg/500px-Sumatran_Tiger_Berlin_Tierpark.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Hutan Pulau Sumatera",
    status: "Kritis (Sangat Terancam)",
    deskripsi:
      "Subspesies harimau terkecil, dan satu-satunya harimau yang masih bertahan di Indonesia setelah harimau Jawa dan Bali punah.",
  },

  {
    nama: "Anoa",
    namaLatin: "Bubalus sp.",
    kategori: "hewan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/MOUNTAIN_INOA%2C_SAN_DIEGO_ZOO%2C_CALIFORNIA.jpg/500px-MOUNTAIN_INOA%2C_SAN_DIEGO_ZOO%2C_CALIFORNIA.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Hutan dataran rendah Sulawesi",
    status: "Terancam Punah",
    deskripsi:
      "Kerbau kerdil asli Sulawesi, tingginya hanya sekitar 70-100 cm. Hidup menyendiri, berbeda dari kerbau lain yang biasa berkelompok.",
  },

  {
    nama: "Cendrawasih",
    namaLatin: "Paradisaeidae",
    kategori: "hewan",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/6/64/Lesser_Bird_of_Paradise.jpg?utm_source=jv.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
    habitat: "Hutan Papua & Maluku",
    status: "Dilindungi",
    deskripsi:
      "Dikenal sebagai 'burung dari surga' karena bulunya yang sangat indah dan tarian jantan yang unik untuk menarik perhatian betina.",
  },

  {
    nama: "Badak Jawa",
    namaLatin: "Rhinoceros sondaicus",
    kategori: "hewan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Rhinoceros_sondaicus_in_London_Zoo.jpg/500px-Rhinoceros_sondaicus_in_London_Zoo.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Taman Nasional Ujung Kulon",
    status: "Kritis (Sangat Terancam)",
    deskripsi:
      "Salah satu mamalia besar paling langka di dunia. Populasinya kini hanya tersisa di satu tempat saja, yaitu Ujung Kulon, Banten.",
  },

  {
    nama: "Tarsius",
    namaLatin: "Tarsius sp.",
    kategori: "hewan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Tarsius_sp._1.jpg/500px-Tarsius_sp._1.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Hutan Sulawesi",
    status: "Rentan",
    deskripsi:
      "Primata kecil bermata sangat besar yang aktif di malam hari. Ukurannya hanya sebesar kepalan tangan orang dewasa.",
  },

  {
    nama: "Burung Maleo",
    namaLatin: "Macrocephalon maleo",
    kategori: "hewan",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Stavenn_Maleo.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
    habitat: "Sulawesi",
    status: "Terancam Punah",
    deskripsi:
      "Burung unik yang mengubur telurnya di pasir panas atau dekat sumber panas bumi agar menetas dengan panas alami, bukan dierami induknya.",
  },

  {
    nama: "Rafflesia",
    namaLatin: "Rafflesia arnoldii",
    kategori: "tumbuhan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Rafflesia_arnoldii%2C_Sumatra.jpg/960px-Rafflesia_arnoldii%2C_Sumatra.jpg?utm_source=id.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    habitat: "Hutan Sumatera",
    status: "Langka",
    deskripsi:
      "Bunga tunggal terbesar di dunia, diameternya bisa lebih dari 1 meter. Terkenal karena baunya yang menyerupai daging busuk untuk menarik lalat penyerbuk.",
  },

  {
    nama: "Bunga Bangkai Raksasa",
    namaLatin: "Amorphophallus titanum",
    kategori: "tumbuhan",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Titan-arum1web.jpg?utm_source=id.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
    habitat: "Hutan Sumatera",
    status: "Rentan",
    deskripsi:
      "Memiliki tongkol bunga tertinggi di dunia, bisa mencapai lebih dari 3 meter. Berbeda dari Rafflesia meskipun sama-sama berbau tidak sedap.",
  },

  {
    nama: "Kantong Semar",
    namaLatin: "Nepenthes sp.",
    kategori: "tumbuhan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Nepenthes_peltata.jpg/500px-Nepenthes_peltata.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Hutan Kalimantan & Sumatera",
    status: "Dilindungi",
    deskripsi:
      "Tumbuhan karnivora dengan kantong berisi cairan pencerna, digunakan untuk menjebak dan mencerna serangga sebagai sumber nutrisi tambahan.",
  },

  {
    nama: "Anggrek Hitam",
    namaLatin: "Coelogyne pandurata",
    kategori: "tumbuhan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Coelogyne_pandurata_orchid_%2849375109546%29.jpg/500px-Coelogyne_pandurata_orchid_%2849375109546%29.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Hutan Kalimantan",
    status: "Langka",
    deskripsi:
      "Anggrek khas Kalimantan Timur dengan bunga hijau bercorak hitam yang unik. Menjadi identitas flora Provinsi Kalimantan Timur.",
  },

  {
    nama: "Edelweiss Jawa",
    namaLatin: "Anaphalis javanica",
    kategori: "tumbuhan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Bunga_Senduro.JPG/500px-Bunga_Senduro.JPG?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Puncak gunung berketinggian tinggi di Jawa",
    status: "Dilindungi",
    deskripsi:
      "Dikenal sebagai 'bunga abadi' karena mampu bertahan mekar sangat lama. Sering dijumpai pendaki gunung namun dilarang keras untuk dipetik.",
  },

  {
    nama: "Pohon Ulin",
    namaLatin: "Eusideroxylon zwageri",
    kategori: "tumbuhan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Eusideroxylon_zwageri.JPG/500px-Eusideroxylon_zwageri.JPG?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Hutan Kalimantan & Sumatera",
    status: "Rentan",
    deskripsi:
      "Dijuluki 'kayu besi' karena kekuatan dan ketahanannya yang luar biasa terhadap air dan rayap. Butuh puluhan tahun untuk tumbuh dewasa.",
  },

  {
    nama: "Cendana",
    namaLatin: "Santalum album",
    kategori: "tumbuhan",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Santalum_album_%28Chandan%29_in_Hyderabad%2C_AP_W_IMG_0025.jpg/500px-Santalum_album_%28Chandan%29_in_Hyderabad%2C_AP_W_IMG_0025.jpg?utm_source=id.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    habitat: "Nusa Tenggara Timur",
    status: "Langka",
    deskripsi:
      "Pohon penghasil kayu wangi yang sangat berharga, telah dimanfaatkan sejak berabad-abad lalu untuk parfum, dupa, dan ukiran.",
  },
];

// 2. AMBIL ELEMEN HTML
const gridKartu = document.getElementById("grid-kartu");
const jumlahHasil = document.getElementById("jumlah-hasil");
const inputCari = document.getElementById("input-cari");
const tombolFilter = document.querySelectorAll(".tombol-filter");

const overlay = document.getElementById("overlay");
const tombolTutup = document.getElementById("tombol-tutup");

const modalIkon = document.getElementById("modal-ikon");
const modalNama = document.getElementById("modal-nama");
const modalLatin = document.getElementById("modal-latin");
const modalKategori = document.getElementById("modal-kategori");
const modalHabitat = document.getElementById("modal-habitat");
const modalStatus = document.getElementById("modal-status");
const modalDeskripsi = document.getElementById("modal-deskripsi");

let kategoriAktif = "semua";
let kataKunci = "";

// 3. GAMBAR KARTU KE HALAMAN
function gambarKartu() {
  const hasil = daftarSpesies.filter(function (item) {
    const cocokKategori =
      kategoriAktif === "semua" || item.kategori === kategoriAktif;
    const cocokKataKunci = item.nama
      .toLowerCase()
      .includes(kataKunci.toLowerCase());
    return cocokKategori && cocokKataKunci;
  });

  jumlahHasil.textContent = hasil.length + " spesies ditemukan";
  gridKartu.innerHTML = "";

  if (hasil.length === 0) {
    gridKartu.innerHTML =
      '<p class="kosong">Tidak ada spesies dengan nama tersebut. Coba kata kunci lain.</p>';
    return;
  }

  hasil.forEach(function (item) {
    const kartu = document.createElement("button");
    kartu.className = "kartu";
    kartu.innerHTML = `
      <img class="foto" src="${item.gambar}" alt="${item.nama}">
      <h3>${item.nama}</h3>
      <p class="nama-latin">${item.namaLatin}</p>
      <span class="badge ${item.kategori}">${item.kategori === "hewan" ? "Hewan" : "Tumbuhan"}</span>
    `;
    kartu.addEventListener("click", function () {
      bukaDetail(item);
    });
    gridKartu.appendChild(kartu);
  });
}

// 4. BUKA & TUTUP MODAL DETAIL
function bukaDetail(item) {
  modalIkon.src = item.gambar;
  modalIkon.alt = item.nama;
  modalLatin.textContent = item.namaLatin;
  modalKategori.textContent = item.kategori === "hewan" ? "Hewan" : "Tumbuhan";
  modalHabitat.textContent = item.habitat;
  modalStatus.textContent = item.status;
  modalDeskripsi.textContent = item.deskripsi;
  overlay.classList.add("tampil");
}

function tutupDetail() {
  overlay.classList.remove("tampil");
}

tombolTutup.addEventListener("click", tutupDetail);
overlay.addEventListener("click", function (peristiwa) {
  if (peristiwa.target === overlay) {
    tutupDetail();
  }
});

// 5. PENCARIAN & FILTER KATEGORI
inputCari.addEventListener("input", function (peristiwa) {
  kataKunci = peristiwa.target.value;
  gambarKartu();
});

tombolFilter.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    kategoriAktif = tombol.dataset.kategori;
    tombolFilter.forEach(function (t) {
      t.classList.remove("aktif");
    });
    tombol.classList.add("aktif");
    gambarKartu();
  });
});

// 6. JALANKAN PERTAMA KALI
gambarKartu();
