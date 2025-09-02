//  import React from "react";
// import {
//   FaChartLine,
//   FaLightbulb,
//   FaBuilding,
//   FaHandshake,
//   FaMapMarkedAlt,
//   FaRocket,
// } from "react-icons/fa";

// const Roadmap = () => {
//   const steps = [
//     { id: 1, title: "Investment Consulting", icon: <FaChartLine /> },
//     { id: 2, title: "Business Development", icon: <FaLightbulb /> },
//     { id: 3, title: "Commercial Brokerage", icon: <FaBuilding /> },
//     { id: 4, title: "Business Sales & Acquisitions", icon: <FaHandshake /> },
//     { id: 5, title: "Real Estate Opportunities", icon: <FaMapMarkedAlt /> },
//     { id: 6, title: "Market Analysis & Strategic Planning", icon: <FaRocket /> },
//   ];

//   // positions of steps along the road (percentage)
//   const positions = [
//     { left: "10%", top: "80%" },
//     { left: "30%", top: "70%" },
//     { left: "45%", top: "55%" },
//     { left: "60%", top: "40%" },
//     { left: "75%", top: "25%" },
//     { left: "90%", top: "10%" },
//   ];

//   return (
//     <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
//       <div className="container text-center">
//         <h2 className="fw-bold mb-5">Our Services Overview</h2>

//         <div className="position-relative" style={{ height: "500px" }}>
//           {/* Curvy Road (SVG) */}
//           <svg
//             viewBox="0 0 1000 300"
//             preserveAspectRatio="none"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//             }}
//           >
//             <path
//               d="M 0 250 Q 250 100 500 200 Q 750 300 1000 100"
//               stroke="#6c757d"
//               strokeWidth="30"
//               fill="none"
//               strokeLinecap="round"
//             />
//             <path
//               d="M 0 250 Q 250 100 500 200 Q 750 300 1000 100"
//               stroke="#fff"
//               strokeWidth="10"
//               strokeDasharray="20,20"
//               fill="none"
//               strokeLinecap="round"
//             />
//           </svg>

//           {/* Steps Placed on Road */}
//           {steps.map((step, index) => (
//             <div
//               key={step.id}
//               className="position-absolute text-center"
//               style={positions[index]}
//             >
//               {/* Number Circle */}
//               <div
//                 className="rounded-circle d-flex justify-content-center align-items-center mx-auto mb-2"
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   backgroundColor: "#FFD700",
//                   color: "#000",
//                   fontWeight: "700",
//                   fontSize: "1rem",
//                 }}
//               >
//                 {step.id}
//               </div>
//               {/* Title */}
//               <div className="bg-white shadow-sm p-2 rounded small">
//                 <div className="fs-5 text-warning">{step.icon}</div>
//                 <p className="mb-0 fw-semibold" style={{ fontSize: "0.85rem" }}>
//                   {step.title}
//                 </p>
//               </div>
//             </div>
//           ))}

//           {/* Rocket at the end */}
//           <div
//             className="position-absolute"
//             style={{ left: "95%", top: "0%" }}
//           >
//             <FaRocket size={40} className="text-danger" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Roadmap;


 import React from "react";
import {
  FaChartLine,
  FaLightbulb,
  FaBuilding,
  FaHandshake,
  FaMapMarkedAlt,
  FaRocket,
} from "react-icons/fa";
import WorkingProcessSection from "./Section/WorkingProcessSection.jsx";
import Section from "./Section";
import Breadcrumb from "./Breadcrumb/index.jsx";
import FaqSection from "./Section/FaqSection/index.jsx";

