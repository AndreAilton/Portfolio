import { useState } from "react";
import Navbar from "../navbar";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center relative">
        <h1>
          <a href="/" className="logo">
            <img
              src="images/FAVICON.svg"
              width={50}
              height={50}
              alt="Andre Ailton"
              className="active:scale-95 hover:bg-zinc-50/80 rounded-2xl p-1"
            />
          </a>
        </h1>
        {/* Navbar */}
        <Navbar navOpen={navOpen} onLinkClick={() => setNavOpen(false)} />
        {/* Menu Button */}
        <button
          className="menu-btn md:hidden"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined">
            {navOpen ? "close" : "menu"}
          </span>
        </button>
        <a
          href="#contact"
          className="md:block hidden hover:bg-zinc-50/50 active:scale-95 bg-white text-black font-medium rounded-2xl px-4 py-2 text-center"
        >
          Entre em Contato
        </a>

      </div>
    </header>
  );
}

export default Header;
