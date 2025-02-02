import { FadeInUpAnimation } from "./FadeInUpAnimation";

export const Testimonials = () => {
    return (
        <FadeInUpAnimation>
            <div className="mb-32 flex flex-col justify-center items-center">
            <div className=" max-w-full">
                <h1 className="text-3xl md:text-4xl font-bold relative">
                    DEPOIMENTOS
                <span className="absolute left-0 transform w-7 h-1 bg-sky-500 -bottom-2"></span>
                </h1>
            </div>
            <div className="max-w-full">
                <img 
                src="/images/quotation-mark.svg" 
                alt="Quotation marks"
                className="my-5 md:my-10 w-auto h-4 md:h-6"
                />
            </div>
            <div className="px-11 max-w-3xl md:max-w-5xl text-center mb-10">
                <p className="text-xl text-wrap italic">
                    Antes de começar a consultoria, eu não conseguia manter uma rotina de treinos consistente. Com o acompanhamento do Fulano, consegui resultados incríveis! Ganhei mais força, definição e, principalmente, disciplina!
                </p>
                <p className="text-sm mt-2 md:mt-4">
                    Henrique Ferreira, 28 anos
                </p>
            </div>
            <span className="w-24 h-1 bg-sky-500 block mx-auto mb-10"></span>
            <div className="px-11 max-w-3xl md:max-w-5xl text-center mb-10">
                <p className="text-xl text-wrap italic">
                Sempre tive dificuldade em emagrecer e já tentei de tudo, mas nada funcionava a longo prazo. Com a orientação profissional e os treinos personalizados, finalmente vi mudanças reais no meu corpo e na minha saúde!
                </p>
                <p className="text-sm mt-2 md:mt-4">
                    Mariana Souza, 34 anos
                </p>
            </div>
            <span className="w-24 h-1 bg-sky-500 block mx-auto mb-10"></span>
            <div className="px-11 max-w-3xl md:max-w-5xl text-center mb-10">
                <p className="text-xl text-wrap italic">
                    Já treinava há um tempo, mas sentia que estava estagnado. Com os ajustes na minha planilha de treino e dieta, consegui evoluir muito mais rápido e de forma eficiente!
                </p>
                <p className="text-sm mt-2 md:mt-4">
                    Carlos Oliveira, 25 anos
                </p>
            </div>
            <span className="w-24 h-1 bg-sky-500 block mx-auto mb-10"></span>
            <div className="px-11 max-w-3xl md:max-w-5xl text-center">
                <p className="text-xl text-wrap italic">
                    Nunca fui fã de academia, mas precisava melhorar minha qualidade de vida. Com os treinos adaptados à minha rotina, hoje me sinto mais disposta, saudável e feliz com meu corpo!
                </p>
                <p className="text-sm mt-2 md:mt-4">
                    Fernanda Lima, 40 anos
                </p>
            </div>
        </div>
        </FadeInUpAnimation>
    );
}