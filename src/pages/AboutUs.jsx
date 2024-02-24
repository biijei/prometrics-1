import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import avatar from '../assets/images/Avatar.png'
import avatar1 from '../assets/images/Avatar (1).png'
import avatar2 from '../assets/images/Avatar (2).png'
import avatar3 from '../assets/images/Avatar (3).png'
import twitterGray from '../assets/icons/twitter-gray.svg'
import linkedInGray from '../assets/icons/linkedIn-gray.svg'

const AboutUs = () => {
  return (
    <div>
      <Header/>
      <div className='bg-tertiary mt-[110px] by-[50px]'>
        <HeroSection subtitile='About Prometrics' titile='About Us' menu='About' bgimage='aboutbg'/>
        {/* Mission and Vission */}
        <div className='flex flex-col items-center py-[50px] '>
          <div className='flex flex-col md:flex-row '>
            <div className='max-w-[600px] md:w-[400px] lg:w-[600px] h-[250px] md:h-[300px] bg-[#FBFDFE] rounded-t-[20px] md:rounded-tr-none md:rounded-l-[20px] flex flex-col justify-center items-center '>
              <div>
                <p className='text-[#15110D] font-medium '>OUR MISSION</p>
                <h2 className='text-primary '>Mission Statement</h2>
              </div>
            </div>

            <div className='max-w-[600px] md:w-[400px] lg:w-[600px] h-[250px] md:h-[300px] bg-[#31281E] rounded-b-[20px] md:rounded-bl-none md:rounded-r-[20px] flex flex-col justify-center items-center '>
              {/* <p className='text-[#F2F8FC] max-w-[444px] px-8'>Whether you&apos;re navigating complex legal matters, seeking strategic guidance, or aiming to enhance your organizational compliance, we&apos;re here to support you every step of the way.</p> */}
              <p className='text-[#F2F8FC] max-w-[444px] px-8'>Our mission is to simplify your US employment journey  seamlessly whether by helping you in your employment-based immigration journey, tax strategy, financial planning, business strategy, HR-strategy or estate planning.</p>
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-row '>
            <div className='max-w-[600px] md:w-[400px] lg:w-[600px] h-[250px] md:h-[300px] bg-[#31281E] rounded-b-[20px] md:rounded-br-none md:rounded-l-[20px] flex flex-col justify-center items-center '>
              <p className='text-[#F2F8FC] max-w-[444px] px-8'>At Prometrics, we pride ourselves on our commitment to excellence and our unwavering dedication to client satisfaction. Whether you&apos;re </p>
            </div>

            <div className='max-w-[600px] md:w-[400px] lg:w-[600px] h-[250px] md:h-[300px] bg-[#FBFDFE] rounded-t-[20px] md:rounded-tl-none md:rounded-r-[20px] flex flex-col justify-center items-center '>
              <div>
                <p className='text-[#15110D] font-medium '>OUR VISION</p>
                <h2 className='text-primary '>Vision Statement</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Our History */}
        <div className='px-[5%] py-[50px]'>
          <p className='text-[14px] font-medium mb-2'>OUR HISTORY</p>
          <h2 className='max-w-[451px] mb-8'>Care To Know How We Came To Be?</h2>
          <div>
            {history.map(({date, detail, key}) =>(
              <div key={key} className='border-y border-y-[#EAECF0] flex items-center gap-8 md:gap-16 py-8 text-[14px] md:text-[16px] '>
                <p>{date}</p>
                <p>{detail}</p>
              </div>
            ))}
            
          </div>
        </div>

        {/* Our Core Values */}
        <div className='px-[5%] py-[100px] bg-[#15110D] text-white'>
          <p className='text-[14px] font-medium mb-2'>OUR CORE VALUES</p>
          <h2 className='max-w-[451px] mb-8'>Prometrics&apos; Pillars: Our Guiding Lights</h2>
          <div className='flex flex-col md:flex-row gap-x-10 gap-y-8 mb-8'>
            <div className='basis-full'>
              <h4 className='mb-4'>EXCELLENCE</h4>
              <p className='text-[14px]'>You can bank on our expertise to implement tailor-fit, practical strategies that deliver the desired results to you.</p>
            </div>
            <div className='basis-full'>
              <h4 className='mb-4 uppercase'>Integrity</h4>
              <p className='text-[14px]'>We draw the line at cutting corners. We simply won’t do it for anyone!</p>
            </div>
            <div className='basis-full'>
              <h4 className='mb-4 uppercase'>Responsiveness</h4>
              <p className='text-[14px]'>We pride ourselves in being accessible to our clients at all times.</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-x-10 gap-y-8 mb-8'>
            <div className='basis-full'>
              <h4 className='mb-4 uppercase'>Passion</h4>
              <p className='text-[14px]'>Our passion always shines through to our clients.</p>
            </div>
            <div className='basis-full'>
              <h4 className='mb-4 uppercase'>Efficiency</h4>
              <p className='text-[14px]'>We favor practical speedy solutions over bureaucratic legal jargons.</p>
            </div>
            <div className='basis-full'>
              <h4 className='mb-4 uppercase'>Simplicity</h4>
              <p className='text-[14px]'>We keep it simple. Our mantra is that if a 10-year old cannot understand your documents, you haven’t communicated.</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-x-10 gap-y-8'>
            <div className='basis-full'>
              <h4 className='mb-4 uppercase'>Convenience</h4>
              <p className='text-[14px]'>We take up your legal burdens and have sleepless nights so you can rest easy.</p>
            </div>
            <div className='basis-full'>
              <h4 className='mb-4 uppercase'>Authenticity</h4>
              <p className='text-[14px]'>We keep it real. You always know where you stand with us.</p>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className='px-[5%] bg-[#F9FAFB] py-[100px] '>
          <div className='max-w-[654px] text-left sm:text-center mx-auto mb-20'>
            <p className='text-[14px] font-medium mb-2'>THE BRAINS AND BRAWNS OF PROMETRICS</p>
            <h2 className='mb-6'>Meet Our Advisors</h2>
            <p>We have a team of diverse thorough bred experienced professionals to serve your varied consultation needs. We have PhD holders, MBA holders,  Attorneys, Scientists, Engineers and Cybersecurity Experts on our team. </p>
          </div>
          <div className='flex justify-center items-center flex-wrap gap-7 lg:gap-7'>
            <div className='w-[200px] md:w-[280px] flex flex-col items-center '>
              <img src={avatar} alt="Prometrics Advisors" className='mb-4 '/>
              <p className='text-[18px] text-[#15110D] font-semibold '>Lori Bryson</p>
              <p className='text-[14px] text-primary font-medium mb-4 '>Managing Partner</p>
              <div className='flex items-center gap-2'>
                <a href=""><img src={twitterGray} alt="Twitter" /> </a>
                <a href=""><img src={linkedInGray} alt="LinkedIn" /></a>
              </div>
            </div>

            <div className='w-[200px] md:w-[280px] flex flex-col items-center '>
              <img src={avatar1} alt="Prometrics Advisors" className='mb-4 '/>
              <p className='text-[18px] text-[#15110D] font-semibold '>Lori Bryson</p>
              <p className='text-[14px] text-primary font-medium mb-4 '>Managing Partner</p>
              <div className='flex items-center gap-2'>
                <a href=""><img src={twitterGray} alt="Twitter" /> </a>
                <a href=""><img src={linkedInGray} alt="LinkedIn" /></a>
              </div>
            </div>

            <div className='w-[200px] md:w-[280px] flex flex-col items-center '>
              <img src={avatar2} alt="Prometrics Advisors" className='mb-4 '/>
              <p className='text-[18px] text-[#15110D] font-semibold '>Lori Bryson</p>
              <p className='text-[14px] text-primary font-medium mb-4 '>Managing Partner</p>
              <div className='flex items-center gap-2'>
                <a href=""><img src={twitterGray} alt="Twitter" /> </a>
                <a href=""><img src={linkedInGray} alt="LinkedIn" /></a>
              </div>
            </div>

            <div className='w-[200px] md:w-[280px] flex flex-col items-center '>
              <img src={avatar3} alt="Prometrics Advisors" className='mb-4 '/>
              <p className='text-[18px] text-[#15110D] font-semibold '>Lori Bryson</p>
              <p className='text-[14px] text-primary font-medium mb-4 '>Managing Partner</p>
              <div className='flex items-center gap-2'>
                <a href=""><img src={twitterGray} alt="Twitter" /> </a>
                <a href=""><img src={linkedInGray} alt="LinkedIn" /></a>
              </div>
            </div>
          </div>

        </div>

      </div>
      <Footer/>
    </div>
  )
}

const history = [
  {
    date: '2023',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
  {
    date: '2022',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
  {
    date: '2021',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
  {
    date: '2020',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
  {
    date: '2018',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
  {
    date: '2016',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
]
export default AboutUs