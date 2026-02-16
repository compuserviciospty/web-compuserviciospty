import { Helmet } from 'react-helmet-async';
import '../styles/App.css';

function Catalog() {
    // Placeholder URL for Google Drive PDF embed
    // The user should replace this with their actual file ID
    const driveFileId = "10DVk90FBXq-HpHLLcERu8KiLbLRoK_n-"; // Actual ID provided by user
    const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;

    return (
        <div className="catalog-page animate-fade-in">
            <Helmet>
                <title>Catálogo | Compuservicios PTY</title>
                <meta name="description" content="Explora nuestro catálogo completo de productos y servicios tecnológicos en Panamá." />
            </Helmet>

            <div className="catalog-header content-section">
                <h2 className="section-subtitle">Catálogo de Productos</h2>
                <h3 className="section-header">Explora nuestra oferta</h3>
                <p className="section-text">
                    Aquí encontrarás una selección detallada de nuestros equipos, accesorios y servicios.
                    Si necesitas algo específico no dudes en contactarnos.
                </p>
            </div>

            <div className="catalog-container">
                <div className="pdf-wrapper">
                    <iframe
                        src={embedUrl}
                        width="100%"
                        height="800"
                        allow="autoplay"
                        title="Catálogo PDF"
                        className="catalog-iframe"
                    ></iframe>
                </div>
                <div className="catalog-cta">
                    <a
                        href={`https://drive.google.com/file/d/${driveFileId}/view?usp=sharing`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button-red"
                    >
                        Abrir en ventana completa
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
