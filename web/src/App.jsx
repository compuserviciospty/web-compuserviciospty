import './App.css';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';
import logoNormal from './assets/logo/LOGO WEBPAGE.png';
import logoChico from './assets/logo/LOGO WEBPAGE chico.png';
import bannerImage from './assets/logo/image1.jpeg';

function App() {
  return (
    <Layout>
      <div className="cs-banner-image">
        <img src={bannerImage} alt="Banner Compuservicios" />
      </div>
      <main className="cs-main">
        <section className="cs-bienvenida">
          <h1>Bienvenido a Compuservicios</h1>
          <p className="cs-bienvenida-desc">
            Tu aliado en tecnología. Ofrecemos soluciones confiables en computadoras, accesorios y soporte técnico para empresas y particulares.
          </p>
          <div className="cs-bienvenida-btns">
            <a href="#catalogo" className="cs-btn cs-btn-rojo">Ver Catálogo</a>
            <a href="#contacto" className="cs-btn cs-btn-outline">Contacto</a>
          </div>
          <div className="cs-confianza">
            <div className="cs-confianza-item">
              <span className="cs-icon">🔒</span>
              <span>Compra segura</span>
            </div>
            <div className="cs-confianza-item">
              <span className="cs-icon">💬</span>
              <span>Atención personalizada</span>
            </div>
            <div className="cs-confianza-item">
              <span className="cs-icon">🛠️</span>
              <span>Soporte técnico</span>
            </div>
          </div>
        </section>
        <section id="catalogo">
          <h2>Catálogo</h2>
          <p>Explora nuestros productos y servicios.</p>
        </section>
      </main>
    </Layout>
  );
}

export default App;
