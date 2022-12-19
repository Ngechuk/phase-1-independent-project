
const button = document.getElementById("generate-joke");
const loadCategories = async () => {
    respJson = await getJson(chuckCategories);
  
    let dropDown = document.querySelector("#joke-category");
    dropDown.options.innerHTML = "";
  

button.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
      jokeDiv.innerHTML = data.value;
      console.log(data.value);
    });
});
fetch("https://api.chucknorris.io/jokes/search?query=chuck", {
    method: "GET"
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.result);
    });
  