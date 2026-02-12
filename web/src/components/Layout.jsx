import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoNormal from '../assets/logo/LOGO WEBPAGE.png';
import logoChico from '../assets/logo/LOGO WEBPAGE chico.png';
import '../App.css';

export default function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      <header className="cs-header cs-header-fixed">
        <div className="cs-header-content cs-header-justify">
          <img src={logoChico} alt="Logo Chico" className="cs-logo-chico cs-logo-chico-left" />
          <img src={logoNormal} alt="Logo Compuservicios" className="cs-logo-normal cs-logo-left" />
          <nav className="cs-nav">
            <Link to="/" className={`cs-nav-btn${location.pathname === '/' ? ' active' : ''}`}>Inicio</Link>
            <Link to="/garantia" className={`cs-nav-btn${location.pathname === '/garantia' ? ' active' : ''}`}>Garantía</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="cs-footer-gris">
        <div className="cs-footer-gris-content">
          <div className="cs-footer-col">
            <strong>Contacto</strong><br />
            soporte@compuserviciospty.com<br />
            Cell y WhatsApp: (+507) 6679-1844
          </div>
          <div className="cs-footer-col">
            <strong>Ubicación</strong><br />
            PH Venice Place - Torres de Milan<br />
            Ancon , Panama. Via Centennial
          </div>
          <div className="cs-footer-col">
            <strong>Horarios</strong><br />
            Lunes a Viernes POR CITA.<br />
            (Sabado y Domingo sujeto a disponibilidad POR CITA)
          </div>
        </div>
      </footer>
      <footer className="cs-footer">
        <div className="cs-footer-content">
          © COMPUSERVICIOS PTY 2026
        </div>
        <div className="cs-footer-line"></div>
      </footer>
    </>
  );
}
