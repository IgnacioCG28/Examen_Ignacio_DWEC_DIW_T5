/**
 * @author Nacho Carmona Gonzalez;
 * @github ????
 * @version 0.0
 * @description: ExamenT5
 */

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const radioInfo = document.querySelector("radioInfo");
const radioSend = document.querySelector("radioSend");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#errores");

let mensajesErrores = [];



const validar = (event) => {
    event.preventDefault();
    mensajesErrores = [];
      //Nombre
    nombre.value.trim().length === 0 && mensajesErrores.push("El nombre es un campo obligatorio");
    
    }
  
  
  formulario.addEventListener("submit", validar);

  