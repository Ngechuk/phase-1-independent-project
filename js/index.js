//fetch Categories
async function fetchCategories(){
    const response = await fetch("https://api.chucknorris.io/jokes/categories");//chuck api//waits for response from server
    const data =await response.json();
    return data;
} 
// fetch single joke
async function fetchJoke(currentCategory){
    const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${currentCategory}`
    );
    const data =await response.json();
    return data.value;
}
let currentCategory= "dev"
// load onload
window.onload= async function() {
    const bodyRadioWrapper= document.getElementById("body-radio-wrapper");
      data = await fetchCategories();
    Array.from(data).forEach((category) =>{// data expected is array
    const categoryWrapper = document.createElement("div");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name= "category";
    radio.value = category;
    radio.id = category;
    radio.className= "body-radio-button";
    radio.addEventListener("click", () =>{
        currentCategory = event.target.id;
    });
    categoryWrapper.appendChild(radio);
    const label = document.createElement("label");
    label.htmlFor= category;
    label.innerHTML= category;
    categoryWrapper.appendChild(label);

    bodyRadioWrapper.appendChild(categoryWrapper);
});
};
//fetch single joke
const jokeButton= document.getElementById("joke-button")
jokeButton.addEventListener("click", async function(){
    const value = fetchJoke(currentCategory)
    const jokeText = document.getElementById("body-joke area")
    jokeText =document.getElementById("body-joke-area")
    jokeText.innerHTML = ""
    jokeText.innerHTML = value
})