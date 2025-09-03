 


//  import React from "react";
// import {
//   FaChartLine,
//   FaLightbulb,
//   FaBuilding,
//   FaHandshake,
//   FaMapMarkedAlt,
//   FaRocket,
// } from "react-icons/fa";
// import WorkingProcessSection from "./Section/WorkingProcessSection.jsx";
// import Section from "./Section";
// import Breadcrumb from "./Breadcrumb/index.jsx";
// import FaqSection from "./Section/FaqSection/index.jsx";

// const Roadmap = () => {

//   const stepData = [
//   {
//     imgUrl: 'images/in.png',
//     title: 'Investment Consulting',
//     desc: 'Helping clients make informed investment decisions with tailored strategies.',
//     step: '01',
//   },
//   {
//     imgUrl: 'images/bus.png',
//     title: 'Business Development',
//     desc: 'Driving growth through innovative solutions and partnerships.',
//     step: '02',
//   },
//   {
//     imgUrl: 'images/brok.png',
//     title: 'Commercial Brokerage',
//     desc: 'Connecting businesses with opportunities in commercial real estate and trade.',
//     step: '03',
//   },
//   {
//     imgUrl: 'images/st-1 (1).png',
//     title: 'Business Sales & Acquisitions',
//     desc: 'Advising on buying, selling, and merging businesses successfully.',
//     step: '04',
//   },
//   {
//     imgUrl: 'images/st-1 (2).png',
//     title: 'Real Estate Opportunities',
//     desc: 'Exploring and maximizing value from real estate investments.',
//     step: '05',
//   },
//   {
//     imgUrl: 'images/st-1 (3).png',
//     title: 'Market Analysis & Strategic Planning',
//     desc: 'Providing insights and strategies to stay ahead in the market.',
//     step: '06',
//   },
// ];

// const faqData = [
//   {
//     title: 'What makes AFAQ Al Khaleej Management different from other consultancies?',
//     desc: 'We verify every opportunity before presenting it to investors. Our focus is on secure, high-yield investments — typically offering 6%–8% ROI monthly on select projects. We also work as a bridge, connecting trusted buyers and sellers to close deals quickly and professionally.',
//   },
//   {
//     title: 'How secure are the investment opportunities you provide?',
//     desc: 'All opportunities are carefully vetted through our due diligence process. We only present deals backed by tangible assets or verified business operations, ensuring minimal risk exposure.',
//   },
//   {
//     title: 'What is the minimum investment amount required?',
//     desc: 'The amount varies depending on the project — from smaller contributions for vehicle investments to higher amounts for industrial or financial market projects. We tailor solutions to fit different investor profiles.',
//   },
//   {
//     title: 'How do you earn your fees?',
//     desc: 'We operate as a brokerage and consultancy — earning a transparent commission or service fee from both parties involved in a deal. This aligns our interests directly with your success.',
//   },
//   {
//     title: 'Can you help me sell my business in Dubai?',
//     desc: 'Yes. We list your business on trusted investment platforms, market it through our regional network, and connect you with verified buyers or partners to ensure a smooth and profitable sale.',
//   },
//   {
//     title: 'How quickly can an investment be finalized?',
//     desc: 'The timeline depends on the complexity of the deal. Some opportunities close within days, while larger projects may take weeks for due diligence and approvals.',
//   },
//   {
//     title: 'Do you work only in Dubai or across the UAE?',
//     desc: 'While we are based in Dubai and have a strong local network, we also assist clients across the UAE and GCC region, depending on the investment opportunity.',
//   },
//   {
//     title: 'How do I get started as an investor or partner?',
//     desc: 'Simply fill out our contact form, send us your investment profile, or reach out via WhatsApp. Our team will guide you step-by-step to find the right opportunity for your goals.',
//   },
// ];
 
//   return (
//     <>
//       <Breadcrumb title="How It Works" bgUrl="/images/about (2).png" />

//        <Section style={{ backgroundColor: '#FFD700' }}>
        
//          <div className="cs_pb_131 pt-3">
//            <WorkingProcessSection
//              // sectionTitleUp="Working Process"
//              sectionTitle="How It Works"
//              data={stepData}
//            />
//          </div>
//        </Section>

