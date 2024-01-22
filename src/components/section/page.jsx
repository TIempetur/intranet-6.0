"use client"
import Accordion from "./sectionTwo"


export default function SectionTwo (){
    return(
        <>
        <div className="flex justify-center text-center items-center rounded-xl bg-slate-100 w-96 xl:h-11 xl:w-auto 2xl:h-20">
            <p className="text-black text-center text-base xl:text-base 2xl:text-xl justify-center">Fique por dentro do calendário de cursos, palestas e eventos da EMPETUR. </p>
        </div>
        <section className="bg-gray-2 justify-center  pb-5 pt-20 dark:bg-dark lg:pb-15 2xl:pt-[80px] xl:pt-[50px]">
        <div className="container">
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
        <div className="mb-10 mx-4 xl:mx-0 2xl:mx-0 overflow-hidden rounded-lg bg-slate-100 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
          <img src={image} alt="card-photo" className="w-full h-40 xl:h-44 2xl:h-80 bg-gradient-to-r from-blue-200 to-purple-300" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-5 2xl:p-9">
            <h3>
              <a target="_blank"
                href={titleHref ? titleHref : "/#"}
                className="mb-2 block text-xl font-semibold text-dark hover:text-primary dark:text-black sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="mb-6 2xl:mb-8 text-base xl:text-sm 2xl:text-lg leading-relaxed text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
  
            {Button && (
              <a target="_blank"
                href={btnHref ? btnHref : "#"}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg  transform transition-all duration-300  ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce "
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