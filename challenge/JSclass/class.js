class Pohon {
    constructor (nama, panen, totalBuah, hargaBibit, hargaJual){
        this.nama = nama
        this.panen = panen
        this.totalBuah = totalBuah
        this.hargaBibit = hargaBibit
        this.hargaJual = hargaJual
        this.umur = 0
    }

    siram(){
        this.umur++
        return this
    }

    manen(){
        if(this.panen < this.umur){
           return 'Sudah Siap Dipanen.'
        } else {
            return 'Belum Siap Panen.'
        }
    }

}

const jagung = new Pohon('Jagung', 5, 10, 100, 150)
console.log(jagung.siram().siram().siram().siram().siram().manen())