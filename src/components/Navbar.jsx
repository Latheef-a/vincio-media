import { NavLink, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const linksRef = useRef([]);
  const navRef = useRef();
  const dropdownRef = useRef();

  const location = useLocation();

  const [show, setShow] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  let lastScroll = 0;

  /*  CLOSE DROPDOWN ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  /*  KEEP DROPDOWN OPEN ON SERVICES PAGE */
  useEffect(() => {
    if (location.pathname === "/services") {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }, [location]);

  /*  SCROLL HIDE NAVBAR */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*  MAGNETIC LINKS */
  const handleMove = (e, i) => {
    const rect = linksRef.current[i].getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    linksRef.current[i].style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = (i) => {
    linksRef.current[i].style.transform = "translate(0,0)";
  };

  /*  NAVBAR MAGNETIC */
  const handleNavMove = (e) => {
    const rect = navRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    navRef.current.style.transform =
      `translate(-50%, 0) translate(${x * 0.05}px, ${y * 0.05}px)`;
  };

  const resetNav = () => {
    navRef.current.style.transform = "translate(-50%, 0)";
  };

  return (
    <nav
      ref={navRef}
      className={`nav ${show ? "show" : "hide"}`}
      onMouseMove={handleNavMove}
      onMouseLeave={resetNav}
    >
      {/* LOGO */}
      <NavLink to="/" className="logo">
        Vincio
      </NavLink>

      {/* LINKS */}
      <div className="nav-links">

        {/* HOME */}
        <NavLink
          to="/"
          className="nav-item"
          ref={(el) => (linksRef.current[0] = el)}
          onMouseMove={(e) => handleMove(e, 0)}
          onMouseLeave={() => reset(0)}
        >
          Home
        </NavLink>

        {/* ABOUT */}
        <NavLink
          to="/about"
          className="nav-item"
          ref={(el) => (linksRef.current[1] = el)}
          onMouseMove={(e) => handleMove(e, 1)}
          onMouseLeave={() => reset(1)}
        >
          About Us
        </NavLink>

        {/* SERVICES DROPDOWN */}
        <div className="dropdown" ref={dropdownRef}>
          <span
            className="nav-item"
            onClick={() => setDropdown((prev) => !prev)}
          >
            Services ▾
          </span>

          {dropdown && (
            <div className="dropdown-menu">
              <NavLink
                to="/services?type=digital"
                className={`dropdown-item ${
                  location.search.includes("digital") ? "active" : ""
                }`}
              >
                Digital Marketing
              </NavLink>

              <NavLink
                to="/services?type=event"
                className={`dropdown-item ${
                  location.search.includes("event") ? "active" : ""
                }`}
              >
                Event Management
              </NavLink>
            </div>
          )}
        </div>

        {/* CONTACT */}
        <NavLink
          to="/contact"
          className="nav-item"
          ref={(el) => (linksRef.current[3] = el)}
          onMouseMove={(e) => handleMove(e, 3)}
          onMouseLeave={() => reset(3)}
        >
          Contact Us
        </NavLink>

      </div>
    </nav>
  );
}