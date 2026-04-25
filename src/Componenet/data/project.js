// src/Componenet/data/project.js
import amazonImg from "../../assets/amazon.png";
import netflixImg from "../../assets/netflix.png";
import portfolioImg from "../../assets/images.jpeg";
import qaImg from "../../assets/qa.jpeg";
import aboutImg from "../../assets/naki.jpg";
import portfolioImg2 from "../../assets/ecomers.png";
import employe from "../../assets/employe.png";
import mobileapp from "../../assets/mobileapp.jpg";
import school from "../../assets/school.png";

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
  },
    {
    id: 6,
    image: portfolioImg2,
    name: "E-Commerce Website",
    githubRepo: "https://ecommers-weld-mahi.vercel.app/",
  },
   {
    id: 7,
    image: employe,
    name: "E-Commerce Website",
    githubRepo: "https://nahom.lovable.app/",
  },
   {
    id: 8,
    image: mobileapp,
    name: "my_rent_and move app",
    githubRepo: "https://github.com/nahi-t/rent-move",
  },
  {
    id: 9,
    image:school ,
    name: "school managemant",
    githubRepo: "https://school-management-system-theta-black-nahi.vercel.app/",
  },

];

export default projects;
