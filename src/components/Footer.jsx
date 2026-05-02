import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">LO</span>
              <span>Los Olivos</span>
            </div>
            <p>Fraccionamiento Industrial Privado en Zapopan Norte.</p>
            <p>Calle Paseo de los Olivos No. 100, Zapopan, Jalisco.</p>
            <p>A menos de 1 km del Periférico Norte.</p>
          </div>

          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/bodegas-estandar">Bodegas Estándar</Link></li>
              <li><Link to="/bodegas-refrigeracion">Bodegas con Refrigeración</Link></li>
              <li><Link to="/aviso-de-privacidad">Aviso de Privacidad</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="tel:+523351205558">Arq. Alfonso Azano</a></li>
              <li><a href="tel:+524492857912">Arq. Selene</a></li>
              <li><a href="https://wa.me/523351205558?text=Hola%2C%20me%20interesa%20información%20sobre%20las%20bodegas" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="#">Lun-Vie 9am-5pm / Sáb 9am-1pm</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Fraccionamiento Industrial Los Olivos. Todos los derechos reservados.</p>
          <Link to="/aviso-de-privacidad">Aviso de Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
