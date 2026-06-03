import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/55 sm:px-6">
      <p>© 2026 Vindu Restaurant. All Rights Reserved.</p>
      <p className="mt-2 text-xs text-white/45">Email: <a href="mailto:vindurestaurant4@gmail.com" className="text-saffron hover:underline">vindurestaurant4@gmail.com</a></p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
