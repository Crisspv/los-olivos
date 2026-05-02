import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Gallery from '../components/Gallery';
import './DetailPage.css';

const WA_URL = 'https://wa.me/523351205558?text=Hola%2C%20me%20interesan%20las%20bodegas%20con%20cámara%20de%20refrigeración%20del%20Fraccionamiento%20Los%20Olivos';

const galleryImages = [
  { src: '/img/camara 1.jpg', alt: 'Cámara de refrigeración vista 1' },
  { src: '/img/camara 2.JPG', alt: 'Cámara de refrigeración vista 2' },
  { src: '/img/ingreso camara.jpg', alt: 'Ingreso a cámara de refrigeración' },
  { src: '/img/bodega concreto.jpg', alt: 'Interior bodega de concreto' },
  { src: '/img/nave 1.jpg', alt: 'Nave industrial' },
];

const planImages = [
  { src: '/img/laminaTransparente.png', label: 'Plano general — vista transparente' },
  { src: '/img/planoTransparente.png', label: 'Layout de distribución — vista transparente' },
];

function BodegasRefrigeracion() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();
  const revealRef3 = useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="detail-hero" id="refri-hero">
        <div className="container">
          <div className="detail-hero-content animate-fade-in-up">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              4 Unidades Exclusivas
            </div>
            <h1>Bodegas con <span className="accent">Refrigeración</span></h1>
            <p>Cadena de frío asegurada para tus productos. 4 exclusivas bodegas equipadas con cámara de refrigeración de 300 a 600 posiciones.</p>
            <div className="detail-hero-actions">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="refri-wa-btn">
                Me interesa — WhatsApp
              </a>
              <Link to="/" className="btn btn-secondary">← Volver al inicio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="specs-section section" id="refri-specs" ref={revealRef1}>
        <div className="container">
          <div className="features-header reveal">
            <span className="section-label">Especificaciones</span>
            <h2 className="section-title">Capacidad y Distribución</h2>
          </div>
          <div className="specs-grid">
            <div className="spec-card glass-card reveal">
              <div className="spec-value">300–600</div>
              <div className="spec-label">Posiciones de Refrigeración</div>
              <div className="spec-desc">Cámara de refrigeración industrial para almacenamiento en frío.</div>
            </div>
            <div className="spec-card glass-card reveal" style={{ animationDelay: '0.1s' }}>
              <div className="spec-value">180–255 M²</div>
              <div className="spec-label">Planta Baja</div>
              <div className="spec-desc">Altura libre de 9 mt. Zona principal + cámara de refrigeración.</div>
            </div>
            <div className="spec-card glass-card reveal" style={{ animationDelay: '0.2s' }}>
              <div className="spec-value">210–280 M²</div>
              <div className="spec-label">Sótano</div>
              <div className="spec-desc">Altura libre de 4 mt. Nivel subterráneo adicional.</div>
            </div>
          </div>
          <div className="specs-grid" style={{ marginTop: 'var(--space-lg)' }}>
            <div className="spec-card glass-card reveal" style={{ animationDelay: '0.3s' }}>
              <div className="spec-value">50–56 M²</div>
              <div className="spec-label">Mezanine</div>
              <div className="spec-desc">Altura de 4.50 mt. Espacio para oficinas administrativas.</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section section" id="refri-gallery" ref={revealRef2}>
        <div className="container">
          <div className="gallery-header reveal">
            <span className="section-label">Galería</span>
            <h2 className="section-title">Cámaras y Espacios</h2>
          </div>
          <div className="reveal">
            <Gallery images={galleryImages} />
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="plans-section section" id="refri-plans" ref={revealRef3}>
        <div className="container">
          <div className="features-header reveal">
            <span className="section-label">Planos</span>
            <h2 className="section-title">Planos del Fraccionamiento</h2>
          </div>
          <div className="plans-grid reveal">
            {planImages.map((plan, i) => (
              <div className="plan-card" key={i}>
                <img src={plan.src} alt={plan.label} loading="lazy" />
                <div className="plan-card-label">{plan.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta section" id="refri-cta">
        <div className="container">
          <div className="detail-cta-content animate-fade-in-up">
            <h2>Asegura tu cadena de frío</h2>
            <p>Solo 4 unidades con cámara de refrigeración. Agenda tu visita ahora.</p>
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

export default BodegasRefrigeracion;
