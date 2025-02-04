import Image from "next/image";
import { FadeInUpAnimation } from "./FadeInUpAnimation";

export const AboutMe = () => {
  return (
    <div
      className="mb-32 mt-16 md:mt-16 xl:mt-0 relative bg-black bg-cover bg-center md:bg-contain md:bg-no-repeat md:bg-left-bottom px-6 md:px-12"
      style={{
        backgroundImage: "url('/images/aboutme-background.png')",
      }}
    >
      <FadeInUpAnimation>
        <div className="md:mb-14 max-w-6xl mx-auto text-center relative">
          <div className="relative inline-block text-left">
            <h2 className="font-medium text-sky-500">SOBRE MIM</h2>
            <h1 className="text-2xl md:text-4xl font-bold relative inline-block -mt-1">
              FULANO DA SILVA
              <span className="absolute left-0 transform w-7 h-1 bg-sky-500 -bottom-2"></span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-center max-w-6xl mx-auto mt-8 md:mt-0">
          <div className="max-w-md w-full px-11 lg:px-0 text-sm lg:text-base text-white leading-relaxed break-words overflow-wrap break-word">
            <p>
              Sou um profissional de Educação Física apaixonado por transformar vidas através do treino e do estilo de vida saudável.
            </p>
            <p className="mt-5">
              Com mais de 10 anos de experiência no esporte e mais de 6 anos atuando como personal trainer, já ajudei mais de 500 alunos a alcançarem seus objetivos, seja na busca por performance, emagrecimento, ganho de massa muscular ou simplesmente uma melhor qualidade de vida.
            </p>
            <div className="mt-5 flex justify-center md:justify-start items-center gap-1 md:gap-3">
              <div className="flex flex-col items-center justify-center text-center w-22 h-16 lg:w-26 lg:h-20 p-4 md:text-nowrap bg-darkBlue border-2 border-sky-800 rounded-lg">
                <p className="leading-tight text-2xl lg:text-4xl font-bold text-white">500+</p>
                <p className="leading-tight text-[0.4rem] lg:text-[0.65rem]">ALUNOS SATISFEITOS</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center w-22 h-16 lg:w-26 lg:h-20 p-3 text-nowrap bg-darkBlue rounded-lg border-2 border-sky-800">
                <p className="leading-tight text-2xl lg:text-4xl font-bold text-white">10+</p>
                <p className="leading-tight text-[0.4rem] lg:text-[0.65rem]">ANOS NO ESPORTE</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center w-22 h-16 lg:w-26 lg:h-20 p-3 text-nowrap bg-darkBlue rounded-lg border-2 border-sky-800">
                <p className="leading-tight text-2xl lg:text-4xl font-bold text-white">6+</p>
                <p className="leading-tight text-[0.4rem] lg:text-[0.65rem]">ANOS ENSINANDO</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-start md:w-1/2 h-full mt-6 md:mt-0">
            <Image
              src="/images/aboutme-image.png"
              alt="Sobre mim imagem"
              className="rounded-lg md:object-cover md:h-full md:w-auto"
              width={280}
              height={0}
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </FadeInUpAnimation>
      
    </div>
  );
};
