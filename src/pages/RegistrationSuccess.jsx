function RegistrationSuccess() {
  return (
    <div className="success-page">
      <div className="success-decoration">✦ ✿ ✦</div>

      <div className="success-card">
        <div className="success-icon">✓</div>

        <div className="eyebrow">TELUGU RANGAVALLI 2026</div>

        <h1>Registration Successful!</h1>

        <p>Thank you for registering for Telugu Rangavalli 2026.</p>

        <div className="registration-id">
          <span>Registration ID</span>

          <strong>TR-2026-00001</strong>
        </div>

        <div className="success-details">
          <div>
            <span>Participant</span>
            <strong>Your Name</strong>
          </div>

          <div>
            <span>Package</span>
            <strong>District Level</strong>
          </div>

          <div>
            <span>Amount Paid</span>
            <strong>₹599</strong>
          </div>

          <div>
            <span>Payment Status</span>
            <strong className="paid">Successful</strong>
          </div>
        </div>

        <div className="success-actions">
          <button className="primary-button">Download Receipt</button>

          <a href="/check-registration" className="secondary-button">
            Check Registration
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccess;
