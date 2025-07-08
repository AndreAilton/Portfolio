import { useEffect, useState } from "react";
import { ButtonOutline, ButtonPrimary } from "../Button.tsx";

function index() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Criando soluções digitais que fazem a diferença";

  useEffect(() => {
    let current = 0;
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      interval = setInterval(() => {
        setTypedText(fullText.slice(0, current + 1));
        current++;
        if (current === fullText.length) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            setTypedText("");
            current = 0;
            startTyping();
          }, 3500); // tempo de pausa após terminar a frase
        }
      }, 50);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const DownloadCurriculo = () => {
    const link = document.createElement("a");
    link.href = "/Curriculo_Andre.pdf";
    link.download = "Curriculo_Andre.pdf";
    link.click();
  };

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        {/* Texto e Avatar */}
        <div className="flex flex-col items-start space-y-8 text-left">
          {/* Avatar e Status */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <figure className="w-12 h-12 rounded-lg overflow-hidden">
              <img
                src="images/avatar.jpeg"
                width={48}
                height={48}
                alt="Andre Ailton"
                className="object-cover w-full h-full"
              />
            </figure>

            <div className="flex items-center gap-2 text-zinc-500 text-base tracking-wide">
              <span className="relative w-3 h-3 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span>Disponível para Trabalhos</span>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-5xl font-bold leading-tight max-w-[20ch] sm:max-w-[25ch] lg:max-w-[20ch]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>

          {/* Botões */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <ButtonPrimary
              label="Baixar CV"
              icon="download"
              onclick={DownloadCurriculo}
            />
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
              src="images/Hero.png"
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
