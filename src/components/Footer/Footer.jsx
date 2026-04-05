import React from "react";
import "./Footer.css";
import {
  FaPinterest,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import FooterGray from "../../assets/finn-and-gray-creative.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-icons">
          <a href="#">
            <FaPinterest />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaDribbble />
          </a>
        </div>
        <p className="footer-address">
          3469 Lake Elmo Ave N<br />
          Unit #28
          <br />
          Lake Elmo, MN 55113
        </p>
        <p className="footer-phone">651-301-8056</p>
        <a className="footer-email" href="mailto:hello@finnandgray.com">
          hello@finnandgray.com
        </a>
        <img
          src={FooterGray}
          alt="finn-and-gray-creative.svg"
          className="footer-logo"
        />
        <p className="footer-copyright">
          All Rights Reserved © Finn & Gray. Site By Yours Truly.
        </p>
      </div>
      <svg
        className="footer-divider"
        viewBox="0 0 10 290"
        preserveAspectRatio="none"
        style={{ height: "320px", width: "16px" }}
      >
        <path
          d="M 5 0 Q 6 2 5 4 Q 4 6 5 8 Q 6 10 5 12 Q 4 14 5 16 Q 6 18 5 20 Q 4 22 5 24 Q 6 26 5 28 Q 4 30 5 32 Q 6 34 5 36 Q 4 38 5 40 Q 6 42 5 44 Q 4 46 5 48 Q 6 50 5 52 Q 4 54 5 56 Q 6 58 5 60 Q 4 62 5 64 Q 6 66 5 68 Q 4 70 5 72 Q 6 74 5 76 Q 4 78 5 80 Q 6 82 5 84 Q 4 86 5 88 Q 6 90 5 92 Q 4 94 5 96 Q 6 98 5 100 Q 4 102 5 104 Q 6 106 5 108 Q 4 110 5 112 Q 6 114 5 116 Q 4 118 5 120 Q 6 122 5 124 Q 4 126 5 128 Q 6 130 5 132 Q 4 134 5 136 Q 6 138 5 140 Q 4 142 5 144 Q 6 146 5 148 Q 4 150 5 152 Q 6 154 5 156 Q 4 158 5 160 Q 6 162 5 164 Q 4 166 5 168 Q 6 170 5 172 Q 4 174 5 176 Q 6 178 5 180 Q 4 182 5 184 Q 6 186 5 188 Q 4 190 5 192 Q 6 194 5 196 Q 4 198 5 200 Q 6 202 5 204 Q 4 206 5 208 Q 6 210 5 212 Q 4 214 5 216 Q 6 218 5 220 Q 4 222 5 224 Q 6 226 5 228 Q 4 230 5 232 Q 6 234 5 236 Q 4 238 5 240 Q 6 242 5 244 Q 4 246 5 248 Q 6 250 5 252 Q 4 254 5 256 Q 6 258 5 260 Q 4 262 5 264 Q 6 266 5 268 Q 4 270 5 272 Q 6 274 5 276 Q 4 278 5 280 Q 6 282 5 284 Q 4 286 5 288 Q 6 290 5 292 Q 4 294 5 296 Q 6 298 5 300"
          fill="none"
          stroke="#E8714A"
          strokeWidth="1.5"
        />
      </svg>
      <div className="footer-right">
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Packages</li>
            <li>Logo Design</li>
            <li>Website Design</li>
            <li>Photography</li>
            <li className="footer-privacy">Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Work</h3>
          <ul>
            <li>Home Construction Logo Design</li>
            <li>Painting Company Website Design</li>
            <li>HVAC Rebrand</li>
            <li>Electrician Website Design</li>
            <li>Dog Business Logo Design</li>
          </ul>
        </div>

        <div className="footer-column footer-column-last">
          <h3>Resources</h3>
          <ul>
            <li>How local painting companies can compete</li>
            <li>Ultimate homepage checklist for service brands</li>
            <li>11 Minnesota home services brands</li>
          </ul>
          <h3 style={{marginTop: '20px', marginBottom: '15px'}}>I'm Looking For</h3>
          <ul>
            <li>A web design agency in Minneapolis</li>
            <li>A Minneapolis branding agency</li>
            <li>A logo design firm in Minneapolis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
