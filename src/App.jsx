import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import CheckRegistration from "./pages/CheckRegistration";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        {/* Navigation */}
        <header className="navbar">
          <div className="nav-inner">
            <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
              <div className="brand-logo">✿</div>
              <div className="brand-text">
                <div className="brand-name">
                  TELUGU RANGAVALLIKA <b>2027</b>
                </div>
                <div className="brand-subtitle">
                  by Give Laurels Foundation of India
                </div>
              </div>
            </Link>

            <button
              type="button"
              className="menu-toggle"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>

            <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
              <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/packages" onClick={() => setMenuOpen(false)}>
                Packages
              </NavLink>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </nav>

            <Link
              to="/register"
              className="nav-button"
              onClick={() => setMenuOpen(false)}
            >
              Register Now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        {/* Pages */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/check-registration" element={<CheckRegistration />} />
            <Route
              path="/registration-success"
              element={<RegistrationSuccess />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <h3>Telugu Rangavallika 2027</h3>
              <p>Celebrating Creativity, Culture & Tradition</p>
            </div>

            {/* Quick Links Section */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/packages">Packages</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-organizer">
              <span>Organized by</span>
              <strong>Give Laurels Foundation of India</strong>
              <div className="footer-socials">
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                {/* LinkedIn Icon */}
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © 2027 Give Laurels Foundation of India. All rights reserved.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
