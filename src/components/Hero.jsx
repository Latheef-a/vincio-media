import heroImg from "../assets/main.jpeg";
import logo from "../assets/logo-new1.png";

export default function Hero() {
  const handleMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = -(y - rect.height / 2) / 25;
  const rotateY = (x - rect.width / 2) / 25;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const resetTilt = (e) => {
  e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
};
  return (
    <section className="hero-wrapper">

      <div
  className="hero-card"
  onMouseMove={handleMove}
  onMouseLeave={resetTilt}
>

        {/* LOGO */}
        <img src={logo} alt="logo" className="hero-logo" />

        {/* LEFT */}
        <div className="hero-left depth">

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
        <div className="hero-right depth">
          <img src={heroImg} alt="hero" />
        </div>

      </div>

    </section>
  );
}