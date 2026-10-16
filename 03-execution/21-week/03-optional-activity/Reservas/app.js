import { Client } from './model/Client.js';
import { Reservation } from './model/Reservation.js';
import { ClientController } from './controller/ClientController.js';
import { ReservationController } from './controller/ReservationController.js';

const formulario = document.getElementById('formCita');
const textoRespuesta = document.getElementById('respuesta');

const clientController = new ClientController();
const reservationController = new ReservationController();

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

  
  const validacionCliente = clientController.validate(cliente);
  if (!validacionCliente.valid) {
    textoRespuesta.innerText = validacionCliente.message;
    textoRespuesta.style.color = 'red';
    return;
  }

  
  const validacionReserva = reservationController.validate(reserva);
  if (!validacionReserva.valid) {
    textoRespuesta.innerText = validacionReserva.message;
    textoRespuesta.style.color = 'red';
    return;
  }

  
  const resultado = reservationController.save(cliente, reserva);
  textoRespuesta.innerText = resultado.message;
  textoRespuesta.style.color = 'green';
  formulario.reset();
});