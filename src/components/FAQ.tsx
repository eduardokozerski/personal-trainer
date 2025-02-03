import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInUpAnimation } from "./FadeInUpAnimation";
import Image from "next/image";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border-2 border-sky-500 rounded-lg overflow-hidden">
            <button
                className="w-full text-left p-4 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg">{question}</span>
                <motion.img
                    src="/images/dropdown.svg"
                    alt="Dropdown"
                    className="w-5 h-5"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="px-4 overflow-hidden"
            >
                <p className="text-sm text-gray-300 pb-6">{answer}</p>
            </motion.div>
        </div>
    );
};

export const FAQ = () => {
    const faqData = [
        { question: "Como funciona o acompanhamento?", answer: "O acompanhamento inclui treinos personalizados, suporte online e ajustes conforme sua evolução." },
        { question: "Quais são as formas de pagamento?", answer: "Aceitamos pagamentos via Pix, cartão de crédito e boleto bancário." },
        { question: "O suporte é realmente diário?", answer: "Sim! Você pode tirar dúvidas e receber feedback sobre seu progresso diariamente." },
        { question: "Posso cancelar a qualquer momento?", answer: "Sim, basta entrar em contato e o cancelamento será realizado sem burocracia." },
        { question: "Os treinos são personalizados?", answer: "Sim, os treinos são ajustados para o seu objetivo e nível de experiência." },
        { question: "Preciso de equipamentos para os treinos?", answer: "Depende do seu objetivo. Podemos montar treinos tanto para academia quanto para casa." },
    ];

    return (
        <div className="relative bg-black bg-cover bg-center"
            style={{ backgroundImage: "url('/images/faq-background.png')" }}>
            <FadeInUpAnimation>
                <div className="flex flex-col justify-center items-center">
                    <div className="mb-14 relative inline-block text-left">
                        <h2 className="font-medium text-sky-500">SOBROU DÚVIDAS?</h2>
                        <h1 className="text-2xl md:text-4xl font-bold relative inline-block -mt-1">
                        PERGUNTAS FREQUENTES
                        <span className="absolute left-0 transform w-7 h-1 bg-sky-500 -bottom-2"></span>
                        </h1>
                    </div>

                    <div className="mb-28 max-w-xs md:max-w-lg flex flex-col gap-4 w-full">
                        {faqData.map((item, index) => (
                            <FAQItem key={index} {...item} />
                        ))}
                    </div>
                
                    <div className="mb-28 mx-auto max-w-md md:max-w-xl flex justify-center items-center gap-3">
                        <div className="w-14 h-14 md:w-20 md:h-20 p-3 rounded-lg border-2 border-sky-500 flex justify-center cursor-pointer transition duration-300 transform hover:scale-110 socialBtn-glow">
                            <Image src="/images/social-medias/instagram.svg" alt="Instagram" width={40} height={40} className="" />
                        </div>
                        <div className="w-14 h-14 md:w-20 md:h-20 p-3 rounded-lg border-2 border-sky-500 flex justify-center cursor-pointer transition duration-300 transform hover:scale-110 socialBtn-glow">
                            <Image src="/images/social-medias/facebook.svg" alt="Facebook" width={40} height={40} className="" />
                        </div>
                        <div className="w-14 h-14 md:w-20 md:h-20 p-3 rounded-lg border-2 border-sky-500 flex justify-center cursor-pointer transition duration-300 transform hover:scale-110 socialBtn-glow">
                            <Image src="/images/social-medias/tik-tok.svg" alt="Tik Tok" width={40} height={40} className="" />
                        </div>
                        <div className="w-14 h-14 md:w-20 md:h-20 p-3 rounded-lg border-2 border-sky-500 flex justify-center cursor-pointer transition duration-300 transform hover:scale-110 socialBtn-glow">
                            <Image src="/images/social-medias/youtube.svg" alt="YouTube" width={40} height={40} className="" />
                        </div>
                    </div>
                    <div className="mb-14 flex justify-center items-center">
                            <span className="text-sm lg:text-base">Copyright © Fulano Silva</span>
                            <Image src="/images/logo.svg" alt="Fulano Silva" width={100} height={100} className="ml-8"/>
                    </div>
                </div>
            </FadeInUpAnimation>
        </div>
    );
};