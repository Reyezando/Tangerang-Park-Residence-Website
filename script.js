// Declarations
const fullscreenMode = document.querySelector('.fullscreenMode')
const img = fullscreenMode.querySelector('img')

// Open Full Image
document.querySelectorAll('.body__content__house').forEach(content => {
  content.addEventListener("click", function () {
    fullscreenMode.classList.add('active')
    img.src = window.getComputedStyle(this).backgroundImage.slice(5, -2)
    document.body.style.overflow = 'hidden'
  })
})

// Zoom-in Image
img.addEventListener("click", () => {
  img.classList.toggle("zoomed")
});

// Close Fullscreen Mode
document.querySelector('.fullscreenMode:not(img)').addEventListener("click", function () {
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