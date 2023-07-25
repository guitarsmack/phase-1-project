document.addEventListener("DOMContentLoaded",doAll)

const url = "https://www.dnd5eapi.co/api/classes"
let showsClass = false

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


function fillClassPage(elem){
    if (showsClass === true){
        document.querySelectorAll("h3").forEach(elem => elem.remove())
    }
    fetch(`https://www.dnd5eapi.co/api/classes/${elem}/levels`) //gets the full class levels
    .then(resp => resp.json())
    .then(data => data.forEach(function (currentLevel){ //iterates through each level
        h3 = document.createElement("h3")
        h3.innerText = `Level: ${currentLevel.level}`
        h3.id = currentLevel.level
        h3.className = "class-details"
        currentLevel.features.forEach(function (feature){ //iterates through each of the class features
            fetch(`https://www.dnd5eapi.co${feature.url}`)//each with their own api addresses
            .then(resp => resp.json())
            .then(function(data){ //creates each ability title
            p1 = document.createElement("p")
            p1.innerText = data.name
            p1.className = "ability-name"
            p2 = document.createElement("p") //creates each ability description
            p2.innerText = data.desc
            p1.className = "ability-details"
            p1.appendChild(p2)
            document.getElementById(`${data.level}`).appendChild(p1)
            })
        })
        document.getElementById("level-list").appendChild(h3)
    }))
    showsClass = true
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