"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Accordion from "./sectionTwo"


export default function SectionTwo (){
  useEffect(() => {
    AOS.init({
         duration: 600,
         once: false,
       })
 }, [])
    return(
        <>
        <div id="sectionTwo" className="pb-4"> </div>
        <div data-aos="flip-right" className="flex justify-center px-4  text-center items-center rounded-2xl bg-white/80 z-10 backdrop-filter backdrop-blur-lg shadow-lg w-96 xl:h-11 xl:w-auto 2xl:h-20">
            <p className="text-gray-900   text-center text-base xl:text-base 2xl:text-xl justify-center">Fique por dentro do calendário de cursos, palestas e eventos da EMPETUR. </p>
        </div>
        <section className="bg-gray-2 justify-center  pb-5 pt-20 dark:bg-dark lg:pb-15 2xl:pt-[80px] xl:pt-[50px]">
        <div data-aos="fade-up" className="container">
          <div className="grid   gap-8 grid-cols-1 xl:grid-cols-3 ">
            <SingleCard
              image="/midia/calendar.svg"
              CardTitle="Calendário de cursos"
              titleHref="/#"
              btnHref="http://192.168.9.16/midia-intranet/prolazer/cronograma.pdf"
              CardDescription="Explore e visite nosso calendário completo de cursos do egape, encontre os tópicos de seu interesse, increva-se e participe."
              Button="Saiba mais"
            />
            <SingleCard
              image="/midia/check-square.svg"
              CardTitle="Calendário de eventos"
              btnHref="http://192.168.9.16/midia-intranet/prolazer/palestras-eventos.pdf"
              CardDescription="Visite nosso calendário de palestras e evento para descobrir etalhes específicos, datas e informações de registro."
              Button="Saiba Mais"
            />
            <SingleCard
              image="/midia/edit.svg"
              CardTitle="Comunicados"
              btnHref="http://192.168.9.16/midia-intranet/prolazer/comunicados.pdf"
              CardDescription="Mantenha-se atualizado com os últimos comunicados da nossa empresa e certifique-se de não perder nenhuma informação!"
              Button="Saiba Mais"
            />
          </div>
        </div>
      </section>
      
        <Accordion/>
       
      
        </>
    )
}

const SingleCard = ({
    image,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
  }) => {
    return (
      <>
        {/*  */}
        <div className="mb-10 mx-4 xl:mx-0 2xl:mx-0 overflow-hidden rounded-lg bg-slate-100  shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
          <img src={image} alt="card-photo" className="w-full h-48 xl:h-44 2xl:h-80 bg-gradient-to-t from-slate-300 to-gray-200  " />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-5 2xl:p-9">
            <h3>
              <a target="_blank"
                href={titleHref ? titleHref : "/#"}
                className="mb-2 block text-xl font-semibold text-dark hover:text-primary dark:text-gray-900 sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="mb-6 2xl:mb-8 text-base xl:text-xs 2xl:text-lg leading-relaxed text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
  
            {Button && (
              <a target="_blank"
                href={btnHref ? btnHref : "#"}
                className="bg-gradient-to-t from-orange-400 to-orange-500 hover:from-orange-600 hover:to-blue-800 text-slate-800 font-bold xl:text-xs 2xl:text-base py-2 px-4  xl:py-2 xl:px-4  2xl:py-3 2xl:px-6 rounded-lg shadow-lg hover:text-white  transform transition-all duration-300  ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce "
              >
                {Button}
              </a>
            )}
          </div>
        </div>
        {/*  */}
      </>
    );
  };