const button = document.getElementById('btn')
const inputText = document.getElementById('inp')
const pokelist = document.getElementById('list')
const url = "https://pokeapi.co/api/v2/pokemon/"

button.addEventListener('click',(() =>
{
    const search = inputText.value
    fetchData(url,search)
}
))

async function fetchData(url,search)
{
    try
    {
        const response = await fetch(url + search)
        console.log(response)
        if(!response.ok)
        {
            throw new Error("Something went wrong...")
        }
        const data = await response.json()
        console.log(data)
        displayData(data,response)
    }
    catch(err)
    {
        console.error(err)
    }
}
function displayData(data,response)
{
    pokelist.innerHTML = ''
    let p = []

    p.push(data)
    const pokeValue = document.createElement('div')
    // <img src=${p[0].sprites.front_default} alt=${p[0].name} />
    pokeValue.innerHTML = `
    <img src=${p[0].sprites.front_default} alt=${p[0].name} />
    <h2>Name: ${p[0].name}</h2>
    <p>Pokemon Type: ${p[0].types[0].type.name}
    <p>Height: ${p[0].height}</p>
    <p>Weight: ${p[0].weight}</p>
    <p>Stat: ${p[0].stats[0].base_stat}
    `
    backgroundImg(p[0].types[0].type.name)
    console.log(pokeValue,response)
    pokelist.appendChild(pokeValue)
}
function backgroundImg(type){
    if (type == 'electric'){
        document.body.style.backgroundImage = "url('./electric.gif')";
    }
    else if (type == 'fire'){
        document.body.style.backgroundImage = "url('./fire.gif')";
    }
    else if (type == 'grass'){
        document.body.style.backgroundImage = "url('./grass.gif')";
    }
    else if (type == 'rock'){
        document.body.style.backgroundImage = "url('./rock.gif')";
    }
    else if (type == 'dragon'){
        document.body.style.backgroundImage = "url('./dragon.gif')";
    }
    else if (type == 'water'){
        document.body.style.backgroundImage = "url('./water.gif')";
    }
    else if (type == 'ice'){
        document.body.style.backgroundImage = "url('./ice.gif')";
    }
    else if (type == 'fighting'){
        document.body.style.backgroundImage = "url('./fighting.gif')";
    }
    else if (type == 'normal'){
        document.body.style.backgroundImage = "url('./normal.gif')";
    }
    else if (type == 'psychic'){
        document.body.style.backgroundImage = "url('./psychic.gif')";
    }
    else if (type == 'ghost'){
        document.body.style.backgroundImage = "url('./ghost.gif')";
    }
    else if (type == 'dark'){
        document.body.style.backgroundImage = "url('./dark.gif')";
    }
    else if (type == 'poison'){
        document.body.style.backgroundImage = "url('./poison.gif')";
    }
    else if (type == 'bug'){
        document.body.style.backgroundImage = "url('./bug.gif')";
    }
    else if (type == 'fairy'){
        document.body.style.backgroundImage = "url('./fairy.gif')";
    }
    else if (response.ok === false){
        document.body.style.backgroundImage = "url('./giphy.gif')";
    }
    else{
        document.body.style.backgroundImage = "url('./giphy.gif')";
    }
}