import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import BrandSection from '../Section/BrandSection';
import ServiceSectionStyle4 from '../Section/ServiceSection/ServiceSectionStyle4';
import TestimonialSection from '../Section/TestimonialSection';
import { pageTitle } from '../../helpers/PageTitle';

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

const brandData = [
  { imgUrl: '/images/brand_1.svg' },
  { imgUrl: '/images/brand_2.svg' },
  { imgUrl: '/images/brand_3.svg' },
  { imgUrl: '/images/brand_4.svg' },
  { imgUrl: '/images/brand_5.svg' },
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
    desc: "AFAQ isn’t just a consultancy — they’re a bridge between real opportunities and serious investors. Their strong regional network helped us secure a major deal within weeks.",
    name: 'James R.',
    designation: 'Strategic Partner',
  },
];


export default function ServicesPage() {
  pageTitle('Services');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Our Services" bgUrl="/images/about (2).png" />

      <Section pt="140" ptLg="80" pb="115" pbLg="55">
        <ServiceSectionStyle4
          sectionTitleUp="Our Service List"
          sectionTitle="We Provide The Solution <br />For Our Clients"
          data={serviceData}
        />
      </Section>

      <Section pt="110" ptLg="80" pb="110" pbLg="80" className="bg-gray">
        <BrandSection data={brandData} />
      </Section>

      <Section
        pt="140"
        ptLg="75"
        pb="135"
        pbLg="75"
        style={{ backgroundImage: `url(${'/images/testimonial_bg.jpeg'})` }}
      >
 <TestimonialSection
  sectionTitleUp="Testimonials"
  sectionTitle="What Our Clients Say"
  sectionSubTitle="From verified investments to seamless business sales, AFAQ Al Khaleej Management has earned the trust of investors, sellers, and partners across Dubai and beyond."
  data={testimonialData}
/>

      </Section>
    </>
  );
}
