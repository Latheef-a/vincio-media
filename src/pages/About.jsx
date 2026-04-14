import aboutImg from "../assets/about.jpg"; 

export default function About() {
  return (
    <section className="about-section">

      {/* HERO */}
      <div className="about-hero glass">
        <h1>About Vincio Marketing</h1>
        <p>
          We connect brands and people through powerful digital storytelling.
        </p>
      </div>

      {/* CONTENT */}
      <div className="about-container glass">

        {/* LEFT */}
        <div className="about-text">
          <h2>Who We Are</h2>

          <p>
            With over <span className="highlight"> five years of expertise</span> in the ever-evolving digital marketing landscape,
            Vincio Marketing is your trusted partner for achieving exceptional online success.
            Our skilled team blends passion with innovation, leveraging cutting-edge AI technologies
            and the latest industry trends to deliver tailored, data-driven strategies that resonate
            with your audience and yield measurable results.
          </p>

          <p>
            Our comprehensive services—ranging from advanced SEO and targeted PPC campaigns
            to social media management, email marketing, logo creation, and copywriting—
            are enhanced by AI tools for predictive analytics and optimization.
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

    </section>
  );
}