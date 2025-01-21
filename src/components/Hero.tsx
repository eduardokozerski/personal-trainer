export const Hero = () => {
    return (
        <div className="w-full mb-9">
            <section className="bg-hero-image bg-cover bg-center h-[455px] bg-fixed relative overflow-hidden">
            <img 
                src="/images/menu-burger.svg" 
                alt="Menu" 
                className="m-5 cursor-pointer" 
            />
            <div className="flex justify-center mt-5 h-14">
                <img src="/images/logo.png" alt="Logo"/>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-5 space-y-6 md:space-y-0 md:space-x-">
                <img 
                    src="/images/person.png" 
                    alt="Person" 
                    className="absolute bottom-0 w-full object-contain h-[420px]"
                    />
            </div>
            </section>
            <div className="text-center mt-5">
                <h1 className="text-4xl font-bold">
                RESULTADO <br />
                DE <span className="text-sky-500 text-shadow-sky">VERDADE</span>
                </h1>
            </div>
            <div className="text-center">
                <div className="inline-block text-left">
                    <p className="font-medium text-[0.95rem] mt-2">
                        Conheça o meu trabalho e comece <br /> a evoluir o seu corpo com o que <br />
                        realmente <span className="text-sky-500 text-shadow-sky">funciona</span>.
                    </p>
                </div>
                
            </div>
            <div className="text-center">
                <button className="bg-sky-500 transition duration-300 transform hover:scale-110 font-bold text-white rounded-3xl px-5 py-3 mt-4">QUERO COMEÇAR!</button>
            </div>
        </div>
    );
}