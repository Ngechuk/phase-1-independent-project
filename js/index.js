
const button = document.getElementById("generate-joke");
const jokeDiv = document.getElementById("joke");
const jokeCategory = document.querySelector("#joke-category");
const jokeText = document.querySelector("#joke-text");
const btnGetJoke = document.querySelector("#joke-get");
const chuckCategories = "https://api.chucknorris.io/jokes/categories";
const chuckAll = "https://api.chucknorris.io/jokes/random";
const chuckJokes = "https://api.chucknorris.io/jokes/random?category=";

// // const chuckJokes = 'https://api.chucknorris.io/jokes/random?category={category}'

const getJson = async (url) => {
    const resp = await fetch(url);
    const respJson = await resp.json();
    return respJson;
  };
  // Get categories
const loadCategories = async () => {
    respJson = await getJson(chuckCategories);
  
    let dropDown = document.querySelector("#joke-category");
    dropDown.options.innerHTML = "";

    // Clear out the old
  [...dropDown.options].map((e) => e.remove());
