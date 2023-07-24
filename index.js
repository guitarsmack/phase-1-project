document.addEventListener("DOMContentLoaded",doAll)

const url = "https://www.dnd5eapi.co/api/classes"
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
        const button = document.createElement("button")
        button.innerText = data.index
        button.className = "character-button"
        button.addEventListener("click", (e) => fillClassPage(e.target.innerText))
        document.getElementById("buttons").appendChild(button)
    })})
}


//gets all levels for specified class and divides them into each level.
function fillClassPage(elem){
    fetch(`https://www.dnd5eapi.co/api/classes/${elem}/levels`)
    .then(resp => resp.json())
    .then(data => data.forEach(function (currentLevel){
        h3 = document.createElement("h3")
        h3.innerText = `Level: ${currentLevel.level}`
        h3.id = currentLevel.level
        currentLevel.features.forEach(function (feature){
            fetch(`https://www.dnd5eapi.co${feature.url}`)
            .then(resp => resp.json())
            .then(function(data){
            p1 = document.createElement("p")
            p1.innerText = data.name
            p2 = document.createElement("p")
            p2.innerText = data.desc
            p1.className = data.level
            p1.appendChild(p2)
            document.getElementById(`${data.level}`).appendChild(p1)
            })
        })
        document.getElementById("level-list").appendChild(h3)
    }))
}

function getClassAbility(feature){
    fetch(`https://www.dnd5eapi.co${feature.url}`)
    .then(resp => resp.json())
    .then(function(data){
        h4 = document.createElement("h4")
        h4.innerText = data.name
        console.log(h4)
    })
}