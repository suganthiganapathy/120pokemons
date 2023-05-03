const cardElement=document.getElementById("cards");
// settng the base URl for pokemon
const baseUrl="https://pokeapi.co/api/v2/pokemon/";

// looping through 120 pokemons usinf for loop

for(let i=1;i<=120;i++)
{
    // construct the pokemon with the current Url
const url= `${baseUrl}${i}`

// fetching the data from the url

fetch(url)
.then(response => response.json())
.then (data =>{
    // extract the datas from the API

    const name=data.name;
    const image=data.sprites.front_default;
    const ability=data.abilities[0].ability.name; 
    const hp=data.stats[0].base_stat;
    const attack=data.stats[1].base_stat;
    const defense=data.stats[2].base_stat;

    // creating a div for card

    const card=document.createElement("div");
    card.classList="card"; //setting the class name

    // setting the values like image name ability and Hp to  card
    // to set up the values we are using template literals

    card.innerHTML=`
    <img src="${image}">
    <h1 class="name">${name}</h1>
    <p>Ability:${ability}</p>
    <p>HP:${hp}, Attack:${attack},Defence:${defense}</p>`

    // append the newly created card with the id card
    cardElement.appendChild(card);
}

    )
}