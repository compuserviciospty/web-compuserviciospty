import './App.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo-left">
          <img src="/assets/LOGO WEBPAGE chico.png" alt="Logo chico" className="logo-navbar logo-navbar-small" />
          <img src="/assets/LOGO WEBPAGE.png" alt="Logo grande" className="logo-navbar logo-navbar-large" />
        </div>
        <div className="navbar-buttons">
          <button className="navbar-btn" onClick={() => window.location.href = '/'}>INICIO</button>
          <button className="navbar-btn" onClick={() => window.location.href = '/garantia'}>GARANTIA</button>
        </div>
      </nav>
      <Outlet />
      <footer className="footer-bar">
        © COMPUSERVICIOS PTY | 2026
      </footer>
    </>
  );
}

export default Layout;
