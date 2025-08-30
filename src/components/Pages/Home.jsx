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
    href: "/services/investment-advisory",
  },
  {
    iconUrl: "/images/icons/service_icon_2.svg",
    title: "Business Brokerage",
    subTitle:
      "Connecting buyers and sellers for seamless business sales, acquisitions, and partnerships.",
    imgUrl: "/images/service_2.png",
    href: "/services/business-brokerage",
  },
  {
    iconUrl: "/images/icons/service_icon_3.svg",
    title: "Financial Consultancy",
    subTitle:
      "Personalized financial planning and assistance designed to maximize growth and ROI.",
    imgUrl: "/images/service_3.png",
    href: "/services/financial-consultancy",
  },
  {
    iconUrl: "/images/icons/service_icon_4.svg",
    title: "Investor Relations",
    subTitle:
      "Building trusted connections between investors and verified opportunities in Dubai and GCC.",
    imgUrl: "/images/service_4.png",
    href: "/services/investor-relations",
  },
];

const portfolioData = [
  {
    imgUrl: "/images/portfolio_1.jpeg",
    title: "Marketing Web-design",
    projectUrl: "/portfolio/portfolio-details",
  },
  {
    imgUrl: "/images/portfolio_2.jpeg",
    title: "Marketing Web-design",
    projectUrl: "/portfolio/portfolio-details",
  },
  {
    imgUrl: "/images/portfolio_3.jpeg",
    title: "Marketing Web-design",
    projectUrl: "/portfolio/portfolio-details",
  },
  {
    imgUrl: "/images/portfolio_4.jpeg",
    title: "Marketing Web-design",
    projectUrl: "/portfolio/portfolio-details",
  },
  {
    imgUrl: "/images/portfolio_3.jpeg",
    title: "Marketing Web-design",
    projectUrl: "/portfolio/portfolio-details",
  },
];

const testimonialData = [
  {
    imgUrl: "/images/avatar_1.png",
    rating: "5",
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: "Darlene Robertson",
    designation: "Web design",
  },
  {
    imgUrl: "/images/avatar_2.png",
    rating: "4.5",
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: "Peter Johnson",
    designation: "Web design",
  },
  {
    imgUrl: "/images/avatar_3.png",
    rating: "4.5",
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: "Max Lawrence",
    designation: "Web design",
  },
  {
    imgUrl: "/images/avatar_4.png",
    rating: "4",
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: "Darlene Robertson",
    designation: "Web design",
  },
  {
    imgUrl: "/images/avatar_1.png",
    rating: "5",
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: "Darlene Robertson",
    designation: "Web design",
  },
  {
    imgUrl: "/images/avatar_2.png",
    rating: "4.5",
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: "Peter Johnson",
    designation: "Web design",
  },
  {
    imgUrl: "/images/avatar_3.png",
    rating: "4.5",
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: "Max Lawrence",
    designation: "Web design",
  },
  {
    imgUrl: "/images/avatar_4.png",
    rating: "4",
    desc: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
    name: "Darlene Robertson",
    designation: "Web design",
  },
];

const teamData = [
  {
    imgUrl: "/images/team_member_1.jpeg",
    name: "Ralph Edwards",
    designation: "Web designer",
    srcUrl: "/team/team-details",
  },
  {
    imgUrl: "/images/team_member_2.jpeg",
    name: "Wade Warren",
    designation: "Marketing Coordinator",
    srcUrl: "/team/team-details",
  },
  {
    imgUrl: "/images/team_member_3.jpeg",
    name: "Jane Cooper",
    designation: "Creative Designer",
    srcUrl: "/team/team-details",
  },
];

const brandData = [
  { imgUrl: "/images/brand_1.svg" },
  { imgUrl: "/images/brand_2.svg" },
  { imgUrl: "/images/brand_3.svg" },
  { imgUrl: "/images/brand_4.svg" },
  { imgUrl: "/images/brand_5.svg" },
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

      <section pt="140" ptLg="80" className="bg-primary">
        <ServiceSection
          data={serviceData}
          sectionTitleDown='<span class="text-accent">Digital agency</span> services built specifically for your business'
          sectionBtnText="Find More Services"
          sectionBtnUrl="/service"
          textVariant="text-white"
        />
      </section>

      {/* <Section pt="60" ptLg="40" className="bg-primary">
        <VideoBlockStyle2 data={videoData} />
      </Section> */}

 <Section pb="140" pbLg="80" className="position-relative mt-5">
  <AboutSectionStyle2
    imgUrl="/images/about_img_1.png"
    bgImgUrl="/images/experience_bg_2.jpeg"
    workExprience="40"
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
    imgUrlLeft="/images/why_choose_us_left_img.jpeg"
    imgUrlRight="/images/why_choose_us_right_img.jpeg"
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

      <Section pb="115" pbLg="55">
        <TeamSection
          data={teamData}
          sectionTitle="Meet the professional team <br/> behind the success"
          sectionTitleUp="Meet Our Team Member"
        />
      </Section>

      <Section
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
      </Section>

      <Section pt="140" ptLg="80">
        <BrandSection data={brandData} />
      </Section>

      <Section pt="115" ptLg="75" pb="110" pbLg="50">
        <PostSection
          data={postData}
          sectionTitleUp="Find The Blogs"
          sectionTitle="Find Out Latest News <br/> and Articles"
        />
      </Section>
    </>
  );
}
