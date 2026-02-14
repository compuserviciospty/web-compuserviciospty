import { Helmet } from 'react-helmet-async';
import '../styles/App.css';

function Home() {
    return (
        <>
            <Helmet>
                <title>Compuservicios PTY | Soluciones Tecnológicas en Panamá</title>
                <meta name="description" content="Expertos en reparación de computadoras, mantenimiento preventivo y venta de equipos en Panamá. Servicio profesional garantizado." />
                <meta property="og:title" content="Compuservicios PTY | Soluciones Tecnológicas" />
                <meta property="og:description" content="Tu aliado tecnológico en Panamá. Reparación, mantenimiento y ventas." />
                <meta property="og:type" content="business.business" />
                <meta property="og:url" content="https://compuserviciospty.com/" />
                <meta property="og:image" content="/assets/image1.jpeg" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Compuservicios PTY",
                            "image": ["/assets/image1.jpeg"],
                            "telephone": "+50766791844",
                            "email": "soporte@compuserviciospty.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "PH Venice Place - Torres de Milan, Via Centennial",
                                "addressLocality": "Ancon",
                                "addressRegion": "Panama",
                                "addressCountry": "PA"
                            },
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday"
                                    ],
                                    "opens": "08:00",
                                    "closes": "17:00"
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="content-section hero-image-section animate-fade-in">
                <div className="hero-content">
                    <h1 className="hero-title">Soluciones Tecnológicas Integrales en Panamá</h1>
                    <p className="hero-subtitle">Mantenimiento, reparación y venta de equipos de cómputo con calidad garantizada.</p>
                </div>
                <img
                    src="/assets/image1.jpeg"
                    alt="Técnico reparando computadora"
                    className="hero-image"
                    loading="eager"
                    style={{ maxHeight: '400px', objectFit: 'cover', width: '100%', borderRadius: '12px' }}
                />
            </div>

            {/* --- Services Section --- */}
            <div className="content-section">
                <h2 className="section-subtitle">Nuestros Servicios</h2>
                <h3 className="section-header">Lo que hacemos por ti</h3>

                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        </span>
                        <h4 className="service-title">Reparación y Mantenimiento</h4>
                        <p className="service-desc">Diagnóstico y reparación de laptops y desktops. Mantenimiento preventivo para extender la vida útil de tus equipos.</p>
                    </div>
                    <div className="service-card">
                        <span className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </span>
                        <h4 className="service-title">Venta de Equipos</h4>
                        <p className="service-desc">Computadoras, laptops y accesorios de las mejores marcas. Asesoría personalizada para tu compra.</p>
                    </div>
                    <div className="service-card">
                        <span className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </span>
                        <h4 className="service-title">Instalación de Software</h4>
                        <p className="service-desc">Sistemas operativos, antivirus y programas esenciales. Optimización para un mayor rendimiento.</p>
                    </div>
                    <div className="service-card">
                        <span className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                        </span>
                        <h4 className="service-title">Redes y Conectividad</h4>
                        <p className="service-desc">Instalación y configuración de redes WiFi y cableadas para hogar y oficina.</p>
                    </div>
                </div>
            </div>

            {/* --- Why Choose Us Section --- */}
            <div className="content-section about-us-section">
                <h2 className="section-subtitle">¿Por Qué Elegirnos?</h2>
                <div className="features-list">
                    <div className="feature-item">
                        <div className="feature-icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 0.5rem 0' }}>Experiencia Comprobada</h4>
                            <p style={{ margin: 0, color: '#666' }}>Años de servicio brindando soluciones efectivas a nuestros clientes.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 0.5rem 0' }}>Servicio Rápido</h4>
                            <p style={{ margin: 0, color: '#666' }}>Sabemos que tu tiempo es valioso. Ofrecemos diagnósticos y soluciones ágiles.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 0.5rem 0' }}>Atención Personalizada</h4>
                            <p style={{ margin: 0, color: '#666' }}>Trato directo y honesto. Te explicamos el problema y la solución sin tecnicismos.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Contact / CTA Section --- */}
            <div className="content-section">
                <div className="cta-container">
                    <h2 className="section-subtitle">¿Listo para mejorar tu tecnología?</h2>
                    <h3 className="section-header">Contáctanos hoy mismo</h3>
                    <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto', fontSize: '1.1rem' }}>
                        Estamos listos para ayudarte con cualquier requerimiento técnico. Escríbenos directamente a WhatsApp para una atención inmediata.
                    </p>

                    <a href="https://wa.me/50766791844" target="_blank" rel="noopener noreferrer" className="cta-button">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"></path></svg>
                        Chatea con nosotros
                    </a>

                    <div className="contact-info-grid">
                        <div className="info-card">
                            <span className="info-label">Ubicación</span>
                            <div className="info-value">PH Venice Place - Torres de Milan<br />Ancon, Panama. Via Centennial</div>
                        </div>
                        <div className="info-card">
                            <span className="info-label">Horarios</span>
                            <div className="info-value">Lunes a Viernes (Por Cita)<br />Sábados y Domingos (Sujeto a disponibilidad)</div>
                        </div>
                        <div className="info-card">
                            <span className="info-label">Correo</span>
                            <div className="info-value"><a href="mailto:soporte@compuserviciospty.com" style={{ color: '#d32f2f' }}>soporte@compuserviciospty.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
