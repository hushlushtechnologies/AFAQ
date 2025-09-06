 import React from 'react';
import { Link } from 'react-router-dom';
import SocialBtns from '../../components/SocialBtns';
import MenuWidget from '../Widget/MenuWidget';
import NewsLetterWidget from '../Widget/NewsLetterWidget';

const menuDataOne = [
  { title: 'About Us', href: '/about' },
  { title: 'Our Services', href: '/service' },
  { title: 'Investment Opportunities', href: '/portfolio' },
  { title: 'Business Brokerage', href: '/service' },
  { title: 'Blog & Insights', href: '/blog' },
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer
      className="cs_footer background-filled text-white"
      style={{ background : 'black' }}
    >
      <div className="container">
        {/* Top Section */}
        <div className="cs_footer_top d-flex justify-content-between align-items-start align-items-md-center cs_pt_46 cs_pb_46 cs_column_gap_15 cs_row_gap_15 flex-md-row flex-column">
          {/* Phone */}
          <div className="cs_footer_contact_info">
            <h3 className="text-accent fw-normal cs_mb_4 cs_fs_16 cs_lh_lg">
              Call Us
            </h3>
            <h2 className="text-white fw-medium m-0 cs_fs_22">
              +971 527094940
            </h2>
          </div>

          {/* Logo */}
          <div className="cs_footer_logo">
            <img
              src="/logo.png"
              alt="AFAQ Al Khaleej Management"
              className="img-fluid"
              style={{ maxWidth: '140px', height: 'auto' }}
            />
          </div>

          {/* Email */}
          <div className="cs_footer_contact_info">
            <h3 className="text-accent fw-normal cs_mb_4 cs_fs_16 cs_lh_lg">
              Send Email
            </h3>
            <h2 className="text-white fw-medium m-0 cs_fs_22">
              <a href="mailto:info@afaqmanagement.com">
                info@afaqmanagement.com
              </a>
            </h2>
          </div>
        </div>

        {/* Middle Section */}
        <div className="cs_footer_main cs_pt_30 cs_pb_30">
          <div className="row">
            {/* About */}
            <div className="col-lg-4">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <div className="cs_text_widget">
                  <p>
                    AFAQ Al Khaleej Management is a trusted Dubai-based
                    consultancy bridging global investors with high-yield
                    opportunities in business, real estate, and financial
                    markets. We deliver secure investments and reliable
                    brokerage services that foster lasting growth.
                  </p>
                </div>
                <SocialBtns variant="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5" />
              </div>
            </div>

            {/* Menu */}
            <div className="col-lg-4 offset-lg-1">
              <MenuWidget data={menuDataOne} title="Explore" />
            </div>

            {/* Newsletter */}
            <div className="col-lg-3">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <NewsLetterWidget
                  title="Newsletter"
                  subTitle="Subscribe to receive investment insights, new opportunities, and business updates directly in your inbox."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="cs_copyright text-center cs_fs_124 cs_lh_lg cs_pt_36 cs_pb_36">
        <div className="container">
          <p className="m-0">
            Copyright © {new Date().getFullYear()}{" "}
            <Link to="/">AFAQ Al Khaleej Management</Link>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
