import { useState } from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom"
import logo from "../assets/icons/logo.svg"
import { Menu, ChevronDown } from 'lucide-react';
import './dropdown.css'
import { X } from 'lucide-react';


const  Header = () =>{
  const [ display, setDisplay ] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  
  // Dropdown click event 
  const handleDropdown = () => {
    setDisplay(!display)
  }

  // mobile menu reponsive design
  const handleClick =()=>{
    setShowMenu(!showMenu)
  }
  
  return (
    <div className= {showMenu ? 'bg-tertiary  homeHeader ' : 'bg-tertiary homeHeader'}>
      <div className='flex justify-center items-center gap-2'>
        <Link to='/'><img src={logo} alt="logo" className='w-[39px]'/></Link> 
        <p className='text-[#15110D] text-[25px] font-bold'>Prometrics Legal Hub, LLC</p>
      </div>
      {/* mobile Menu */}
      <div className="md:hidden text-right" >
        {/* handburger - Open menu */}
        <button className='relative' onClick={handleClick}>
          {showMenu ? <X className='border border-primary rounded-lg p-2 w-10 h-10'/> : <Menu />}
        </button>
        <nav className={showMenu ? 'homeNavMenu right-0 duration-300' : 'homeNavMenu -right-full duration-700'}>
          <ul className="flex flex-col gap-5 text-center text-[#15110D] font-medium">
            <li className="mb-2 hover:text-primary"><NavLink to="/">Home</NavLink></li>
            <li className='hover:text-primary'><NavLink to="/about-us">About us</NavLink></li>
            <li className='mb-2'>
            {/* handleDropdown */}
            <button onClick={handleDropdown} className={display ? 'w-full text-center' : ''} >Practice Areas <ChevronDown className='inline'/></button>
              <div className={display ? "px-[5%] py-6 mt-2 flex flex-col gap-3 items-start bg-[#eff1f0]" : "hidden absolute top-[70px] w-full z-10"}>
                <NavLink to='/pa-employment-based' className='text-[14px] hover:text-primary font-medium'>Employment Based Immigration Consult</NavLink>
                <NavLink to='/pa-employment-consult' className='text-[14px] hover:text-primary font-medium'>Employment Consult</NavLink>
                <NavLink to='/pa-tax'  className='text-[14px] font-medium hover:text-primary'>Tax Planning</NavLink>
                <NavLink to='/pa-business'  className='text-[14px] font-medium hover:text-primary'>Business Planning</NavLink>
                <NavLink to='/pa-notarization'  className='text-[14px] font-medium hover:text-primary'>Notarization</NavLink>
              </div>
            </li>
            <li className='hover:text-primary'><NavLink to="/get-template">Templates</NavLink></li>
            <li className='hover:text-primary'><NavLink to="/faqs">FAQS</NavLink></li>
            <li className='mb-4 hover:text-primary'><NavLink to="/contact">Contact</NavLink></li>
            <li className='mb-4 hover:text-primary'><NavLink to="/gallery">Gallery</NavLink></li>
          </ul>
          {/* <button className='mx-auto md:hidden flex justify-center items-center w-full rounded-[40px] bg-[#C39F76] text-white font-semibold py-5 px-4'>
            <Link to="/template">Get Template</Link>
          </button> */}
          <button className='mx-auto md:hidden flex justify-center items-center w-full rounded-[40px] bg-[#C39F76] text-white font-semibold py-5 px-4'>
            <Link to="/contact">Get in touch</Link>
          </button>
        </nav>
      </div>
      
      {/* Desktop Menu */}
      <nav className='hidden md:flex'>
        <ul className="flex items-center gap-4 text-sm text-[#15110D] font-medium">
          <li className="hover:text-primary"><NavLink to="/">Home</NavLink></li>
          <li className='hover:text-primary whitespace-nowrap'><NavLink to="/about-us">About us</NavLink></li>
          <li className='dropdown py-8'>
            <button  className="flex whitespace-nowrap">Practice Areas <ChevronDown /></button>
            <div className="hidden absolute top-[92px] left-0 w-full z-10">
            {/* <div className={display ? "absolute top-[110px] left-0 w-full z-10" : "hidden absolute top-[110px] left-0 w-full z-10"}> */}
              <div className='flex justify-around items-center gap-24 p-8 bg-[#faf6f3] rounded-[40px] mx-[5%]'>
                <div className='flex flex-col gap-5'>
                  <div>
                    <NavLink to="/pa-employment-based" className='text-[16px] hover:text-primary font-semibold'>Employment Based Immigration Consult (EB2-NIW & EB-1A)</NavLink>
                    <p className='text-sm font-regular text-[#6D6D6D]'>Specializing in EB2-NIW and EB-1A visa categories</p>
                  </div>
                  <div>
                    <NavLink to="/pa-employment-consult" className='text-[16px] font-semibold hover:text-primary'>Employment Consult</NavLink>
                    <p className='text-sm font-regular text-[#6D6D6D]'>Our employment consultation services provide personalized support</p>
                  </div>
                  <div>
                    <NavLink to="/pa-tax" className='text-[16px] font-semibold hover:text-primary'>Tax Planning</NavLink>
                    <p className='text-sm font-regular text-[#6D6D6D]'>Tailored tax planning solutions crafted by our experienced tax professionals</p>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div>
                    <NavLink to="/pa-business" className='text-[16px] font-semibold hover:text-primary'>Business Planning</NavLink>
                    <p className='text-sm font-regular text-[#6D6D6D]'>Our business planning services empower entrepreneurs</p>
                  </div>
                  <div>
                    <NavLink to="/pa-estate" className='text-[16px] font-semibold hover:text-primary'>Estate Planning</NavLink>
                    <p className='text-sm font-regular text-[#6D6D6D]'>With our estate planning services, individuals and families can protect their assets</p>
                  </div>
                  <div>
                    <NavLink to="/pa-notarization" className='text-[16px] font-semibold hover:text-primary'>Notarization</NavLink>
                    <p className='text-sm font-regular text-[#6D6D6D]'>Our reliable notarization services offer authentication and verification</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className='hover:text-primary'><NavLink to="/get-template">Templates</NavLink></li>
          <li className='hover:text-primary'><NavLink to="/faqs">FAQS</NavLink></li>
          <li className='hover:text-primary'><NavLink to="/contact">Contact</NavLink></li>
          <li className='hover:text-primary'><NavLink to="/gallery">Gallery</NavLink></li>
        </ul>
      </nav>
      <Link to="/contact" className='hidden md:flex justify-center items-center'> 
        <button className='full-rounded contained-button text-base w-[218px] rounded-[40px] bg-[#C39F76] text-white font-semibold px-4 py-5'>
          <span>Get in touch</span>
          <div className="outside-border full-rounded"></div>
        </button>
      </Link>
    </div>
  )
}

export default Header