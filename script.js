// Declarations
const fullscreenMode = document.querySelector('.fullscreenMode')

// Open Full Image
document.querySelectorAll('.body__content__house').forEach(content => {
  content.addEventListener("click", function () {
    fullscreenMode.classList.add('active')
    const fullscreenImg = fullscreenMode.querySelector('img')
    if (fullscreenImg.width > fullscreenMode.minWidth - 50) {
      fullscreenMode.minWidth = (fullscreenImg.width + 50) + 'px'
    }
    else if (fullscreenImg.height > fullscreenMode.minHeight - 50) {
      fullscreenMode.minHeight = (fullscreenImg.height + 50) + 'px'
    }
    document.body.style.overflow = 'hidden'
})})

// Close loginRegister Div
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