var counterEl = document.getElementById("counter-el")
var incrementBtn = document.getElementById("increment-btn")
var saveBtn = document.getElementById("save-btn")
var resetBtn = document.getElementById("reset-btn")
var saveEl = document.getElementById("save-el")
var count = 0
function increment() {
    count = count + 1
    // count +=1
    console.log(count)
    counterEl.textContent = count
}
function save() {
    saveEl.textContent += (count+" - ")

    count = 0
    counterEl.textContent = count
    
}
function reset() {
    count = 0
    counterEl.textContent = count
}
function deleteAll() {
    count=0
    count= counterEl.textContent = count
    saveEl.textContent = ("Previous Entries:")
    
}