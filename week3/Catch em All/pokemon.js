
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        //console.log(xhr.responseText);
        let pokemon = JSON.parse(xhr.responseText);
        // console.log(pokemon);
        printPokemon(pokemon.results);
    }
}


function printPokemon(pokemon){
    for(let x = 0; x < pokemon.length; x++){
        var border = document.createElement('div');
        const animal = document.createElement('p');
        animal.textContent = pokemon[x].name + ',  ' + pokemon[x].url;
        border.appendChild(animal);
        document.body.appendChild(border);

        border.classList.add('pokemon');
    }
}