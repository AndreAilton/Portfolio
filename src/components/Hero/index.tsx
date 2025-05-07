import { ButtonOutline, ButtonPrimary } from "../Button.tsx";

function index() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        {/* Texto e Avatar */}
        <div className="flex flex-col items-start  space-y-8 text-left">
          {/* Avatar e Status */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <figure className="w-12 h-12 rounded-lg overflow-hidden">
              <img
                src="/images/avatar.jpeg"
                width={48}
                height={48}
                alt="Henry Clark portrait"
                className="object-cover w-full h-full"
              />
            </figure>

            <div className="flex items-center gap-2 text-zinc-500 text-base tracking-wide">
              <span className="relative w-3 h-3 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span>Disponivel para Trabalhos</span>
            </div>
          </div>

          {/* Título */}
          <h2 className=" text-5xl font-bold leading-tight max-w-[20ch] sm:max-w-[25ch] lg:max-w-[20ch]">
            Criando soluções digitais que fazem a diferença
          </h2>

          {/* Botões */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <ButtonPrimary label="Baixar CV" icon="download" />
            <ButtonOutline
              href="#about"
              label="Role para baixo"
              icon="arrow_downward"
            />
          </div>
        </div>

        {/* Imagem */}
        <div className="hidden lg:block">
          <figure className="w-full max-w-[580px] ml-auto bg-gradient-to-t from-[#7B2E4D] to-[#1A2A44]to-transparent rounded-[60px] overflow-hidden h-[660px]">
            <img
              src="/images/Hero.png"
              alt=" "
              className="bg-cover w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default index;
