import heroImg from "../assets/hero1.png";
import logo from "../assets/logo3.png";

export default function Hero() {
  return (
    <section className="hero-wrapper">

      <div className="hero-card">

        {/* LOGO */}
        <img src={logo} alt="logo" className="hero-logo" />

        {/* LEFT */}
        <div className="hero-left">

          <h1>Vincio Marketing</h1>

          <h2>
            Connecting Through <span>Digi-Stories</span>
          </h2>

          <p>
           At Vincio Marketing, our passionate team delivers comprehensive digital marketing services 
    to help businesses achieve their online goals. We craft targeted strategies to connect your
    brand with your audience, ensuring impactful results.
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