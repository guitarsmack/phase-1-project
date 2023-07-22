document.addEventListener("DOMContentLoaded",doAll)

const url = "https://www.dnd5eapi.co/api"
let classes = ""

function doAll(){
    getClasses()
}

function getClasses(){
    fetch(url)
    .then(resp => resp.json())
    .then(data => classes = data)
}
