let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let message = document.getElementById("message")
let count = 0

let totalCount = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (count != 0) {
        // adding previous entries
        let countStr = count + " - "
        saveEl.textContent += countStr
        // updating total
        totalCount += count
        totalEl.textContent = totalCount
        // cleaning previous values
        countEl.textContent = 0
        count = 0
        message.textContent = ""

    }
    else {
        message.textContent = "Why would you want to count 0? What is wrong with you?"
        // message.textContent = "Please increase the count before saving."
    }
}
