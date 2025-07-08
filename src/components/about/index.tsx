const aboutItems = [
    {
      label: 'Projetos Concluidos',
      number: 10
    },
    {
      label: 'Anos de Experiência',
      number: 2
    }
  ];
const AboutItem = ", Gosto de Inovação e sempre busco aperfeiçoar. Tenho como hobbies jogar Xadrez, Assistir Filmes e series, e ler livros. Sou um desenvolvedor Fullstack com experiência em React.js, express.js, Tailwind CSS, TypeScript e JavaScript. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Sou apaixonado por criar interfaces de usuário incríveis e funcionais, e estou sempre em busca de novos desafios para me ajudar a crescer como desenvolvedor."

export default function index() {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
           Meu nome e André Tenho {new Date().getFullYear() - 2003} Anos{AboutItem}
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="images/FAVICON.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
