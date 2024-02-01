"use client"
import React, { useState } from "react";

export default function PhotoGalary () {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className=" pb-12 mx-auto xl:pt-[20px] lg:pb-[90px] dark:bg-dark">
        <div className="container ">
          <div className="flex flex-wrap mx-4 ">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[550px] text-center">
                <h2 className="text-neutral-100 mb-3 text-3xl leading-[1.208] font-bold xl:text-4xl md:text-[40px]">
                  Galeria de Fotos EMPETUR
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center ">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-4  rounded-full">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center  text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-white bg-opacity-80 text-blue-900"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:bg-opacity-80 hover:text-blue-900"
                    }`}
                  >
                    Todos
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("cursos")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "cursos"
                        ? "activeClasses bg-white bg-opacity-80 text-blue-900"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:bg-opacity-80 hover:text-blue-900"
                    }`}
                  >
                    Cursos
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("palestras")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "palestras"
                        ? "activeClasses bg-white bg-opacity-80 text-blue-900"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:bg-opacity-80 hover:text-blue-900"
                    }`}
                  >
                    Palestras
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("eventos")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "eventos"
                        ? "activeClasses bg-white bg-opacity-80 text-blue-900"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:bg-opacity-80 hover:text-blue-900"
                    }`}
                  >
                    Eventos
                  </button>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <GalaryCard
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="Cursos"
              title="Creative Agency"
              button="Ver Detalhes"
              buttonHref="#"
              showCard={showCard}
            />
             
         
            <GalaryCard
              ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
              category="Palestras"
              title="Creative Agency"
              button="Ver Detahes"
              buttonHref="#"
              showCard={showCard}
            />
            <GalaryCard
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="Palestras"
              title="Creative Agency"
              button="Ver Detalhes"
              buttonHref="#"
              showCard={showCard}
            />
            <GalaryCard
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="Eventos"
              title="Creative Agency"
              button="Ver Detalhes"
              buttonHref="#"
              showCard={showCard}
            />
            <GalaryCard
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="Cursos"
              title="Creative Agency"
              button="Ver Detalhes"
              buttonHref="#"
              showCard={showCard}
            />
         
            <GalaryCard
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="Eventos"
              title="Creative Agency"
              button="Ver Detalhes"
              buttonHref="#"
              showCard={showCard}
            />
            <GalaryCard
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="Palestras"
              title="Creative Agency"
              button="Ver Detalhes"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};



const GalaryCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 mx-4  2xl:mx-0 xl:w-1/2 2xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white  dark:bg-dark-2 py-[34px] px-3 text-center shadow-black dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-xl  font-bold">
              {category}
            </span>
            <h3 className="text-gray-500  mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-3 rounded-lg shadow-lg transform transition-all duration-300  ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce "
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
