import React, { useState } from "react";

const CheckRegistration = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // Simulate an API call
    setTimeout(() => {
      if (
        searchQuery.toLowerCase() === "tr2027001" ||
        searchQuery === "9876543210"
      ) {
        setSearchResult({
          status: "Confirmed",
          id: "TR2027001",
          name: "Ananya Reddy",
          age: 14,
          mobile: "9876543210",
          package: "District Level - ₹299",
          date: "05 Jan 2027",
          venue: "Hyderabad Main Center",
        });
      } else {
        setSearchResult({ status: "NotFound" });
      }
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="check-reg-page">
      <section className="check-reg-header">
        <h1 className="check-reg-title">
          Check Your <span>Registration</span>
        </h1>
        <p className="check-reg-subtitle">
          Enter your Registration ID or Mobile Number to check your status.
        </p>
        <div className="header-divider">❖</div>
      </section>

      <section className="check-reg-search-section">
        <form className="check-reg-form" onSubmit={handleSearch}>
          <div className="search-input-group">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Enter Registration ID or Mobile Number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="check-reg-btn"
            disabled={isSearching}
          >
            {isSearching ? "Searching..." : "Check Status →"}
          </button>
        </form>
      </section>

      {searchResult && (
        <section className="check-reg-results">
          {searchResult.status === "Confirmed" ? (
            <div className="result-card success-card">
              <div className="result-icon-success">✅</div>
              <h2>Registration Confirmed!</h2>
              <p className="result-message">
                Your registration details are verified.
              </p>

              <div className="result-details-grid">
                <div className="result-detail-item">
                  <span className="detail-label">Registration ID</span>
                  <span className="detail-value highlight">
                    {searchResult.id}
                  </span>
                </div>
                <div className="result-detail-item">
                  <span className="detail-label">Participant Name</span>
                  <span className="detail-value">{searchResult.name}</span>
                </div>
                <div className="result-detail-item">
                  <span className="detail-label">Age</span>
                  <span className="detail-value">{searchResult.age}</span>
                </div>
                <div className="result-detail-item">
                  <span className="detail-label">Mobile</span>
                  <span className="detail-value">{searchResult.mobile}</span>
                </div>
                <div className="result-detail-item full-width">
                  <span className="detail-label">Package Selected</span>
                  <span className="detail-value">{searchResult.package}</span>
                </div>
                <div className="result-detail-item">
                  <span className="detail-label">Competition Date</span>
                  <span className="detail-value">{searchResult.date}</span>
                </div>
                <div className="result-detail-item">
                  <span className="detail-label">Venue</span>
                  <span className="detail-value">{searchResult.venue}</span>
                </div>
              </div>

              <div className="result-actions">
                <button
                  className="btn-download"
                  onClick={() => alert("Downloading Admit Card...")}
                >
                  📄 Download Admit Card
                </button>
              </div>
            </div>
          ) : (
            <div className="result-card error-card">
              <div className="result-icon-error">❌</div>
              <h2>Registration Not Found</h2>
              <p className="result-message">
                We couldn't find a registration with the provided ID or Mobile
                Number. Please check your details and try again.
              </p>
              <button
                className="btn-retry"
                onClick={() => setSearchResult(null)}
              >
                Try Again
              </button>
            </div>
          )}
        </section>
      )}

      <section className="check-reg-help">
        <p>
          Need help? <a href="/contact">Contact Support</a>
        </p>
      </section>
    </div>
  );
};

export default CheckRegistration;
