import { useState } from "react";

function Register() {
  const [step, setStep] = useState(1);

  return (
    <div className="registration-page">
      <div className="registration-header">
        <div className="eyebrow">TELUGU RANGAVALLI 2026</div>
        <h1>Participant Registration</h1>
        <p>Complete your registration in a few simple steps.</p>
      </div>

      {/* Progress */}
      <div className="registration-progress">
        <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
          <span>01</span>
          <p>Personal</p>
        </div>

        <div className={`progress-line ${step >= 2 ? "active" : ""}`} />

        <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
          <span>02</span>
          <p>Address</p>
        </div>

        <div className={`progress-line ${step >= 3 ? "active" : ""}`} />

        <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
          <span>03</span>
          <p>Photo</p>
        </div>

        <div className={`progress-line ${step >= 4 ? "active" : ""}`} />

        <div className={`progress-step ${step >= 4 ? "active" : ""}`}>
          <span>04</span>
          <p>Review</p>
        </div>

        <div className={`progress-line ${step >= 5 ? "active" : ""}`} />

        <div className={`progress-step ${step >= 5 ? "active" : ""}`}>
          <span>05</span>
          <p>Payment</p>
        </div>
      </div>

      {/* Form */}
      <div className="registration-card">
        {step === 1 && (
          <div>
            <h2>Personal Details</h2>
            <p className="form-description">Tell us a little about yourself.</p>

            <div className="form-grid">
              <div className="form-group full">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>Gender *</label>
                <select>
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Age *</label>
                <input type="number" placeholder="Enter age" />
              </div>

              <div className="form-group full">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                />
              </div>
            </div>

            <div className="form-actions">
              <button className="primary-button" onClick={() => setStep(2)}>
                Continue →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Address Details</h2>
            <p className="form-description">Enter your current address.</p>

            <div className="form-grid">
              <div className="form-group full">
                <label>House Address *</label>
                <textarea
                  placeholder="Enter your house / street address"
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label>City / Village *</label>
                <input type="text" placeholder="City or village" />
              </div>

              <div className="form-group">
                <label>District *</label>
                <input type="text" placeholder="District" />
              </div>

              <div className="form-group full">
                <label>State *</label>

                <select>
                  <option value="">Select state</option>
                  <option>Andhra Pradesh</option>
                  <option>Telangana</option>
                </select>
              </div>
            </div>

            <div className="form-actions split">
              <button className="secondary-button" onClick={() => setStep(1)}>
                ← Back
              </button>

              <button className="primary-button" onClick={() => setStep(3)}>
                Continue →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Upload Participant Photo</h2>

            <p className="form-description">
              Upload a clear participant photograph.
            </p>

            <div className="upload-box">
              <div className="upload-icon">📷</div>

              <h3>Upload Photo</h3>

              <p>JPG, JPEG or PNG only</p>

              <input
                type="file"
                accept=".jpg,.jpeg,.png,image/jpeg,image/png"
              />
            </div>

            <div className="form-actions split">
              <button className="secondary-button" onClick={() => setStep(2)}>
                ← Back
              </button>

              <button className="primary-button" onClick={() => setStep(4)}>
                Continue →
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2>Review Your Details</h2>

            <p className="form-description">
              Please check your details before continuing.
            </p>

            <div className="review-box">
              <div className="review-row">
                <span>Full Name</span>
                <strong>Your Name</strong>
              </div>

              <div className="review-row">
                <span>Gender</span>
                <strong>Not selected</strong>
              </div>

              <div className="review-row">
                <span>Age</span>
                <strong>Not entered</strong>
              </div>

              <div className="review-row">
                <span>Mobile</span>
                <strong>Not entered</strong>
              </div>

              <div className="review-row">
                <span>Address</span>
                <strong>Not entered</strong>
              </div>

              <div className="review-row">
                <span>Photo</span>
                <strong>Uploaded</strong>
              </div>
            </div>

            <label className="confirmation">
              <input type="checkbox" />
              <span>I confirm that the above details are correct.</span>
            </label>

            <div className="form-actions split">
              <button className="secondary-button" onClick={() => setStep(3)}>
                ← Back
              </button>

              <button className="primary-button" onClick={() => setStep(5)}>
                Select Package →
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2>Select Your Package</h2>

            <p className="form-description">
              Choose your participation package before payment.
            </p>

            <div className="registration-packages">
              <div className="registration-package">
                <h3>District Level</h3>
                <strong>₹299</strong>
                <p>Certificate + Prize</p>
                <button className="package-button">Select ₹299</button>
              </div>

              <div className="registration-package selected">
                <span className="selected-badge">POPULAR</span>

                <h3>District Level</h3>
                <strong>₹599</strong>
                <p>Certificate + Trophy + Prize</p>

                <button className="package-button">Select ₹599</button>
              </div>

              <div className="registration-package">
                <span className="state-badge">DIRECT STATE</span>

                <h3>Direct State Level</h3>
                <strong>₹1,500</strong>
                <p>Certificate + Trophy + Prize + Award</p>

                <button className="package-button">Select ₹1,500</button>
              </div>
            </div>

            <div className="form-actions split">
              <button className="secondary-button" onClick={() => setStep(4)}>
                ← Back
              </button>

              <button
                className="primary-button"
                onClick={() => (window.location.href = "/registration-success")}
              >
                Proceed to Payment →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
