import argentbankImg from '../assets/projects/miniatures/argentbank.png';
import billedImg from '../assets/projects/miniatures/billed.png';
import fisheyeImg from '../assets/projects/miniatures/fisheye.png';
import gameonImg from '../assets/projects/miniatures/gameon.png';
import hrnetImg from '../assets/projects/miniatures/hrnet.png';
import kasaImg from '../assets/projects/miniatures/kasa.png';
import learnathomeImg from '../assets/projects/miniatures/learnathome.jpg';
import lespetitsplatsImg from '../assets/projects/miniatures/lespetitsplats.png';
import ohmyfoodImg from '../assets/projects/miniatures/ohmyfood.png';
import sportseeImg from '../assets/projects/miniatures/sportsee.png';

const projects = [
  {
    id: "Kasa01",
    title: "Kasa",
    stack: "React.js · React Router · Sass",
    visual: kasaImg,
    summary: "Réalisation des pages Accueil, A propos et page d'Erreur, de la nouvelle application pour une entreprise de location de logements. Respect strict de la maquette Figma, responsive.",
    gitHub: "https://github.com/Sowmaki/Kasa",
  },
  {
    id: "BankAPI02",
    title: "ArgentBank",
    stack: "React.js · Redux · Redux Toolkit · Sass",
    visual: argentbankImg,
    summary: "Développement front-end d’une application bancaire pour créer une expérience utilisateur dynamique et réactive. Intégration du front-end avec le back-end via des appels API.",
    gitHub: "https://github.com/Sowmaki/BankAPI",
  },
  {
    id: "SportSee03",
    title: "SportSee",
    stack: "React.js · Recharts · Sass",
    visual: sportseeImg,
    summary: "Réalisation d'un Dashboard pour SportSee, startup dédiée au coaching sportif. Maquette Figma à respecter et API Backend à utiliser.",
    gitHub: "https://github.com/Sowmaki/SportSee",
  },
  {
    id: "LesPetitsPlats06",
    title: "Les Petits Plats",
    stack: "JavaScript · Sass · HTML5",
    visual: lespetitsplatsImg,
    summary: "Implémentation d'un algorithme de recherche performant pour distinguer un site de recettes de ses concurrents. Maquette Figma à respecter",
    gitHub: "https://github.com/Sowmaki/PetitsPlats2.0",
  },
  {
    id: "FishEye05",
    title: "Fish Eye",
    stack: "JavaScript · NVDA · HTML5 · Sass ",
    visual: fisheyeImg,
    summary: "Réalisation d'un site pour la mise en ligne de travaux de photographes indépendants, en respectant la maquette fournie sur Figma. Une règle importante : que le site soit accessible aux personnes malvoyantes.",
    gitHub: "https://github.com/Sowmaki/Fisheye",
  },
  {
    id: "GameOn04",
    title: "Game On",
    stack: "JavaScript · HTML5 · CSS ",
    visual: gameonImg,
    summary: "Reprise du développement d'une landing page pour une PME spécialisée dans les conférences et les concours de jeux après le départ de leur développeur front-end. Ajout du code JavaScript manquant.",
    gitHub: "https://github.com/Sowmaki/GameOn",
  },
  {
    id: "OhMyFood07",
    title: "Oh my food",
    stack: "HTML5 · CSS",
    visual: ohmyfoodImg,
    summary: "Développement de l’interface mobile-first d’un site pour une start-up dans le respect de la maquette Figma, avec intégration d'animations CSS et en utilisant Git/GitHub pour le versionnage.",
    gitHub: "https://github.com/Sowmaki/Ohmyfood",
  },
  {
    id: "Billed08",
    title: "Billed",
    stack: "JavaScript · Jest · Chrome Debugger",
    visual: billedImg,
    summary: "Test et debugging d'une application RH. Ce projet est connecté à un service API backend qu'il faut lancer en local. Toute la partie HTML et CSS est déjà fournie.",
    gitHub: "https://github.com/Sowmaki/Billed-Front",
  },
  {
    id: "Learn@Home10",
    title: "Learn@Home",
    stack: "Figma (logiciel) · Kanban · Logiciel de productivité Notion",
    visual: learnathomeImg,
    summary: "Définition des besoins et modélisation d'une solution technique pour une association de soutien scolaire, en adoptant une méthodologie agile. Réalisation d'une maquette Figma et d'un Kanban",
  },
  {
    id: "HRNet00",
    title: "HRNet",
    stack: "React.js · Redux · Redux Toolkit",
    visual: hrnetImg,
    summary: "Remplacer un plugin jQuery spécifique par un composant React moderne et performant. Comparaison de performance avant et après transformation avec Lighthouse",
    gitHub: "https://github.com/Sowmaki/HRNetApp",
  },
];

export default projects;
