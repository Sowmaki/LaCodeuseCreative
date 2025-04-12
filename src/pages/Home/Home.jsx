import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-gradient-to-b from-green-100 to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Développeuse Front-End & Creative Coder 🌿
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          J’imagine des expériences web sensibles, immersives et éco-conçues. Code, design et créativité réunis.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="bg-green-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-green-700 transition">Voir mes projets</a>
          <a href="#contact" className="underline text-green-700 hover:text-green-900">Me contacter</a>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="p-8" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-6">Ce qui m'anime ✨</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">🎨 Créativité</h3>
            <p>Un regard artistique pour des interfaces uniques et inspirées.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">💚 Green Code</h3>
            <p>Des choix techniques conscients pour un web plus responsable.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">👩‍👧 Maman Dev</h3>
            <p>Organisée, engagée et motivée comme jamais. #MomLife</p>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projects" className="p-8 bg-gray-50" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-6">Projets Sélectionnés 🚀</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Exemple de carte projet */}
          <div className="bg-white p-4 rounded-2xl shadow" data-aos="fade-up">
            <h3 className="text-xl font-bold">Nom du Projet</h3>
            <p className="text-sm text-gray-600 mb-2">React • Figma • JS</p>
            <p>Brief rapide du projet et ce que tu y as apporté.</p>
            <a href="#" className="text-green-700 underline mt-2 inline-block">Voir le code</a>
          </div>
          {/* Ajoute ici d'autres projets */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-4">On travaille ensemble ? 💌</h2>
        <p className="mb-6">Dispo en remote, en freelance ou CDI — en France ou ailleurs 🌍</p>
        <a href="mailto:ton@email.fr" className="bg-green-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-green-700 transition">
          Écris-moi
        </a>
      </section>
    </div>
  );
}
