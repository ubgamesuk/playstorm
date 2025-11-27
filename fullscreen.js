const BUTTON = document.querySelector('.fullscreen')
const IFRAME = document.querySelector('.gameplay')

const toggleFullscreen = () => {
    IFRAME.requestFullscreen()
}

BUTTON.addEventListener('click', toggleFullscreen)