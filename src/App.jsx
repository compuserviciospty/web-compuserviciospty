import './App.css';



function App() {
  return (
    <>
      <div className="hero-image-section">
        <img
          src="/assets/image1.jpeg"
          alt="Hero"
          className="hero-image"
        />
      </div>
      <div className="contact-form-area contact-form-columns">
        <div className="contact-info-col" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
          {/* Bloque 1: Contacto */}
          <div>
            <h3 style={{ color: '#d32f2f', marginBottom: '10px', fontWeight: 700 }}>Contacto</h3>
            <div style={{ marginBottom: '10px' }}>soporte@compuserviciospty.com</div>
            <a href="https://wa.me/50766791844" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              WhatsApp: (+507) 6679-1844
            </a>
          </div>
          {/* Bloque 2: Ubicación */}
          <div style={{ margin: '24px 0 0 0' }}>
            <h3 style={{ color: '#d32f2f', marginBottom: '10px', fontWeight: 700 }}>Ubicación</h3>
            <div>PH Venice Place - Torres de Milan</div>
            <div>Ancon, Panama. Via Centennial</div>
          </div>
          {/* Bloque 3: Horarios */}
          <div style={{ marginTop: '24px' }}>
            <h3 style={{ color: '#d32f2f', marginBottom: '10px', fontWeight: 700 }}>Horarios</h3>
            <div>Lunes a Viernes <b>POR CITA</b></div>
            <div>Sábado y Domingo sujeto a disponibilidad <b>POR CITA</b></div>
          </div>
        </div>
        <div className="contact-form-col">
          <h2 className="section-subtitle" style={{textAlign: 'center'}}>Contáctanos</h2>
          <form className="contact-form" action="https://formspree.io/f/xwkgyyqg" method="POST">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            </div>
            <button type="submit" className="navbar-btn">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
