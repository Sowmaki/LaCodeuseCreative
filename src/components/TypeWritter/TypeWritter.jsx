import { useEffect, useRef, useState } from "react";
import "./TypeWritter.scss";

export const TypeWritter = ({ text, delay, initialDelay = 1000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [dotsCount, setDotsCount] = useState(3); // 3 points au départ
  const ref = useRef(null);

  // Intersection Observer pour déclencher quand l'élément entre dans la vue
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), initialDelay); // délai après apparition
          observer.disconnect(); // On observe une seule fois
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [initialDelay]);

  // Efface les points un à un
  useEffect(() => {
    if (isVisible && dotsCount > 0) {
      const timeout = setTimeout(() => {
        setDotsCount((prev) => prev - 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
    // Quand tous les points sont effacés, on commence le texte
    if (isVisible && dotsCount === 0 && currentIndex === -1) {
      setCurrentIndex(0);
    }
  }, [isVisible, dotsCount, delay, currentIndex]);

  // Animation lettre par lettre
  useEffect(() => {
    if (
      isVisible &&
      dotsCount === 0 &&
      currentIndex >= 0 &&
      currentIndex < text.length
    ) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, dotsCount, currentIndex, delay, text]);

  return (
    <span className="typewritter" ref={ref}>
      {dotsCount > 0 ? (
        <span className="typewritter-dots">{".".repeat(dotsCount)}</span>
      ) : (
        <>
          {currentText}
          {currentIndex < text.length && isVisible && (
            <span className="blinking-cursor">|</span>
          )}
        </>
      )}
    </span>
  );
};
