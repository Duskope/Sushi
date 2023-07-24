let card = document.querySelectorAll('.card')


let cardImg = card.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active')
    })
})