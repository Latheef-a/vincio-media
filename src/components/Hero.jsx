import heroImg from "../assets/hero-new.png";
import logo from "../assets/logo-new1.png";

export default function Hero() {
  return (
    <section className="hero-wrapper">

      <div className="hero-card">

        {/* LOGO */}
        <img src={logo} alt="logo" className="hero-logo" />

        {/* LEFT */}
        <div className="hero-left">

          <h1 className="hero-title">Vincio Media House</h1>

          <h2>
            Building Brands to<span>Creating Moments</span>
          </h2>

          <p>
          Vincio Media House is a multi-disciplinary agency where high-level digital strategy meets professional
           event execution — all under one roof.

         
            Share your stories with the world and connect digitally in a meaningful way.
          </p>

          {/* 🔥 SCROLL ARROW */}
          <div
            className="scroll-down"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            ↓
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img src={heroImg} alt="hero" />
        </div>

      </div>

    </section>
  );
}