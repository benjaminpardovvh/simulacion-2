//contador para el "libros seleccionados"
let contador = 0;
let boton1 = document.querySelector("#boton1")
let boton2 = document.querySelector("#boton2")
let boton3 = document.querySelector("#boton3")
let carrito = document.querySelector(".contador")

//ingreso de secion
const barraDeTexto = document.querySelector("#email")
const botonLogin = document.querySelector(".login")

//contador para el "libros seleccionados"

boton1.addEventListener("click", function () {
    if (boton1 !== null) {
        contador = contador + 1
        carrito.textContent = contador
    } else {
        console.log("no extiste el boton")
    }
})

boton2.addEventListener("click", function () {
    if (boton2 !== null) {
        contador = contador + 1
        carrito.textContent = contador
    } else {
        console.log("no extiste el boton")
    }
})

boton3.addEventListener("click", function () {
    if (boton3 !== null) {
        contador = contador + 1
        carrito.textContent = contador
    } else {
        console.log("no extiste el boton")
    }
})

//sistema de login

botonLogin.addEventListener("click", function() {
    if (botonLogin !== null) {
        if (barraDeTexto === null) {
            const correo = barraDeTexto.value
            alert(`Bienvenido ${correo}`)
        }
        else{
            alert(`por favor ingrese un valor valido`)
        }
    } else {
        console.log("el boton no existe")
    }
})

//la imagen que cambia
let imagen = document.querySelector("#imagenCambiante")
imagen.addEventListener("mouseover", function () {
    this.src = "static/assets/img/personas-biblioteca3.jpg"
})

imagen.addEventListener("mouseout", function () {
    this.src = "static/assets/img/personas-biblioteca1.jfif"
})