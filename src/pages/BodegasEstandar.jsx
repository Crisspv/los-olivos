import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Gallery from '../components/Gallery';
import './DetailPage.css';

const WA_URL = 'https://wa.me/523351205558?text=Hola%2C%20me%20interesan%20las%20bodegas%20estándar%20del%20Fraccionamiento%20Los%20Olivos';

const galleryImages = [
  { src: '/img/bodega concreto.jpg', alt: 'Interior bodega de concreto' },
  { src: '/img/nave 1.jpg', alt: 'Nave industrial vista 1' },
  { src: '/img/nave 2.jpg', alt: 'Nave industrial vista 2' },
  { src: '/img/ingreso.jpg', alt: 'Ingreso al fraccionamiento' },
  { src: '/img/oficina.JPG', alt: 'Oficina interior' },
  { src: '/img/oficina baño.jpeg', alt: 'Baño de oficina' },
];

const planImages = [
  { src: '/img/laminaNormal.png', alt: 'Plano general del fraccionamiento' },
  { src: '/img/planoNormal.png', alt: 'Layout de distribución' },
];

function BodegasEstandar() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();
  const revealRef3 = useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="detail-hero" id="estandar-hero">
        <div className="container">
          <div className="detail-hero-content animate-fade-in-up">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              16 Unidades Disponibles
            </div>
            <h1>Bodegas Industriales <span className="accent">Estándar</span></h1>
            <p>Espacios amplios y versátiles para tu logística e inventario. Diseño optimizado con altura libre de hasta 9 metros.</p>
            <div className="detail-hero-actions">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="estandar-wa-btn">
                Me interesa — WhatsApp
              </a>
              <Link to="/" className="btn btn-secondary">← Volver al inicio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="specs-section section" id="estandar-specs" ref={revealRef1}>
        <div className="container">
          <div className="features-header reveal">
            <span className="section-label">Distribución</span>
            <h2 className="section-title">Medidas y Distribución</h2>
          </div>
          <div className="specs-grid">
            <div className="spec-card glass-card reveal">
              <div className="spec-value">180–255 M²</div>
              <div className="spec-label">Planta Baja</div>
              <div className="spec-desc">Altura libre de 9 mt. Espacio principal de almacenamiento y operaciones.</div>
            </div>
            <div className="spec-card glass-card reveal" style={{ animationDelay: '0.1s' }}>
              <div className="spec-value">210–280 M²</div>
              <div className="spec-label">Sótano</div>
              <div className="spec-desc">Altura libre de 4 mt. Nivel subterráneo para almacenamiento adicional.</div>
            </div>
            <div className="spec-card glass-card reveal" style={{ animationDelay: '0.2s' }}>
              <div className="spec-value">50–56 M²</div>
              <div className="spec-label">Mezanine</div>
              <div className="spec-desc">Altura de 4.50 mt. Espacio elevado ideal para oficinas.</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section section" id="estandar-gallery" ref={revealRef2}>
        <div className="container">
          <div className="gallery-header reveal">
            <span className="section-label">Galería</span>
            <h2 className="section-title">Conoce los Espacios</h2>
          </div>
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* PLANS */}
      <section className="plans-section section" id="estandar-plans" ref={revealRef3}>
        <div className="container">
          <div className="features-header reveal">
            <span className="section-label">Planos</span>
            <h2 className="section-title">Planos del Fraccionamiento</h2>
          </div>
          <Gallery images={planImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta section" id="estandar-cta">
        <div className="container">
          <div className="detail-cta-content animate-fade-in-up">
            <h2>¿Listo para conocer tu próxima bodega?</h2>
            <p>Agenda una visita o solicita más información por WhatsApp.</p>
            <div className="detail-cta-actions">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Contactar por WhatsApp</a>
              <Link to="/" className="btn btn-secondary">Volver al inicio</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BodegasEstandar;