//        <Section pb="140" pbLg="80" className="position-relative overflow-hidden">
//          <FaqSection
//            sectionTitleUp="Frequently Asked Questions"
//            sectionTitle="Question & Answer"
//            sectionSubTitle="We value transparency. Here are answers to some of the most common questions investors and business owners ask about working with AFAQ Al Khaleej Management."
//            data={faqData}
//            bgImgUrl="/images/faq.png"
//            imgUrl="/images/w.png"
//            iconUrl="/images/icons/faq_icon_1.svg"
//            featureTitle="We Have Many Happy Clients All Over The World"
//            featureList={['Award Winning Consultancy', 'Highest Success Rates']}
//          />
//        </Section>
//            </>
//   );
// };

// export default Roadmap;


//  import React from "react";
// import Breadcrumb from "./Breadcrumb/index.jsx";
 

// const Roadmap = () => {
//   return (
//     <>
//      <Breadcrumb title="How It Works" bgUrl="/images/about (2).png" />
//     <div className="container-fluid py-5 position-relative bg-warning">
//       <h2 className="fw-bold text-dark mb-5">Our Services Overview</h2>

//       {/* Road SVG */}
//       <svg
//         width="100%"
//         height="500"
//         viewBox="0 0 1200 500"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Road outline */}
//         <path
//           d="M50 450 Q300 100 600 250 T1150 100"
//           stroke="white"
//           strokeWidth="50"
//           fill="none"
//           strokeLinecap="round"
//         />

//         {/* Road inner */}
//         <path
//           d="M50 450 Q300 100 600 250 T1150 100"
//           stroke="#3d3d3d"
//           strokeWidth="30"
//           fill="none"
//           strokeLinecap="round"
//         />
//       </svg>

//       {/* Markers */}
//       <div className="marker" style={{ top: "420px", left: "30px" }}>1</div>
//       <div className="marker" style={{ top: "340px", left: "200px" }}>2</div>
//       <div className="marker" style={{ top: "200px", left: "400px" }}>3</div>
//       <div className="marker" style={{ top: "280px", left: "600px" }}>4</div>
//       <div className="marker" style={{ top: "150px", left: "850px" }}>5</div>
//       <div className="marker rocket" style={{ top: "50px", left: "1120px" }}>🚀</div>

//       {/* Labels */}
//       <div className="label" style={{ top: "420px", left: "90px" }}>Investment Consulting</div>
//       <div className="label" style={{ top: "350px", left: "260px" }}>Business Development</div>
//       <div className="label" style={{ top: "180px", left: "460px" }}>Commercial Brokerage</div>
//       <div className="label" style={{ top: "310px", left: "660px" }}>Business Sales & Acquisitions</div>
//       <div className="label" style={{ top: "120px", left: "910px" }}>Real Estate Opportunities</div>
//       <div className="label" style={{ top: "30px", left: "1180px" }}>Market Analysis & Strategic Planning</div>
//     </div>
//     </>
//   );
// };

// export default Roadmap;


 import React from "react";
import Breadcrumb from "./Breadcrumb/index.jsx";
import FaqSection from "./Section/FaqSection/index.jsx";
import Section from "./Section";
import WorkingProcessSection from "./Section/WorkingProcessSection.jsx/index.jsx";
 

 
const Roadmap = () => {


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

 return (
  <>
    <Breadcrumb title="How It Works" bgUrl="/images/about (2).png" />

    {/* Background Image Section (only for large screens) */}
    <div
      className="d-none d-lg-block container-fluid py-5 position-relative text-center text-white"
      style={{
        backgroundImage: `url('/images/c.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "120vh",
        width: "100%",
      }}
    >
      {/* Large screen content here */}
    </div>

    {/* Step Data Section (only for small screens) */}
    <Section style={{ backgroundColor: "#FFD700" }} className="d-block d-lg-none">
      <div className="cs_pb_131 pt-3">
        <div >
          <WorkingProcessSection sectionTitle="How It Works" data={stepData} />
        </div>
      </div>
    </Section>

    {/* FAQ Section (visible on all screens) */}
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
        featureList={["Award Winning Consultancy", "Highest Success Rates"]}
      />
    </Section>
  </>
);


};

export default Roadmap;


