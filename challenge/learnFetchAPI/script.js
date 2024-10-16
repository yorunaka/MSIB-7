let pokemons = document.getElementById('pokeData')

// API FETCH
fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((pokemon) => {
            let { name, url } = pokemon
            fetch(url)
                .then((res) => res.json())
                .then((poke) => {
                    let abilities = poke.abilities.map((ability) => ability.ability.name).join(', ')
                    let moves = poke.moves.map((move) => move.move.name).join(', ')
                    let weight = poke.weight
                    let image = poke.sprites.other.dream_world.front_default;
                    let location_area_encounters = poke.location_area_encounters
                    fetch(location_area_encounters)
                        .then((locRes) => locRes.json())
                        .then((locations) => {
                            let locationNames = locations.map((loc) => loc.location_area.name).join(', ');
                            console.log(locationNames)
                            pokemons.innerHTML += `
                            <tr>
                                <td><img src="${image}" alt="${name}" width=100 height=100/></td>
                                <td>${name}</td>
                                <td>${abilities}</td>
                                <td>${weight}</td>
                                <td>${moves}</td>
                                <td>${locationNames}</td>
                            </tr>
                            `
                        })
                })
        })
    })