//fetch Categories
async function fetchCategories(){
    const response = await fetch("https://api.chucknorris.io/jokes/random?category={category}");//chuck api//waits for response from server
    const data =await response.json();
    return data;
}
let currentCategory= "dev"
// load onload
window.onload= asyncfunction() {
    const bodyRadioWrapper= document.getElementById("body-radio-wrapper")
data = await fetchCategories()
Array.from(data).forEach((category) =>{// data expected is array
    const categoryWrapper = document.createElement("div")
    const radio = document.createElement("input")
    radio.type = "radio"
    radio.name= "category"
    radio.value = category
    radio.id = category
    radio.className= "body-radio-button"
    radio

})
}