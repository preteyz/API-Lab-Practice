let moves = [];

async function choosePokemon(e) {
    e.preventDefault();
      
    const userInput = e.target.id;
    
    const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


    $('#name').html(data.name);
    $('#type').html(data.types[0].type['name']);
    $('#hp').html(data.stats[0].base_stat);
    $('#weight').html(data.weight + " lbs");
    $('#sprite').attr('src',data.sprites.front_default);

    
}

$("#bulbasaur").on("click", choosePokemon);
$("#charmander").on("click", choosePokemon);
$("#squirtle").on("click", choosePokemon);


function getRandom(max) {
    return Math.floor(Math.random() * max);
}


async function getMove(e) {
    e.preventDefault();

    const userInput = $('#input').val();
    const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    const response = await fetch(url);
    const data = await response.json();

    const move = data.moves[getRandom(data.moves.length)].move.name;
    console.log(move)

    $('#move').html(move);

}


$('#button').on("click", getMove);

