// Global variables
const MONSTERSURL = "http://localhost:3000/monsters"
const container = document.querySelector("#monster-container")
const back = document.querySelector("#back")
const forward = document.querySelector("#forward")
let monstersData = []
const monstersPerPage = 50;
let currentPage = 1;



// Helper functions
const monsterClosure = (monstersArr) => {
    return monstersData = [...monstersArr]
}
console.log(monstersData)
debugger

const displayFifty = (monstersData) => {
    for (let i = 0; i < monstersData.length; i++) {
        if (i >= (currentPage - 1) * itemsPerPage && i < currentPage * itemsPerPage) {
            const name = document.createElement("h2")
            name.textContent = monstersData[i].name
            const age = document.createElement("h3")
            age.textContent = monstersData[i].age
            const p = document.createElement("p")
            p.textContent = monstersData[i].description

            container.append(name, age, p)

            currentPage++
        }
    }
}



// Fetch calls
const getAllMonsters = () => {
    fetch(MONSTERSURL)
    .then(resp => {
        if(resp.ok) {
            return resp.json()
        }
    })
    .then(monstersArr => monsterClosure(monstersArr))
    .catch(err => alert(err))
}



// Event listeners
back.addEventListener("click", e => console.log(e))



// Execute code
const initialize = () => {
    getAllMonsters()
    displayFifty(monstersData)
}
initialize()

