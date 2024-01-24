import Image from "next/image"
import Slide from "./slide"

export default function Hero (){
  const linkSei = "flex justify-center items-center  w-72 h-64 xl:w-48 xl:h-48  2xl:w-56 2xl:h-56 transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-105 hover:bg-gray-50 duration-150  bg-zinc-200  shadow-lg shadow-stone-500/50  rounded-3xl "
  const linkHelpDesk = "flex justify-center items-center  w-72 h-64 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-105 hover:bg-gray-50 duration-150 bg-zinc-200 shadow-lg shadow-stone-500/50  rounded-3xl"
  const linkExpresso = "flex justify-center items-center  w-72 h-64 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-105 hover:bg-gray-50 duration-150 bg-zinc-200 shadow-lg shadow-stone-500/50 rounded-3xl"
    return (
        <>
        <section className="flex flex-wrap justify-center sm:flex sm:justify-center sm:items-center items-center pt-15   md:grid-cols-1 sm:gap-4 xl:pt-[20px] 2xl:pt-[30px]   2xl:pb-[50px] xl:pb-[70px]  dark:bg-dark">
        <div className="container m-auto">
          <div className="flex flex-wrap  justify-between -mx-4">
            {/*left section */}
            <div className="w-full px-4 xl:w-1/2 2xl:w-7/12 sm:block sm:mb-5 sm:mt-5">
                <div className="flex justify-center flex-wrap lg:flex lg:justify-center lg:items-center space-x-2">
                    <div  className="flex flex-wrap justify-center md:flex lg:justify-center items-center gap-6 ">
                <a className={linkSei} href="https://sei.pe.gov.br" target="_blank" rel="noopener noreferrer"><Image src="/midia/logo_svg_sei.svg" width={260} height={0} className="xl:w-40 2xl:w-52" alt="SEI"/></a>
                <a className={linkHelpDesk} href="http://192.168.8.2/glpi/" target="_blank" rel="noopener noreferrer"><Image src="/midia/help-desk-svg.svg" width={240} height={0} className="xl:w-40 2xl:w-52"  alt="HelpDesk"/></a>
                <a className={linkExpresso} href="https://www.expresso.pe.gov.br/login.php" target="_blank" rel="noopener noreferrer"><Image src="/midia/logo_svg_expresso.svg" width={280} height={0} className="xl:w-40 2xl:w-52"  alt="Expresso"/></a>
                    </div>
                    <Slide/>
                </div>
              
            </div>
            {/*left section */}
            <div className="w-full px-4 sm:block sm:mb-5 sm:mt-5 lg:w-4/12 xl:w-4/12">
                <div className="justify-center items-center">
                  <div className="flex justify-center items-center">
                    <Image src="/midia/logo-emp-white.svg" width={256} height={0} className="2xl:w-96 mt-5 lg:mt-0 2xl:mt-0" alt="logo-empetur"/>
                  </div>
                  <div className="pt-8 ml-4 text-xl xl:text-base 2xl:text-lg  grid justify-center ">
                    <p className="text-gray-200">Empetur, desde 1972, destacando-se na promoção do turismo em Pernambuco, guiada por valores de transparência, inovação e sustentabilidade.</p>
                  </div>
                  <div className="flex justify-center items-center justify-self-center pt-2">
                  <a href="http://empetur.pe.gov.br" target="_blank" rel="noopener noreferrer">
                  <button className='bg-gradient-to-r from-blue-500 to-blue-100 hover:from-blue-50 hover:to-blue-800 text-black  py-3 px-6 rounded-lg shadow-lg shadow-gray-800 transform transition-all duration-300  ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce '>
                   Saiba Mais
                   </button></a>
                  </div>
                  <div className="flex pt-5 2xl:pt-14 justify-center items-center">
                    <p className="text-xl 2xl:text-3xl xl:text-lg text-gray-200 text-bold font-semibold italic">Siga nossas redes sociais!</p>
                    
                  </div>
                  <div className="pt-2">
                  <div className="flex gap-3 justify-center items-center">
          
                  <a href="https://www.instagram.com/empetur.pe/" target="_blank" rel="noopener noreferrer"><Image src="/social-midia/instagram-color.png" width={40} height={0} className="mt-1 xl:w-8 2xl:w-10"/></a>
                  <a href="https://www.facebook.com/descubrapernambuco/?locale=pt_BR" target="_blank" rel="noopener noreferrer"><Image src="/social-midia/facebook-color.png" width={40} height={0} className="mt-1 xl:w-8 2xl:w-10"/></a>
                  <a href="https://www.youtube.com/@empetur" target="_blank" rel="noopener noreferrer"><Image src="/social-midia/youtube_color.png" width={40} height={0} className="mt-1 xl:w-8 2xl:w-10"/></a>
                  <a href="https://www.tiktok.com/@empetur" target="_blank" rel="noopener noreferrer"><Image src="/social-midia/tik-tok-color.png" width={40} height={0} className="mt-1 xl:w-8 2xl:w-10"/></a>
                  </div>
                  
                  </div>
                </div>
            </div>
          </div>
        <div className=" 2xl:pb-5 xl:pb-4 flex justify-center items-center">
          <a href="#sectionTwo"><Image src="/midia/arrow.svg" width={64} height={0} className="animate-bounce xl:w-10 xl:h-10 2xl:w-16 2xl:h-16" alt="Arrow"/></a>
        </div>
        </div>
      </section>
      
        </>
     
    )
}
