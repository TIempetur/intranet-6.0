import Link from 'next/link'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/page'
import BurgerMenu from '@/components/hamburguerMenu/page'


const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Início | EMPETUR',
  description: 'Generated by create next app',
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
}

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
  { href: '/galeria', label: 'Galeria' },
];
const buttonStyle = "capitalize inline-block  relative cursor-pointer transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-200 before:bg-gradient-to-r before:from-orange-600 before:via-orange-600 before:to-orange-500 hover:before:w-full hover:before:opacity-100"
export default function RootLayout({ children }) {

  return (
  
    <html className='!scroll-smooth' lang="pt-BR">
      <body className={`${poppins.className} !scroll-smooth scrollbar-x-hidden scrollbar-thin scrollbar-track-slate-400 scrollbar-thumb-slate-500  bg-gradient-to-b from-blue-700 via-green-200 to-blue-400 `}> 
        <div className="flex flex-wrap min-h-screen items-center justify-between  xl:max-w-4xl 2xl:max-w-7xl mx-auto ">
          <header className="flex justify-between p-5 xl:px-0 2xl:px-0 mb-5 xl:mb-0 w-full sm:flex sm:justify-between sm:items-center  py-6 xl:py-7 2xl:py-10 ">
            <a  href="/">
            <span className="text-4xl xl:text-4xl 2xl:text-5xl text-slate-50 cursor-pointer font-black tracking-wider">EMPETUR</span>
            </a>
             {/* Adicionando o componente do menu hamburguer */}
             <BurgerMenu links={links} />
            {/* Fim do componente do menu hamburguer */}
            <nav className='hidden xl:flex xl:justify-between  text-slate-50  xl:gap-4 2xl:gap-8 text-xs xl:text-base 2xl:text-xl'>
              {links.map((link) => (
                <Link key={link.href} className={buttonStyle} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </header>

          {children}

          <footer className="p-1  sm:justify-center sm:items-center w-full">
            <Footer/>
            <hr />
            <p className='flex justify-center xl:text-xs 2xl:text-sm pt-2'>2024 Intranet EMPETUR &copy; All Right Reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}