//Variables para la funcion de "libros seleccionados"
let contador = 0;
let boton1 = document.querySelector("#boton1")
let boton2 = document.querySelector("#boton2")
let boton3 = document.querySelector("#boton3")
let carrito = document.querySelector(".contador")

//Ingreso de sesion
const barraDeTexto = document.querySelector("#email")
const botonLogin = document.querySelector(".login")

//Funcion que aumenta el registro de "libros seleccionados"

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

//Sistema de login

if (botonLogin !== null && barraDeTexto !== null) {
    botonLogin.addEventListener("click", function () {
        let correo = barraDeTexto.value
        if (correo !== "") {
            alert(`Bienvenido ${correo}`)
        } else {
            alert("por favor ingrese un valor valido")
        }
    })
} else {
    console.log("el boton o la barra de texto no existe")
}

//la imagen que cambia
let imagen = document.querySelector("#imagenCambiante")
imagen.addEventListener("mouseover", function () {
    this.src = "static/assets/img/personas-biblioteca3.jpg"
})

imagen.addEventListener("mouseout", function () {
    this.src = "static/assets/img/personas-biblioteca1.jfif"
})