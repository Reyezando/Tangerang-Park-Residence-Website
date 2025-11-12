// Open Full Image
document.querySelectorAll('.body__content__house').forEach(content => {
  content.addEventListener("click", function () {
    document.querySelector('.fullscreenMode').classList.add('active')
})})

// Close loginRegister Div
document.querySelector('.closeFullscreenMode').addEventListener("click", function () {
  document.querySelector('.fullscreenMode').classList.remove('active')
})

// Splide Js Render
document.querySelectorAll('.splide-Home').forEach(function (el) {
  new Splide(el, {
    type: 'loop',
    width: '100%',
    height: '25rem',
    breakpoints: {
      800: {
        height: '20rem'
      },
    }
  }).mount()
})