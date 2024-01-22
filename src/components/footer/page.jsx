export default function Footer () {
  return (
    <>
    <hr />
      <footer className="flex flex-wrap justify-center items-center pt-5 sm:ml-40 sm:w-5/6  2xl:pb-5 sm:pt-10  md:pt-[20px]">
        <div className="container">
          <div className=" flex flex-wrap">
            <div className="flex flex-wrap justify-center items-center mx-auto   sm:px-4  sm:w-3/12">
              <div className="block justify-center items-center  mb-2 w-60 ">
                <a href="/" className="flex justify-center mb-5 sm:mb-05 sm:inline-block max-w-[200px]">
                  <img
                    src="/midia/logo-emp-svg-website.svg"
                    alt="logo"
                    className="flex justify-center ml-10 w-24 xl:w-24 2xl:w-28 sm:ml-4 "
                  />
                </a>
                <div className="flex justify-center ">
                <img className="w-8  flex mb-10  px-1" src="/midia/map-pin.svg" alt="location" />
                <p className="text-sm mb-1  xl:text-xs 2xl:text-base text-body-color dark:text-dark-6">
                Av. Prof. Andrade Bezerra, S/N - Salgadinho, Olinda - PE, 53111-970
                </p>
                </div>
                <p className="flex justify-center ml-1 items-center sm:flex sm:justify-start sm:items-center text-sm font-medium text-dark dark:text-black">
                  <span className="mr-3 text-primary">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_941_15626)">
                        <path
                          d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </span>
                  <span className="text-base xl:text-xs 2xl:text-base">(81) 3182-8000</span>
                </p>
              </div>
            </div>

            <LinkGroup headerOne="Início">
              <NavLink link="https://www.portaldoservidor.pe.gov.br/web/portal-do-servidor;jsessionid=B17054AA3ECFF59BC5EA9B972A40EEFF" label="Portal do servidor" />
              <NavLink link="https://efisco.sefaz.pe.gov.br/sfi_com_sca/PRMontarMenuAcesso" label="E-Fisco" />
              <NavLink link="https://docs.google.com/spreadsheets/u/0/d/1BfKmXuDPXR6BzeDlR5VTnI-MhgveTHXwpiBqhlFuNpA/edit?pli=1#gid=1268033287" label="Almoxarifado" />
            </LinkGroup>
            <LinkGroup headerTwo="Sobre">
              <NavLink link="http://192.168.9.16/midia-intranet/informatica/ManualHelpDesk.pdf" label="Manual do HelpDesk" />
              <NavLink link="https://www.cepe.com.br/" label="Diario Oficial" />
              <NavLink link="https://www.peintegrado.pe.gov.br/Default.aspx" label="PE Integrado" />
            </LinkGroup>
            <LinkGroup headerThree="Contato">
              <NavLink link="http://web.transparencia.pe.gov.br/" label="Portal da transparência" />
              <NavLink link="http://192.168.9.16/midia-intranet/prolazer/PapelTimbradoEmpetur.docx" label="Papel Trimbrado EMPETUR" />
              <NavLink link="/#" label=" " />
            </LinkGroup>

            <div className="w-full flex flex-wrap justify-center items-start   px-4 sm:w-1/2 lg:w-3/12">
              <div className="block justify-center 2xl:mb-16 xl:mb-1 w-full">
                <h4 className="text-center sm:text-start mb-7 mt-6 text-lg xl:text-base 2xl:text-lg font-semibold text-dark dark:text-white">
                Redes sociais
                </h4>
                <div className="mb-6 gap-2 flex justify-center sm:justify-start items-center">
                  <a target="_blank" href="https://www.instagram.com/empetur.pe/"><img className="w-8 xl:w-6 2xl:w-8" src="/social-midia/instagram-color.png" alt="instagram" /></a>
                  <a target="_blank" href="https://www.facebook.com/descubrapernambuco/?locale=pt_BR"><img className="w-8 xl:w-6 2xl:w-8" src="/social-midia/facebook-color.png" alt="facebook" /></a>
                  <a target="_blank" href="https://www.youtube.com/@empetur"><img className="w-8 xl:w-6 2xl:w-8" src="/social-midia/youtube_color.png" alt="youtube" /></a>
                  <a target="_blank" href="https://www.tiktok.com/@empetur"><img className="w-8 xl:w-6 2xl:w-8" src="/social-midia/tik-tok-color.png" alt="TikTok" /></a>
                 
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};



const LinkGroup = ({ children, headerOne,headerTwo,headerThree,linkOne,linkTwo,linkThree }) => {
  return (
    <>
      <div className="flex xl:mt-6  justify-center items-start w-full px-5 sm:w-1/2 lg:w-2/12">
        <div className="block gap-2 justify-center mx-auto items-center  w-full">
          <a href="/"><h4 className="flex justify-center sm:justify-start  text-lg xl:text-sm 2xl:text-lg font-semibold text-dark dark:text-white">
            {headerOne}
          </h4>{linkOne}</a>
          <a   href="/sobre"><h4 className="flex justify-center sm:justify-start  text-lg xl:text-sm 2xl:text-lg  font-semibold text-dark dark:text-white">
            {headerTwo}
          </h4></a>
          <a  href="/contato"><h4 className="flex justify-center sm:justify-start   text-lg xl:text-sm 2xl:text-lg font-semibold text-dark dark:text-white">
            {headerThree}
          </h4></a>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li className="flex justify-center sm:justify-start">
      <a target="_blank"
        href={link}
        className="inline-block text-sm xl:text-xs 2xl:text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
