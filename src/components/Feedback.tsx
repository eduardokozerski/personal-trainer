import { useState } from "react";

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
}

const images = [
    {
        src: "/images/body-evolution-1.png",
        profilePic: "/images/profile-pic.png",
        name: "Sicrano de Tal",
        age: 28,
    },
    {
        src: "/images/body-evolution-2.png",
        profilePic: "/images/profile-pic.png",
        name: "Beltrana de Tal",
        age: 22,
    },
    {
        src: "/images/body-evolution-3.png",
        profilePic: "/images/profile-pic.png",
        name: "Juninho de Oliveira",
        age: 43,
    },
    {
        src: "/images/body-evolution-4.png",
        profilePic: "/images/profile-pic.png",
        name: "Fernanda de Souza",
        age: 30,
    },
];

const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const prevImage = () => {
    setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
};

export const Feedback = () => {
    return (
        <div className="w-full">
            <div className="text-center mb-3">
                <div className="relative inline-block">
                    <h1 className="text-xl font-bold">FEEDBACK DOS ALUNOS</h1>
                    <div className="w-7 h-1 bg-sky-500 absolute left-0 -bottom-3"></div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <div className="h-96 w-64 bg-white rounded-lg">
                    <img 
                        src="/images/body-evolution-1.png" 
                        alt="Body evolution and client feedback on WhatsApp chat" 
                        className=""
                        />
                </div>
            </div>
        </div>
    );
}