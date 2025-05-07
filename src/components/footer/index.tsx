import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-10">
      <div className="container mx-auto px-4">
        {/* Layout Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Seção de Contato */}
          <div className="text-center md:text-left">

            <p className="mt-2">
              Ficou interessado no meu trabalho? Entre em contato comigo!
            </p>
            <a
              target="_blank"

              href="https://wa.me/5516993356039?text=Vim pelo seu portfólio!"
              className="inline-block mt-4 btn-primary text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Entre em Contato
            </a>
          </div>

          {/* Sitemap */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white">Navegue no Site</h3>
            <nav className="flex md:flex-col justify-center md:justify-end gap-4 mt-4">
              <a href="#hero" className="hover:text-white transition-colors">
                Início
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
              <a href="#work" className="hover:text-white transition-colors">
                Projetos
              </a>
              <a href="#github" className="hover:text-white transition-colors">
                Github
              </a>
            </nav>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold text-white">
              Minhas Redes Sociais
            </h3>
            <div className="flex md:flex-col justify-center md:justify-end gap-4 mt-4">
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/5516993356039?text=Vim pelo seu portfólio!"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Whatsapp
              </a>
              <a
                href="mailto:andre.ailtonc.10@gmail.com"
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Andre Ailton. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
