import React from 'react'
import Header from '../components/Header'
import ceo from '../assets/images/ceo.png'
import aboutCeo from '../assets/images/about-ceo.png'
import practicingCeo from '../assets/images/practicing-ceo.png'
import { MoveRight } from 'lucide-react'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='bg-[#15110D] min-h-[50px] flex flex-col md:flex-row justify-center items-center px-[5%] py-10 md:py-0 text-center text-[#FFFFFF] fixed top-[110px] left-0 right-0 z-10'>
        `We&apos;re back and better than ever—now fully digital and at your service!` <a href="/contact" className='text-primary'> Contact us today.</a>
      </div>
      <div className='bg-tertiary mt-[250px] md:mt-[110px] py-[50px]'>
        {/* Hero Section */}
        <div className=' px-[5%] flex flex-col md:flex-row flex-wrap items-center gap-x-14 pb-[50px]'>
          <div className='max-w-[599px]'>
            <h1 className='text-[38px] sm:text-[50px] md:text-[62px] font-semibold leading-none'>Elevate Your Legal Strategy with Prometrics </h1>
            <p className='text-base mt-6'>From intricate case analyses to comprehensive regulatory compliance, we&apos;re committed to delivering exceptional results. Partner with us and unlock the full potential of your legal strategy.</p>
            <div className='flex flex-col sm:flex-row items-center gap-x-6 gap-y-4 mt-4'>
              <button className='full-rounded contained-button w-full sm:w-[218px] bg-primary rounded-[40px] text-white text-base px-4 py-5 font-semibold'>
                <Link to='/pa-employment-based'>
                <span>Practice Areas</span>
                <div className="outside-border full-rounded"></div>
                </Link>
              </button>
              <button className='forward-button w-full sm:w-[218px] rounded-[40px] text-primary text-base border border-primary px-4 py-5 font-semibold'>
                <a href="https://calendly.com/prometricspro/legal-consult" target='_blank'>
                <span>Book a Consultation</span>
                </a>
              </button>
            </div>
            <div>
              <div className='text-[#555758] flex items-center gap-x-2 mt-4 mb-8'>
                <span className='text-base font-semibold'>+1000</span> 
                <span className='text-[13px] font-medium'> Satisfied clients</span>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='hidden md:block relative  top-[200px] right-[100px] shadow-3xl rounded-[40px] w-[250px] h-[50px]'/>
            <img src={ceo} alt="Prometrics CEO" className='' />
          </div>
        </div>

        {/* About Section */}
        <div className=' flex flex-col-reverse md:flex-row items-center'>
          <img src={aboutCeo} alt="Prometrics CEO" className=''/>
          <div className='px-[5%] py-[50px]'>
            <p className='text-[14px] font-medium mb-2'>ABOUT PROMETRICS</p>
            <h2 className='max-w-[427px] mb-6'>Dive into the Heart of Prometrics: Discover Who We Are!</h2>
            <p className='mb-6'>Our mission is to simplify your US employment journey  seamlessly whether by helping you in your employment-based immigration journey, tax strategy, financial planning, business strategy, HR-strategy or estate planning.</p>
            <p className='mb-6'>We have a team of diverse thorough bred experienced professionals to serve your varied consultation needs. We have PhD holders, MBA holders,  Attorneys, Scientists, Engineers and Cybersecurity Experts on our team. </p>
            <p className='mb-6'>Our General Counsel also culminates three cutting-edge degrees and several fellowship level certifications across multiple continents of the world: Our General Counsel has a PhD in Law, MBA, Attorney licenses across different jurisdictions as well as fellowship level memberships in different global organizations including The Chartered Institute of Arbitrators, UK and is extremely skilled in written communication and the art of expressing very complex concepts with compelling simplicity.</p>
            <p>Send us an email now at <a href="mailto:info@prometricspro.com" className='text-primary '>info@prometricspro.com</a>. A trial will convince you!</p>
            {/* <p>At Prometrics, we pride ourselves on our commitment to excellence and our unwavering dedication to client satisfaction. Whether you&apos;re navigating complex legal matters, seeking strategic guidance, or aiming to enhance your organizational compliance, we&apos;re here to support you every step of the way. With a focus on collaboration, integrity, and results-driven approaches, we strive to exceed expectations and empower our clients to thrive in today&apos;s dynamic legal environment.</p> */}
            <button className='outline-button type1 outline-btn-txt w-[194px] h-[46px] border-2 border-primary rounded-[40px] mt-6 text-primary font-semibold '>
              <Link to='/about-us'>Learn More</Link>
            </button>
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

        {/* Practice Areas */}
        <div className='px-[5%] py-[100px]'>
          <div className='max-w-[654px] text-left md:text-center mx-auto'>
            <p className='text-[14px] font-medium mb-2'>PRACTICE AREAS</p>
            <h2 className='mb-8'>We Are Especially Skilled in the Following Practice Areas</h2>
          </div>
          <div className='flex flex-col md:flex-row items-center flex-wrap gap-7 mb-7'>
            <div className='flex flex-col border border-[#2A6EDB] rounded-[18px] bg-white max-w-[384px] min-h-[350px] p-6 '>
              <div className='bg-[#2A6EDB] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>1</div>
              <h4 className='mb-2 text-[20px] font-semibold leading-tight'>Employment Based Immigration Consult (EB2-NIW & EB-1A)</h4>
              <p className='mb-auto text-[14px]'>Specializing in EB2-NIW and EB-1A visa categories, our expert team offers comprehensive guidance to professionals seeking employment-based immigration opportunities in the United States, ensuring a seamless transition and successful visa application process.</p>
            <Link to='/pa-employment-based'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#2A6EDB] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>

            <div className='flex flex-col border border-[#F7966B] rounded-[18px] bg-white max-w-[384px] min-h-[350px] p-6 '>
              <div className='bg-[#F7966B] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>2</div>
              <h4 className='mb-4 text-[20px] font-semibold leading-tight'>Employment Consultation</h4>
              <p className='mb-auto text-[14px]'>Our employment consultation services provide personalized support to individuals and businesses, offering strategic guidance on various employment matters, including recruitment, employee relations, compliance, and workforce management, to foster a productive and harmonious work environment.</p>
              <Link to='/pa-employment-consult'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#F7966B] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>

            <div className='flex flex-col border border-[#00B2FF] rounded-[18px] bg-white max-w-[384px] min-h-[350px] p-6 '>
              <div className='bg-[#00B2FF] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>3</div>
              <h4 className='mb-4 text-[20px] font-semibold leading-tight'>Tax Planning</h4>
              <p className='mb-auto text-[14px]'>Tailored tax planning solutions crafted by our experienced tax professionals help individuals and businesses navigate complex tax laws, minimize tax liabilities, maximize savings, and optimize financial outcomes, ensuring compliance with regulations while enhancing overall financial well-being.</p>
              <Link to='/pa-tax'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#00B2FF] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center flex-wrap gap-7'>
            <div className='flex flex-col border border-[#3B88C3] rounded-[18px] bg-white max-w-[384px] min-h-[350px] p-6 '>
              <div className='bg-[#3B88C3] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>4</div>
              <h4 className='mb-2 text-[20px] font-semibold leading-tight'>Business Planning</h4>
              <p className='mb-auto text-[14px]'>Our business planning services empower entrepreneurs and organizations to develop comprehensive strategies, establish solid foundations, and achieve their business objectives. From startup guidance to growth strategies and succession planning, we provide the expertise needed to drive success and sustainability in today&apos;s competitive landscape.</p>
              <Link to='/pa-business'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#3B88C3] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>

            <div className='flex flex-col border border-[#F7966B] rounded-[18px] bg-white max-w-[384px] min-h-[350px] p-6 '>
              <div className='bg-[#F7966B] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>5</div>
              <h4 className='mb-4 text-[20px] font-semibold leading-tight'>Estate Planning</h4>
              <p className='mb-auto text-[14px]'>With our estate planning services, individuals and families can protect their assets, preserve wealth, and plan for the future. Our team works closely with clients to create customized estate plans that address their unique needs and goals, ensuring peace of mind and a smooth transfer of wealth to future generations.</p>
              <Link to='/pa-estate'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#F7966B] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>

            <div className='flex flex-col border border-[#1563B1] rounded-[18px] bg-white max-w-[384px] min-h-[350px] p-6 '>
              <div className='bg-[#1563B1] mb-4 w-[40px] h-[40px] rounded-[40px] text-white flex justify-center items-center font-semibold text-[20px] '>6</div>
              <h4 className='mb-4 text-[20px] font-semibold leading-tight'>Notarization</h4>
              <p className='mb-auto text-[14px]'>Our reliable notarization services offer authentication and verification for a wide range of legal documents, contracts, and agreements. With meticulous attention to detail and adherence to legal requirements, we provide trusted notarization services to meet our clients&apos; needs with efficiency and professionalism.</p>
              <Link to='/pa-notarization'><div className='flex gap-x-2 hover:gap-x-6 transition-all duration-200 cursor-pointer text-[#1563B1] font-semibold '>READ MORE <MoveRight /> </div></Link>
            </div>
          </div>
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

        {/* Testimonial */}
        <div className='px-[5%] bg-[#F9FAFB] py-[50px] flex flex-col md:flex-row justify-center items-center gap-x-12'>
          <div >
            <p className='text-[14px] font-medium mb-2'>TESTIMONIALS</p>
            <h2 className='max-w-[311px] mb-8 leading-tight'>What Our Clients Are Saying About Us</h2>
          </div>

          <div className='flex flex-col gap-4 mb-4 md:mb-0'>
            <div className='flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px]'>
              <p className='text-[13px] font-light mb-4 '>`Fola has great experience in this field, which is based on our personal engagement, in addition to feedback I have received from others who have engaged Fola. Without mincing words, I recommend Fola for any immigration inquiries you are curious about.`</p>
              <p className='text-[13px] text-primary font-medium mb-1'>Abass Opeyemi SuaraAbass Opeyemi Suara</p>
              <p className='text-[13px] font-light'>MBA Candidate 2025 (STEM)</p>
            </div>
            <div className='flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px]'>
              <p className='text-[13px] font-light mb-4 '>`Fola&apos;s level of professionalism in reviewing my CV was topnotch and the way she interpreted my roles and was able to communicate same in my CV was very brillant.Thank you Fola`</p>
              <p className='text-[13px] text-primary font-medium mb-1'>Ola&apos; Aruwayo</p>
              <p className='text-[13px] font-light'>International Business law</p>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px]'>
              <p className='text-[13px] font-light mb-4 '>`It was amazing! Fola was super helpful in assisting me negotiate legal settlements. Her guidance and counsel enabled me make better informed decisions.`</p>
              <p className='text-[13px] text-primary font-medium mb-1'>Daniel Ejairu</p>
              <p className='text-[13px] font-light'>Supply chain Analyst at Belden Inc.</p>
            </div>
            <div className='flex flex-col border border-[#E4D4C1] rounded-[18px] bg-white max-w-[392px] min-h-[183px] p-[16px]'>
              <p className='text-[13px] font-light mb-4 '>`Fola’s career development coaching services are impeccable. She hand-held me as I transitioned from being a HND polytechnic graduate in Nigeria to an MBA graduate student in USA with a graduate assistantship offer. She was accessible and pleasant to work it, providing me with career, legal, and immigration advice. With her help, I secured the MBA admission, US F1 student visa and a graduate assistantship. Till now, she remains accessible in coaching me. I recommend Fola for expert services.`</p>
              <p className='text-[13px] text-primary font-medium mb-1'>Iyadunni Aderotoye</p>
              <p className='text-[13px] font-light'>Graduate Teaching Assistant </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home