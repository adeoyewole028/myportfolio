import Meme from "../../../Images/meme.png";
import Specter from "../../../Images/Specter.png";
import Spenditure from "../../../Images/spenditure.png";
import Timenow from "../../../Images/timenow.png";
import Card from "../../../Images/profile card.png"

export const projects = [
  {
    id: 1,
    projectImage: Meme,
    title: "Memes Generator",
    links: {
      link: "/memes",
      title: "Memes Generator",
    },
  },
  {
    id: 2,
    projectImage: Specter,
    title: "Johnathan Specter Landing Page",
    links: {
      url: "",
      link: "/devport",
      title: "Johnathan Specter",
    },
  },
  {
    id: 3,
    projectImage: Timenow,
    title: "TimeNow",
    links: {
      url: "",
      link: "/timenow",
      title: "TimeNow",
    },
  },
  {
    id: 4,
    projectImage: Spenditure,
    title: "Spenditure Budget App",
    links: {
      url: "https://spenditure.netlify.app/",
      link: "",
      title: "Spenditure",
    },
  },
  {
    id: 5,
    projectImage: Card,
    title: "Profile Card",
    links: {
      url: "/profilecard",
      link: "",
      title: "Profile Card",
    },
  },
];
