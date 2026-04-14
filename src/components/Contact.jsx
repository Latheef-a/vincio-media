import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3dr2nov",   
      "template_jo0c8bh",  
      form.current,
      "EwM99LFFMlnzw5LvD"    
    )
    .then(() => {
      alert("Message sent successfully 🚀");
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-card">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h3>Get in Touch</h3>

          <p>
            Have a story to share or want to work with us?
            Let’s connect and create something meaningful.
          </p>

          <div className="contact-info">
            <p>📍 St. Anthony Road, Kalyan Nagar, Bangalore - 560043</p>
            <p>📧 contact@vinciomarketing.com</p>
            <p>📞 +91 8050074508</p>
          </div>

          <div className="working-hours">
            <h4>Working Hours</h4>
            <ul>
              <li>Monday - Saturday</li>
              <li>10:00 AM - 05:00 PM</li>
              <li>2nd & 4th Saturday Holiday</li>
            </ul>
          </div>

          <div className="socials">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/vincio.mediahouse?igsh=bnA4ZWVidm9pNmpw">Instagram</a>
              <a href="https://www.instagram.com/vincio.mediahouse?igsh=bnA4ZWVidm9pNmpw">YouTube</a>
              <a href="https://www.instagram.com/vincio.mediahouse?igsh=bnA4ZWVidm9pNmpw">X</a>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          {/* 🔥 FORM CONNECTED */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
            ></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </div>

    </section>
  );
}