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
