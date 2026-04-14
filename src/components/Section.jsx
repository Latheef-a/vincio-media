import { useEffect, useRef } from "react";

export default function Section({ label, title }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, []);

  return (
    <section className="section" ref={ref}>
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
    </section>
  );
}