import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface TypeWriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export function TypeWriter({ text, speed = 50, className }: TypeWriterProps) {
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const timeoutRef = useRef<number | null>(null); // simpan timeout id

  useEffect(() => {
    if (!elementRef.current) return;

    let i = 0;
    elementRef.current.textContent = ""; // reset sebelum mulai

    const type = () => {
      if (!elementRef.current) return;
      if (i < text.length) {
        elementRef.current.textContent =
          (elementRef.current.textContent || "") + text.charAt(i);
        i++;
        timeoutRef.current = window.setTimeout(type, speed);
      }
    };

    type();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed]);

  return <span ref={elementRef} className={className}></span>;
}
export default function Hero() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  // Smooth scrolling untuk anchor link
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = document.querySelector(
        (e.currentTarget as HTMLAnchorElement).getAttribute("href")!
      );
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">
        <img src="image/BANNER.png" alt="" />
        <h1>STEP INTO THE ICON</h1>
      </div>
    </section>
  );
}
