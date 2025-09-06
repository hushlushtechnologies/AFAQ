import { useEffect } from "react";
import { pageTitle } from "../../helpers/PageTitle";
import Section from "../Section";
import AboutUsSection from "../Section/AboutSection";
import BrandSection from "../Section/BrandSection";
import ContactSection from "../Section/ContactSection";
import HeroSection from "../Section/HeroSection";
import MovingTextSection from "../Section/MovingTextSection";
import PortfolioSection from "../Section/PortfolioSection";
import PostSection from "../Section/PostSection";
import ServiceSection from "../Section/ServiceSection";
import TeamSection from "../Section/TeamSection";
import TestimonialSection from "../Section/TestimonialSection";
import WhyChooseUsSection from "../Section/WhyChooseUsSection";
import VideoBlockStyle2 from "../VideoBlock/VideoBlockStyle2";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";
import ContactSectionStyle2 from "../Section/ContactSection/ContactSectionStyle2";
import FaqSection from "../Section/FaqSection";
import PortfolioSectionStyle3 from "../Section/PortfolioSection/PortfolioSectionStyle3";
import WorkingProcessSection from "../Section/WorkingProcessSection.jsx";

const heroData = [
  {
    bgUrl: "/images/hero-1.png",
    titleUp: "Secure Investments in Dubai",
    title:
      "High ROI, Trusted Partnerships — Your Gateway to Secure Investments in Dubai",
    subTitle:
      "AFAQ Al Khaleej Management connects investors with verified opportunities — from luxury cars to aluminum fabrication and beyond.<br> Whether you’re buying, selling, or seeking financial growth, we act as your strategic bridge",
    btnText: "Explore Opportunities",
    btnUrl: "/contact",
  },
  {
    bgUrl: "/images/hero-2.png",
    titleUp: "Smart Investments, Real Growth",
    title: "Verified Deals, High Returns",
    subTitle:
      "Grow your wealth with secure and high-ROI projects in Dubai’s thriving markets.",
    btnText: "Explore Opportunities",
    btnUrl: "/contact",
  },
  {
    bgUrl: "/images/hero-3.png",
    titleUp: "Your Gateway to Success",
    title: "Invest With Confidence",
    subTitle:
      "We make investing seamless, secure, and profitable — tailored for global investors in Dubai.",
    btnText: "Explore Opportunities",
    btnUrl: "/contact",
  },
];

const movingTextData = [
  "* Secure Investments in Dubai",
  "* Verified High-ROI Opportunities",
  "* Trusted Business Brokerage",
  "* Strategic Growth & Partnerships",
];

 

const serviceData = [
  {
    iconUrl: "/images/icons/service_icon_1.svg",
    title: "Investment Advisory",
    subTitle:
      "Guiding you towards secure and high-yield investments across Dubai’s growing markets.",
    imgUrl: "/images/service_1.png",
    // href: "/services/investment-advisory",
  },
  {
    iconUrl: "/images/icons/service_icon_2.svg",
    title: "Business Brokerage",
    subTitle:
      "Connecting buyers and sellers for seamless business sales, acquisitions, and partnerships.",
    imgUrl: "/images/service_2.png",
    // href: "/services/business-brokerage",
  },
  {
    iconUrl: "/images/icons/service_icon_3.svg",
    title: "Financial Consultancy",
    subTitle:
      "Personalized financial planning and assistance designed to maximize growth and ROI.",
    imgUrl: "/images/service_3.png",
    // href: "/services/financial-consultancy",
  },
  {
    iconUrl: "/images/icons/service_icon_4.svg",
    title: "Investor Relations",
    subTitle:
      "Building trusted connections between investors and verified opportunities in Dubai and GCC.",
    imgUrl: "/images/service_4.png",
    // href: "/services/investor-relations",
  },
];

  const portfolioData = [
  {
    imgUrl: '/images/event.png',
    title: 'HushLush Events',
    projectUrl: 'https://www.hushlushevents.com/',
  },
  {
    imgUrl: '/images/tech.png',
    title: 'HushLush Technologies',
    projectUrl: 'https://hushlushtechnologies.com',
  },
  {
    imgUrl: '/images/hos.png',
    title: 'HushLush Hospitality',
    projectUrl: 'https://hushlushs.com',
  },
  {
    imgUrl: '/images/meg.png',
    title: 'Megatron Cars',
    projectUrl: 'https://optimusmegatroncars.com',
  },
 
];

  const testimonialData = [
  {
    imgUrl: '/images/star2.png',
    rating: '5',
    desc: "The team at AFAQ Al Khaleej Management delivered exactly what they promised — verified investments and clear monthly returns. Their process is transparent, and I feel confident expanding my portfolio with them.",
    name: 'Mohammed A.',
    designation: 'Investor in Luxury Cars',
  },
  {
    imgUrl: '/images/star2.png',
    rating: '4.8',
    desc: "Selling my small manufacturing business in Dubai seemed overwhelming until I partnered with AFAQ. They connected me with serious buyers quickly and handled the entire negotiation professionally.",
    name: 'Sarah K.',
    designation: 'Business Owner (Seller)',
  },
{
  imgUrl: '/images/star2.png',
  rating: '4.9',
  desc: "AFAQ isn’t just a consultancy — they’re a bridge between real opportunities and serious investors. Their strong regional network helped us secure a major deal within weeks, and their guidance throughout the process made  smooth .",
  name: 'James R.',
  designation: 'Strategic Partner',
}

];

