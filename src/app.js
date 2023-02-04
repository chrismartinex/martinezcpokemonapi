// alert()
let firstbtn = document.getElementById("firstbtn");
let input1 = document.getElementById("input1")
let randombtn = document.getElementById("randombtn");
let powerabilities = document.getElementById("powerabilities");

let pokemoninfo;
let pokemoninfo1;
let pokemoninfo2;
let pokemoninfo3;


randombtn.addEventListener("click", function (){
 pokemonData(getRandomInt(649));
})

firstbtn.addEventListener("click", function () {
  pokemonData(input1.value);
});

async function pokemonData (input1) {
const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${input1}`)
const data = await promise.json();
pokemoninfo = data;
console.log(pokemoninfo);
pokemoninfo.sprites.front_default;
image1.src = pokemoninfo.sprites.front_default;
image2.src = pokemoninfo.sprites.front_shiny;
pokemoninfo.sprites.front_shiny;
getMoves(pokemoninfo.moves)

if(pokemoninfo.id > 649) {
 alert("You ran out of tries")
}
}
pokemonData(getRandomInt(649));
function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

async function pokemonData1 (powermoves) {
 const promise = await fetch (powermoves)
 const data = await promise.json();
 pokemoninfo1 = data
 console.log(pokemoninfo1)
}

function getMoves (array){
powerabilities.innerHTML = ''
 array.forEach(element => {
 powerabilities.innerHTML += `${element.move.name} `;
 
});
}

//second call for powemoves

// async function pokemonData (powermoves) {
//  const promise = await fetch()
//  const data = await promise.json();
//}

// pokemonData("pikachu");


// //randomizer 
// function RandomPokemon() {
//   let random = Math.floor(Math.random() * studentStaffNames.length);
//   // names.innerHTML = studentStaffNames.studentStaffNames[random].Names;
//   console.log(random);
// }

