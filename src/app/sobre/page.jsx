export const metadata= {
    title: "Sobre | EMPETUR",
    description: "Made by Rodrigo Medeiros",
    
    openGraph:{
    tittle: "sobre | EMPETUR",
    description: "Made by Rodrigo Medeiros",
    
    } 
}
export default function About() {
    const h1 = "2xl:mt-10 flex justify-center xl:ml-2 sm:flex sm:justify-start mb-6 text-xl sm:4xl font-bold"
    const h2 = "mt-8 mb-4 text-xl font-bold"
    const p = "mt-5 mb-2 text-xs xl:text-xs 2xl:text-base"
    const li = "text-xs xl:text-xs 2xl:text-base sm:text-base"
  
    return (
      <main className="pb-10" >
        <h1 className={h1}>EMPRESA DE TURISMO DE PERNAMBUCO</h1>
        <div className="w-full bg-gray-100 p-2 rounded-md">
        <h2 className={h2}>O que é a EMPETUR?</h2>
        <p className={p}>A EMPRESA DE TURISMO DE PERNAMBUCO GOVERNADOR EDUARDO CAMPOS S. A. - EMPETUR é uma sociedade anônima de capital aberto, integrante da administração indireta do Poder Executivo do Estado de Pernambuco, vinculada à Secretaria de Turismo e Lazer, por força da Lei Estadual nº 13.056, de 29 de junho de 2006, regida pelo presente Estatuto e pela Lei Federal nº 13.303, de 30 de junho de 2016, pela Lei Federal nº 6.404, de 15 de dezembro de 1976, pela Lei nº 6.385, de 07 de dezembro de 1976, pelo Decreto Estadual nº 43.984, de 27 de dezembro de 2016, e pelas diretrizes sobre governança corporativa da Organização para a Cooperação e Desenvolvimento Econômico (OCDE) e demais disposições legais que lhe forem aplicáveis. 
        Tem como objeto social, promover e divulgar o turismo Estadual, no País e no Exterior, de modo a ampliar o ingresso e a circulação de fluxos turísticos, no território pernambucano; analisar o mercado turístico e planejar o seu desenvolvimento, definindo as áreas, empreendimentos e ações prioritárias a serem estimuladas e incentivadas; fomentar e financiar, direta ou indiretamente, as iniciativas, planos, programas e projetos que visem ao desenvolvimento do turismo; estimular as iniciativas destinadas a preservar o ambiente natural e a fisionomia social e cultural dos locais turísticos e das populações afetadas pelo seu desenvolvimento, em articulação com os demais órgãos e entidades competentes; promover, junto às autoridades competentes, os atos e medidas necessários ao desenvolvimento das atividades turísticas, à melhoria ou ao aperfeiçoamento dos serviços oferecidos aos turistas e a facilitação do deslocamento de pessoas no território Pernambucano, com finalidade turística; celebrar contratos, convênios, acordos e ajustes com organizações e entidades públicas ou privadas, nacionais ou internacionais, receber e fazer doações, levantar empréstimos e gerir fundos, para a realização dos seus objetivos; prestar serviços de consultoria e de promoção especializada nas áreas de turismo e eventos; conceder prêmios e outros incentivos ao turismo; participar de entidades nacionais e internacionais de turismo; realizar a produção, divulgação e organização de eventos, feiras e exposições; construir e reformar qualquer tipo de edificação em sua propriedade ou de terceiros, quando a EMPETUR detenha a posse; explorar comercialmente direta ou por meio de terceiros, a publicidade, merchandising, mídia e telecomunicações de quaisquer espécies; realizar a locação, comodato, permuta, arrendamento ou qualquer forma de cessão para terceiros de área de sua propriedade, ou ainda, áreas que a EMPETUR detenha a posse, para a realização de eventos de qualquer espécie, bem como, para a exploração comercial de qualquer atividade autorizada pela sociedade; fazer o licenciamento de marcas de sua titularidade; realizar o apoio institucional ou patrocínio de projetos ou eventos de interesse turístico, através do repasse de recursos financeiros, bens ou serviços; realizar a concessão a terceiros, de quaisquer tipos de direitos que recaiam sobre a exploração comercial das áreas de sua propriedade ou posse;realizar a exploração comercial direta ou por meio de terceiros, de materiais turísticos relacionados ao Estado de Pernambuco.</p>
          </div>  
          <div className="w-full bg-gray-100 p-2 mt-3 rounded-md">
        <h2 className={h2}>Breve Histórico</h2>
        <p className={p}>Fundada ainda na década de 1960, a EMPETUR é uma empresa de economia mista subordinada à Secretaria de Turismo e Lazer do Estado de Pernambuco (SETUR). Seu objetivo é desenvolver o planejamento operacional das ações de turismo no Estado e realizar ações de fomento, articulação e gestão turísticas. EMPETUR é a empresa responsável pela divulgação do Estado, seu patrimônio e cultura, fomentando a demanda por Pernambuco como produto turístico, promovendo o desenvolvimento do turismo e sua estruturação em estreita consonância com uma política de desenvolvimento social e econômico. Dessa forma, está incumbida de vender a imagem e oportunidade turística do Estado, possibilitando, através de sua estrutura, os variados segmentos do turismo, contribuindo inclusive para a economia do Estado.
        </p>
          </div>
        <div className="w-full bg-gray-100 p-2 mt-3 rounded-md">

        <h2 className={h2}>Missão</h2>
        <p className={p}>Planejar e fomentar o turismo sustentável para o desenvolvimento econômico e social de Pernambuco, valorizando nosso patrimônio cultura e ambiental.</p>
        </div>
        <div className="w-full bg-gray-100 mt-3 p-2 rounded-md">

        <h2 className={h2}>Visão</h2>
        <p className={p}>Ser referência nacional em gestão, posicionando Pernambuco como o principal destino turístico do Nordeste até 2024. </p>
        </div>
        <div className="w-full bg-gray-100 mt-3 p-2 rounded-md">

        <h2 className={h2}>Valores</h2>

        <ul>
        <li className={li} >Compromisso;</li>
        <li className={li}>Ética;</li>
        <li className={li}>Responsabilidade Social;</li>
        <li className={li} >Inovação e Excelência.</li>
        </ul>
        </div>
     
      </main>
    )
  }
