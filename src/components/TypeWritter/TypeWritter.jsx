import { useEffect, useState } from "react";
import "./TypeWritter.scss";

export const TypeWritter = ({ text, delay, initialDelay = 1000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1); // Commence à -1 pour gérer le délai initial

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex(0); // Commence l’écriture après le délai
    }, initialDelay);

    return () => clearTimeout(timeout);
  }, [initialDelay]);

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="hero__title">
      {currentText}
      {currentIndex < text.length && <span className="blinking-cursor">|</span>}
    </span>
  );
};
