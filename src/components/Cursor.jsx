import { useEffect } from "react";

export default function SmokeCursor() {
  useEffect(() => {
    const particles = [];

    const createParticle = (x, y) => {
      const el = document.createElement("div");
      el.className = "smoke";

      el.style.left = x + "px";
      el.style.top = y + "px";

      document.body.appendChild(el);

      particles.push(el);

      setTimeout(() => {
        el.remove();
      }, 600);
    };

    const handleMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}