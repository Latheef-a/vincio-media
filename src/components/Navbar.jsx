import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const linksRef = useRef([]);
  const navRef = useRef();

  const [show, setShow] = useState(true);
  let lastScroll = 0;

  /* 🔥 SCROLL HIDE */
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

  /* 🔥 MAGNETIC LINKS */
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

  /* 🔥 WHOLE NAVBAR MAGNETIC */
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

      {/* 🔥 LOGO */}
      <NavLink to="/" className="logo">
        Vincio
      </NavLink>

      {/* 🔥 LINKS */}
      <div className="nav-links">
        {["Home", "About", "Services", "Contact"].map((item, i) => (
          <NavLink
            key={i}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            ref={(el) => (linksRef.current[i] = el)}
            onMouseMove={(e) => handleMove(e, i)}
            onMouseLeave={() => reset(i)}
          >
            {item}
          </NavLink>
        ))}
      </div>

    </nav>
  );
}