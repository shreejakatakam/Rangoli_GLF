import React from "react";
import { Link } from "react-router-dom";

const RegistrationSuccess = () => {
  const registrationDetails = {
    id: "TR2027001",
    name: "Ananya Reddy",
    package: "District Level - ₹299",
    date: "05 Jan 2027",
    time: "10:00 AM",
    venue: "Hyderabad Main Center",
    email: "ananya.reddy@example.com",
  };

  return (
    <div className="success-page">
      <div className="success-banner">
        <div className="success-banner-icon">🎉</div>
      </div>

      <div className="success-container">
        <h1 className="success-title">Registration Successful!</h1>
        <p className="success-subtitle">
          Thank you for registering for Telugu Rangavallika 2027. Your
          participation has been confirmed.
        </p>

        <div className="success-card">
          <div className="success-card-header">
            <h2>Registration Details</h2>
            <span className="status-badge">Confirmed</span>
          </div>

          <div className="success-details-grid">
            <div className="success-detail-row">
              <span className="detail-label">Registration ID</span>
              <span className="detail-value highlight">
                {registrationDetails.id}
              </span>
            </div>
            <div className="success-detail-row">
              <span className="detail-label">Participant Name</span>
              <span className="detail-value">{registrationDetails.name}</span>
            </div>
            <div className="success-detail-row">
              <span className="detail-label">Package</span>
              <span className="detail-value">
                {registrationDetails.package}
              </span>
            </div>
            <div className="success-detail-row">
              <span className="detail-label">Competition Date</span>
              <span className="detail-value">{registrationDetails.date}</span>
            </div>
            <div className="success-detail-row">
              <span className="detail-label">Reporting Time</span>
              <span className="detail-value">{registrationDetails.time}</span>
            </div>
            <div className="success-detail-row">
              <span className="detail-label">Venue</span>
              <span className="detail-value">{registrationDetails.venue}</span>
            </div>
          </div>

          <div className="success-note">
            <p>
              📧 A confirmation email has been sent to{" "}
              <strong>{registrationDetails.email}</strong>.
            </p>
            <p>
              Please bring a printed copy of your Admit Card and a valid ID
              proof on the day of the competition.
            </p>
          </div>
        </div>

        <div className="success-actions">
          <button
            className="btn-download-admit"
            onClick={() => alert("Downloading Admit Card...")}
          >
            📄 Download Admit Card
          </button>
          <Link to="/" className="btn-home">
            Back to Home
          </Link>
        </div>

        <div className="success-share">
          <p>Share your achievement with friends and family!</p>
          <div className="share-buttons">
            <a href="#" className="share-btn whatsapp">
              WhatsApp
            </a>
            <a href="#" className="share-btn facebook">
              Facebook
            </a>
            <a href="#" className="share-btn twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
