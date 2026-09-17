import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ fullName: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="header-decoration-left">❖</div>
        <div className="header-content">
          <h1 className="contact-title">
            Contact <span>Us</span>
          </h1>
          <p className="contact-subtitle">We're here to help you!</p>
          <p className="contact-description">
            Have questions about Telugu Rangavalli 2027? Reach out to us and
            we'll be happy to assist you.
          </p>
          <div className="header-divider">❖</div>
        </div>
        <div className="header-decoration-right">❖</div>
      </section>

      {/* Main Content Grid */}
      <section className="contact-grid">
        {/* Left Column: Contact Information Cards */}
        <div className="contact-info-column">
          {/* Phone Card */}
          <div className="contact-info-card card-phone">
            <div className="contact-icon-wrapper phone-icon">
              <span className="contact-icon">📞</span>
            </div>
            <div className="contact-info-text">
              <h3>Phone</h3>
              <p className="contact-primary-text">+91 98765 43210</p>
              <p className="contact-secondary-text">
                Mon - Sat, 9:00 AM to 6:00 PM
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="contact-info-card card-email">
            <div className="contact-icon-wrapper email-icon">
              <span className="contact-icon">✉️</span>
            </div>
            <div className="contact-info-text">
              <h3>Email</h3>
              <p className="contact-primary-text">info@givelaurels.org</p>
              <p className="contact-secondary-text">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Address Card */}
          <div className="contact-info-card card-address">
            <div className="contact-icon-wrapper address-icon">
              <span className="contact-icon">📍</span>
            </div>
            <div className="contact-info-text">
              <h3>Address</h3>
              <p className="contact-primary-text">
                Give Laurels Foundation of India
              </p>
              <p className="contact-secondary-text">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          {/* Website Card */}
          <div className="contact-info-card card-website">
            <div className="contact-icon-wrapper website-icon">
              <span className="contact-icon">🌐</span>
            </div>
            <div className="contact-info-text">
              <h3>Website</h3>
              <p className="contact-primary-text">www.givelaurels.org</p>
              <p className="contact-secondary-text">
                Visit our website for more information.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-column">
          <div className="contact-form-card">
            <h2 className="form-title">Send Us a Message</h2>
            <p className="form-subtitle">
              Fill out the form below and we'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  maxLength="500"
                  required
                ></textarea>
                <div className="char-count">{formData.message.length}/500</div>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
