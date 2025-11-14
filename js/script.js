// incluyendo su nombre, imagen, tipo, altura y peso.

//un fetch a https://pokeapi.co/api/v2/pokemon/ditto

//`document.getElementById('pokemon-select').value` 
//capturar boton
const getPokemon = document.getElementById('get-pokemon')
getPokemon.addEventListener('click', cargarPersonajes)
const pokemons = document.getElementById('pokemons')


function cargarPersonajes() {
    const select = document.getElementById('pokemon-select').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${select}`)

        .then(response => {
            if (!response.ok) {
                throw new Error(`El servidor no responde ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            console.log(data)
            const template = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}"></img>
            <p><strong>Tipo: </strong>${data.types[0].type.name}
            <p><strong>Altura: </strong>${data.height} Metros</p>
            <p><strong>Peso: </strong>${data.weight} Kilos</p>`
            console.log(data.types)
            pokemons.innerHTML = template
        })
        .catch((error) => {
            pokemons.innerHTML = (`Error: ${response.message}`);
            console.log(error.stack);
        });
}



