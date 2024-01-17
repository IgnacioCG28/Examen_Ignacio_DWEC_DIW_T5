/**
 * @author Nacho Carmona Gonzalez;
 * @github https://github.com/IgnacioCG28/Examen_Ignacio_DWEC_DIW_T5.git
 * @version 0.8
 * @description: ExamenT5
 */

// Llamamos datos del html
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const radioInfo = document.querySelector("#info");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#errores");

let mensajesErrores = [];

const validar = (event) => {
  event.preventDefault();
  mensajesErrores = [];

  //Nombre. Obligatorio de poner al enviar formulario y que no tenga numeros
  nombre.value.trim().length === 0 &&
    mensajesErrores.push("El nombre es un campo obligatorio");
  !/^[a-zA-Z]*$/.test(nombre.value.trim()) &&
    mensajesErrores.push("El nombre no tiene caracteres válidos");

  //Correo. Se obliga al mandar formulario que use un correo obligatoriamente y que se valido
  correo.value.trim().length === 0 &&
    mensajesErrores.push("El correo es un campo obligatorio");
  !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    correo.value.trim()
  ) &&
    mensajesErrores.push(
      "Introduce una dirección de correo electrónico válida"
    );

  //Mensaje. Obligatorio de poner y minimo tamaño necesario
  mensaje.value.trim().length === 0 &&
    mensajesErrores.push("El mensaje es un campo obligatorio");
  mensaje.value.trim().length < 10 &&
    mensajesErrores.push("Mensaje demasiado corto");

  if (mensajesErrores.length === 0 && confirm("¿Enviar datos a Corp?")) {
    formulario.submit();
  } else if (mensajesErrores.length > 0) {
    errores.textContent = "";
    console.log(mensajesErrores);
    mensajesErrores.forEach(function (mensaje) {
      const printErrors = document.createElement("li");
      printErrors.textContent = mensaje;
      errores.appendChild(printErrors);
      printErrors.classList.add("colorW");
    });
  }
};

formulario.addEventListener("submit", validar);
