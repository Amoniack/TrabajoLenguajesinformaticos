const formulario = document.getElementById("formulario-contacto");
const mensaje = document.getElementById("mensaje-formulario");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const texto = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || texto === '') {
        mensaje.textContent = "Por favor, complete todos los campos.";
        mensaje.className = "mensaje-error";
    }
    else {
        mensaje.textContent = "¡Mensaje enviado con éxito!"
        mensaje.className = "mensaje-exito";
        formulario.reset();
    }
});
