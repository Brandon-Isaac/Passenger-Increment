let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0

function increment() {
    count ++
    countEl.innerText = count
}

function save() {
    let countStr =" " + count  
    saveEl.innerText += countStr
}



