function Packages() {
  return (
    <div className="inner-page">
      <div className="page-hero">
        <div className="eyebrow">PARTICIPATION OPTIONS</div>
        <h1>Registration Packages</h1>
        <p>Choose the package that suits your participation.</p>
      </div>

      <section className="content-section">
        <div className="package-grid">
          <div className="package-card">
            <h3>District Level</h3>

            <div className="price">₹299</div>

            <div className="package-line" />

            <ul>
              <li>✓ Certificate</li>
              <li>✓ Prize</li>
            </ul>

            <a href="/register" className="package-button">
              Register with ₹299
            </a>
          </div>

          <div className="package-card popular">
            <div className="package-badge">POPULAR</div>

            <h3>District Level</h3>

            <div className="price">₹599</div>

            <div className="package-line" />

            <ul>
              <li>✓ Certificate</li>
              <li>✓ Trophy</li>
              <li>✓ Prize</li>
            </ul>

            <a href="/register" className="package-button">
              Register with ₹599
            </a>
          </div>

          <div className="package-card">
            <div className="package-badge state">DIRECT STATE ENTRY</div>

            <h3>Direct State Level</h3>

            <div className="price">₹1,500</div>

            <div className="package-line" />

            <ul>
              <li>✓ Certificate</li>
              <li>✓ Trophy</li>
              <li>✓ Prize</li>
              <li>✓ Award</li>
            </ul>

            <a href="/register" className="package-button">
              Register with ₹1,500
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packages;
