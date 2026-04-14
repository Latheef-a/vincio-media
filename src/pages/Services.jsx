import { useState } from "react";
//Digital
import seo from "../assets/seo.avif"
import social from "../assets/social-media.avif"
import video from "../assets/video-marketing.avif"
import ppc from "../assets/ppc.avif"
import web from "../assets/web-design.avif"
import branding from "../assets/branding.avif"

//Events
import corporate from "../assets/corporate-events.avif"
import wedding from "../assets/wedding.webp"
import parties from "../assets/parties.avif"
import large from "../assets/large-events.avif"

export default function Services() {
  const [active, setActive] = useState("digital");

  return (
    <section className="services-section">

      <div className="services-container">

        {/* DIGITAL MARKETING */}
        <div
          className={`service-card ${active === "digital" ? "active" : ""}`}
          onClick={() => setActive("digital")}
        >
          <h2>Digital Marketing</h2>

          {active === "digital" && (
            <div className="service-content">

              <div className="service-item">
                <img src={seo} loading="lazy" />
                <p>SEO Optimization to boost search rankings.</p>
              </div>

              <div className="service-item">
                <img src={social} loading="lazy" />
                <p>Social Media Marketing to engage your audience.</p>
              </div>

              <div className="service-item">
                <img src={video} loading="lazy" />
                <p>Video Marketing for impactful storytelling.</p>
              </div>

              <div className="service-item">
                <img src={ppc} loading="lazy" />
                <p>PPC & Paid Ads to drive instant traffic.</p>
              </div>

              <div className="service-item">
                <img src={web} loading="lazy" />
                <p>Web Design for modern digital presence.</p>
              </div>

              <div className="service-item">
                <img src={branding} loading="lazy" />
                <p>Branding to create a strong identity.</p>
              </div>

            </div>
          )}
        </div>

        {/* EVENT MANAGEMENT */}
        <div
          className={`service-card ${active === "event" ? "active" : ""}`}
          onClick={() => setActive("event")}
        >
          <h2>Event Management</h2>

          {active === "event" && (
            <div className="service-content">

              <div className="service-item">
                <img src={corporate} loading="lazy" />
                <p>Corporate Events with professional execution.</p>
              </div>

              <div className="service-item">
                <img src={wedding} loading="lazy" />
                <p>Weddings designed with elegance and style.</p>
              </div>

              <div className="service-item">
                <img src={parties} loading="lazy" />
                <p>Parties with creative themes and experiences.</p>
              </div>

              <div className="service-item">
                <img src={large} loading="lazy" />
                <p>Full-scale production for large events.</p>
              </div>

            </div>
          )}
        </div>

      </div>

    </section>
  );
}