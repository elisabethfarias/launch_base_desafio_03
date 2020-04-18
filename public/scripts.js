const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener("click", function(){
    const paginaId = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${paginaId}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".card").addEventListener("click", function(){
  const modal = document.querySelector('.modal')
  let screenWidth = parseInt(window.screen.availWidth)
  let screenHeigth = parseInt(window.screen.availHeight)
  modal.classList.add("maximize")
  modal.setAttribute("style", `min-width: ${screenWidth}px; min-heigth: ${screenHeigth}px;`)
})


