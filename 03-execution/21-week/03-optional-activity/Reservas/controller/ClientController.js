export class ClientController {
  validate(client) {
    if (!client.document || client.document.trim() === '') {
      return { valid: false, message: 'El documento es obligatorio' };
    }
    if (!client.name || client.name.trim().length < 3) {
      return { valid: false, message: 'El nombre debe tener al menos 3 caracteres' };
    }
    if (!client.email || !client.email.includes('@')) {
      return { valid: false, message: 'El correo electrónico no es válido' };
    }
    return { valid: true, message: 'Cliente válido' };
  }
}