import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import template from '../assets/images/template.png'
import { Link } from 'react-router-dom'

const Template = () => {
  return (
    <div>
      <Header/>
      <div className='flex flex-col md:flex-row justify-between items-center gap-x-14 h-[calc(100vh-110px)] bg-[#040404] text-white mt-[110px] pb-[50px] px-[5%] py-8 '>
        <div >
          <p>Do you want a template for your industry?</p>
          <h2 className='mb-6'>Get a Template for $10</h2>
          <p className='text-[#a5a4a4]'>We have design 5 major templates categories which cut across all industries.</p>
          <div>Engineering | Technology | Acounting | Business | Finance</div>
          <Link to="/get-template">
            <button type='submit' className='forward-button w-full sm:w-[218px] rounded-[40px] bg-white text-black text-base font-semibold px-4 py-3 mt-4'>
              <span className=''>Pay Now</span>
            </button>
          </Link>
        </div>
        <div className=''>
          <img src={template} alt="Prometrics Templates" />
        </div>

      </div>
    </div>
  )
}

export default Template