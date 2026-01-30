import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  Navigation,
  Footer,
  Modal,
  Button,
  Input,
} from './components';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { FeaturesPage } from './pages/Features';
import { Docs } from './pages/Docs';
import { PricingPage } from './pages/Pricing';
import { Login } from './pages/Login';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <ScrollToTop />
      {!isAuthPage && <Navigation onCtaClick={() => setIsModalOpen(true)} />}

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AnimatePresence>
      </main>

      {!isAuthPage && <Footer />}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Initialize Setup"
        description="Join the next generation of digital excellence."
        size="sm"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsModalOpen(false);
          }}
          className="space-y-6"
        >
          <Input
            label="Professional Email"
            type="email"
            placeholder="name@company.com"
            required
          />
          <Button type="submit" className="w-full h-14 rounded-2xl text-[13px] font-black uppercase tracking-widest">
            Get Started Free
          </Button>
        </form>
      </Modal>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;