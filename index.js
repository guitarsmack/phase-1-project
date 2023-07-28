document.addEventListener("DOMContentLoaded",performOpening)


function performOpening(){
    getClasses()
    addPageClear()
}

function addPageClear(){
    document.querySelector("img").addEventListener("dblclick",(e) => {
        removeChildren()
        e.target.src = "p1_project_photos/DnD-Emblem.png"
        document.getElementById("class-title").innerText = "Choose Your Path"
        console.log(e.target)
        
    })
}

function getClasses(){
    fetch("https://www.dnd5eapi.co/api/classes")//gets an array of all the clases
    .then(resp => resp.json())
    .then(data => makeButtons(data.results))
}

function makeButtons(classes){
    classes.map(element => {
    fetch(`https://www.dnd5eapi.co/api/classes/${element.index}`)//for each class it is getting its name to make the button
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
    removeChildren()//removes any previously listed class abilities
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
            document.getElementById(`${data.level}`).appendChild(p1)//list of features are created
            })
        })
        document.getElementById("level-list").appendChild(h3)//adds each level to the DOM
    })).catch(response => console.error(response))
    setTimeout(removeParents,1000)//gets rid of empty levels
    document.getElementById("class-image").src = `p1_project_photos/${elem}image.png`//simply changes the main image to the class specific image
}

function removeParents(){
    let h3s = document.querySelectorAll("h3")
    h3s.forEach(level => {
        if(level.children.length === 0){
            level.remove()
        }
    })
}

function removeChildren(){
    let parent = document.getElementById("level-list")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

