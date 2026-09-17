import React from "react";
import aboutImg from "../assets/about-rangoli.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-eyebrow">
            <span className="eyebrow-line"></span>
            <span>ABOUT THE COMPETITION</span>
            <span className="eyebrow-line"></span>
          </div>
          <h1 className="about-title">
            Celebrating
            <br />
            <span>Telugu Creativity</span>
          </h1>
          <p className="about-subtitle">
            A colourful platform for creativity, culture and tradition.
          </p>

          <div className="about-description">
            <h3>Telugu Rangavallika 2027</h3>
            <p>
              Telugu Rangavallika 2027 is a creative celebration that brings
              together participants who love the traditional art of Rangavalli.
              The competition provides an opportunity to showcase creativity
              while celebrating the rich cultural traditions of Telugu
              communities.
            </p>
            <p>
              The competition is organized by{" "}
              <strong>Give Laurels Foundation of India</strong>.
            </p>
          </div>
        </div>

        <div className="about-hero-image">
          <img
            src={aboutImg}
            alt="Telugu Rangavalli Art"
            className="about-img-tag"
          />
        </div>
      </section>

      {/* Competition Specifics Section (Replaces the old cards) */}
      <section className="about-competition-section">
        <div className="about-competition-card">
          <div className="competition-icon-wrapper">
            <span className="competition-icon">🎨</span>
          </div>
          <h3>What is Rangavalli?</h3>
          <p>
            Rangavalli (or Muggu) is a traditional Indian art form where
            intricate geometric patterns and designs are created on the floor
            using colored powders, flowers, or natural materials. It is a
            beautiful expression of devotion, creativity, and cultural heritage.
          </p>
        </div>

        <div className="about-competition-card">
          <div className="competition-icon-wrapper">
            <span className="competition-icon">🌟</span>
          </div>
          <h3>Why Participate?</h3>
          <p>
            This competition offers a unique platform to showcase your artistic
            talent, connect with fellow artists, and earn recognition. Whether
            you're a beginner or a seasoned artist, Telugu Rangavallika 2027 is
            your chance to shine.
          </p>
        </div>

        <div className="about-competition-card">
          <div className="competition-icon-wrapper">
            <span className="competition-icon">🏆</span>
          </div>
          <h3>Our Mission</h3>
          <p>
            We aim to keep our traditions alive, inspire creativity in the
            younger generation, and build a vibrant community that celebrates
            Telugu culture through the timeless art of Rangavalli.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="about-quote-section">
        <div className="quote-decoration-left">✿</div>
        <div className="quote-content">
          <h2>Talent Thrives When Traditions Live On</h2>
          <div className="quote-divider">❖</div>
        </div>
        <div className="quote-decoration-right">✿</div>
      </section>
    </div>
  );
};

export default About;
