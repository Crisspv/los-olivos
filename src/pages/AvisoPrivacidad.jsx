import { Link } from 'react-router-dom';
import './AvisoPrivacidad.css';

function AvisoPrivacidad() {
  return (
    <section className="privacy-page" id="privacy-page">
      <div className="container">
        <div className="privacy-content animate-fade-in-up">
          <h1>Aviso de Privacidad</h1>

          <p>
            De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales
            en Posesión de los Particulares (en adelante, la &quot;Ley&quot;), Parque Industrial
            Los Olivos, con domicilio en Calle Paseo de los Olivos No. 100, Municipio Zapopan,
            Jalisco, pone a su disposición el presente Aviso de Privacidad.
          </p>

          <h2>1. Uso de la Información</h2>
          <p>Los datos personales que recabamos de usted (nombre, teléfono, empresa) serán utilizados exclusivamente para:</p>
          <ul>
            <li>Proveer información comercial sobre la venta y renta de las bodegas industriales.</li>
            <li>Agendar citas y recorridos en las instalaciones.</li>
            <li>Dar seguimiento a sus solicitudes de información vía WhatsApp o llamadas telefónicas.</li>
          </ul>

          <h2>2. Protección de Datos</h2>
          <p>
            Su información personal está protegida y no será vendida, transferida ni compartida
            con terceros ajenos al proceso de comercialización de este desarrollo sin su
            consentimiento explícito.
          </p>

          <h2>3. Derechos ARCO</h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted (Acceso),
            solicitar la corrección de su información (Rectificación), que la eliminemos de
            nuestros registros (Cancelación), o oponerse al uso de sus datos (Oposición).
            Para ejercer estos derechos, comuníquese a los teléfonos de contacto publicados
            en el sitio web.
          </p>

          <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-2xl)' }}>
            Fecha de última actualización: Mayo, 2026.
          </p>

          <div className="privacy-back">
            <Link to="/" className="btn btn-secondary">← Volver al inicio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AvisoPrivacidad;
