import { Outlet, Link } from 'react-router-dom';
import '../styles/App.css';

function MainLayout() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo-left">
          <img src="/assets/LOGO WEBPAGE chico.png" alt="Logo chico" className="logo-navbar logo-navbar-small" />
          <img src="/assets/LOGO WEBPAGE.png" alt="Logo grande" className="logo-navbar logo-navbar-large" />
        </div>
        <div className="navbar-buttons">
          <Link to="/" className="navbar-btn">INICIO</Link>
          <Link to="/garantia" className="navbar-btn">GARANTIA</Link>
          <a href="https://wa.me/50766791844" target="_blank" rel="noopener noreferrer" className="navbar-whatsapp-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>
      <Outlet />
      <footer className="footer-bar">
        © COMPUSERVICIOS PTY | 2026
      </footer>
    </>
  );
}

export default MainLayout;
