import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

export default function ContactoForm() {
  const [form, setForm] = useState({ nombreCompleto: '', telefono: '', email: '', mensaje: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.nombreCompleto || !form.telefono || !form.email || !form.mensaje) {
      setError('Por favor completa todos los campos.');
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          nombreCompleto: form.nombreCompleto,
          telefono: form.telefono,
          email: form.email,
          mensaje: form.mensaje
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      setSuccess('¡Tu mensaje fue enviado exitosamente!');
      setForm({ nombreCompleto: '', telefono: '', email: '', mensaje: '' });
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Intenta de nuevo.');
    }
    setSending(false);
  };

  return (
    <section className="cs-section">
      <div className="cs-contacto-layout-fix cs-contacto-2col-align">
        <div className="cs-contacto-info-col cs-contacto-align-stretch">
          <div className="cs-contacto-info-inner">
            <h2 className="cs-contacto-title-right">Contacto</h2>
            <h4 className="cs-contacto-subtitle">¿Tienes dudas o quieres cotizar?</h4>
            <img src="/src/assets/logo/contacto.png" alt="Contacto" className="cs-contacto-img" />
          </div>
        </div>
        <form className="cs-form cs-contacto-form-align" onSubmit={handleSubmit}>
          <div className="cs-contacto-field">
            <label className="cs-garantia-section-subtitle" htmlFor="nombreCompleto">Nombre Completo</label>
            <input
              type="text"
              name="nombreCompleto"
              id="nombreCompleto"
              placeholder="Nombre Completo"
              value={form.nombreCompleto}
              onChange={handleChange}
              required
              className="cs-contacto-input cs-contacto-input-lg"
              autoComplete="name"
            />
          </div>
          <div className="cs-contacto-field">
            <label className="cs-garantia-section-subtitle" htmlFor="telefono">Teléfono Celular</label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="Teléfono Celular"
              value={form.telefono}
              onChange={handleChange}
              required
              className="cs-contacto-input cs-contacto-input-lg"
              autoComplete="tel"
            />
          </div>
          <div className="cs-contacto-field">
            <label className="cs-garantia-section-subtitle" htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo Electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="cs-contacto-input cs-contacto-input-lg"
              autoComplete="email"
            />
          </div>
          <div className="cs-contacto-field">
            <label className="cs-garantia-section-subtitle" htmlFor="mensaje">Mensaje</label>
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder="Describe brevemente tu consulta o necesidad..."
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={5}
              className="cs-contacto-input cs-contacto-input-lg cs-garantia-section-text"
              style={{ minHeight: '120px' }}
            />
          </div>
          <button type="submit" className="cs-btn cs-btn-azul" style={{ marginTop: '1.2rem', fontWeight: 800, fontSize: '1.13rem', borderRadius: '8px', padding: '1.1em 0' }} disabled={sending}>{sending ? 'Enviando...' : 'Enviar'}</button>
          {error && <div className="cs-contacto-error">{error}</div>}
          {success && <div className="cs-contacto-exito">{success}</div>}
          <div className="cs-garantia-section-text" style={{ fontSize: '0.98rem', color: '#888', marginTop: '0.7rem', textAlign: 'center' }}>Tus datos no se comparten con terceros. Solo se usarán para responder tu mensaje.</div>
        </form>
      </div>
    </section>
  );
}
