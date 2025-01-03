import React from 'react'
import logo from '../assets/icons/logo.svg'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-[5%] py-[100px] text-[#C2C6CA] bg-[#161313] '>
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div className='w-[264px]'>
          <img src={logo} alt="Prometrics logo" />
          <p className='mt-8 mb-16 '>At Prometrics, we pride ourselves on our commitment to excellence and our unwavering dedication to client satisfaction.</p>
          <p className='text-[14px] font-medium '>© 2024 Prometrics. All rights reserved.</p>
        </div>

        {/* practice Areas */}
        <div className='flex flex-col gap-4 w-[200px]'>
          <p className='font-semibold text-[#F9FAFB] mb-4'>Practice Areas</p>
          <NavLink to="/pa-employment-based">Employment Based Immigration Consult </NavLink>
          <NavLink to="/pa-employment-consult">Employment Consult</NavLink>
          <NavLink to="/pa-tax">Tax Planning</NavLink>
          <NavLink to="/pa-business">Business Planning</NavLink>
          <NavLink to="/pa-estate">Estate Planning</NavLink>
          <NavLink to="/pa-notarization">Notarization</NavLink>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-4'>
          <p className='font-semibold text-[#F9FAFB] mb-4'>Quick Links</p>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/pa-employment-based">Practice Areas</NavLink>
          <a href="/faqs">FAQs</a>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-4'>
          <p className='font-semibold text-[#F9FAFB] mb-4 '>Contact</p>
          <a href='mailto:info@prometricspro.com'>info@prometricspro.com</a>
          <a href='tel:+1-419-378-9459' >+1 419 378 9459</a>
          <a href='https://calendly.com/prometricspro/legal-consult' target='_blank'>Book a consultation</a>
        </div>
      </div>

      {/* Socials */}
      <div className='flex gap-x-2 mt-[50px] text-white'>
        <a href="https://www.facebook.com/prometricspro?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Prometrics Facebook" /></a>
        <a href="https://x.com/prometricspro?s=21" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Prometrics twitter" /></a>
        <a href="https://www.instagram.com/prometricspro/?igsh=MTc1dXd0a2tlYTZreg%3D%3D" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Prometrics instagram" /></a>
        <a href="https://www.linkedin.com/company/prometrics-professional-hub/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="Prometrics linkedIn" /></a>
      </div>


    </div>
  )
}

export default Footer