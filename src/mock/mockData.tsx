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
    link: "",
  },
  {
    id: 2,
    name: "Projects",
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

export { socialInformation, Sidebar };
