import React, {useRef, useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import practicingCeo from '../assets/images/practicing-ceo.png'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import headphone from '../assets/icons/headphone.svg'
import chat from '../assets/icons/chat.svg'
import check from '../assets/images/check.gif'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import emailjs from '@emailjs/browser';
import { AlertTriangle } from "lucide-react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const form = useRef();

  // Send Email
  const sendEmail = (e) => {
    setIsLoading(true)
    e.preventDefault(); // prevents the page from reloading when you hit “Submit”

    // Service ID, Template ID, Public Key
    emailjs.sendForm('service_qzmls84', 'template_gnlnccx', form.current, '5ljy3r4KJ-WrwILR7')
      .then((result) => {
        // show the user a success message
        console.log(result.text);
        setSuccess(!success)
        setIsLoading(false)
      }, (error) => {
        setIsLoading(false)
        setWarning(!warning)
        // show the user an error
        console.log(error.text);
      });
  };

  return (
    <div>
      <Header/>
      <div className='bg-tertiary mt-[90px] pb-[50px]'>
        <HeroSection subtitile='Reach Out' titile='Contact Us' menu='Contact' bgimage='aboutbg'/>
        {/* Contact Cards */}
        <div className='px-[5%] flex flex-col md:flex-row justify-center items-center gap-8 md:absolute left-0 right-0'>
          <div className='bg-white max-w-[520px] h-[461px] rounded-[12px] p-[40px] flex flex-col justify-center items-center gap-8 '>
            <img src={headphone} alt="Call Prometrics" />
            <h4 className='text-[18px] md:text-[23px] text-center  font-semibold leading-tight '>Book Your Consultation Today!</h4>
            <p className='text-center'>Ready to take the next step in achieving your goals? Schedule a consultation with us now to discuss your needs, explore your options, and embark on the path to success</p>
            <a href="https://calendly.com/prometricspro/legal-consult" target='_blank'>
              <button className='outline-button type1 outline-btn-txt w-full sm:w-[218px] rounded-[40px] text-primary text-base border border-primary px-4 py-3 font-semibold'>Book a Consultation</button>
            </a>
          </div>
          <div className='bg-white max-w-[520px] h-[461px] rounded-[12px] p-[40px] flex flex-col justify-center items-center gap-8 '>
            <img src={chat} alt="Call Prometrics" />
            <h4 className='text-[18px] md:text-[20px] text-center font-semibold leading-tight '>Our team is here to support you every step of the way. Email us or place a call now.</h4>
            <div className='flex flex-col items-center gap-3'>
              <a href='tel:+1-419-378-9459' ><div className='flex items-center gap-2 text-[18px] md:text-[20px] font-semibold '><Phone color='white' fill='secondary'/> +1 419 378 9459</div></a>
              <a href='mailto:info@prometricspro.com'><div className='flex items-center gap-2 text-[18px] md:text-[20px] text-primary font-semibold '><Mail color='white' fill='secondary'/> info@prometricspro.com</div></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='px-[5%] bg-[#15110D] text-[#F2F8FC] py-[100px] md:pt-[200px] mt-[50px] md:mt-[350px] mb-[50px] md:mb-[150px]'>
          <div className='max-w-[654px] text-center mx-auto mb-10'>
            <p className='text-[14px] font-medium mb-2'>REACH OUT</p>
            <h2>Get In Touch</h2>
          </div>
          <form ref={form} onSubmit={sendEmail} className='sm:w-fit mx-auto'>
            <div className='flex flex-col sm:flex-row gap-x-8 gap-y-4 mb-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' placeholder='Mike' required className='w-full sm:w-[328px] ' />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' placeholder='Ross' required className='w-full sm:w-[328px] ' />
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-x-8 gap-y-4 mb-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Mike.ross@pearsonhardman.com' required className='w-full sm:w-[328px] ' />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="subject">Subject</label>
                <input type="text" name='subject' placeholder='Tax Planning' required className='w-full sm:w-[328px] ' />
              </div>
            </div>

            <div className='flex flex-col gap-1 mb-6'>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="" cols="10" rows="5" placeholder='Type your message here...'></textarea>
            </div>
            <button type='submit' className='forward-button w-full sm:w-[218px] bg-primary rounded-[40px] text-white text-base px-4 py-3 font-semibold'>
              <span className=''>Send your message</span>
            </button>
          </form>

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

      {/* Form Reply */}
      {success && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black-rgba flex items-center justify-center z-20 overflow-y-scroll no-scrollbar">
          <div className="max-w-[484px] md:w-[484px] h-72 p-6 bg-white rounded-md shadow-3xl">
            <img src={check} alt="warning"className="bg-green-100 p-1 w-10 h-10 rounded-sm"/>
            {/* img={<AlertTriangle className="text-red-600 bg-[#FDE3E3] p-1 w-8 h-8 rounded-sm" />} */}
            <h1 className="mt-6 mb-2 text-neutral-950 text-2xl font-semibold leading-loose">Message sent</h1>
            <p className="max-w-[436px] text-zinc-900 text-sm font-normal leading-tight">Your form submition was successful.</p>
            <div className="w-fit md:ml-auto mt-8"
              onClick={()=>setSuccess(false)}
            >
              <button className="w-[178px] h-12 px-8 bg-neutral-950 rounded-lg text-zinc-300 text-base font-medium leading-normal">close</button>
            </div>
          </div>
        </div>
      )}
      { warning && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black-rgba flex items-center justify-center z-20 overflow-y-scroll no-scrollbar">
          <div className="max-w-[484px] md:w-[484px] h-72 p-6 bg-white rounded-md shadow-3xl">
            <AlertTriangle color='red' className="bg-[#FDE3E3] p-1 w-10 h-10 rounded-sm"/>
            {/* <img src={warningIcon} alt="warning"className="bg-[#FDE3E3] p-1 w-10 h-10 rounded-sm"/> */}
            {/* img={<AlertTriangle className="text-red-600 bg-[#FDE3E3] p-1 w-8 h-8 rounded-sm" />} */}
            <h1 className="mt-6 mb-2 text-neutral-950 text-2xl font-semibold leading-loose">Message not sent</h1>
            <p className="max-w-[436px] text-zinc-900 text-sm font-normal leading-tight">Your form submition failed please try again later!</p>
            <div className="w-fit md:ml-auto mt-8"
              onClick={()=>setWarning(false)}
            >
              <button className="w-[178px] h-12 px-8 bg-neutral-950 rounded-lg text-zinc-300 text-base font-medium leading-normal">close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact