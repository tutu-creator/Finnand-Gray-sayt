import React, { useEffect } from "react";
import "./Process.css";
import Group from "../../assets/Group-48096902.webp";
import Packaging from "../../assets/packaging-for-a-mocktail-brand-target.svg";
import Hodge from "../../assets/hodgepodge-food-icons-food-truck-custom-icon.jpg";
import Rainbow from "../../assets/rainbow-shapes.svg";
import { InlineWidget } from "react-calendly";

const Process = () => {
  useEffect(() => {
    document.querySelectorAll(".accordion-button").forEach((button) => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector(".accordion-icon");

        document.querySelectorAll(".accordion-content").forEach((el) => {
          if (el !== content) el.style.maxHeight = "0px";
        });
        document.querySelectorAll(".accordion-icon").forEach((ic) => {
          if (ic !== icon) ic.textContent = "+";
        });
        document.querySelectorAll(".accordion-button").forEach((btn) => {
          // if (btn !== button) btn.style.borderBottom = "1px solid #ddd";
        });

        if (content.style.maxHeight === "0px" || !content.style.maxHeight) {
          content.style.maxHeight = content.scrollHeight + "px";
          icon.textContent = "-";
          // button.style.borderBottom = "none";
        } else {
          content.style.maxHeight = "0px";
          icon.textContent = "+";
          // button.style.borderBottom = "1px solid #ddd";
        }
      });
    });
  }, []);

  return (
    <div className="successes">
      <p className="successes-label">F&G BRANDING AGENCY SERVICE</p>
      <h1 className="successes-title">Our Client Successes</h1>
      <div className="successes-images">
        <img src={Group} alt="Group-48096902.webp" />
        <img src={Packaging} alt="packaging-for-a-mocktail-brand-target.svg" />
        <img
          src={Hodge}
          alt="assets/hodgepodge-food-icons-food-truck-custom-icon.jpg"
        />
      </div>
      <button className="successes-btn">View all of our work</button>
<div className="faq-section">
      <p className="faq-label">F&G AGENCY</p>
      <h1 className="faq-title">Frequently asked questions</h1>

      <div className="space-y-6 max-w-4xl mx-auto mt-4">
        <div className="space-y-4">
          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">Why should I choose Finn & Gray?</span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className=" text-sm text-slate-700 leading-relaxed">
                  Other than because we're midwest nice and fun to work with, we
                  also have 20+ years of award-winning experience that has
                  brought our clients remarkable results, some doubling or
                  tripling their revenue after their design and brand experience
                  with us. At the end of the day, we LOVE what we do and are
                  passionate about transforming businesses into brands with bold
                  personality!
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">
                How can I contact Finn & Gray to learn more?
              </span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Just drop us a message using our contact form or jump right
                  onto our schedule, and let's kickstart the creative journey
                  together!
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">
                Do you typically work with new business owners or established
                businesses?
              </span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We work with both new and established businesses. We believe
                  all businesses deserve to stand up with the Fortune 500
                  companies so we aim to make your brand the best it can be.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We've had the joy of collaborating with plenty of seasoned
                  business owners, especially those looking to make a mark in
                  the lifestyle market with a brand that's both bright and bold.
                  But hey, we're equally thrilled to guide new businesses,
                  helping you lay down a solid foundation right from the start.
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">
                What services do you offer for small businesses?
              </span>
              <span className="accordion-icon">+</span>
            </button>
            <div className=" accordion-content overflow-hidden max-h-0">
              <div>
                <p className="accordionTutu text-sm text-slate-700 leading-relaxed">
                  At Finn & Gray, we offer a suite of services tailored to bring
                  your brand's vision to life, ensuring it resonates with your
                  target audience and stands out in today's competitive market.
                  Our expertise spans several key areas: Logo Design, Website
                  Design & Development, Professional Photography, and our
                  TRIFECTA package which combines all three into a cohesive
                  brand makeover.
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">
                How long does it take to complete a project with F&G?
              </span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  On average, logo projects unfold over 4-6 weeks, website
                  development spans 6-8 weeks, and our comprehensive branding
                  suite, The F&G Trifecta, completes within 6-12 weeks. We also
                  offer rush services for a fee if you need expedited delivery.
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">What is your pricing structure?</span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Investing in your brand is not just an expense; it's a
                  strategic decision that propels your business forward. Our
                  projects begin at a minimum of $3,000. To find the right
                  package for you, we recommend a quick call with our team.
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">Do you offer payment plans?</span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Yes, we do! We can discuss all the details during our intro
                  conversation.
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">
                What industries do you primarily work with?
              </span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  While we embrace projects across various industries, our
                  passions are lifestyle brands, particularly those in the home
                  services and pet sectors. But don't worry, we still bring our
                  design magic to other areas too!
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">What is your design process like?</span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We give every project the time it needs to be completed
                  successfully. Our process includes discovery, strategy,
                  design, revisions, and launch — ensuring every detail aligns
                  with your brand vision.
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">
                Do you handle printing and production for physical materials?
              </span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Absolutely! We've teamed up with some top-notch printers to
                  make sure we get the best deals and keep an eye on the whole
                  printing journey for you. We're happy to work with your choice
                  of vendor as well.
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">
                What sets F&G apart from other agencies?
              </span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We elevate your brand from invisible to unforgettable,
                  blending distinct aesthetics with bespoke solutions. Our
                  in-house expertise, tailored solutions, and transparent
                  communication set us apart from the rest.
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">
                What is the ROI on the work you provide?
              </span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Our approach to design and branding significantly contributes
                  to your business growth. Clients see increased brand
                  recognition, enhanced online presence, long-term business
                  growth, and a professional, trusted image.
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
          </div>

          <div role="accordion">
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-base text-left font-medium text-slate-900 flex items-center transition-all"
            >
              <span className="mr-4">
                How do I get started working with you?
              </span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-content overflow-hidden max-h-0">
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Please complete our contact form online and let us know what
                  you have cookin' and how we can help! The more detail and
                  requirements you can provide will help move things along
                  quicker.
                </p>
              </div>
              <hr className="accordion-divider" />
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <img src={Rainbow} alt="rainbow-shapes.svg" className="cta-waves" />
        <div className="cta-content">
          <div className="cta-left">
            <h2 className="cta-title">
              Lets get your business generating leads
            </h2>
            <p className="cta-text">
              Getting started on a project with Finn & Gray is easy! Simply
              select a date and time that works best for you to kick off with a
              quick discovery.
            </p>
            <p className="cta-expect-title">What to expect:</p>
            <ul className="cta-list">
              <li>
                <svg width="25" height="25" viewBox="0 0 33 32">
                  <path
                    fill="#E8714A"
                    d="M 16.021 29.462 L 13.189 31.813 A 0.54 0.54 0 0 1 12.353 31.622 L 10.821 28.275 A 0.54 0.54 0 0 0 10.2 27.975 L 6.629 28.864 A 0.54 0.54 0 0 1 5.959 28.33 L 6.031 24.65 A 0.54 0.54 0 0 0 5.601 24.111 L 2 23.363 A 0.54 0.54 0 0 1 1.628 22.591 L 3.29 19.307 A 0.54 0.54 0 0 0 3.137 18.635 L 0.211 16.4 A 0.54 0.54 0 0 1 0.211 15.543 L 3.133 13.3 A 0.54 0.54 0 0 0 3.286 12.628 L 1.625 9.345 A 0.54 0.54 0 0 1 2 8.573 L 5.6 7.824 A 0.54 0.54 0 0 0 6.03 7.285 L 5.958 3.605 A 0.54 0.54 0 0 1 6.628 3.071 L 10.2 3.96 A 0.54 0.54 0 0 0 10.821 3.66 L 12.353 0.314 A 0.54 0.54 0 0 1 13.189 0.123 L 16.021 2.474 A 0.54 0.54 0 0 0 16.711 2.474 L 19.542 0.123 A 0.54 0.54 0 0 1 20.378 0.314 L 21.91 3.661 A 0.54 0.54 0 0 0 22.531 3.961 L 26.1 3.071 A 0.54 0.54 0 0 1 26.77 3.605 L 26.7 7.285 A 0.54 0.54 0 0 0 27.13 7.824 L 30.73 8.573 A 0.54 0.54 0 0 1 31.102 9.345 L 29.44 12.629 A 0.54 0.54 0 0 0 29.594 13.301 L 32.516 15.539 A 0.54 0.54 0 0 1 32.516 16.396 L 29.6 18.634 A 0.54 0.54 0 0 0 29.446 19.306 L 31.108 22.59 A 0.54 0.54 0 0 1 30.736 23.362 L 27.136 24.111 A 0.54 0.54 0 0 0 26.706 24.65 L 26.778 28.33 A 0.54 0.54 0 0 1 26.108 28.864 L 22.537 27.975 A 0.54 0.54 0 0 0 21.916 28.275 L 20.384 31.622 A 0.54 0.54 0 0 1 19.548 31.813 L 16.71 29.462 A 0.54 0.54 0 0 0 16.02 29.462"
                  />
                  <polyline
                    points="10,16 13,19 21,12"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Discuss your current status and your goals
              </li>
              <li>
                <svg width="25" height="25" viewBox="0 0 33 32">
                  <path
                    fill="#E8714A"
                    d="M 16.021 29.462 L 13.189 31.813 A 0.54 0.54 0 0 1 12.353 31.622 L 10.821 28.275 A 0.54 0.54 0 0 0 10.2 27.975 L 6.629 28.864 A 0.54 0.54 0 0 1 5.959 28.33 L 6.031 24.65 A 0.54 0.54 0 0 0 5.601 24.111 L 2 23.363 A 0.54 0.54 0 0 1 1.628 22.591 L 3.29 19.307 A 0.54 0.54 0 0 0 3.137 18.635 L 0.211 16.4 A 0.54 0.54 0 0 1 0.211 15.543 L 3.133 13.3 A 0.54 0.54 0 0 0 3.286 12.628 L 1.625 9.345 A 0.54 0.54 0 0 1 2 8.573 L 5.6 7.824 A 0.54 0.54 0 0 0 6.03 7.285 L 5.958 3.605 A 0.54 0.54 0 0 1 6.628 3.071 L 10.2 3.96 A 0.54 0.54 0 0 0 10.821 3.66 L 12.353 0.314 A 0.54 0.54 0 0 1 13.189 0.123 L 16.021 2.474 A 0.54 0.54 0 0 0 16.711 2.474 L 19.542 0.123 A 0.54 0.54 0 0 1 20.378 0.314 L 21.91 3.661 A 0.54 0.54 0 0 0 22.531 3.961 L 26.1 3.071 A 0.54 0.54 0 0 1 26.77 3.605 L 26.7 7.285 A 0.54 0.54 0 0 0 27.13 7.824 L 30.73 8.573 A 0.54 0.54 0 0 1 31.102 9.345 L 29.44 12.629 A 0.54 0.54 0 0 0 29.594 13.301 L 32.516 15.539 A 0.54 0.54 0 0 1 32.516 16.396 L 29.6 18.634 A 0.54 0.54 0 0 0 29.446 19.306 L 31.108 22.59 A 0.54 0.54 0 0 1 30.736 23.362 L 27.136 24.111 A 0.54 0.54 0 0 0 26.706 24.65 L 26.778 28.33 A 0.54 0.54 0 0 1 26.108 28.864 L 22.537 27.975 A 0.54 0.54 0 0 0 21.916 28.275 L 20.384 31.622 A 0.54 0.54 0 0 1 19.548 31.813 L 16.71 29.462 A 0.54 0.54 0 0 0 16.02 29.462"
                  />
                  <polyline
                    points="10,16 13,19 21,12"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Discuss how Finn & Gray can help your business
              </li>
              <li>
                <svg width="25" height="25" viewBox="0 0 33 32">
                  <path
                    fill="#E8714A"
                    d="M 16.021 29.462 L 13.189 31.813 A 0.54 0.54 0 0 1 12.353 31.622 L 10.821 28.275 A 0.54 0.54 0 0 0 10.2 27.975 L 6.629 28.864 A 0.54 0.54 0 0 1 5.959 28.33 L 6.031 24.65 A 0.54 0.54 0 0 0 5.601 24.111 L 2 23.363 A 0.54 0.54 0 0 1 1.628 22.591 L 3.29 19.307 A 0.54 0.54 0 0 0 3.137 18.635 L 0.211 16.4 A 0.54 0.54 0 0 1 0.211 15.543 L 3.133 13.3 A 0.54 0.54 0 0 0 3.286 12.628 L 1.625 9.345 A 0.54 0.54 0 0 1 2 8.573 L 5.6 7.824 A 0.54 0.54 0 0 0 6.03 7.285 L 5.958 3.605 A 0.54 0.54 0 0 1 6.628 3.071 L 10.2 3.96 A 0.54 0.54 0 0 0 10.821 3.66 L 12.353 0.314 A 0.54 0.54 0 0 1 13.189 0.123 L 16.021 2.474 A 0.54 0.54 0 0 0 16.711 2.474 L 19.542 0.123 A 0.54 0.54 0 0 1 20.378 0.314 L 21.91 3.661 A 0.54 0.54 0 0 0 22.531 3.961 L 26.1 3.071 A 0.54 0.54 0 0 1 26.77 3.605 L 26.7 7.285 A 0.54 0.54 0 0 0 27.13 7.824 L 30.73 8.573 A 0.54 0.54 0 0 1 31.102 9.345 L 29.44 12.629 A 0.54 0.54 0 0 0 29.594 13.301 L 32.516 15.539 A 0.54 0.54 0 0 1 32.516 16.396 L 29.6 18.634 A 0.54 0.54 0 0 0 29.446 19.306 L 31.108 22.59 A 0.54 0.54 0 0 1 30.736 23.362 L 27.136 24.111 A 0.54 0.54 0 0 0 26.706 24.65 L 26.778 28.33 A 0.54 0.54 0 0 1 26.108 28.864 L 22.537 27.975 A 0.54 0.54 0 0 0 21.916 28.275 L 20.384 31.622 A 0.54 0.54 0 0 1 19.548 31.813 L 16.71 29.462 A 0.54 0.54 0 0 0 16.02 29.462"
                  />
                  <polyline
                    points="10,16 13,19 21,12"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Answer questions and talk through next steps
              </li>
            </ul>
          </div>
          <div className="cta-right">
            <InlineWidget
              url="https://calendly.com/amanda-finnandgray/30-minute-meeting"
              pageSettings={{
                hideLandingPageDetails: true,
                hideEventTypeDetails: true,
              }}
              styles={{ height: "700px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
