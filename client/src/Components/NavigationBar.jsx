import { useState } from 'react'
import {Link,NavLink} from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

const NavigationBar = () => {
  const [isSideMenuOpen,setSideMenu] = useState(false);

  const toggleMenu = () =>{
    setSideMenu(!isSideMenuOpen)
  }

 //console.log(isSideMenuOpen);
  
  return (
    <main className="mx-auto px-5 py-1 ">
      <nav>
        {/*logo*/}
        <section className='flex items-center justify-between lg:ml-16'>
          <div className='navbarlogo '>
            <Link to="/">
              <img src='http://alephyaeducation.com/wp-content/uploads/2022/04/alephya-logo.png'
              className=' h-[70px] w-[80px] md:h-[60px] md:w-[70px]'/>
            </Link>
          </div>

          {/*menu*/}
          <div className='mainnavigationlink hidden lg:block md:block  items-center  '>
            <ul className='flex flex-row items-center gap-7 font-semibold lg:text-sm md:text-[11px] text-green-400'>
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/about">ABOUT</NavLink></li>
              <li><NavLink to="/ourschools">OURSCHOOLS</NavLink></li>
              <li><NavLink to="/academics">ACADEMICS</NavLink></li>
              <li><NavLink to="/admission">ADMISSIONS</NavLink></li>
              <li><NavLink to="/careers">CAREERS</NavLink></li>
              <li><NavLink to="/contact">CONTACT</NavLink></li>              
            </ul>
          </div>

          {/*login && Register */}
          <div className="ml-40 lg:ml-0 md:ml-0 flex flex-row items-center self-center ">
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none
           focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 lg:text-sm lg:px-5 lg:py-2.5 md:text-xs md:px-3 md:py-2 
            text-center me-2 ">Login/Register</button>
          </div>
          
          <div className='navbartoggle'>
            <FiMenu onClick={toggleMenu} className='text-3xl cursor-pointer block lg:hidden md:hidden' />
          </div>
        </section>
         
        
        {/* sidebar mobile menu */}
        {isSideMenuOpen? (
          <div className='fixed h-full w-screen bg-transparent top-0 right-0'>
            <section className='sidenavigationlink text-black bg-slate-300 flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-80 overflow-y-auto'>
              <IoIosCloseCircle className='text-5xl cursor-pointer text-[#FF5421]'
                 onClick={()=>setSideMenu(false)} />
              <div className='toggle lg:hidden md:hidden'>
                <ul className='flex flex-col gap-7 font-semibold text-sm mt-6'>
                  <li><NavLink to="/">HOME</NavLink></li>
                  <li><NavLink to="/about">ABOUT</NavLink></li>
                  <li><NavLink to="/ourschools">OURSCHOOLS</NavLink></li>
                  <li><NavLink to="/academics">ACADEMICS</NavLink></li>
                  <li><NavLink to="/admission">ADMISSIONS</NavLink></li>
                  <li><NavLink to="/careers">CAREERS</NavLink></li>
                  <li><NavLink to="/contact">CONTACT</NavLink></li>              
                </ul>
              </div>
            </section>
          </div>
        ):null}

         {/* <div className={clsx(
            'fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 translate-x-full transition-all'
            )}>
           <section className='text-black bg-white flex-col absolute right-0 top-0 h-screen p-8
              gap-8 z-50  w-70 flex'>
                <IoIosCloseCircle className='text-5xl cursor-pointer'
                 onClick={()=>setSideMenu(false)} />
                <div className='sidenavigationlink flex flex-col'>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/ourschools">OURSCHOOLS</NavLink>
                    <NavLink to="/academics">ACADEMICS</NavLink>
                    <NavLink to="/admission">ADMISSIONS</NavLink>
                    <NavLink to="/careers">CAREERS</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
            </section>
          </div> */}
        
        
        
      </nav>
    </main>
  )
}

export default NavigationBar
