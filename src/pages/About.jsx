import aboutImg from "../assets/about.jpg"; 
import aboutImg1 from "../assets/about2.avif";
import aboutImg2 from "../assets/about3.avif";

export default function About() {
  return (
    <section className="about-section">

      {/* HERO */}
      <div className="about-hero glass">
        <h1>About Vincio Media House</h1>
        <p>
          We connect brands and people through powerful digital storytelling.
        </p>
      </div>

      {/* CARD 1 */}
      <div className="about-container glass">

        {/* LEFT */}
        <div className="about-text">
          <h2>Who We Are</h2>

          <p>
            Vincio Media House is a <span className="highlight">multi-disciplinary agency</span> where high-level digital strategy 
            meets professional event execution — all under one roof.
          </p>

          <p>
            We operate two specialized business divisions, each built to deliver excellence in its domain while 
            working in harmony to serve your complete brand journey.
          </p>

          <p>
            We believe every brand has a story worth telling, and we help bring
            those stories to life in a way that resonates with people.
          </p>
        </div>

        {/* RIGHT */}
        <div className="about-image">
          <img src={aboutImg} alt="about" />
        </div>

      </div>

      {/*  CARD 2  */}
      <div className="about-container glass">

        {/* LEFT */}
        <div className="about-text">
          <h2>Why Choose Vincio</h2>

          <p>
            Access top-tier specialists in both<span className="highlight"> Digital Marketing and Event Management</span> — one partner, two powerhouse divisions.
          </p>

          <p>
           Every project — digital or live — is treated with a high-end production lens, ensuring premium quality at every touchpoint.
          </p>

          <p>
           Your offline events reflect the same excellence as your online presence. We ensure a seamless, unified brand story across all channels.
          </p>
        </div>

        {/* RIGHT */}
        <div className="about-image">
          <img src={aboutImg1} alt="about" />
        </div>

      </div>

       {/*  CARD 3  */}
      <div className="about-container glass">

        {/* LEFT */}
        <div className="about-text">
          <h2>Why Clients Trust Us</h2>

          <p>
           When you partner with Vincio for events, you're not just hiring a vendor — you're gaining a<span className="highlight"> full-service execution partner.</span>
          </p>

          <p>
           We take ownership of nearly the entire event scope so you can show up, host your guests, and be fully present for every moment.
          </p>
          
        </div>

        {/* RIGHT */}
        <div className="about-image">
          <img src={aboutImg2} alt="about" />
        </div>

      </div>

    </section>
  );
}