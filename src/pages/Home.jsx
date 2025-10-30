import React from 'react'
import Header from '../components/Header'
import ceo from '../assets/images/ceo.png'
import ceo1 from '../assets/images/intro-profile.jpg';
import aboutCeo from '../assets/images/about-ceo.png'
import aboutCeo1 from '../assets/images/about-profile1.jpg'
import practicingCeo from '../assets/images/practicing-ceo.png'
import practicingCeo1 from '../assets/images/ceo-profile.png'
import { MoveRight } from 'lucide-react'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import CoreValues from '../components/CoreValues'
import Slider from '../components/Slider'
import NewsSection from '../components/News/NewsSection'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import HomeTestimonials from '../components/HomeTestimonials';
import CeoProfileSection from '../components/CeoProfileSection';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className='bg-[#15110D] min-h-[50px] flex flex-col md:flex-row justify-evenly items-center px-[5%] py-4 md:py-0 text-center text-[#FFFFFF] fixed top-[90px] left-0 right-0 z-20'>
        `We&apos;re back and better than ever— now fully digital and at your service!` <Link to="/contact" className='text-primary'> Contact us today.</Link>
      </div>
      <div className='bg-tertiary mt-[190px] sm:mt-[160px] md:mt-[140px]'>
        {/* Hero Section */}
        <div className='bg-secondary px-[5%] flex flex-col md:flex-row justify-between items-center gap-x-14 py-[50px]'>
          <div className='flex-1 xlg:max-w-full text-white'>
            <h1 className='text-[38px] sm:text-[50px] md:text-[62px] font-semibold leading-none'>Elevate Your Legal Strategy with Prometrics </h1>
            <p className='text-base mt-6'>From intricate case analyses to comprehensive regulatory compliance, we are committed to delivering exceptional results. Partner with us and unlock the full potential of your business and legal strategy.</p>
            <div className='flex flex-col sm:flex-row items-center gap-x-6 gap-y-4 mt-4'>
              <button className='full-rounded contained-button w-full sm:w-[218px] bg-primary rounded-[40px] text-white text-base px-4 py-5 font-semibold'>
                <Link to='/get-template'>
                <span>Get Template</span>
                <div className="outside-border full-rounded"></div>
                </Link>
              </button>
              <button className='forward-button w-full sm:w-[218px] rounded-[40px] text-primary text-base border border-primary px-4 py-5 font-semibold'>
                <a href="https://calendly.com/prometricspro/legal-consult" target='_blank'>
                <span>Book a Consultation</span>
                </a>
              </button>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <div className='text-white/70 flex items-center gap-x-1'>
                <span className='text-xl font-semibold'>1,000+</span> 
                <span className='text-base font-medium'> Satisfied Clients</span>
              </div>
              <div className='text-white/70 flex items-center gap-x-1'>
                <span className='text-xl font-semibold'>10+</span> 
                <span className='text-base font-medium'> Industries Served</span>
              </div>
            </div>
          </div>
          <div className='flex-1 mt-6 md:mt-0'>
            {/* <div className='hidden md:block relative top-[200px] right-[100px] shadow-3xl rounded-[40px] w-[250px] h-[50px]'/> */}
            <img src={ceo1} alt="Prometrics CEO" className='h-auto w-[500px] rounded-[100%] mx-auto' />
          </div>
        </div>

        {/* About Section */}
        <div className=' flex flex-col-reverse lg:flex-row items-center'>
          <img src={aboutCeo1} alt="Prometrics CEO" className='min-w-full lg:min-w-[450px] xl:min-w-[700px]'/>
          <div className='px-[5%] py-[50px]'>
            <p className='text-[14px] font-medium mb-2'>ABOUT PROMETRICS LEGAL HUB</p>
            <h2 className='max-w-full mb-6'>Up Close and Personal - Discover Who We Are:</h2>
            <p className='mb-6 leading-relaxed text-justify'>Our mission is to be your go-to business consulting hub and one-stop shop. All businesses need employees to thrive. It is therefore our commitment to make your business employees or self-employment US employment journey seamless, including by helping you in your employment-based immigration journey, employment tax strategy, business strategy, financial planning, HR-strategy and estate planning.</p>
            <p className='mb-6 leading-relaxed text-justify'>We have a team of diverse thorough bred experienced professionals to serve your varied consultation needs. We have Ph.D. Holders, MBA Holders, Attorneys, Licensed HR Practitioners, Scientists, Engineers and Cybersecurity Experts on our team. </p>
            <p className='mb-4 leading-relaxed text-justify'>Our General Counsel is licensed in New York and Texas, and is a Corporate Counsel in Ohio. Our General Counsel also culminates three cutting-edge degrees and several fellowship level certifications across multiple continents of the world: Our General Counsel has a PhD in Law, an MBA, Attorney licenses across different global jurisdictions and high-level fellowship level memberships in different global organizations including the Chartered Institute of Arbitrators, UK, the Chartered Taxation Institute, Corporate Taxation Institute and HR Institute, together with a Human Resources Practitioner&apos;s License. Our General Counsel is also an active member of the American Immigration Lawyers Association (AILA). Our team is extremely skilled in written communication and the art of expressing very complex concepts with compelling simplicity.</p>
            <p>Send us an email now at <a className='text-primary font-semibold' href="mailto:info@prometricspro.com">info@prometricspro.com</a>. A trial will convince you!</p>
            <button className='outline-button type1 outline-btn-txt w-[194px] h-[46px] border-2 border-primary rounded-[40px] mt-6 text-primary font-semibold '>
              <Link to='/about-us'>Learn More</Link>
            </button>
          </div>
        </div>

        {/* Our Core Values */}
        <CoreValues/>

        {/* Practice Areas */}
        <div className='bg-secondary px-[5%] py-[100px]'>
          <div className='text-white max-w-[654px] text-left md:text-center mx-auto'>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-[2px] w-12 bg-primary"></div>
                <p className='text-[14px] font-medium'>PRACTICE AREAS</p>
                <div className="h-[2px] w-12 bg-primary"></div>
            </div>
            <h2 className='mb-8'>We Are Especially Skilled in the Following Practice Areas</h2>
          </div>
          <div className='flex flex-col md:flex-row justify-evenly items-center flex-wrap gap-7 mb-7'>
            <div className='flex flex-col border border-[#2A6EDB] rounded-[18px] bg-white max-w-[384px] 2xl:max-w-[600px] min-h-[350px] p-6 '>
              <div className='bg-[#2A6EDB] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>1</div>
              <h4 className='mb-2 text-[20px] font-semibold leading-tight'>Employment Based Immigration Consult (EB2-NIW & EB-1A)</h4>
              <p className='mb-auto text-[14px]'>Specializing in EB2-NIW and EB-1A visa categories, our expert team offers comprehensive guidance to professionals seeking employment-based immigration opportunities in the United States, ensuring a seamless transition and successful visa application process.</p>
            <Link to='/pa-employment-based'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#2A6EDB] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>

            <div className='flex flex-col border border-[#F7966B] rounded-[18px] bg-white max-w-[384px] 2xl:max-w-[600px] min-h-[350px] p-6 '>
              <div className='bg-[#F7966B] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>2</div>
              <h4 className='mb-4 text-[20px] font-semibold leading-tight'>Employment Consultation</h4>
              <p className='mb-auto text-[14px]'>Our employment consultation services provide personalized support to businesses and individuals, offering strategic guidance on various employment matters, including recruitment, employee relations, compliance, and workforce management, to foster a productive and harmonious work environment.</p>
              <Link to='/pa-employment-consult'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#F7966B] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>

            <div className='flex flex-col border border-[#00B2FF] rounded-[18px] bg-white max-w-[384px] 2xl:max-w-[600px] min-h-[350px] p-6 '>
              <div className='bg-[#00B2FF] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>3</div>
              <h4 className='mb-4 text-[20px] font-semibold leading-tight'>Tax Planning</h4>
              <p className='mb-auto text-[14px]'>Tailored tax planning solutions crafted by our experienced in-house tax professionals, help individuals and businesses navigate complex tax laws, minimize tax liabilities, maximize savings, and optimize financial outcomes, ensuring compliance with regulations while enhancing overall financial well-being.</p>
              <Link to='/pa-tax'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#00B2FF] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-evenly items-center flex-wrap gap-7'>
            <div className='flex flex-col border border-[#3B88C3] rounded-[18px] bg-white max-w-[384px] 2xl:max-w-[600px] min-h-[350px] p-6 '>
              <div className='bg-[#3B88C3] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>4</div>
              <h4 className='mb-2 text-[20px] font-semibold leading-tight'>Business Planning</h4>
              <p className='mb-auto text-[14px]'>Our business planning services empower entrepreneurs and organizations to develop comprehensive strategies, establish solid foundations, and achieve their business objectives. From startup guidance to growth strategies and succession planning, we provide the expertise needed to drive success and sustainability in today&apos;s competitive landscape.</p>
              <Link to='/pa-business'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#3B88C3] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>

            <div className='flex flex-col border border-[#F7966B] rounded-[18px] bg-white max-w-[384px] 2xl:max-w-[600px] min-h-[350px] p-6 '>
              <div className='bg-[#F7966B] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>5</div>
              <h4 className='mb-4 text-[20px] font-semibold leading-tight'>Estate Planning</h4>
              <p className='mb-auto text-[14px]'>With our estate planning services, individuals and families can protect their assets, preserve wealth, and plan for the future. Our team works closely with clients to create customized estate plans that address their unique needs and goals, ensuring peace of mind and a smooth transfer of wealth to future generations.</p>
              <Link to='/pa-estate'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#F7966B] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>

            <div className='flex flex-col border border-[#1563B1] rounded-[18px] bg-white max-w-[384px] 2xl:max-w-[600px] min-h-[350px] p-6 '>
              <div className='bg-[#1563B1] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>6</div>
              <h4 className='mb-4 text-[20px] font-semibold leading-tight'>Notarization</h4>
              <p className='mb-auto text-[14px]'>Our reliable notarization services offer authentication and verification for a wide range of legal documents, contracts, and agreements. With meticulous attention to detail and adherence to legal requirements, we provide trusted notarization services to meet our clients&apos; needs with efficiency and professionalism.</p>
              <Link to='/pa-notarization'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#1563B1] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>
          </div>
        </div>

        {/* CEO profile */}
        <CeoProfileSection/>

        {/* Testimonial */}
        <HomeTestimonials/>

        <div className="px-[5%] py-[50px]">
          <NewsSection/>
          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/news')}
              className="group relative w-[200px] bg-primary rounded-[40px] text-white text-base px-6 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-secondary/40 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center gap-2">
              View All News
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>

        {/* Recent Wins Carousel */}
        <div className='px-[5%] py-[100px] bg-secondary'>
          <div className='max-w-[654px] text-left md:text-center mx-auto'>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <p className="text-[14px] font-medium tracking-wider text-primary">RECENT WINS</p>
              <div className="h-[2px] w-12 bg-primary"></div>
            </div>
            <h2 className='text-white mb-4'>Some Of Our Recent Wins</h2>
          </div>
          <Slider/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home