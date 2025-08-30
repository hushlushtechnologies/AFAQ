 import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import LocationInMap from '../LocationInMap';
import Section from '../Section';
import FormStyle2 from '../Form/FormStyle2';
import IconboxStyle2 from '../Iconbox/IconboxStyle2';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import { pageTitle } from '../../helpers/PageTitle';

// Google Maps Embed (Dubai - Business Bay)
const locationData =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.305908418926!2d55.27196511501133!3d25.20484938388714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682b3f32f3b9%3A0x7d6f3d2a3bb9f913!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1687428285000!5m2!1sen!2sae';

export default function ContactPage() {
  pageTitle('Contact');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title="Contact" bgUrl="/images/page_header_1.jpeg" />

      <Section pt="133" ptLg="75" pb="133" pbLg="75">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-xl-7 col-lg-6">
              <SectionHeadingStyle3
                sectionTitleUp="Have a Question?"
                sectionTitle="Write us a Message"
              />
              <FormStyle2 />
            </div>

            {/* Contact Info */}
            <div className="col-xl-5 col-lg-6">
              <div className="cs_pl_60 cs_pl_lg_0 cs_pt_lg_60">
                <SectionHeadingStyle3
                  sectionTitleUp="Get in Touch"
                  sectionTitle="Let’s Work Together"
                  sectionSubTitle="We connect global investors with secure, high-growth opportunities in Dubai’s business and real estate markets."
                  className="cs_mb_40"
                />

                <div className="cs_iconbox_wrapper cs_style1">
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_1.svg"
                    title="+971 068850838"
                    titleUp="Call Us"
                  />
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_2.svg"
                    title="info@afaqmanagement.com"
                    titleUp="Send Email"
                  />
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_3.svg"
                    title="crystal plaza Sharjah al majaz 1 Dubai, UAE"
                    titleUp="Office Address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <LocationInMap data={locationData} />
    </>
  );
}
