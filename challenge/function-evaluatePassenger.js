// NEW LOGIC!!!!!!

function evaluatePassenger(passenger) {
    let country = ['China', 'Japan', 'Korea', 'Singapore']
    let status = ''
    let sus = 0

    for (let i = 0; i < passenger.travelHistory.length; i++) {
        if (country.includes(passenger.travelHistory[i])) {
            sus++
        }
    }

    if (sus > 0) {
        if (passenger.temperature > 35) {
            status = 'Suspect'
        } else {
            status = 'Healthy'
        }
    } else {
        if (passenger.temperature > 35) {
            status = 'Sick'
        } else {
            status = 'Healthy'
        }
    }
    return `Passenger ${passenger.id} ${passenger.name} ${status}`
}
    console.log(evaluatePassenger({
     name: 'Budi',
     id: 50,
     temperature: 40,
     travelHistory: ['Russia', 'Japan']
    }))
    //Passenger 50 Budi Suspect
    console.log(evaluatePassenger({
     name: 'Tono',
     id: 10, 
     temperature: 40,
     travelHistory: ['Morocco', 'France', 'Burma']
    }))
    //Passenger 10 Tono Sick
    console.log(evaluatePassenger({
     name: 'Tsubasa',
     id: 15,
     temperature: 30,
     travelHistory: ['Brazil']
    }))
    //Passenger 15 Tsubasa Healthy
    console.log(evaluatePassenger({
     name: 'Fulan',
     id: 20,
     temperature : 36,
     travelHistory: ['Aljazair']
    }))
    console.log(evaluatePassenger({
     name: 'Fulano',
     id: 20,
     temperature : 14,
     travelHistory: ['Indonesia']
    }))