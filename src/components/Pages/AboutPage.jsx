import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import AboutUsSection from '../Section/AboutSection';
import ServiceSection from '../Section/ServiceSection';
import TeamSection from '../Section/TeamSection';
import TestimonialSection from '../Section/TestimonialSection';
import { pageTitle } from '../../helpers/PageTitle';

 const serviceData = [
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Investment Advisory',
    subTitle:
      'Tailored strategies to help investors maximize returns with secure and high-yield opportunities.',
    imgUrl: '/images/service_1.jpeg',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'Business Brokerage',
    subTitle:
      'Connecting sellers with verified buyers and investors to ensure smooth business transactions in Dubai.',
    imgUrl: '/images/service_2.jpeg',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Financial Planning & Assistance',
    subTitle:
      'Personalized financial consultancy for growth planning, wealth management, and funding solutions.',
    imgUrl: '/images/service_3.jpeg',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Investment Opportunities',
    subTitle:
      'Explore ventures such as luxury used cars (6%–8% ROI monthly), aluminium fabrication, and Dubai Financial Market portfolios.',
    imgUrl: '/images/service_4.jpeg',
    href: '/service/services-details',
  },
];


const teamData = [
  {
    imgUrl: '/images/team_member_1.jpeg',
    name: 'Ralph Edwards',
    designation: 'Web designer',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_2.jpeg',
    name: 'Wade Warren',
    designation: 'Marketing Coordinator',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_3.jpeg',
    name: 'Jane Cooper',
    designation: 'Creative Designer',
    srcUrl: '/team/team-details',
  },
];

 const testimonialData = [
  {
    imgUrl: '/images/avatar_1.png',
    rating: '5',
    desc: "The team at AFAQ Al Khaleej Management delivered exactly what they promised — verified investments and clear monthly returns. Their process is transparent, and I feel confident expanding my portfolio with them.",
    name: 'Mohammed A.',
    designation: 'Investor in Luxury Cars',
  },
  {
    imgUrl: '/images/avatar_2.png',
    rating: '4.8',
    desc: "Selling my small manufacturing business in Dubai seemed overwhelming until I partnered with AFAQ. They connected me with serious buyers quickly and handled the entire negotiation professionally.",
    name: 'Sarah K.',
    designation: 'Business Owner (Seller)',
  },
  {
    imgUrl: '/images/avatar_3.png',
    rating: '4.9',
    desc: "AFAQ isn’t just a consultancy — they’re a bridge between real opportunities and serious investors. Their strong regional network helped us secure a major deal within weeks.",
    name: 'James R.',
    designation: 'Strategic Partner',
  },
];

export default function AboutPage() {
  pageTitle('About Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="About Us" bgUrl="/images/page_header_1.jpeg" />

      <Section
        pt="135"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="position-relative"
      >
     <AboutUsSection
  thumbUrl="/images/experience_img.jpeg"
  experienceBgUrl="/images/experience_bg.jpeg"
  experienceIconUrl="/images/experience_icon.svg"
  experienceNumber="10"
  experienceTitle="Years of Excellence"
  sectionTitleUp="About Us"
  sectionTitle='Get Ready for Success with <span className="text-accent">AFAQ Al Khaleej Management</span>'
  sectionSubTitle="We are an investment consultancy based in Dubai, acting as a trusted intermediary between buyers and sellers. Our goal is to provide secure, high-yield investment opportunities while fostering personal and financial growth."
  grothTitle="Client Trust"
  grothPercentage="95"
  featureList={[
    {
      title: 'Our Mission',
      subTitle:
        'To provide verified investment opportunities and trusted brokerage solutions that deliver consistent value to clients.',
    },
    {
      title: 'Our Vision',
      subTitle:
        'To become Dubai’s most reliable investment bridge, connecting global investors with emerging opportunities.',
    },
  ]}
  btnText="Request More Info"
  btnUrl="/contact"
  videoBtnText="Watch Overview"
  videoBtnUrl="https://www.youtube.com/embed/0Tz4Ycjbdbg"
/>

      </Section>

 <Section pt="140" ptLg="80" pb="130" pbLg="70" className="bg-primary">
  <ServiceSection
    data={serviceData}
    sectionTitleDown="<span className='text-accent'>Our Core Services</span> designed to connect investors, businesses, and opportunities across Dubai."
    sectionBtnText="Request Details"
    sectionBtnUrl="/contact"
    textVariant="text-white"
  />
</Section>

{/* 
      <Section pt="133" ptLg="75">
        <TeamSection
          data={teamData}
          sectionTitle="Meet the professional team <br/>behind the success"
          sectionTitleUp="Meet Our Team Member"
        />
      </Section> */}

      <Section
        pt="110"
        ptLg="55"
        pb="140"
        pbLg="80"
        style={{ backgroundImage: `url(${'/images/testimonial_bg.jpeg'})` }}
      >
        <TestimonialSection
  sectionTitleUp="Testimonials"
  sectionTitle="What Our Clients Say"
  sectionSubTitle="From verified investments to seamless business sales, AFAQ Al Khaleej Management has earned the trust of investors, sellers, and partners across the region."
  data={testimonialData}
/>

      </Section>
    </>
  );
}
