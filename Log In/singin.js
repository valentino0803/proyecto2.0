const usuarios = document.getElementById(usuario)
const contraseña = document.getElementById(contra)
const boton = document.getElementById(v )

boton.addEventListener(click,(e) => {
    e.preventDefault()
    const data = {
        usuarios: usuario.value,
        contraseña: contra.value,
    }
    console.log(data)
} )