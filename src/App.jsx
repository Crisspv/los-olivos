import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import BodegasEstandar from './pages/BodegasEstandar';
import BodegasRefrigeracion from './pages/BodegasRefrigeracion';
import AvisoPrivacidad from './pages/AvisoPrivacidad';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bodegas-estandar" element={<BodegasEstandar />} />
          <Route path="/bodegas-refrigeracion" element={<BodegasRefrigeracion />} />
          <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
