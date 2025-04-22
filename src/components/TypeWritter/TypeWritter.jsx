import { useEffect, useRef, useState } from "react";
import "./TypeWritter.scss";

export const TypeWritter = ({ text, delay, initialDelay = 1000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);
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
      { threshold: 0.1 } // 10% visible suffit
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [initialDelay]);

  // Animation lettre par lettre
  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      if (currentIndex === -1) {
        setCurrentIndex(0); // démarre après le initialDelay
      }

      return () => clearTimeout(timeout);
    }
  }, [isVisible, currentIndex, delay, text]);

  return (
    <span className="typewritter" ref={ref}>
      {currentText}
      {currentIndex < text.length && isVisible && (
        <span className="blinking-cursor">|</span>
      )}
    </span>
  );
};
