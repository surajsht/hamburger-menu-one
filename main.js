let bars = document.querySelector(".bars")
let close = document.querySelector(".close")
let ul = document.querySelector("ul")

bars.addEventListener('click', function() {
    ul.classList.add('active')
})

close.addEventListener('click', function() {
    ul.classList.remove('active')
})