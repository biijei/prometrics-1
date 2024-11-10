import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TemplateCard from '../components/TemplateCard'
import { Scale } from 'lucide-react'

const DownloadTemplate = () => {
  return (
    <div>
      <Header/>
      <div className='bg-white mt-[90px] px-[5%] pt-[50px] pb-[50px]'>
        <div className='text-center mb-[50px]'>
          <h2 className='mb-4'>Get The Template You Want For Growth</h2>
          <p className='text-[18px]'>With 5 different template accross all industry you are set for your journey to greatness.</p>
        </div>
        
        <p className='text-[24px] font-medium mb-8'>Download the template that is applicable to your industry</p>
        <div className='flex flex-col md:flex-row items-center gap-x-10 text-white mb-8'>
          <TemplateCard
            img={<Scale className="text-white bg-primary p-1 w-8 h-8 rounded-sm" />}
            title='Engineering'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, alias!'
          />
          <TemplateCard
            img={<Scale className="text-white bg-primary p-1 w-8 h-8 rounded-sm" />}
            title='Technology'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, alias!'
          />
          <TemplateCard
            img={<Scale className="text-white bg-primary p-1 w-8 h-8 rounded-sm" />}
            title='Acounting'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, alias!'
          />
        </div>
        <div className='flex flex-col md:flex-row items-center gap-x-10 text-white'>
          <TemplateCard
            img={<Scale className="text-white bg-primary p-1 w-8 h-8 rounded-sm" />}
            title='Business'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, alias!'
          />
          <TemplateCard
            img={<Scale className="text-white bg-primary p-1 w-8 h-8 rounded-sm" />}
            title='Finance'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, alias!'
          />
        </div>

      </div>
    </div>
  )
}

export default DownloadTemplate