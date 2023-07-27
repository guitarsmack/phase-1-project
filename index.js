document.addEventListener("DOMContentLoaded",getClasses)




function getClasses(){ //fetches data to put through to make buttons 
    fetch("https://www.dnd5eapi.co/api/classes")         //to select the class information to reveal
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
        button.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "gold")
        button.addEventListener("mouseout", (e) => e.target.style.backgroundColor = "rgb(194, 175, 135)")
        button.addEventListener("click", (e) => fillClassPage(e.target.innerText.toLowerCase()))
        document.getElementById("buttons").appendChild(button)
    })})
}


function fillClassPage(elem){ //elem is the innertext of the button that is clicked which is the class
    let parent = document.getElementById("level-list")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    document.getElementById("class-title").innerText = elem
    fetch(`https://www.dnd5eapi.co/api/classes/${elem}/levels`) //gets the full class levels
    .then(resp => resp.json())
    .then(data => data.forEach(function (currentLevel){ //iterates through each level initially makes just the level header
        h3 = document.createElement("h3")
        h3.innerText = `Level: ${currentLevel.level}`
        h3.id = currentLevel.level
        h3.className = "level"
        currentLevel.features.forEach(function (feature){ //iterates through each of the class features in a single level
            fetch(`https://www.dnd5eapi.co${feature.url}`)//each feature has their own api addresses
            .then(resp => resp.json())
            .then(function(data){ //creates each ability name and information
            p1 = document.createElement("h5")
            p1.innerText = data.name
            p1.className = "ability-name"
            p2 = document.createElement("p") 
            p2.innerText = data.desc
            p2.className = "ability-details"
            p1.appendChild(p2)
            document.getElementById(`${data.level}`).after(p1)
            })
        })
        document.getElementById("level-list").appendChild(h3)
    })).catch(response => console.error(response))
    document.getElementById("class-image").src = `p1_project_photos/${elem}image.png`//simply changes the main image to the class specific image
}



