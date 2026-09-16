import React, { useState } from "react";
import { Link } from "react-router-dom";

function CheckRegistration() {
  const [registrationId, setRegistrationId] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!registrationId || !mobile) {
      alert("Please enter Registration ID and Mobile Number.");
      return;
    }

    alert("Registration checking will be connected to the database later.");
  };

  return (
    <div className="page-container">
      <div className="form-card">
        <div className="form-header">
          <div className="form-icon">✦</div>

          <h1>Check Registration</h1>

          <p>Check your Telugu Rangavalli 2026 registration status.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Registration ID</label>

            <input
              type="text"
              placeholder="TR-2026-00001"
              value={registrationId}
              onChange={(e) => setRegistrationId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <button type="submit" className="primary-button">
            Check Status →
          </button>
        </form>

        <div className="back-link">
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default CheckRegistration;
