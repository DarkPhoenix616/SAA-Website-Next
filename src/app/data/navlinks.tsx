// data/navLinks.ts

import { NavLinks, SimpleLink, DropdownLink } from "@/app/types/Navlinks.type";

export const navLinks: NavLinks = {
  home: {
    text: "Home",
    url: "/home",
  },
  team: {
    text: "Team",
    subLinks: [
      { text: "Faculty Advisor", url: "/facultyAdvisor" },
      { text: "Student Team", url: "/studentTeam" },
    ],
  },
  activities: {
    text: "Activities",
    url: "/events",
  },
  visit_IITJ: {
    text: "Visit IITJ",
    url: "/visitIITJ",
  },
  giving_back: {
    text: "Giving back",
    url: "/givingBack",
  },
  quick_access: {
    text: "Quick Access",
    subLinks: [
      { text: "IIT Jodhpur", url: "https://www.iitj.ac.in/" },
      { text: "Alumni Portal", url: "https://alumni.iitj.ac.in/" },
    ],
  },
};
