import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import FooterSection from "./components/FooterSection.jsx";

import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

import AboutSection from "./components/AboutSection.jsx";
import CrewSection from "./components/CrewSection.jsx";
import CastSection from "./components/CastSection.jsx";
import AwardSection from "./components/AwardSection.jsx";
import CreditSection from "./components/CreditSection.jsx";
import GallerySection from "./components/GallerySection.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/crew" element={<CrewSection />} />
            <Route path="/cast" element={<CastSection />} />
            <Route path="/awards" element={<AwardSection />} />
            <Route path="/credits" element={<CreditSection />} />
            <Route path="/gallery" element={<GallerySection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;