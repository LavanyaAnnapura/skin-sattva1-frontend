import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SiteHeader } from "@/components/custom/SiteHeader";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { DoctorPage } from "@/pages/DoctorPage";
import { ContactPage } from "@/pages/ContactPage";
import { ZipServicePage } from "@/pages/ZipServicePage";
import { ZipFooter } from "@/components/custom/ZipFooter";

const HashScrollHandler = () => {
  const { hash, pathname } = useLocation();

  const scrollToHashTarget = () => {
    if (!window.location.hash) {
      return;
    }

    const id = window.location.hash.replace("#", "");
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const timerA = setTimeout(scrollToHashTarget, 250);
    const timerB = setTimeout(scrollToHashTarget, 900);

    return () => {
      clearTimeout(timerA);
      clearTimeout(timerB);
    };
  }, [hash, pathname]);

  useEffect(() => {
    const onHashChange = () => {
      setTimeout(scrollToHashTarget, 120);
      setTimeout(scrollToHashTarget, 700);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        data-testid="route-transition-wrapper"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ZipServicePage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="App min-h-screen bg-background text-foreground" data-testid="app-shell">
      <BrowserRouter>
        <HashScrollHandler />
        <SiteHeader />
        <AnimatedRoutes />
        <ZipFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
