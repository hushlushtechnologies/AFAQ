 import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium text-uppercase">
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>
      <li>
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>
      <li>
        <Link to="/investments" onClick={() => setMobileToggle(false)}>
          Investments
        </Link>
      </li>
      <li>
        <Link to="/business-for-sale" onClick={() => setMobileToggle(false)}>
          Business for Sale
        </Link>
      </li>
      <li>
        <Link to="/investors-buyers" onClick={() => setMobileToggle(false)}>
          Investors & Buyers
        </Link>
      </li>
      <li>
        <Link to="/how-it-works" onClick={() => setMobileToggle(false)}>
          How It Works
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