const teamData = [
  {
    imgUrl: "/images/event.png",
  name: "Hush Lush Events",
    designation: "Event Management",
    srcUrl: "/business/hush-lush-events",
  },
  {
    imgUrl: "/images/tech.png",
      name: "Hush Lush Tech",
    designation: "Technology Solutions",
    srcUrl: "/business/hush-lush-tech",
  },
  {
    imgUrl: "/images/meg.png",
    name: "Megatron Cars",
    designation: "Automobiles & Sales",
    srcUrl: "/business/megatron-cars",
  },
  {
    imgUrl: "/images/hos.png",
    name: "Hush Lush Hospitality",
    designation: "Luxury Hospitality",
    srcUrl: "/business/hush-lush-hospitality"
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

const brandData = [
  { imgUrl: "/images/brand_1.svg" },
  { imgUrl: "/images/brand_2.svg" },
  { imgUrl: "/images/brand_3.svg" },
  { imgUrl: "/images/brand_4.svg" },
  { imgUrl: "/images/brand_5.svg" },
];

// const stepData = [
//   {
//     imgUrl: 'images/step_1.jpeg',
//     title: 'Marketing',
//     desc: 'We provide a range of digital marketing lutions including website design.',
//     step: '01',
//   },
//   {
//     imgUrl: 'images/step_2.jpeg',
//     title: 'Development',
//     desc: 'We provide a range of digital marketing lutions including website design.',
//     step: '02',
//   },
//   {
//     imgUrl: 'images/step_3.jpeg',
//     title: 'Release',
//     desc: 'We provide a range of digital marketing lutions including website design.',
//     step: '03',
//   },
// ];


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


const videoData = {
  imgSrc: "/images/video_block.jpeg",
  bgImgUrl: "/images/video_block_shape.jpeg",
  videoSrc: "https://www.youtube.com/embed/-DYvROXsAdE?si=wGjibnf56jGZJ3V9",
  title: "Your Trusted Agency of <br /> Choice",
};

const postData = [
  {
    imgUrl: "/images/post_1.jpeg",
    title: "What services does your business provide?",
    desc: "We provide a range of digital marketing lutions including website design.",
    postUrl: "/blog/blog-details",
    postedBy: "Admin",
    adminUrl: "/",
    numberOfComment: 3,
    commentUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_2.jpeg",
    title: "Introducing the latest tech features for you",
    desc: "We provide a range of digital marketing lutions including website design.",
    postUrl: "/blog/blog-details",
    postedBy: "Admin",
    adminUrl: "/",
    numberOfComment: 4,
    commentUrl: "/blog/blog-details",
  },
  {
    imgUrl: "/images/post_3.jpeg",
    title: "The creative studio programm coming soon",
    desc: "We provide a range of digital marketing lutions including website design.",
    postUrl: "/blog/blog-details",
    postedBy: "Admin",
    adminUrl: "/",
    numberOfComment: 5,
    commentUrl: "/blog/blog-details",
  },
];

export default function Home() {
  pageTitle("Business Home");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection data={heroData} />

      <Section>
        <MovingTextSection data={movingTextData} />
      </Section>

  <section className="bg-primary py-5">
  <ServiceSection
    data={serviceData}
    sectionTitleDown='<span class="text-gold">AFAQ Al Khaleej Management</span> services built specifically for your business'
    sectionBtnText="Request Service Details"
    sectionBtnUrl="/contact"
    textVariant="text-white"
  />
</section>


      {/* <Section pt="60" ptLg="40" className="bg-primary">
        <VideoBlockStyle2 data={videoData} />
      </Section> */}

 <Section pb="140" pbLg="80" className="position-relative mt-5">
  <AboutSectionStyle2
    imgUrl="/images/about.png"
    bgImgUrl="/images/exp.png"
    workExprience="5"
    workExprienceTitle="Work Experience"
    sectionTitleUp="About Us"
    sectionTitle='Your Trusted
      <span className="text-accent">Investment Agency</span>'
    sectionSubTitle="We are an investment consultancy based in Dubai, acting as a trusted intermediary between buyers and sellers. Our goal is to provide secure, high-yield investment opportunities while fostering personal and financial growth."
    featureList={[
      {
        imgUrl: '/images/icons/iconbox_icon_1.svg',
        title: 'Mission',
        desc: 'To provide verified investment opportunities and trusted brokerage solutions that deliver consistent value to clients.',
      },
      {
        imgUrl: '/images/icons/iconbox_icon_2.svg',
        title: 'Vision',
        desc: 'To become Dubai’s most reliable investment bridge, connecting global investors with emerging opportunities.',
      },
    ]}
  />
</Section>


      {/* <Section pt="135" ptLg="" className="bg-gray">
        <PortfolioSection
          sectionTitle="Take a look our <br/>Completed Projects"
          sectionTitleUp="Our Latest Project"
          data={portfolioData}
        />
      </Section> */}

     <Section
  pt="135"
  ptLg="75"
  pb="100"
  pbLg="40"
  className="position-relative cs_iconbox_2_wrap overflow-hidden"
>
  <WhyChooseUsSection
    imgUrlLeft="/images/whychooseus.jpg"
    imgUrlRight="/images/whychoose.png"
    sectionTitleUp="Why Choose Us"
    sectionTitle='Providing <span className="text-accent">trusted investments <br /> for global clients</span> <br /> with high returns'
    sectionSubTitle="We act as a reliable intermediary between buyers and sellers, ensuring secure, high-yield investment opportunities while fostering personal and financial growth."
    services={[
      {
        imgUrl: "/images/icons/service_icon_5.svg",
        title: "Verified Deals Only",
      },
      {
        imgUrl: "/images/icons/service_icon_6.svg",
        title: "Secure Investment Plans",
      },
      {
        imgUrl: "/images/icons/service_icon_7.svg",
        title: "High ROI — 6–8% monthly on select projects",
      },
      {
        imgUrl: "/images/icons/service_icon_8.svg",
        title: "Strong regional network in Dubai and GCC",
      },
    ]}
  />
</Section>


      <Section
        pt="140"
        ptLg="75"
        pb="135"
        pbLg="75"
        style={{ backgroundImage: `url(${"/images/testimonial_bg.jpeg"})` }}
      >
        <TestimonialSection
          sectionTitleUp="Testimonial"
          sectionTitle="What They’re Saying?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          data={testimonialData}
        />
      </Section>

      {/* <Section pb="115" pbLg="55">
        <TeamSection
          data={teamData}
          sectionTitle="Meet the professional team <br/> behind the success"
          sectionTitleUp="Meet Our Team Member"
        />
      </Section> */}

            <Section
              pt="133"
              ptLg="73"
              pb="140"
              pbLg="80"
              style={{ background: 'white' }}
            >
              <PortfolioSectionStyle3
                data={portfolioData}
                sectionTitle="Explore Our Other <br/> Business Ventures"

                sectionTitleUp="Our Other Businesses"
              />
            </Section>

      {/* <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="background-filled overflow-hidden"
        style={{ backgroundImage: `url(${"/images/cta_bg.jpeg"})` }}
      >
        <ContactSection
          sectionTitleUp="Contact With Us"
          sectionTitle="Let’s Work Together?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          textVarient="text-white"
          className="cs_mb_40"
          sectionImgUrl="/images/contact_img_1.png"
          contactInfo={[
            {
              imgUrl: "/images/icons/contact_icon_1.svg",
              titleUp: "Have Any Question?",
              title: "+ 070 4531 9507",
              textColor: "text-white",
            },
            {
              imgUrl: "/images/icons/contact_icon_2.svg",
              titleUp: "Send Email",
              title: "bizmax@laralink.com",
              textColor: "text-white",
            },
            {
              imgUrl: "/images/icons/contact_icon_3.svg",
              titleUp: "Address",
              title: "Yewtree Cottage, Kings Pyon",
              textColor: "text-white",
            },
          ]}
        />
      </Section> */}

    <Section
  pt="80"
  ptLg="75"
  pb="85"
  pbLg="55"
  // style={{ backgroundImage: `url('/images/cont.png')` }}
>
  <ContactSectionStyle2
    sectionTitle="Let’s Work Together"
    sectionTitleUp="Get In Touch"
    sectionSubTitle="We’re here to help with your legal, corporate, and consulting needs. Reach out for professional advice, project collaborations, or any inquiries."
    featureList={[
      'Trusted legal and corporate consulting solutions',
      'Dedicated support tailored to your business needs',
    ]}
    contactInfo={[
      {
        imgUrl: '/images/icons/contact_icon_1.svg',
        titleUp: 'Call Us',
        title: '(+971) 068850838', // Replace with Afaq’s real number
        textColor: 'text-primary',
      },
      {
        imgUrl: '/images/icons/contact_icon_2.svg',
        titleUp: 'Email Us',
        title: 'info@afaqmanagement.com', // Replace with Afaq’s email
        textColor: 'text-primary',
      },
    ]}
  />
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

      <Section style={{ backgroundColor: '#FFD700' }}>
       
        <div className="cs_pb_131">
          <WorkingProcessSection
            // sectionTitleUp="Working Process"
            sectionTitle="How It Works"
            data={stepData}
          />
        </div>
      </Section>


      {/* <Section pt="140" ptLg="80">
        <BrandSection data={brandData} />
      </Section> */}

     
    </>
  );
}
