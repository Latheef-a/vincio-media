import { useEffect } from "react";

export default function Cursor() {

  useEffect(() => {
    const trail = [];

    // create dots
    for (let i = 0; i < 12; i++) {
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      document.body.appendChild(dot);
      trail.push(dot);
    }

    window.addEventListener("mousemove", (e) => {
      trail.forEach((dot, i) => {
        setTimeout(() => {
          dot.style.left = e.clientX + "px";
          dot.style.top = e.clientY + "px";
        }, i * 25);
      });
    });

  }, []);

  return null;
}