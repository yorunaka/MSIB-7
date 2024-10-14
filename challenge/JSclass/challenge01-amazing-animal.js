class Animal {
    constructor(name, age, type, favouriteFoods, totalLegs = '4'){
        this.name = name
        this.age = age
        this.type = type
        this.favouriteFoods = favouriteFoods
        this.totalLegs = totalLegs
    }

    nama(name){
        this.name = name
        return this
    }

    move(){
        if(!this.totalLegs){
            console.log('I use my fins to swimming')
        } else {
            console.log('I walking and running with my legs')
        }
    }

    getInfo(message = 'Hello'){
        this.move()
        console.log(`${message} My name is ${this.name} \nMy current age is ${this.age} year(s) old \nI'm a ${this.type} \nMy favourite foods are ${this.favouriteFoods} \n`)
        
    }

}

const ruruTheCat = new Animal('Ruru', 1, 'Cat', ['Salmon', 'Tuna', 'Chicken'], 4)
console.log(ruruTheCat)

ruruTheCat.name = 'Ruru The Cat'
console.log(ruruTheCat)
ruruTheCat.move()
ruruTheCat.getInfo('Annyeong')

const charlieTheDog = new Animal('Charlie', 2, 'Dog', ['Meat', 'Cake'])
console.log(charlieTheDog)
charlieTheDog.move()
charlieTheDog.getInfo('Sawadikap')

const nemoTheFish = new Animal('Nemo', 1, 'Fish', ['Pellets', 'Moss', 'Worms'], 0)
console.log(nemoTheFish)
nemoTheFish.move()
nemoTheFish.getInfo('Aloha')