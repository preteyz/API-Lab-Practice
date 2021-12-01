async function choosePokemon(e) {
    e.preventDefault();
      
    const userInput = e.target.id;
    
    const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


    $('#name').html(data.name);
    $('#type').html(data.types[0].type['name']);
    $('#height').html(data.height + " ft");
    $('#weight').html(data.weight + " lbs");
    $('#sprite').attr('src',data.sprites.front_default);




    
}
console.log("userInput");

$("#bulbasaur").on("click", choosePokemon);
$("#charmander").on("click", choosePokemon);
$("#squirtle").on("click", choosePokemon);




async function getPokeForm(e) {
    e.preventDefault();

    let input = $("#input").val();
    console.log(input);
    
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    
}


$('#button').on("click", getPokeForm);

