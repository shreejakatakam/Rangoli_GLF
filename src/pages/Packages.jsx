import React from "react";

const Packages = () => {
  return (
    <div className="packages-page">
      {/* Header Section */}
      <section className="packages-header">
        <div className="header-decoration-left">❖</div>
        <div className="header-content">
          <h1 className="packages-title">
            Choose Your <span>Package</span>
          </h1>
          <p className="packages-subtitle">
            Participate at your preferred level and get amazing benefits
          </p>
          <div className="header-divider">❖</div>
        </div>
        <div className="header-decoration-right">❖</div>
      </section>

      {/* Package Cards Section */}
      <section className="packages-grid">
        {/* Package 1: ₹299 */}
        <div className="package-card card-pink-package">
          <div className="package-price">₹299</div>
          <div className="package-level">District Level</div>

          <ul className="package-features">
            <li>
              <span className="feature-icon">📜</span>
              Certificate
            </li>
            <li>
              <span className="feature-icon">🎁</span>
              Prize
            </li>
          </ul>

          <a href="/register" className="package-button btn-pink">
            Register ₹299 →
          </a>
        </div>

        {/* Package 2: ₹599 */}
        <div className="package-card card-purple-package">
          <div className="package-price">₹599</div>
          <div className="package-level">District Level</div>

          <ul className="package-features">
            <li>
              <span className="feature-icon">📜</span>
              Certificate
            </li>
            <li>
              <span className="feature-icon">🏆</span>
              Trophy
            </li>
            <li>
              <span className="feature-icon">🎁</span>
              Prize
            </li>
          </ul>

          <a href="/register" className="package-button btn-purple">
            Register ₹599 →
          </a>
        </div>

        {/* Package 3: ₹1,499 */}
        <div className="package-card card-gold-package">
          <div className="package-price">₹1,499</div>
          <div className="package-level">Direct State Level</div>

          <ul className="package-features">
            <li>
              <span className="feature-icon">📜</span>
              Certificate
            </li>
            <li>
              <span className="feature-icon">🏆</span>
              Trophy
            </li>
            <li>
              <span className="feature-icon">🎁</span>
              Prize
            </li>
            <li>
              <span className="feature-icon">🏅</span>
              Award
            </li>
          </ul>

          <a href="/register" className="package-button btn-gold">
            Register ₹1,499 →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Packages;
