// src/Componenet/data/project.js
import amazonImg from "../../assets/amazon.png";
import netflixImg from "../../assets/netflix.png";
import portfolioImg from "../../assets/images.jpeg";
import qaImg from "../../assets/qa.jpeg";
import aboutImg from "../../assets/naki.jpg";

const projects = [
  {
    id: 1,
    image: amazonImg,
    name: "E-Commerce Website",
    githubRepo: "https://github.com/nahi-t/amazon.git",
  },
  {
    id: 2,
    image: netflixImg,
    name: "Netflix web app",
    githubRepo: "https://github.com/nahi-t/Netflix-pro1-.git",
  },
  {
    id: 3,
    image: qaImg,
    name: "Portfolio Website",
    githubRepo: "https://github.com/yourusername/portfolio-site",
  },
  {
    id: 4,
    image: portfolioImg,
    name: "Chat Application question and answer",
    githubRepo: "https://github.com/nahi-t/backendpro.git",
  },
  {
    id: 5,
    image: aboutImg,
    name: "My GitHub",
    githubRepo: "https://github.com/nahi-t/nahi-t.git",
  }
];

export default projects;
