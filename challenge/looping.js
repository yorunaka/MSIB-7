// 1. Buatlah sebuah perulangan dengan while untuk menampilkan list orang dari 120. Di setiap perulangan,
// tampilkan di console saja format berikut: 'Halo, saya orang ke URUTAN ORANG'
let a = 0;
while (a <= 120) {
  console.log(`Halo, saya orang ke ${a}`);
  a++;
}

// Ubah tugas 1 sebelumnya menjadi menggunakan for !
for (let i = 1; i <= 120; i++) {
  console.log(`Halo, saya orang ke ${i}`);
}

// 2. Sekarang, kembali ke kode tugas 1, kita modifikasi sedikit kode kita. Gunakan percabangan/kondisional
// untuk hanya menampilkan teks dari orang urutan ganjil saja.
for (let i = 1; i <= 120; i++) {
  if (i % 2 !== 0) {
    console.log(`Halo, saya orang ke ${i}`);
  }
}


// Bebas menggunakan while atau for, buatlah sebuah perulangan yang akan menampilkan huruf O seperti di
// bawah ini: OOOO
// OOOO OOOO OOOO
// Tapi dengan syarat, kamu harus menggunakan looping untuk menampilkan bentuk di bawah ini! Be creative!
// Pikirkan bagaimana kalau kita harus menampilkan 100 "O" ke samping dengan 100 baris?

let o = '';
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    o += 'O';
  }
  o += '\n';
}
console.log(o); 

