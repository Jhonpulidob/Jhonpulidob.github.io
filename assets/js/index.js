const intro = document.querySelector("#intro");

const animationIntro = () => {
    template = 
    `
    <img src="./images/logo.png" alt="Imagen de Intro">
    `
    intro.innerHTML = template
}


animationIntro()

setTimeout(function () {
    $("#intro").remove()
    $("#main-content").fadeIn()
}, 3000) // Tiempo total de animación (2s zoomExpand + 1s fadeOut)

