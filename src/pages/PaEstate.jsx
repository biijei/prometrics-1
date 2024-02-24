import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import AccordionFaq from '../components/AccordionFaq'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import pa from '../assets/images/employment-consult.png'

const PaEstate = () => {
  return (
    <div>
      <Header/>
      <div className='bg-tertiary mt-[110px] pb-[50px]'>
        <HeroSection subtitile='Practice Areas' titile='Estate Planning' 
          menu='Practice Areas' menudetails = '/ Estate Planning' bgimage='aboutbg'
        />
        <div className='px-[5%] py-[50px] sm:py-[100px] '>
          <div className='max-w-[654px] text-left md:text-center mx-auto mb-20'>
            <p className='text-[14px] font-medium mb-2'>PRACTICE AREAS</p>
            <h2>We Are Especially Skilled in the Following Practice Areas</h2>
          </div>
          <div className='lg:grid grid-cols-[345px_auto] gap-x-16'>
            <div className='flex flex-col gap-y-4 mb-10'>
              <Accordion 
                title='Employment Based Immigration Consult (EB2-NIW & EB-1A)' 
                content='Our expert team offers comprehensive guidance to professionals seeking employment-based immigration opportunities in the United States.'
              />
              <Accordion 
                title='Employment Consult' 
                content='Our employment consultation services provide personalized support to individuals and businesses offering strategic guidance'
              />
              <Accordion 
                title='Tax Planning' 
                content='Tailored tax planning solutions crafted by our experienced tax professionals help individuals and businesses navigate complex tax laws.'
              />
              <Accordion 
                title='Business Planning' 
                content='Our business planning services empower entrepreneurs and organizations to develop comprehensive strategies.'
              />
              <Accordion 
                title='Estate Planning' 
                content='With our estate planning services, individuals and families can protect their assets, preserve wealth, and plan for the future.'
              />
              <Accordion 
                title='Notarization' 
                content='Our reliable notarization services offer authentication and verification for a wide range of legal documents, contracts, and agreements.'
              />
            </div>

            <div>
              <img src={pa} alt="Employment Based Immigration Consult"  className='mb-6'/>
              <h3 className='text-[23px] font-semibold leading-tight mb-6'>Estate Planning</h3>
              <p className='mb-6'>Are you a skilled professional seeking to advance your career in the United States? Look no further than our Employment Based Immigration Consult services at Prometrics Law Consulting. With specialized expertise in EB2-NIW (National Interest Waiver) and EB-1A (Extraordinary Ability) visa categories, we offer expert guidance to individuals looking to secure employment-based visas and pursue exciting opportunities in the U.S. market. Our dedicated team understands the complexities of the immigration process and is committed to providing personalized support every step of the way.</p>
              <p className='mb-6'>At Prometrics Law Consulting, we recognize the unique challenges and aspirations of talented professionals like you. That&apos;s why we go above and beyond to ensure a smooth and seamless transition into the U.S. workforce. Whether you&apos;re a highly skilled researcher, academic, entrepreneur, or professional in any field, our comprehensive services are tailored to meet your specific needs and objectives. From initial consultation to visa application preparation and beyond, we&apos;re here to empower you to achieve your career goals with confidence and peace of mind.</p>
              <p className='mb-10'>With our proven track record of success and unwavering dedication to client satisfaction, Prometrics Law Consulting is your trusted partner in navigating the complex landscape of employment-based immigration. Let us help you unlock new opportunities and embark on an exciting journey toward professional growth and fulfillment in the United States. Contact us today to learn more about how we can assist you in securing your EB2-NIW or EB-1A visa and kickstart your career in the land of opportunity.</p>
              <div className='flex flex-col sm:flex-row items-center gap-x-6 gap-y-4 mt-4'>
                <button className='full-rounded contained-button w-full sm:w-[218px] bg-primary rounded-[40px] text-white text-base px-4 py-5 font-semibold'>
                  <a href="https://calendly.com/prometricspro/legal-consult" target='_blank'>
                  <span>Book a Consultation</span>
                  <div className="outside-border full-rounded"></div>
                  </a>
                </button>
                <button className='forward-button w-full sm:w-[218px] rounded-[40px] text-primary text-base border border-primary px-4 py-5 font-semibold'>
                  <Link to='/contact'>
                  <span>Contact Us</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQS */}
        <div className='px-[5%] text-[#F2F8FC] bg-[#100D0A] py-[50px] md:py-[100px] '>
          <div className='max-w-[654px] text-left md:text-center mx-auto mb-10 md:mb-20'>
            <p className='text-[14px] font-medium mb-2'>FAQs</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className='max-w-[768px] flex flex-col gap-4 mx-auto'>
            <AccordionFaq
              title='Question 1'
              content='Lorem ipsum dolor sit amet consectetur. Urna eget lacus urna vulputate vitae ac cursus dignissim quam. Nibh tempus consectetur ut duis semper. Elementum aenean at turpis mi massa neque dictum sapien adipiscing. Iaculis ultrices cursus consequat duis vitae vel lacus et feugiat.'
            />
            <AccordionFaq
              title='Question 2'
              content='Lorem ipsum dolor sit amet consectetur. Urna eget lacus urna vulputate vitae ac cursus dignissim quam. Nibh tempus consectetur ut duis semper. Elementum aenean at turpis mi massa neque dictum sapien adipiscing. Iaculis ultrices cursus consequat duis vitae vel lacus et feugiat.'
            />
            <AccordionFaq
              title='Question 3'
              content='Lorem ipsum dolor sit amet consectetur. Urna eget lacus urna vulputate vitae ac cursus dignissim quam. Nibh tempus consectetur ut duis semper. Elementum aenean at turpis mi massa neque dictum sapien adipiscing. Iaculis ultrices cursus consequat duis vitae vel lacus et feugiat.'
            />
            <AccordionFaq
              title='Question 4'
              content='Lorem ipsum dolor sit amet consectetur. Urna eget lacus urna vulputate vitae ac cursus dignissim quam. Nibh tempus consectetur ut duis semper. Elementum aenean at turpis mi massa neque dictum sapien adipiscing. Iaculis ultrices cursus consequat duis vitae vel lacus et feugiat.'
            />
            <AccordionFaq
              title='Question 5'
              content='Lorem ipsum dolor sit amet consectetur. Urna eget lacus urna vulputate vitae ac cursus dignissim quam. Nibh tempus consectetur ut duis semper. Elementum aenean at turpis mi massa neque dictum sapien adipiscing. Iaculis ultrices cursus consequat duis vitae vel lacus et feugiat.'
            />
          </div>
        </div>

        {/* Testimonial */}
        <div className='px-[5%] bg-[#F9FAFB] py-[50px] flex flex-col md:flex-row justify-center items-center gap-x-12'>
          <div >
            <p className='text-[14px] font-medium mb-2'>TESTIMONIALS</p>
            <h2 className='max-w-[311px] mb-8 leading-tight'>What Our Clients Are Saying About Us</h2>
          </div>

          <div className='flex flex-col gap-4 mb-4 md:mb-0'>
            <div className='flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px] md:mb-auto'>
              <p className='text-[13px] font-light mb-4 '>`Folake&apos;s dedication and expertise in the field of immigration coaching are truly commendable. What sets Fola apart is her personalized approach to coaching. She takes the time to understand her client&apos;s specific circumstances, aspirations, and concerns. I wholeheartedly recommend her as an immigration coach because her professionalism, expertise, and genuine commitment to her clients make her a standout in the field. Fola delivers in a timely manner.`</p>
              <p className='text-[13px] text-primary font-medium mb-1'>Bukola Amao-Taiwo (Ph.D)</p>
              <p className='text-[13px] font-light'>Entrepreneurship Research</p>
            </div>
            <div className='flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px]'>
              <p className='text-[13px] font-light mb-4 '>`It was amazing! Fola was super helpful in assisting me negotiate legal settlements. Her guidance and counsel enabled me make better informed decisions.`</p>
              <p className='text-[13px] text-primary font-medium mb-1'>Daniel Ejairu</p>
              <p className='text-[13px] font-light'>Supply chain Analyst at Belden Inc.</p>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px] md:mb-auto'>
              <p className='text-[13px] font-light mb-4 '>`Fola&apos;s level of professionalism in reviewing my CV was topnotch and the way she interpreted my roles and was able to communicate same in my CV was very brillant.Thank you Fola`</p>
              <p className='text-[13px] text-primary font-medium mb-1'>Ola&apos; Aruwayo</p>
              <p className='text-[13px] font-light'>International Business law</p>
            </div>
            <div className='flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px]'>
              <p className='text-[13px] font-light mb-4 '>`Working with Fola has been an absolute delight. She is a talented professional who is not only knowledgeable in her industry, but also committed to giving excellent service and assistance. She takes her time to understand specific requirements and creates a solution that exceedes expectations. I cannot recommend Fola highly enough for any business/legal seeking counsel, solutions, and great customer service!`</p>
              <p className='text-[13px] text-primary font-medium mb-1'>Ehi Eseka</p>
              <p className='text-[13px] font-light'>Project Coordinator</p>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default PaEstate