// Declarations
const fullscreenMode = document.querySelector('.fullscreenMode')

// Open Full Image
document.querySelectorAll('.body__content__house').forEach(content => {
  content.addEventListener("click", function () {
    fullscreenMode.classList.add('active')
    fullscreenMode.querySelector('img').src = window.getComputedStyle(this).backgroundImage.slice(5, -2)
    document.body.style.overflow = 'hidden'
  })
})

// Close Fullscreen Mode
document.querySelector('.closeFullscreenMode').addEventListener("click", function () {
  fullscreenMode.classList.remove('active')
  document.body.style.overflowY = 'auto'
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