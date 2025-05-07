import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="section bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg"
    >
      <div className="container lg:grid lg:grid-cols-2 lg:items-center">
        {/* Texto de introdução */}
        <div className="mb-12 lg:mb-0">
          <h2 className="text-3xl font-bold text-white">Aguardo seu Contato</h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Estou disponível para novos projetos e colaborações. Entre em
            contato para discutirmos como posso ajudar no seu próximo projeto!
          </p>

          {/* Redes sociais */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AndreAilton"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
            >
              <span className="material-symbols-outlined">code</span>
            </a>
            <a
              href="https://linkedin.com/in/AndreAilton"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
            >
              <span className="material-symbols-outlined">work</span>
            </a>
            <a
              href="mailto:andre.ailtonc.10@gmail.com"
              className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
            >
              <span className="material-symbols-outlined">email</span>
            </a>
            <a
              href="https://wa.me/5516993356039?text=Vim pelo seu portfólio!"
              className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>

        {/* Formulário de contato */}
        <form
          action="https://getform.io/f/amdkzgrb"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Seu Nome"
                className="text-field reveal-up"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="seuemail@exemplo.com"
                className="text-field reveal-up"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Escreva sua mensagem aqui..."
              className="text-field resize-y min-h-[120px] max-h-[300px] reveal-up"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full reveal-up">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
