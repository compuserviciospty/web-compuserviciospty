import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/App.css';

function Home() {
    const [formStatus, setFormStatus] = useState(null); // null, 'submitting', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('error');
        }
    };

    return (
        <>
            <Helmet>
                <title>Compuservicios PTY - Inicio</title>
                <meta name="description" content="Servicios de computación y mantenimiento en Panamá. Compra equipos y accesorios con confianza." />
            </Helmet>

            <div className="content-section hero-image-section">
                <img
                    src="/assets/image1.jpeg"
                    alt="Hero"
                    className="hero-image"
                />
            </div>

            <div className="content-section about-us-section">
                <h2 className="section-subtitle">¿Quiénes Somos?</h2>
                <p className="about-us-text">
                    En Compuservicios PTY, somos su proveedor de confianza en equipos de
                    computación y servicios de mantenimiento. Nos dedicamos a ofrecer
                    soluciones tecnológicas de alta calidad, respaldadas por un equipo
                    profesional y comprometido con la satisfacción de nuestros clientes.
                </p>
            </div>

            <div className="content-section contact-form-area contact-form-columns">
                <div className="contact-info-col">
                    <h2 className="section-subtitle">Contáctanos</h2>
                    <h3 className="section-header">Información de Contacto</h3>
                    <div className="contact-details">
                        <p>Correo: soporte@compuserviciospty.com</p>
                        <p>
                            <a href="https://wa.me/50766791844" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" style={{ marginLeft: '10px' }}>
                                WhatsApp: (+507) 6679-1844
                            </a>
                        </p>

                        <h3 className="section-header" style={{ marginTop: '20px' }}>Ubicación</h3>
                        <p>PH Venice Place - Torres de Milan</p>
                        <p>Ancon, Panama. Via Centennial</p>

                        <h3 className="section-header" style={{ marginTop: '20px' }}>Horarios</h3>
                        <p>Horarios de Lunes a Viernes POR CITA.</p>
                        <p>(Sabado y Domingo sujeto a disponibilidad POR CITA)</p>
                    </div>
                </div>
                <div className="contact-form-col">
                    <h3 className="section-header">Envíanos tus consultas:</h3>
                    {formStatus === 'success' ? (
                        <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
                            ¡Gracias! Tu mensaje ha sido enviado correctamente.
                        </div>
                    ) : (
                        <form className="contact-form" action="https://formspree.io/f/xwkgyyqg" method="POST" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" name="nombre" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="navbar-btn" disabled={formStatus === 'submitting'}>
                                {formStatus === 'submitting' ? 'Enviando...' : 'Enviar'}
                            </button>
                            {formStatus === 'error' && (
                                <div style={{ color: '#d32f2f', marginTop: '10px' }}>
                                    Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
