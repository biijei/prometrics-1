import React from 'react'
import practicingCeo1 from '../assets/images/new-ceo.png'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'

const CeoProfileSection = () => {
  return (
     <div className='px-[5%] py-16'>
      <div className='bg-white rounded-3xl overflow-hidden shadow-xl'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          {/* Content Side */}
          <div className='max-w-[500px] px-8 md:px-12 py-20'>
            <div className='inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6'>
              Meet Our Founder
            </div>
            
            <p className='text-gray text-base text-justify md:text-lg leading-relaxed mb-8'>
              Prometrics represents clients in employment consult, employment based immigration consult, estate planning, tax planning, business planning and notarization.
            </p>
            
            <h3 className='text-2xl md:text-3xl font-bold text-secondary mb-2'>
              Dr. Fola Odion, PhD (Law), MBA
            </h3>
            
            <p className='text-gray font-medium text-base md:text-lg mb-8'>
              Ph.D. in Law | MBA | General Counsel | Licensed Attorney in New York & Texas
            </p>
            
            <div className='flex gap-3'>
              <a 
                href='https://www.facebook.com/prometricspro?mibextid=LQQJ4d' 
                target='_blank' 
                rel='noopener noreferrer'
                className='bg-tertiary hover:bg-primary/10 p-3 rounded-lg transition-colors duration-200'
              >
                <img src={facebook} alt='Prometrics Facebook' className='w-5 h-5' />
              </a>
              <a 
                href='https://x.com/prometricspro?s=21' 
                target='_blank' 
                rel='noopener noreferrer'
                className='bg-tertiary hover:bg-primary/10 p-3 rounded-lg transition-colors duration-200'
              >
                <img src={twitter} alt='Prometrics twitter' className='w-5 h-5' />
              </a>
              <a 
                href='https://www.instagram.com/prometricspro/?igsh=MTc1dXd0a2tlYTZreg%3D%3D' 
                target='_blank' 
                rel='noopener noreferrer'
                className='bg-tertiary hover:bg-primary/10 p-3 rounded-lg transition-colors duration-200'
              >
                <img src={instagram} alt='Prometrics instagram' className='w-5 h-5' />
              </a>
              <a 
                href='https://www.linkedin.com/company/prometrics-professional-hub/' 
                target='_blank' 
                rel='noopener noreferrer'
                className='bg-tertiary hover:bg-primary/10 p-3 rounded-lg transition-colors duration-200'
              >
                <img src={linkedIn} alt='Prometrics linkedIn' className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className='md:w-[30%] relative'>
            <div className='md:absolute -top-[280px]'>
              <img 
                src={practicingCeo1} 
                alt='Dr. Fola Odion, CEO of Prometrics' 
                className='w-[500px] h-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CeoProfileSection