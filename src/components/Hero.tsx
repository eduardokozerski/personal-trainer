import { FadeInAnimation } from "@/components/FadeInAnimation";

export const Hero = () => {
    return (
      <div className="w-full mb-26">
        <div className="bg-hero-image bg-cover bg-center relative overflow-hidden">
          <FadeInAnimation>
          <div className="flex justify-center h-14 md:h-16 lg:h-16 mt-12 mb-10">
            <img
              src="/images/logo.svg"
              alt="Logotipo Fulano da Silva"
              className="h-14 md:h-16 lg:h-16"
            />
          </div>
  
          <div className="flex flex-col md:flex-row items-center justify-between lg:-mt-40">
            <div className="md:w-1/2 w-full flex items-end justify-center lg:h-[800px] -mt-24 xl:-mt-50 lg:ml-32 relative">
              <img
                src="/images/person.png"
                alt="Person"
                className="w-auto h-full object-contain lg:absolute lg:bottom-0 lg:left-1/2 lg:translate-x-[-50%]"
              />
            </div>
  
            <div className="md:w-1/2 w-full mt-8 md:mt-5 xl:mt-24 text-center md:mr-16 lg:mr-32">
              <div className="text-center">
                <h1 className="leading-11 text-5xl md:text-[2.5rem] lg:text-[2.9rem] xl:text-6xl font-bold">
                  RESULTADO <br />
                  DE <span className="glow-text">VERDADE</span>
                </h1>
              </div>
              <div className="inline-block text-left">
                <p className="text-xl md:text-[1.05rem] lg:text-[1.25rem] xl:text-[1.55rem] leading-snug md:leading-none font-medium mt-2 lg:mt-5">
                  Conheça o meu trabalho e comece <br /> a evoluir o seu corpo com
                  o que <br />
                  realmente <span className="glow-text">funciona</span>.
                </p>
              </div>
              <div className="text-center">
                <button className="btn-glow bg-black border-2 border-white transition duration-300 transform hover:scale-110 font-bold text-white rounded-full mb-6 px-5 py-3 mt-4 md:px-5 md:py-3 lg:mt-6 lg:px-5 lg:py-3"
                  onClick={() => {
                    const section = document.getElementById("plans");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  QUERO COMEÇAR!
                </button>
              </div>
            </div>
          </div>
          </FadeInAnimation>
        </div>
      </div>
    );
  };