import Image from "next/image";
import { FadeInUpAnimation } from "./FadeInUpAnimation";

export const Plans = () => {
    
    return (
        <FadeInUpAnimation>
            <div id="plans" 
            className="mb-32 flex flex-col items-center relative bg-black bg-cover bg-center md:bg-contain md:bg-right bg-no-repeat "
            style={{
                backgroundImage: "url('/images/plans-background.png')",
            }}
            >
                <div className=" max-w-full">
                    <h1 className="text-3xl md:text-4xl font-bold relative">
                        PLANOS
                    <span className="absolute left-0 transform w-7 h-1 bg-sky-500 -bottom-2"></span>
                    </h1>
                </div>

                {/* Container dos Planos */}
                <div className="mt-12 grid grid-cols-1 xl:grid-cols-3 gap-8 px-4 xl:max-w-5xl">
                    <div className="p-6 max-w-xs sm:max-w-md md:max-w-lg xl:max-w-none bg-darkBlue rounded-lg text-center flex flex-col justify-between h-full">
                        <div className="flex-grow">
                            <h3 className="text-xl font-semibold">Mensal</h3>
                            <div className="flex justify-center items-center">
                                <p className="text-xl font-bold">R$</p>
                                <p className="mt-2 text-5xl font-bold">300</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-400">1 mês de acompanhamento</p>
                            <span className="w-[200px] h-[1px] bg-lighterDarkBlue block mx-auto my-3"></span>
                            <div className="mt-4 space-y-2 text-left">
                                <p className="flex items-center">
                                    <Image src="/images/tick.svg" alt="✓" width={16} height={16} className="mr-2" />
                                    Treino individualizado para o seu objetivo
                                </p>
                                <p className="flex items-center">
                                    <Image src="/images/tick.svg" alt="✓" width={16} height={16} className="mr-2" />
                                    Suporte online diário para tirar dúvidas
                                </p>
                            </div>
                        </div>

                        <button className="mt-6 bg-sky-500 text-white transition duration-300 transform hover:scale-110 px-6 py-2 rounded-full font-semibold">
                            COMECE JÁ!
                        </button>
                    </div>

                    <div className="p-6 max-w-xs sm:max-w-md md:max-w-lg xl:max-w-none bg-gradient-to-b from-sky-600 to-darkBlue rounded-lg text-center flex flex-col justify-between h-full">
                        <div className="flex-grow">
                            <h3 className="text-xl font-semibold">Semestral</h3>
                            <div className="flex justify-center items-center">
                                <p className="text-xl font-bold">R$</p>
                                <p className="mt-2 text-5xl font-bold">700</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-400">6 meses de acompanhamento</p>
                            <span className="w-[200px] h-[1px] bg-white block mx-auto my-3"></span>
                            <div className="mt-4 space-y-2 text-left">
                                <p className="flex items-center">
                                    <Image src="/images/tick.svg" alt="✓" width={16} height={16} className="mr-2" />
                                    Planilhas personalizadas mensais para evolução contínua
                                </p>
                                <p className="flex items-center">
                                    <Image src="/images/tick.svg" alt="✓" width={16} height={16} className="mr-2" />
                                    Suporte online diário para ajustes e dúvidas
                                </p>
                                <p className="flex items-center">
                                    <Image src="/images/tick.svg" alt="✓" width={16} height={16} className="mr-2" />
                                    Parcele em até 3x sem juros
                                </p>
                            </div>
                        </div>

                        <button className="mt-6 bg-sky-500 text-white transition duration-300 transform hover:scale-110 px-6 py-2 rounded-full font-semibold">
                            COMECE JÁ!
                        </button>
                    </div>

                    <div className="p-6 max-w-xs sm:max-w-md md:max-w-lg xl:max-w-none bg-darkBlue rounded-lg text-center flex flex-col justify-between h-full">
                        <div className="flex-grow">
                            <h3 className="text-xl font-semibold">Anual</h3>
                            <div className="flex justify-center items-center">
                                <p className="text-xl font-bold">R$</p>
                                <p className="mt-2 text-5xl font-bold">1200</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-400">12 meses de acompanhamento</p>
                            <span className="w-[200px] h-[1px] bg-lighterDarkBlue block mx-auto my-3"></span>
                            <div className="mt-4 space-y-2 text-left">
                                <p className="flex items-center">
                                    <Image src="/images/tick.svg" alt="✓" width={16} height={16} className="mr-2" />
                                    Planilhas mensais para treinos progressivos e eficazes
                                </p>
                                <p className="flex items-center">
                                    <Image src="/images/tick.svg" alt="✓" width={16} height={16} className="mr-2" />
                                    Suporte online diário e ajustes conforme sua evolução
                                </p>
                                <p className="flex items-center">
                                    <Image src="/images/tick.svg" alt="✓" width={16} height={16} className="mr-2" />
                                    Parcele em até 6x sem juros
                                </p>
                                <p className="flex items-center">
                                    <Image src="/images/tick.svg" alt="✓" width={16} height={16} className="mr-2" />
                                    Calculadora exclusiva de macronutrientes
                                </p>
                                <p className="flex items-center">
                                    <Image src="/images/tick.svg" alt="✓" width={16} height={16} className="mr-2" />
                                    eBook com estratégias eficazes para emagrecimento
                                </p>
                            </div>
                        </div>

                        <button className="mt-6 bg-sky-500 text-white transition duration-300 transform hover:scale-110 px-6 py-2 rounded-full font-semibold">
                            COMECE JÁ!
                        </button>
                    </div>
                </div>
            </div>
        </FadeInUpAnimation>
    );
}