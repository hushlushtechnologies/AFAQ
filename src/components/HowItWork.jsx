 import React from "react";
import {
  FaChartLine,
  FaLightbulb,
  FaBuilding,
  FaHandshake,
  FaMapMarkedAlt,
  FaRocket,
} from "react-icons/fa";

const Roadmap = () => {
  const steps = [
    { id: 1, title: "Investment Consulting", icon: <FaChartLine /> },
    { id: 2, title: "Business Development", icon: <FaLightbulb /> },
    { id: 3, title: "Commercial Brokerage", icon: <FaBuilding /> },
    { id: 4, title: "Business Sales & Acquisitions", icon: <FaHandshake /> },
    { id: 5, title: "Real Estate Opportunities", icon: <FaMapMarkedAlt /> },
    { id: 6, title: "Market Analysis & Strategic Planning", icon: <FaRocket /> },
  ];

  // positions of steps along the road (percentage)
  const positions = [
    { left: "10%", top: "80%" },
    { left: "30%", top: "70%" },
    { left: "45%", top: "55%" },
    { left: "60%", top: "40%" },
    { left: "75%", top: "25%" },
    { left: "90%", top: "10%" },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Our Services Overview</h2>

        <div className="position-relative" style={{ height: "500px" }}>
          {/* Curvy Road (SVG) */}
          <svg
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <path
              d="M 0 250 Q 250 100 500 200 Q 750 300 1000 100"
              stroke="#6c757d"
              strokeWidth="30"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 0 250 Q 250 100 500 200 Q 750 300 1000 100"
              stroke="#fff"
              strokeWidth="10"
              strokeDasharray="20,20"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Steps Placed on Road */}
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="position-absolute text-center"
              style={positions[index]}
            >
              {/* Number Circle */}
              <div
                className="rounded-circle d-flex justify-content-center align-items-center mx-auto mb-2"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#FFD700",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
              >
                {step.id}
              </div>
              {/* Title */}
              <div className="bg-white shadow-sm p-2 rounded small">
                <div className="fs-5 text-warning">{step.icon}</div>
                <p className="mb-0 fw-semibold" style={{ fontSize: "0.85rem" }}>
                  {step.title}
                </p>
              </div>
            </div>
          ))}

          {/* Rocket at the end */}
          <div
            className="position-absolute"
            style={{ left: "95%", top: "0%" }}
          >
            <FaRocket size={40} className="text-danger" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
