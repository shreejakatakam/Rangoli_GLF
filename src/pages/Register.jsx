import React, { useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    mobile: "",
    houseAddress: "",
    city: "",
    district: "",
    state: "",
    file: null,
    selectedPackage: "299",
  });

  const nextStep = () => {
    // If on Review step (step 4), ensure confirmation is checked
    if (step === 4 && !isConfirmed) {
      alert("Please confirm that your details are correct before proceeding.");
      return;
    }
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handlePackageSelect = (price) => {
    setFormData((prev) => ({ ...prev, selectedPackage: price }));
  };

  // --- Step Renders ---

  const renderStep1 = () => (
    <div className="reg-form-section">
      <h2>Personal Details</h2>
      <p className="reg-subtitle">Tell us about yourself</p>

      <div className="reg-group">
        <label>
          Full Name <span className="req">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
      </div>

      <div className="reg-group">
        <label>
          Gender <span className="req">*</span>
        </label>
        <div className="radio-group">
          {["Male", "Female", "Other"].map((g) => (
            <label key={g} className="radio-label">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={formData.gender === g}
                onChange={handleChange}
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      <div className="reg-group">
        <label>
          Age <span className="req">*</span>
        </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age (e.g., 8, 12, 16)"
        />
      </div>

      <div className="reg-group">
        <label>
          Mobile Number <span className="req">*</span>
        </label>
        <div className="mobile-input-group">
          <span className="prefix">+91</span>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="reg-form-section">
      <h2>Address Details</h2>
      <p className="reg-subtitle">Provide your complete address</p>

      <div className="reg-group">
        <label>
          House Address <span className="req">*</span>
        </label>
        <textarea
          name="houseAddress"
          rows="3"
          value={formData.houseAddress}
          onChange={handleChange}
          placeholder="Enter your house address"
          maxLength="200"
        ></textarea>
        <div className="char-count">{formData.houseAddress.length}/200</div>
      </div>

      <div className="reg-group">
        <label>
          City / Village <span className="req">*</span>
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city or village"
        />
      </div>

      <div className="reg-group">
        <label>
          District <span className="req">*</span>
        </label>
        <input
          type="text"
          name="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="Enter your district"
        />
      </div>

      <div className="reg-group">
        <label>
          State <span className="req">*</span>
        </label>
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select State</option>
          <option value="Telangana">Telangana</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="reg-form-section">
      <h2>Upload Documents</h2>
      <p className="reg-subtitle">Upload your participant photo or ID proof</p>

      <div className="upload-container">
        <div className="upload-box">
          <div className="upload-icon">☁️</div>
          <p>Drag & drop your file here</p>
          <p className="or-text">or click to browse</p>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="file-input-hidden"
          />
          <p className="file-limit">JPG, JPEG, PNG (Max 5 MB)</p>
        </div>

        <div className="preview-box">
          <p>Preview</p>
          <div className="preview-placeholder">
            {formData.file ? (
              <img src={URL.createObjectURL(formData.file)} alt="Preview" />
            ) : (
              <span className="preview-icon">👤</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="reg-form-section">
      <h2>Review Your Details</h2>
      <p className="reg-subtitle">
        Please check your details before proceeding
      </p>

      <div className="review-card">
        <div className="review-header">
          <h3>Personal Details</h3>
          <button
            className="edit-btn"
            onClick={() => {
              setStep(1);
              setIsConfirmed(false);
            }}
          >
            ✏️ Edit
          </button>
        </div>
        <div className="review-row">
          <span>Full Name</span>{" "}
          <span>{formData.fullName || "Ananya Reddy"}</span>
        </div>
        <div className="review-row">
          <span>Gender</span> <span>{formData.gender || "Female"}</span>
        </div>
        <div className="review-row">
          <span>Age</span> <span>{formData.age || "14"}</span>
        </div>
        <div className="review-row">
          <span>Mobile Number</span>{" "}
          <span>+91 {formData.mobile || "98765 43210"}</span>
        </div>
      </div>

      <div className="review-card">
        <div className="review-header">
          <h3>Address Details</h3>
          <button
            className="edit-btn"
            onClick={() => {
              setStep(2);
              setIsConfirmed(false);
            }}
          >
            ✏️ Edit
          </button>
        </div>
        <div className="review-row">
          <span>House Address</span>{" "}
          <span>{formData.houseAddress || "H. No. 12-3-45, LB Nagar"}</span>
        </div>
        <div className="review-row">
          <span>City / Village</span>{" "}
          <span>{formData.city || "Hyderabad"}</span>
        </div>
        <div className="review-row">
          <span>District</span>{" "}
          <span>{formData.district || "Ranga Reddy"}</span>
        </div>
        <div className="review-row">
          <span>State</span> <span>{formData.state || "Telangana"}</span>
        </div>
      </div>

      <div className="review-card">
        <div className="review-header">
          <h3>Document</h3>
          <button
            className="edit-btn"
            onClick={() => {
              setStep(3);
              setIsConfirmed(false);
            }}
          >
            ✏️ Edit
          </button>
        </div>
        <div className="review-row">
          <span>Uploaded File</span>{" "}
          <span>{formData.file ? formData.file.name : "photo.jpg"}</span>
        </div>
      </div>

      <label className="confirm-checkbox">
        <input
          type="checkbox"
          checked={isConfirmed}
          onChange={(e) => setIsConfirmed(e.target.checked)}
        />
        I confirm that the above details are correct.
      </label>
    </div>
  );

  const renderStep5 = () => {
    const packages = [
      {
        price: "299",
        level: "District Level",
        color: "pink",
        features: ["Certificate", "Prize"],
      },
      {
        price: "599",
        level: "District Level",
        color: "purple",
        features: ["Certificate", "Trophy", "Prize"],
      },
      {
        price: "1,499",
        level: "Direct State Level",
        color: "gold",
        features: ["Certificate", "Trophy", "Prize", "Award"],
      },
    ];

    const selectedPkg = packages.find(
      (p) => p.price === formData.selectedPackage,
    );

    return (
      <div className="reg-form-section">
        <h2>Select Your Package</h2>
        <p className="reg-subtitle">
          Choose a package to complete your registration
        </p>

        <div className="reg-package-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.price}
              className={`reg-package-card ${pkg.color} ${formData.selectedPackage === pkg.price ? "selected" : ""}`}
              onClick={() => handlePackageSelect(pkg.price)}
            >
              {formData.selectedPackage === pkg.price && (
                <div className="selected-badge">✓</div>
              )}
              <div className="reg-package-price">₹{pkg.price}</div>
              <div className="reg-package-level">{pkg.level}</div>
              <ul className="reg-package-features">
                {pkg.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="payment-summary">
          <div className="summary-left">
            <h3>Selected Package</h3>
            <p className="summary-price">₹{formData.selectedPackage}</p>
            <p className="summary-level">{selectedPkg?.level}</p>
          </div>
          <div className="summary-right">
            <p>✓ {selectedPkg?.features.join(" ✓ ")}</p>
          </div>
        </div>

        <div className="payment-qr-section">
          <h3>Pay via UPI</h3>
          <p>Scan the QR code or use any UPI app</p>
          <div className="qr-container">
            <div className="qr-placeholder">QR CODE</div>
            <div className="upi-apps">
              <span>Google Pay</span>
              <span>PhonePe</span>
              <span>Paytm</span>
              <span>BHIM</span>
            </div>
          </div>
          <p className="upi-id">UPI ID: tr2026@okbsi</p>
        </div>

        <div className="secure-note">
          🔒 Your payment is securely processed through our payment gateway.
        </div>
      </div>
    );
  };

  return (
    <div className="register-page">
      {/* Header */}
      <div className="reg-header">
        <div className="reg-header-brand">
          <span className="reg-logo">✿</span>
          <div>
            <h1>
              TELUGU RANGAVALLI <b>2027</b>
            </h1>
            <p>by Give Laurels Foundation of India</p>
          </div>
        </div>
        <div className="reg-header-right">Registration</div>
      </div>

      {/* Stepper */}
      <div className="reg-stepper">
        {[
          { num: 1, label: "Personal Details" },
          { num: 2, label: "Address" },
          { num: 3, label: "Upload" },
          { num: 4, label: "Review" },
          { num: 5, label: "Payment" },
        ].map((s) => (
          <div
            key={s.num}
            className={`step-item ${step >= s.num ? "active" : ""} ${step === s.num ? "current" : ""}`}
          >
            <div className="step-circle">{s.num}</div>
            <div className="step-label">{s.label}</div>
            {s.num < 5 && <div className="step-line"></div>}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="reg-content">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
        {step === 5 && renderStep5()}
      </div>

      {/* Navigation Buttons */}
      <div className="reg-navigation">
        {step > 1 && (
          <button className="btn-back" onClick={prevStep}>
            ← Back
          </button>
        )}
        {step < 5 ? (
          <button className="btn-next" onClick={nextStep}>
            Next →
          </button>
        ) : (
          <button
            className="btn-next btn-pay"
            onClick={() => alert("Payment integration goes here!")}
          >
            Complete Payment →
          </button>
        )}
      </div>
    </div>
  );
};

export default Register;
