export class ReservationController{
  constructor() {
    this.citas = [];
  }

  registrar(cliente, reserva) {
    if (!cliente.document || cliente.document == "") {
      return { exito: false, mensaje: "El documento es obligatorio" };
    }

    if (reserva.name.length < 3) {
      return { exito: false, mensaje: "El motivo debe tener más de 3 letras" };
    }

    this.citas.push({ cliente, reserva });
    return { exito: true, mensaje: "¡Cita reservada correctamente!" };
  }
}