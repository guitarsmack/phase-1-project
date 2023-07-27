document.addEventListener("DOMContentLoaded",doAll)

let showsClass = false

function doAll(){  //initializes once the DOM is loaded
    getClasses()
}


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
        button.addEventListener("click", (e) => fillClassPage(e.target.innerText))
        document.getElementById("buttons").appendChild(button)
    })})
}


function fillClassPage(elem){ //elem is the innertext of the button that is clicked which is the class
    if (showsClass === true){ //had to make a variable that equals false by default so that when this tries to remove something it doesn't error
        document.querySelectorAll("h3").forEach(elem => elem.remove())
    }
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
            p1 = document.createElement("p")
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
    }))
    setTimeout(()=>{
        document.querySelectorAll("h3").forEach(level => {if(level.children.length === 0){level.remove()}})//removes levels that are not used due to not having any children
    },1000)
    showsClass = true //changes the variable so that the function will now remove the class iinformation that's already there
    document.getElementById("class-image").src = `p1_project_photos/${elem}image.png`//simply changes the main image to the class specific image
}




function myFunction() {
    document.body.classList.toggle("dark-mode");
}
