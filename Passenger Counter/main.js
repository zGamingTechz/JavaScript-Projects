var count = 0
const element = document.getElementById("counter")

function increment() {
    count++
    element.innerText = count
}

function decrement() {
    count--
    element.innerText = count
}

function reset() {
    count = 0
    element.innerText = count
}