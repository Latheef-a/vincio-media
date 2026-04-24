import { useLocation } from "react-router-dom";

import event1 from "../assets/corporate-events.avif";
import event2 from "../assets/wedding.webp";
import event3 from "../assets/parties.avif";
import event4 from "../assets/large-events.avif";

export default function Services() {
  const query = new URLSearchParams(useLocation().search);
  const type = query.get("type");

  const handleMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  e.currentTarget.style.setProperty("--x", `${x}px`);
  e.currentTarget.style.setProperty("--y", `${y}px`);
};

  return (
    <section className="services-section">

      {/*  DIGITAL SERVICES */}
      {type === "digital" && (
        <div className="glass-card services-card">

          <span className="tag">BUSINESS DIVISION I — SERVICES</span>

          <h1>Our Digital Capabilities</h1>

         <div className="services-grid">

  <div className="service-item" onMouseMove={handleMove}>
    <div className="icon">🔍</div>
    <h3>SEO</h3>
    <p>Strategic keyword authority and content domination that drives organic growth.</p>
  </div>

  <div className="service-item" onMouseMove={handleMove}>
    <div className="icon">🎯</div>
    <h3>PPC & Paid Ads</h3>
    <p>Precision targeting across platforms for maximum return on investment.</p>
  </div>

  <div className="service-item" onMouseMove={handleMove}>
    <div className="icon">📢</div>
    <h3>Social Media</h3>
    <p>Cultivating brand voice and deep community engagement at scale.</p>
  </div>

  <div className="service-item" onMouseMove={handleMove}>
    <div className="icon">🌐</div>
    <h3>Web Design</h3>
    <p>High-conversion, responsive digital headquarters built for your audience.</p>
  </div>

  <div className="service-item" onMouseMove={handleMove}>
    <div className="icon">🎬</div>
    <h3>Video Marketing</h3>
    <p>Cinematic brand stories and scroll-stopping social content.</p>
  </div>

  <div className="service-item" onMouseMove={handleMove}>
    <div className="icon">🎨</div>
    <h3>Branding</h3>
    <p>Crafting unique visual and verbal DNA that sets you apart.</p>
  </div>

</div>
        </div>
      )}

      {/*  EVENT SERVICES */}
      {type === "event" && (
        <div className="glass-card services-card">

          <span className="tag">BUSINESS DIVISION II — SERVICES</span>

          <h1>Creating Unforgettable Moments</h1>

          <div className="event-grid">

            <div className="event-item">
              <img src={event1} alt="corporate" />
              <h3>Corporate Events</h3>
              <p>Conferences, product launches, and seminars executed with polish and precision.</p>
            </div>

            <div className="event-item">
              <img src={event2} alt="wedding" />
              <h3>Weddings</h3>
              <p>Elegant, bespoke, and cinematic celebrations tailored to your vision.</p>
            </div>

            <div className="event-item">
              <img src={event3} alt="party" />
              <h3>Parties</h3>
              <p>High-energy private and milestone social gatherings that leave a lasting impression.</p>
            </div>

            <div className="event-item">
              <img src={event4} alt="production" />
              <h3>Full-Scale Production</h3>
              <p>Venue sourcing, theme design, and seamless on-site coordination.</p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}