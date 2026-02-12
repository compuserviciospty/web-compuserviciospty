import React, { useState } from 'react';
import './App.css';

export default function ContactoForm() {
  // NOTA: Para enviar correos automáticamente desde la web (sin abrir el cliente de correo), se requiere un backend o un servicio externo (como EmailJS, Formspree, etc.), ya que por seguridad los navegadores no permiten enviar emails directos desde el frontend.
  // Si deseas esta funcionalidad, puedo ayudarte a integrarla con un servicio externo o crear un backend sencillo.
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    if (!form.nombre || !form.email || !form.mensaje) {
      setError('Por favor completa todos los campos.');
      return;
    }
    const mailto = `mailto:admin@quaianalytics.com?subject=Contacto%20desde%20web%20Compuservicios&body=Nombre:%20${encodeURIComponent(form.nombre)}%0ACorreo:%20${encodeURIComponent(form.email)}%0AMensaje:%20${encodeURIComponent(form.mensaje)}`;
    window.location.href = mailto;
  };

  return (
    <form className="cs-contacto-form" onSubmit={handleSubmit}>
      <h2>Contáctanos</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="mensaje"
        placeholder="Escribe tu mensaje"
        value={form.mensaje}
        onChange={handleChange}
        required
        rows={4}
      />
      <button type="submit" className="cs-btn cs-btn-rojo">Enviar</button>
      {error && <div className="cs-contacto-error">{error}</div>}
    </form>
  );
}
