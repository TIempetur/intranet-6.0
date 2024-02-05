"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import React, { useState } from "react";



const Accordion = () => {
  useEffect(() => {
    AOS.init({
         duration: 600,
         once: false,
       })
 }, [])
  return (
    <section className="relative z-20 overflow-hidden  text-white pb-12 pt-2 dark:bg-dark xl:pb-0 2xl:pb-[90px] 2xl:pt-[5px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                
              </span>
              <h2 data-aos="fade-up" className="mb-4 text-xl xl:text-2xl 2xl:text-4xl font-bold text-gray-900  sm:text-[40px]/[48px]">
                Portarias e formulários
              </h2>
              <p className="text-base  text-body-color dark:text-dark-6">
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="-mx-4 flex flex-wrap">
          <div className="w-full mx-4 xl:mx-0 2xl:mx-0 px-4 lg:w-1/2">
            <AccordionItem
              header="Portaria de Lotação"
              text="click no link abaixo para fazer o download. "
              linkSix=" download"              
            />
            <AccordingMonth
              header="Portaria de Nomeação"
              text="Selecione o mês que deseja fazer o download."
              jan="Janeiro" 
              fev="Fevereiro"
              
              />
            <AccordingMonthTwo
              header="Portaria de Exoneração"
              text="click no link abaixo para fazer o download."
              jan=" Janeiro"
              fev="Fevereiro"
              />
          </div>
          <div className="w-full mx-4 xl:mx-0 2xl:mx-0 px-4 lg:w-1/2">
            <AccordionItem
              header="Formulário de Auxílio Creche"
              text="click no link abaixo para fazer o download."
              linkThree=" download"
            />
            <AccordionItem
              header="Formulário de Auxílio Educação"
              text="click no link abaixo para fazer o download."
              linkTwo=" download"
            />
            <AccordionItem
              header="Formulário de Portador de Necessidade Especial"
              text="click no link abaixo para fazer o download. "
              linkOne=" download"
              
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        
          <defs>
            <linear-Gradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linear-Gradient>
          </defs>
       
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text,linkOne,linkTwo,linkThree,linkFour,linkFive,linkSix }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <>
    <div className="mb-8 w-full  rounded-lg bg-slate-100  p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] xl:p-4 2xl:p-8 lg:px-6 xl:px-8">
      <button
        className={`flex justify-center items-center w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5  dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg xl:text-sm 2xl:text-lg font-semibold text-gray-900">
            {header}
          </h4>
        </div>
      </button>
      
      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        } `}
      >
        <p className="py-3 text-sm xl:text-sm 2xl:text-lg flex justify-start text-start items-start text-black leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
        <div className="flex  items-center">
        <a target="_blank" className="text-black underline text-sm xl:text-sm 2xl:text-lg  flex font-bold  items-center " href="#">{linkOne}</a>
        </div>
        <div className="flex items-center">
        <a target="_blank" className="text-black underline text-sm xl:text-sm 2xl:text-lg  flex font-bold  items-center " href="#">{linkTwo}</a>
        </div>
        <div className="flex justify-start items-center">
        <a target="_blank" className="text-black underline text-sm xl:text-sm 2xl:text-lg  flex font-bold  items-center " href="#">{linkThree}</a>
        </div>
        <div className="flex justify-start items-center">
        <a target="_blank" className="text-black underline text-sm xl:text-sm 2xl:text-lg  flex font-bold  items-center " href="#">{linkFour}</a>
        </div>
        <div className="flex justify-start items-center">
        <a target="_blank" className="text-black underline text-sm xl:text-sm 2xl:text-lg  flex font-bold  items-center " href="#">{linkFive}</a>
        </div>
        <div className="flex justify-start items-center">
        <a target="_blank" className="text-black underline text-sm xl:text-sm 2xl:text-lg  flex font-bold  items-center " href="http://192.168.9.16/midia-intranet/prolazer/lotacao.pdf">{linkSix}</a>
        </div>
        
      </div>
      <div>
        
      </div>
      
    </div>
    </>
  );
};

const AccordingMonth = ({ header, text,jan, fev,march,april,may,jun,jul,ago,set,oct,nov,dez }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <>
    <div className="mb-8 w-full  rounded-lg bg-slate-100 p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] xl:p-4 2xl:p-8 lg:px-6 xl:px-8">
      <button
        className={`flex justify-center items-center w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5  dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg xl:text-sm 2xl:text-lg font-semibold text-gray-900">
            {header}
          </h4>
        </div>
      </button>
      
      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        } `}
      >
        <p className="py-3 text-sm xl:text-sm 2xl:text-lg flex justify-start text-start items-start text-black leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
        <ul>
          <li><a target="_blank" className="text-black underline text-sm xl:text-sm 2xl:text-sm  flex font-bold  items-center " href="http://192.168.9.16/midia-intranet/prolazer/nomeacao/jan.pdf">{jan}</a></li>
           <li><a target="_blank" className="text-black underline text-sm xl:text-sm 2xl:text-sm  flex font-bold  items-center " href="http://192.168.9.16/midia-intranet/prolazer/nomeacao/fev.pdf">{fev}</a></li>
        </ul>
          
      </div>
      <div>
        
      </div>
      
    </div>
    </>
  );
};


const AccordingMonthTwo = ({ header, text,jan, fev,march,april,may,jun,jul,ago,set,oct,nov,dez }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <>
    <div className="mb-8 w-full  rounded-lg bg-slate-100 p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] xl:p-4 2xl:p-8 lg:px-6 xl:px-8">
      <button
        className={`flex justify-center items-center w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5  dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg xl:text-sm 2xl:text-lg font-semibold text-slate-950">
            {header}
          </h4>
        </div>
      </button>
      
      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        } `}
      >
        <p className="py-3 text-sm xl:text-sm 2xl:text-lg flex justify-start text-start items-start text-black leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
        <ul>
          <li><a target="_blank" className="text-black underline text-sm xl:text-sm 2xl:text-sm  flex font-bold  items-center " href="http://192.168.9.16/midia-intranet/prolazer/exoneracao/jan.pdf">{jan}</a></li>
           <li><a target="_blank" className="text-black underline text-sm xl:text-sm 2xl:text-sm  flex font-bold  items-center " href="http://192.168.9.16/midia-intranet/prolazer/exoneracao/fev.pdf">{fev}</a></li>
        </ul>
          
      </div>
      <div>
        
      </div>
      
    </div>
    </>
  );
};

