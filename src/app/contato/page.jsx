import Contato from "@/components/contato/page"


export const metadata= {
    title: "Contato | EMPETUR",
    description: "Made By  Rodrigo Medeiros",

}

export default function Servicos (){
    const h1 = "mt-08 mb-0 text-4xl font-bold"
    const h2 = "mt-05 mb-08 text-2xl"
    return (
        
        <div className="sm:mx-auto"  >
            <Contato/>
            
        </div>
    )
}