const url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=pasta,&apiKey=bfb10937abba4866b0a3c3cdc18b6d5a';



const apiKey = '/qfWzCbamleCXYJ8TjBV1A==yk8SOVlNAPXtvk3n';

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

/* first course*/
const beef_carpaccio = 'https://api.api-ninjas.com/v1/recipe?query=carpaccio';

const carpaccio_response = await fetch(beef_carpaccio, options,);

const carpaccio = await carpaccio_response.json();

document.querySelector(".p-menu:nth-child(3)").innerHTML = carpaccio[0].title;

const bread_raw = 'https://api.api-ninjas.com/v1/recipe?query=Garlic bread';

const bread_response = await fetch(bread_raw, options,);

const bread = await bread_response.json();

document.querySelector(".p-menu:nth-child(4)").innerHTML = bread[1].title;

const steak_tartar = 'https://api.api-ninjas.com/v1/recipe?query=Steak tartar';

const tartar_response = await fetch(steak_tartar, options,);

const tartar = await tartar_response.json();

document.querySelector(".p-menu:nth-child(5)").innerHTML = tartar[1].title;

/* main course */
const lamb_url = 'https://api.api-ninjas.com/v1/recipe?query=Lamb chops';

const lamb_response = await fetch(lamb_url, options,);

const lamb = await lamb_response.json();

document.querySelector(".p-menu:nth-child(7)").innerHTML = lamb[3].title;


const pasta_url = 'https://api.api-ninjas.com/v1/recipe?query=pasta';

const pasta_response = await fetch(pasta_url, options,);

const pasta = await pasta_response.json();

document.querySelector(".p-menu:nth-child(8)").innerHTML = pasta[2].title;


const entrecote_url = 'https://api.api-ninjas.com/v1/recipe?query=entrecote';

const entrecote_response = await fetch(entrecote_url, options,);

const entrecote = await entrecote_response.json();

document.querySelector(".p-menu:nth-child(9)").innerHTML = entrecote[1].title;

/* dessert */

const vanilla_url = 'https://api.api-ninjas.com/v1/recipe?query=vanilla ice cream';

const vanilla_response = await fetch(vanilla_url, options,);

const vanilla = await vanilla_response.json();

document.querySelector(".p-menu:nth-child(11)").innerHTML = vanilla[7].title;


const cannoli_url = 'https://api.api-ninjas.com/v1/recipe?query=Cannoli';

const cannoli_response = await fetch(cannoli_url, options,);

const cannoli = await cannoli_response.json();

document.querySelector(".p-menu:nth-child(12)").innerHTML = cannoli[1].title;


const brownie_url = 'https://api.api-ninjas.com/v1/recipe?query=Brownies';

const brownie_response = await fetch(brownie_url, options,);

const brownie = await brownie_response.json();

document.querySelector(".p-menu:nth-child(13)").innerHTML = brownie[7].title;



