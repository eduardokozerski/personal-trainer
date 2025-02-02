import { useState, useEffect } from "react";
import { FadeInUpAnimation } from "./FadeInUpAnimation";

type CarouselProps = {
  images: {
    src: string;
    profilePic: string;
    name: string;
    age: number;
  }[];
};

export const Feedback = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Usar breakpoint md (768px)

  // Atualizar isMobile ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!images || images.length === 0) {
    return (
      <p className="text-center text-gray-500">
        Nenhum feedback disponível.
      </p>
    );
  }

  const visibleImages = isMobile ? 1 : 2; // Mostrar 1 no mobile, 2 no md+

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + visibleImages) % images.length
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - visibleImages + images.length) % images.length
    );
  };

  return (
    <div className="mb-32 relative w-full flex flex-col items-center">
      {/* Título com animação */}
      <FadeInUpAnimation>
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold relative">
            EVOLUÇÃO DOS ALUNOS
            <span className="absolute left-0 transform w-7 h-1 bg-sky-500 -bottom-2"></span>
          </h1>
        </div>
      </FadeInUpAnimation>

      <div className="mt-12 flex items-center justify-center max-w-5xl px-4">
        <button
          onClick={prevImage}
          className="absolute left-4 xl:left-32 top-1/2 transform -translate-y-1/2 p-2 z-10"
          style={{ width: "40px", height: "40px" }}
        >
          <img
            src="/images/arrow-left.svg"
            alt="Previous"
            className="filter hover:brightness-50"
          />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 xl:right-32 top-1/2 transform -translate-y-1/2 p-2 z-10"
          style={{ width: "40px", height: "40px" }}
        >
          <img
            src="/images/arrow-right.svg"
            alt="Next"
            className="filter hover:brightness-50"
          />
        </button>

        {/* Div Principal */}
        <div
          className={`grid ${
            isMobile ? "grid-cols-1 gap-6" : "grid-cols-2 gap-12"
          } w-full justify-center items-center`}
        >
          {images
            .slice(currentIndex, currentIndex + visibleImages)
            .map((image, index) => (
              <FadeInUpAnimation key={index}>
                <div
                  className="h-auto w-72 lg:w-96 bg-darkBlue border-2 border-sky-800 rounded-lg shadow-md flex flex-col items-center justify-between overflow-hidden"
                >
                  {/* Imagem na parte superior */}
                  <div className="mt-4 w-full flex items-center justify-center bg-darkBlue">
                    <img
                      src={image.src}
                      alt={`${image.name} feedback`}
                      className="w-[89%] h-auto object-contain rounded-lg"
                    />
                  </div>

                  {/* Informações parte inferior da div */}
                  <div className="w-full bg-darkBlue flex flex-col justify-center py-4 pl-5">
                    <div className="flex items-center">
                      <img
                        src={image.profilePic}
                        alt={`${image.name} profile`}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                      />
                      <div className="flex flex-col ml-2">
                        <h2 className="font-semibold text-white text-sm md:text-base">
                          {image.name}
                        </h2>
                        <p className="text-xs md:text-sm font-medium text-white">
                          {image.age} anos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUpAnimation>
            ))}
        </div>
      </div>
    </div>
  );
};