const Roadmap = () => {

  const stepData = [
  {
    imgUrl: 'images/in.png',
    title: 'Investment Consulting',
    desc: 'Helping clients make informed investment decisions with tailored strategies.',
    step: '01',
  },
  {
    imgUrl: 'images/bus.png',
    title: 'Business Development',
    desc: 'Driving growth through innovative solutions and partnerships.',
    step: '02',
  },
  {
    imgUrl: 'images/brok.png',
    title: 'Commercial Brokerage',
    desc: 'Connecting businesses with opportunities in commercial real estate and trade.',
    step: '03',
  },
  {
    imgUrl: 'images/st-1 (1).png',
    title: 'Business Sales & Acquisitions',
    desc: 'Advising on buying, selling, and merging businesses successfully.',
    step: '04',
  },
  {
    imgUrl: 'images/st-1 (2).png',
    title: 'Real Estate Opportunities',
    desc: 'Exploring and maximizing value from real estate investments.',
    step: '05',
  },
  {
    imgUrl: 'images/st-1 (3).png',
    title: 'Market Analysis & Strategic Planning',
    desc: 'Providing insights and strategies to stay ahead in the market.',
    step: '06',
  },
];

const faqData = [
  {
    title: 'What makes AFAQ Al Khaleej Management different from other consultancies?',
    desc: 'We verify every opportunity before presenting it to investors. Our focus is on secure, high-yield investments — typically offering 6%–8% ROI monthly on select projects. We also work as a bridge, connecting trusted buyers and sellers to close deals quickly and professionally.',
  },
  {
    title: 'How secure are the investment opportunities you provide?',
    desc: 'All opportunities are carefully vetted through our due diligence process. We only present deals backed by tangible assets or verified business operations, ensuring minimal risk exposure.',
  },
  {
    title: 'What is the minimum investment amount required?',
    desc: 'The amount varies depending on the project — from smaller contributions for vehicle investments to higher amounts for industrial or financial market projects. We tailor solutions to fit different investor profiles.',
  },
  {
    title: 'How do you earn your fees?',
    desc: 'We operate as a brokerage and consultancy — earning a transparent commission or service fee from both parties involved in a deal. This aligns our interests directly with your success.',
  },
  {
    title: 'Can you help me sell my business in Dubai?',
    desc: 'Yes. We list your business on trusted investment platforms, market it through our regional network, and connect you with verified buyers or partners to ensure a smooth and profitable sale.',
  },
  {
    title: 'How quickly can an investment be finalized?',
    desc: 'The timeline depends on the complexity of the deal. Some opportunities close within days, while larger projects may take weeks for due diligence and approvals.',
  },
  {
    title: 'Do you work only in Dubai or across the UAE?',
    desc: 'While we are based in Dubai and have a strong local network, we also assist clients across the UAE and GCC region, depending on the investment opportunity.',
  },
  {
    title: 'How do I get started as an investor or partner?',
    desc: 'Simply fill out our contact form, send us your investment profile, or reach out via WhatsApp. Our team will guide you step-by-step to find the right opportunity for your goals.',
  },
];
 
  return (
    <>
      <Breadcrumb title="How It Works" bgUrl="/images/about (2).png" />

       <Section style={{ backgroundColor: '#FFD700' }}>
        
         <div className="cs_pb_131 pt-3">
           <WorkingProcessSection
             // sectionTitleUp="Working Process"
             sectionTitle="How It Works"
             data={stepData}
           />
         </div>
       </Section>

       <Section pb="140" pbLg="80" className="position-relative overflow-hidden">
         <FaqSection
           sectionTitleUp="Frequently Asked Questions"
           sectionTitle="Question & Answer"
           sectionSubTitle="We value transparency. Here are answers to some of the most common questions investors and business owners ask about working with AFAQ Al Khaleej Management."
           data={faqData}
           bgImgUrl="/images/faq.png"
           imgUrl="/images/w.png"
           iconUrl="/images/icons/faq_icon_1.svg"
           featureTitle="We Have Many Happy Clients All Over The World"
           featureList={['Award Winning Consultancy', 'Highest Success Rates']}
         />
       </Section>
           </>
  );
};

export default Roadmap;
