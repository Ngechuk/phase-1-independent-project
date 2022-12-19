
const button = document.getElementById("generate-joke");
const jokeDiv = document.getElementById("joke");
const jokeCategory = document.querySelector("#joke-category");
const jokeText = document.querySelector("#joke-text");
const btnGetJoke = document.querySelector("#joke-get");
const chuckCategories = "https://api.chucknorris.io/jokes/categories";
const chuckAll = "https://api.chucknorris.io/jokes/random";
const chuckJokes = "https://api.chucknorris.io/jokes/random?category=";

// // const chuckJokes = 'https://api.chucknorris.io/jokes/random?category={category}'

