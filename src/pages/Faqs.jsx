import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import practicingCeo from '../assets/images/practicing-ceo.png'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import { Link } from 'react-router-dom'

const Faqs = () => {
  return (
    <div>
      <Header/>
      <div className='bg-tertiary mt-[90px] pb-[50px]'>
        <HeroSection subtitile='FAQs' titile='Ask Us Anything' menu='FAQs' bgimage='aboutbg'/>

        {/* FAQ */}
        <div className='px-[5%] pt-[100px] pb-[50px]'>
          <div className='max-w-[654px] text-left md:text-center mx-auto mb-20'>
            <p className='text-[14px] font-medium mb-2'>FAQs</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className='flex flex-col md:flex-row flex-wrap gap-x-7 gap-y-8 mb-8'>
            {faqs.map(({question, answer, key}) => (
              <div key={key} className='max-w-[384px]'>
                <h4 className='mb-4'>{question}</h4>
                <p className='text-[14px]'>{answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ bar */}
        <div className='md:mx-[5%] rounded-[16px] bg-white flex flex-col md:flex-row justify-between md:items-center min-h-[125px] px-8 md:px-[32px] py-[32px] mb-[100px]'>
          <div>
            <p className='text-[23px] text-[#15110D] font-semibold mb-4 '>Still have questions?</p>
            <p className='text-[18px] '>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          </div>
          <Link to="/contact"><button className='forward-button bg-primary w-[150px] h-[42px] rounded-[8px] font-semibold text-white mt-4 md:mt-0 '><span>Get in touch</span></button></Link>
        </div>

        {/* CEO profile */}
        <div className='px-[5%] md:mx-[5%] pt-[50px] md:py-0 bg-[#E2E7ED] my-[50px] rounded-[24px] flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-[60px] '>
          <div className='max-w-[530px] '>
            <p className=' text-[18px] md:text-[23px] text-[#555758] leading-tight mb-8'> Prometrics represents clients in employment consult, employment based immigration consult, estate planning, tax planning, business planning and notariization.</p>
            <p className='text-[23px] md:text-[28px] font-semibold mb-2 '>Dr. Fola Odion, JD, MBA</p>
            <p className='text-[16px] md:text-[18px] md:[20px] font-medium mb-8 '>Ph.D. in Law l MBA l General Counsel</p>
            <div className='flex gap-x-2'>
              <a href="https://www.facebook.com/prometricspro?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Prometrics Facebook" /></a>
              <a href="https://x.com/prometricspro?s=21" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Prometrics twitter" /></a>
              <a href="https://www.instagram.com/prometricspro/?igsh=MTc1dXd0a2tlYTZreg%3D%3D" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Prometrics instagram" /></a>
              <a href="https://www.linkedin.com/company/prometrics-professional-hub/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="Prometrics linkedIn" /></a>
            </div>
          </div>
          <div className='md:h-[435px]'>
            <img src={practicingCeo} alt="Practing CEO of Promrtrics" className='relative md:top-[-100px]' />
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Lorem ipsum dolor sit amet consectetur. In viverra feugiat nulla a sed. Adipiscing suspendisse tellus quisque nisl eu.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Lorem ipsum dolor sit amet consectetur. Id cursus donec sit purus nulla amet ut scelerisque. Egestas massa praesent lectus maecenas pellentesque at '
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Lorem ipsum dolor sit amet consectetur. Massa enim sit maecenas quisque aliquam. Accumsan eu '
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Lorem ipsum dolor sit amet consectetur. In viverra feugiat nulla a sed. Adipiscing suspendisse tellus quisque nisl eu.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Lorem ipsum dolor sit amet consectetur. Id cursus donec sit purus nulla amet ut scelerisque. Egestas massa praesent lectus maecenas pellentesque at '
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Lorem ipsum dolor sit amet consectetur. Massa enim sit maecenas quisque aliquam. Accumsan eu '
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Lorem ipsum dolor sit amet consectetur. In viverra feugiat nulla a sed. Adipiscing suspendisse tellus quisque nisl eu.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Lorem ipsum dolor sit amet consectetur. Id cursus donec sit purus nulla amet ut scelerisque. Egestas massa praesent lectus maecenas pellentesque at '
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer: 'Lorem ipsum dolor sit amet consectetur. Massa enim sit maecenas quisque aliquam. Accumsan eu '
  },
]


export default Faqs