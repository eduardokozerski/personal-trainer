import { FadeInUpAnimation } from "./FadeInUpAnimation";

export const HelpYou = () => {

    return (
        <FadeInUpAnimation>
            <div className="mb-32 flex flex-col md:flex justify-center items-center bg-black">
                <div className=" max-w-full">
                    <h1 className="text-3xl md:text-4xl font-bold relative">
                        COMO VOU TE AJUDAR
                    <span className="absolute left-0 transform w-7 h-1 bg-sky-500 -bottom-2"></span>
                    </h1>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-xs md:max-w-md lg:max-w-4xl xl:max-w-5xl">
                    <div className="bg-darkBlue border-2 border-sky-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="relative w-full h-48 lg:h-56">
                            <img 
                                src="/images/training-solo.jpg" 
                                alt="Treino Personalizado" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 text-center lg:text-left">
                            <h3 className="text-xl font-semibold mb-2">Treino Personalizado</h3>
                            <p className="text-sm leading-relaxed">
                                Cada treino é elaborado de acordo com seus objetivos, necessidades e limitações. Assim, você otimiza os resultados sem riscos de lesões ou estagnação no progresso.
                            </p>
                        </div>
                    </div>

                    <div className=" bg-darkBlue border-2 border-sky-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="relative w-full h-48 lg:h-56">
                            <img 
                                src="/images/training-duo.jpg" 
                                alt="Acompanhamento contínuo" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 text-white text-center lg:text-left">
                            <h3 className="text-xl font-semibold mb-2">Acompanhamento Contínuo</h3>
                            <p className="text-sm leading-relaxed">
                                Monitoro sua evolução e ajusto os treinos conforme necessário. Além disso, estou sempre disponível para tirar dúvidas e garantir sua motivação e disciplina no processo.
                            </p>
                        </div>
                    </div>

                    <div className=" bg-darkBlue border-2 border-sky-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="relative w-full h-48 lg:h-56">
                            <img 
                                src="/images/food.jpg" 
                                alt="Dicas Nutricionais" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 text-white text-center lg:text-left">
                            <h3 className="text-xl font-semibold mb-2">Dicas Nutricionais</h3>
                            <p className="text-sm leading-relaxed">
                                Uma boa alimentação potencializa seus treinos. Por isso, ofereço orientações e dicas práticas para equilibrar sua dieta e maximizar seus resultados com saúde e bem-estar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </FadeInUpAnimation>
        
    );
}