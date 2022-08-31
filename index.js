let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let saveCount = count + " - "
    saveEl.textContent += saveCount
    console.log(count)
    count = 0
    countEl.textContent = count
}