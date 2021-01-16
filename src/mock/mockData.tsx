import { Facebook, Instagram, Linkedin } from "react-feather";

/**SOCIAL MEDIA INFORMATION */
const socialInformation = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100007382506887",
    icon: <Facebook />,
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/jewelremandaban/",
    icon: <Instagram />,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "",
    icon: <Linkedin />,
  },
];

/**SIDEBAR MENU */
const Sidebar = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Project",
    link: "",
  },
  {
    id: 3,
    name: "Story",
    link: "",
  },
  {
    id: 4,
    name: "Contact",
    link: "",
  },
  {
    id: 5,
    name: "Resume",
    link: "",
  },
];

/**PROJECT CONTENT */
const Content = [
  {
    id: 1,
    title: "LOPEZ ANSESRAL HOUSE",
    image: "/images/1.jpg",
  },
  {
    id: 2,
    title: "MISSION JARO APARTMENT",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    title: "RUSTU BOHOL COTTAGE",
    image: "/images/3.jpg",
  },
  {
    id: 4,
    title: "JEAN-MULIN ALTIER HOUSE",
    image: "/images/4.jpg",
  },
  {
    id: 5,
    title: "CHAPTA FURNITURE",
    image: "/images/5.jpg",
  },
  {
    id: 6,
    title: "TERRAIN VAGUE",
    image: "/images/6.jpg",
  },
  {
    id: 7,
    title: "IRON GATE ESTATE BUILDING",
    image: "/images/7.jpg",
  },
  {
    id: 8,
    title: "HOUSING UNITS",
    image: "/images/8.jpg",
  },
  {
    id: 9,
    title: "TIME GARDED IN ILOILO",
    image: "/images/9.jpg",
  },
];

export { socialInformation, Sidebar, Content };
