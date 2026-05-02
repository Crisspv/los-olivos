import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

const WA_ALFONSO = 'https://wa.me/523351205558?text=Hola%2C%20me%20interesa%20información%20sobre%20las%20bodegas%20industriales%20Los%20Olivos';
const WA_SELENE = 'https://wa.me/524492857912?text=Hola%2C%20me%20interesa%20información%20sobre%20las%20bodegas%20industriales%20Los%20Olivos';

function Home() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();
  const revealRef3 = useScrollReveal();
  const revealRef4 = useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="hero section" id="hero-section">
        <div className="hero-bg">
          <img src="/img/nave 1.jpg" alt="Bodegas Industriales Los Olivos" />
        </div>
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              Oportunidad única
            </div>
            <h1>
              Fraccionamiento Industrial <span className="accent">Privado</span> en Zapopan Norte
            </h1>
            <p className="hero-subtitle">
              20 Bodegas Industriales Nuevas en Venta y Renta a menos de 1 km del Periférico.
              Estructura de concreto sólido y pavimento de alta resistencia.
            </p>
            <div className="hero-actions">
              <a href={WA_ALFONSO} target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="hero-whatsapp-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.838-6.32-2.234l-.178-.148-3.688 1.236 1.236-3.688-.148-.178A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Contactar por WhatsApp
              </a>
              <Link to="/bodegas-estandar" className="btn btn-secondary" id="hero-explore-btn">
                Explorar bodegas
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-number">20</div>
                <div className="stat-label">Bodegas disponibles</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">10,703</div>
                <div className="stat-label">M² de terreno</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">4,000</div>
                <div className="stat-label">M² patio maniobras</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section section" id="features-section" ref={revealRef1}>
        <div className="container">
          <div className="features-header reveal">
            <span className="section-label">Infraestructura</span>
            <h2 className="section-title">Construido para la Industria</h2>
            <p className="section-subtitle">Cada detalle pensado para la operación logística eficiente y la seguridad de tus productos.</p>
          </div>
          <div className="features-grid">
            {[
              { icon: '🏗️', title: 'Concreto Sólido', desc: 'Estructura completa de concreto reforzado. Resistencia y durabilidad industrial.' },
              { icon: '🛣️', title: 'Pavimento Hidráulico', desc: 'Pavimento de concreto hidráulico de alta resistencia para carga pesada.' },
              { icon: '🚛', title: 'Patio de Maniobras', desc: '4,000 M² de patio de maniobras para operaciones logísticas fluidas.' },
              { icon: '🅿️', title: 'Estacionamiento Privado', desc: 'Área exclusiva de estacionamiento dentro del fraccionamiento.' },
              { icon: '🛗', title: 'Elevador y Escaleras', desc: 'Acceso vertical con elevador de carga y escaleras de servicio.' },
              { icon: '🔒', title: 'Fraccionamiento Privado', desc: 'Acceso controlado para la seguridad de tu inversión y operación.' },
            ].map((f, i) => (
              <div className="feature-card glass-card reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="models-section section" id="models-section" ref={revealRef2}>
        <div className="container">
          <div className="models-header reveal">
            <span className="section-label">Modelos</span>
            <h2 className="section-title">Nuestras Bodegas</h2>
            <p className="section-subtitle">Dos tipos de bodegas para adaptarnos a las necesidades de tu logística y almacenamiento.</p>
          </div>
          <div className="models-grid">
            <div className="model-card reveal">
              <div className="model-card-image">
                <img src="/img/bodega concreto.jpg" alt="Bodegas Estándar" />
              </div>
              <div className="model-card-body">
                <span className="model-card-tag">16 Unidades</span>
                <h3>Bodegas Estándar</h3>
                <p>Espacios versátiles con diseño optimizado. Altura libre de hasta 9 mts. Ideales para almacenamiento y logística.</p>
                <Link to="/bodegas-estandar" className="btn btn-outline btn-sm" id="model-estandar-btn">Ver detalles →</Link>
              </div>
            </div>
            <div className="model-card reveal" style={{ animationDelay: '0.15s' }}>
              <div className="model-card-image">
                <img src="/img/camara 1.jpg" alt="Bodegas con Cámara de Refrigeración" />
              </div>
              <div className="model-card-body">
                <span className="model-card-tag">4 Exclusivas</span>
                <h3>Bodegas con Refrigeración</h3>
                <p>Equipadas con cámara de refrigeración de 300 a 600 posiciones. Cadena de frío asegurada.</p>
                <Link to="/bodegas-refrigeracion" className="btn btn-outline btn-sm" id="model-refri-btn">Ver detalles →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section section" id="location-section" ref={revealRef3}>
        <div className="container">
          <div className="features-header reveal">
            <span className="section-label">Ubicación</span>
            <h2 className="section-title">Ubicación Estratégica</h2>
            <p className="section-subtitle">Conectividad privilegiada en el corredor industrial norte de Zapopan.</p>
          </div>
          <div className="location-grid">
            <div className="location-info reveal">
              <h3>Calle Paseo de los Olivos No. 100</h3>
              <p>Municipio Zapopan, Jalisco. A menos de 1 km del Periférico Norte, con acceso rápido a las principales vías de la zona metropolitana.</p>
              <div className="location-features">
                <div className="location-feature">
                  <span className="location-feature-icon">📍</span>
                  <span>A menos de 1 km del Periférico Norte</span>
                </div>
                <div className="location-feature">
                  <span className="location-feature-icon">🏭</span>
                  <span>Zona industrial consolidada de Zapopan</span>
                </div>
                <div className="location-feature">
                  <span className="location-feature-icon">🛣️</span>
                  <span>Acceso rápido a carreteras principales</span>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/Paseo+de+los+Olivos+100+Zapopan+Jalisco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                id="location-maps-btn"
              >
                Cómo llegar →
              </a>
            </div>
            <div className="location-map reveal" style={{ animationDelay: '0.15s' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.5!2d-103.39!3d20.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQ1JzM2LjAiTiAxMDPCsDIzJzI0LjAiVw!5e0!3m2!1ses!2smx!4v1"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Fraccionamiento Industrial Los Olivos"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section" id="contact-section" ref={revealRef4}>
        <div className="container">
          <div className="contact-header reveal">
            <span className="section-label">Contacto</span>
            <h2 className="section-title">Hablemos de tu Próxima Bodega</h2>
            <p className="section-subtitle">Nuestros asesores están listos para brindarte toda la información que necesitas.</p>
          </div>
          <div className="contact-cards">
            <div className="contact-card glass-card reveal">
              <div className="contact-card-icon">👷</div>
              <h3>Arq. Alfonso Azano</h3>
              <p className="contact-role">Asesor Comercial</p>
              <p className="contact-phone">33 5120 5558</p>
              <div className="contact-card-actions">
                <a href="tel:+523351205558" className="btn btn-secondary btn-sm">📞 Llamar</a>
                <a href={WA_ALFONSO} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" id="contact-wa-alfonso">WhatsApp</a>
              </div>
            </div>
            <div className="contact-card glass-card reveal" style={{ animationDelay: '0.15s' }}>
              <div className="contact-card-icon">👩‍💼</div>
              <h3>Arq. Selene</h3>
              <p className="contact-role">Asesora Comercial</p>
              <p className="contact-phone">44 9285 7912</p>
              <div className="contact-card-actions">
                <a href="tel:+524492857912" className="btn btn-secondary btn-sm">📞 Llamar</a>
                <a href={WA_SELENE} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" id="contact-wa-selene">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="contact-schedule reveal">
            <p>Horario de atención</p>
            <p className="schedule-time">Lunes a Viernes 9:00 - 17:00 | Sábados 9:00 - 13:00</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
