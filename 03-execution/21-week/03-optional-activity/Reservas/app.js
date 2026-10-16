import { Client } from './model/Client.js';
import { Reservation } from './model/Reservation.js';
import { ReservationController } from './controller/ReservationController.js';

const controlador = new ReservationController();
const formulario = document.getElementById('formCita');
const textoRespuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const cliente = new Client(
    1,
    document.getElementById('type_document').value,
    document.getElementById('document').value,
    document.getElementById('name').value,
    document.getElementById('address').value,
    document.getElementById('phone').value,
    document.getElementById('email').value
  );

  const reserva = new Reservation(
    1,
    document.getElementById('res_name').value,
    document.getElementById('description').value,
    cliente.id
  );

  const resultado = controlador.registrar(cliente, reserva);

  textoRespuesta.innerText = resultado.mensaje;
  textoRespuesta.style.color = resultado.exito ? "green" : "red";

  if (resultado.exito) {
    formulario.reset();
  }
});