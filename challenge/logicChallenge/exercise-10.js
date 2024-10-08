/**
 * 
 * Sensor Kata
 * -----------
 * 
 * Terdapat sebuah fungsi yang menerima 3 buah parameter.
 * parameter pertama diisi oleh sebuah kalimat.
 * parameter kedua berisi kata yang harus yang harus di sensor dalam kalimat tersebut.
 * dan parameter ketiga diisi oleh karakter yang di gunakan untuk mensensor kata yang terdapat pada parameter pertama.
 
 * [ketentuan]: 
 * - dilarang menggunakan built-in function javascript selain .push();
 */
function sensorKata(kalimat, sensor, karakter) {
    // tulis kodemu disini
  }
  
  console.log(sensorKata("We are Hacktiv8 coders! Say yes to code!", "code", "-")); 
  
  // We are Hacktiv8 ----rs! Say yes to ----!
  
  console.log(sensorKata("Jakarta adalah kota yang asri. Jakarta adalah kota metropolitan", "Jakarta", "*")); 
  
  // ******* adalah kota yang asri. ******* adalah kota metropolitan
  console.log(sensorKata("You only live once", "yolo", "_"));
  
  // You only live once