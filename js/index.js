
const button = document.getElementById("generate-joke");
const jokeDiv = document.getElementById("joke");

button.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
      jokeDiv.innerHTML = data.value;
    });
});
