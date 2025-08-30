 import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ComingSoon() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white text-center px-3">
      
      {/* Logo */}
      <img
        src="/logo.png"
        alt="AFAQ Al Khaleej Management"
        className="mb-4"
        style={{ width: '200px' }}
      />

      {/* Headline */}
      <h1 className="display-4 fw-bold mb-3" style={{ color: '#FFD700' }}>
        Coming Soon
      </h1>

      {/* Subtext */}
      <p className="lead text-secondary mb-4" style={{ maxWidth: '600px' }}>
        We’re preparing something amazing for investors, business owners, and partners. Stay tuned for verified investment opportunities and seamless business solutions.
      </p>
 

   
    </div>
  );
}
