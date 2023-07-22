document.addEventListener("DOMContentLoaded",doAll)

const url = "https://www.dnd5eapi.co/api/classes"
// let classes = ""
let selectedClassName = ""

function doAll(){  //initializes once the DOM is loaded
    getClasses()
}


function getClasses(){ //fetches data to put through to make buttons 
    fetch(url)         //to select the class information to reveal
    .then(resp => resp.json())
    .then(data => makeButtons(data.results))
}

function makeButtons(classes){
    console.log(classes)
    classes.map(element => {
    fetch(`https://www.dnd5eapi.co/api/classes/${element.index}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data.index)
        const button = document.createElement("button")
        button.innerText = data.index
        button.addEventListener("click", () => {console.log(data.index)})
        document.getElementById("buttons").appendChild(button)
    })})
}

