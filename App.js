var number = document.querySelector("#number")

function minus() {
    // number.innerHTML--
    if (number.innerHTML > 0) {
        number.innerHTML--
    }
}

function plus() {
    number.innerHTML++
}

function reset() {
    number.innerHTML = 0
}