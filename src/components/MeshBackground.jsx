import { useEffect, useRef } from "react";

export default function MeshBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    let t = 0;


    const colors = [
      ["#c084fc", "#f472b6"], // purple → pink
      ["#60a5fa", "#22d3ee"], // blue → cyan
      ["#f9a8d4", "#fde68a"], // pink → yellow
      ["#a78bfa", "#7dd3fc"], // violet → sky
    ];

    function drawRibbon(y, amp, freq, speed, width, color1, color2, opacity) {
      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);

      ctx.beginPath();

      // TOP CURVE
      for (let x = 0; x <= w; x += 6) {
        const curve =
          Math.sin(x * freq + t * speed) * amp +
          Math.cos(x * freq * 0.7 + t * speed * 0.6) * amp * 0.4;

        if (x === 0) ctx.moveTo(x, y + curve);
        else ctx.lineTo(x, y + curve);
      }

      // BOTTOM CURVE (for thickness)
      for (let x = w; x >= 0; x -= 6) {
        const curve =
          Math.sin(x * freq + t * speed) * amp +
          Math.cos(x * freq * 0.7 + t * speed * 0.6) * amp * 0.4;

        ctx.lineTo(x, y + curve + width);
      }

      ctx.closePath();

      ctx.globalAlpha = opacity;
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      
      ctx.fillStyle = "#eef1f7";
      ctx.fillRect(0, 0, w, h);

      
      drawRibbon(120, 25, 0.006, 0.4, 40, ...colors[0], 0.18);
      drawRibbon(250, 30, 0.005, 0.3, 50, ...colors[1], 0.15);
      drawRibbon(400, 28, 0.0065, 0.35, 45, ...colors[2], 0.14);
      drawRibbon(550, 35, 0.0055, 0.4, 55, ...colors[3], 0.12);
      drawRibbon(700, 25, 0.006, 0.3, 40, ...colors[1], 0.10);

      t += 0.008; // smooth slow animation

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
}