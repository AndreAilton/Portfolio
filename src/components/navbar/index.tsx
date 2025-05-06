import { useState, useEffect } from "react";

interface NavbarProps {
  navOpen: boolean;
}


const navItems = [
  {
    label: "Pagina Inicial",
    link: "#home",
    className: "nav-link",
  },
  {
    label: "Sobre mim",
    link: "#about",
    className: "nav-link",
  },
  {
    label: "Habilidades",
    link: "#skills",
    className: "nav-link",
  },
  {
    label: "Projetos",
    link: "#work",
    className: "nav-link",
  },
];

const index: React.FC<NavbarProps> = ({ navOpen }) =>{
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Ajuste para considerar a altura da navbar
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id") || "home";
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navOpen ? "navbar-open" : ""}`}>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`${item.className} ${
            activeSection === item.link.substring(1)
              ? "active-link"
              : ""
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default index;
