import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <nav className="flex flex-row items-center w-full justify-between px-10  h-16 bg-black fixed  text-white ">
            
        <div>
              <a
                className="flex flex-row gap-4 items-center font-bold text-2xl"
                 href="/"
                >
                  <img className="w-8" src="/src/assets/dumbbell.svg" />
                   FITMIND ACADEMY
               </a>
            </div>


            <div className="gap-12 items-center hidden  lg:flex">
                <a href="" className="hover:text-slate-400">
                    Link
                </a>
                <a href="" className="hover:text-slate-400">
                    Planes
                </a>
                <a href="" className="hover:text-slate-400">
                    Testimonios
                </a>
                <Link
                    to="/login"
                    className="bg-red-700 px-8 py-2 rounded-md hover:scale-110 transition-all ease-in-out"
                >
                    Ingresar
                </Link>
            </div>

            <div className={`bg-zinc-900/95 w-4/5 left-0 h-screen absolute top-16 flex-col items-center gap-6 pt-8 transition-all ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
             
              <MobileMenuItem 
                svg={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  } 
              text="Hola"
              href="./"
              />
              <MobileMenuItem 
                svg={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  } 
              text="Prueba"
              href="./"
              />
              <MobileMenuItem 
                svg={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  } 
              text="Nicole"
              href="./"
              />

            </div>

            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
               {
                isOpen ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
               }
            </button>
            

        </nav>
      </>
    )
  }

  function MobileMenuItem({svg, text, href}) {
    return (
    <>
        <a className="flex flex-row gap-8 items-center w-full pl-10 text-xl " href={href}>
            {svg}
            {text}
        </a>
    </>
  
    )
  }
  
MobileMenuItem.propTypes = {
    svg: PropTypes.object,
    text: PropTypes.string,
    href: PropTypes.string
}

  export default Nav
  