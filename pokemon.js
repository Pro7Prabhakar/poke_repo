const button = document.getElementById('btn')
const inputText = document.getElementById('inp')
const pokelist = document.getElementById('list')
const url = "https://pokeapi.co/api/v2/pokemon/"

button.addEventListener('click',(() =>
{
    const text = inputText.value
    const search = text.toLowerCase();
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
        pokelist.innerHTML = ''
        document.body.style.backgroundImage = "url('./media/giphy.gif')";
        console.error(err)
        pokelist.innerHTML = `<strong>No Pokemon Found with that Name. Search Again</strong>`
    }
}
function displayData(data,response)
{
    pokelist.innerHTML = ''
    let p = []

    p.push(data)
    const pokeValue = document.createElement('div')
    pokeValue.classList.add('pokeValue')
    pokeValue.innerHTML = `
    <img src=${p[0].sprites.front_default} alt=${p[0].name} />
    <h2>Name: ${p[0].name}</h2>
    <p>Pokemon Type: ${p[0].types[0].type.name}
    <p>Stat: ${p[0].stats[0].base_stat}
    <p>Height: ${p[0].height}</p>
    <p>Weight: ${p[0].weight}</p>
    `
    backgroundImg(p[0].types[0].type.name)
    console.log(pokeValue,response)
    pokelist.appendChild(pokeValue)
}
function backgroundImg(type){
    if (type == 'electric'){
        document.body.style.backgroundImage = "url('./media/electric.gif')";
    }
    else if (type == 'fire'){
        document.body.style.backgroundImage = "url('./media/fire.gif')";
    }
    else if (type == 'grass'){
        document.body.style.backgroundImage = "url('./media/grass.gif')";
    }
    else if (type == 'rock'){
        document.body.style.backgroundImage = "url('./media/rock.gif')";
    }
    else if (type == 'dragon'){
        document.body.style.backgroundImage = "url('./media/dragon.gif')";
    }
    else if (type == 'water'){
        document.body.style.backgroundImage = "url('./media/water.gif')";
    }
    else if (type == 'ice'){
        document.body.style.backgroundImage = "url('./media/ice.gif')";
    }
    else if (type == 'fighting'){
        document.body.style.backgroundImage = "url('./media/fighting.gif')";
    }
    else if (type == 'normal'){
        document.body.style.backgroundImage = "url('./media/normal.gif')";
    }
    else if (type == 'psychic'){
        document.body.style.backgroundImage = "url('./media/psychic.gif')";
    }
    else if (type == 'ghost'){
        document.body.style.backgroundImage = "url('./media/ghost.gif')";
    }
    else if (type == 'dark'){
        document.body.style.backgroundImage = "url('./media/dark.gif')";
    }
    else if (type == 'poison'){
        document.body.style.backgroundImage = "url('./media/poison.gif')";
    }
    else if (type == 'bug'){
        document.body.style.backgroundImage = "url('./media/bug.gif')";
    }
    else if (type == 'fairy'){
        document.body.style.backgroundImage = "url('./media/fairy.gif')";
    }
    else{
        document.body.style.backgroundImage = "url('./media/giphy.gif')";
    }
}