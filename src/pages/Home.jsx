import React from 'react';
import rangoliImg from '../assets/rangoli.jpg'; 

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">GIVE LAURELS FOUNDATION OF INDIA</p>
          <h1 className="hero-title">
            TELUGU<br />
            <span>RANGAVALLIKA</span><br />
            2027
          </h1>
          <h2 className="hero-subtitle">Celebrating Creativity, Culture and Tradition</h2>
          <p className="hero-text">
            Join Telugu Rangavallika 2027, a platform to showcase your artistic talent, 
            keep our traditions alive and inspire a brighter tomorrow.
          </p>
          <div className="hero-buttons">
            <a href="/register" className="btn-primary">Register Now →</a>
            <a href="/packages" className="btn-secondary">🎁 View Packages</a>
          </div>
        </div>
        
        <div className="hero-image-placeholder">
          <img 
            src={rangoliImg} 
            alt="Rangoli Art" 
            className="rangoli-img-tag"
          />
        </div>
      </section>

      {/* Important Dates Bar */}
      <section className="dates-section">
        <div className="date-item">
          <div className="date-icon">📅</div>
          <div className="date-info">
            <p>Registrations Open</p>
            <h4>01 Dec 2026</h4>
          </div>
        </div>
        <div className="divider"></div>
        <div className="date-item">
          <div className="date-icon">📅</div>
          <div className="date-info">
            <p>Last Date to Register</p>
            <h4>31 Dec 2026</h4>
          </div>
        </div>
        <div className="divider"></div>
        <div className="date-item">
          <div className="date-icon">🏆</div>
          <div className="date-info">
            <p>Competition Starts</p>
            <h4>05 Jan 2027</h4>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="features-section">
        <div className="feature-card card-pink">
          <div className="card-icon">🎨</div>
          <h3>Cultural Creativity</h3>
          <p>Showcase the beauty of Telugu Rangavalli art.</p>
        </div>
        <div className="feature-card card-yellow">
          <div className="card-icon">🏆</div>
          <h3>Exciting Prizes</h3>
          <p>Win attractive prizes and recognition.</p>
        </div>
        <div className="feature-card card-purple">
          <div className="card-icon">👥</div>
          <h3>Tradition & Culture</h3>
          <p>Be a part of our rich Telugu heritage.</p>
        </div>
        <div className="feature-card card-blue">
          <div className="card-icon">🤝</div>
          <h3>Community Impact</h3>
          <p>Together for a brighter tomorrow.</p>
        </div>
      </section>

      {/* Footer Banner */}
      <footer className="footer-banner">
        Small Patterns ✻ Big Traditions ✻ Brighter Futures
      </footer>
    </div>
  );
};

export default Home;