import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import practicingCeo1 from '../assets/images/new-ceo.png'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedIn.svg'
import { Link } from 'react-router-dom'
import ModernFAQSection from '../components/Faqs/ModernFAQSection'
import { Calendar, FileText } from 'lucide-react'
import CeoProfileSection from '../components/CeoProfileSection'

const Faqs = () => {
  return (
    <div>
      <Header/>
      <div className='bg-gradient-to-br from-secondary via-primary to-secondary/80 mt-[90px] pb-[50px]'>
        <HeroSection 
          subtitile='FAQs' 
          titile='Ask Us Questions' 
          menu='FAQs' 
          bgimage='aboutbg'
          link='https://calendly.com/prometricspro/legal-consult'
        />

        <ModernFAQSection/>

        {/* CTA Cards */}
        <div className='px-[5%] grid grid-cols-1 md:grid-cols-2 gap-6 my-12'>
          {/* Book Appointment Card */}
          <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex items-start gap-4'>
              <div className='bg-primary/10 p-3 rounded-xl'>
                <Calendar className='w-6 h-6 text-primary' />
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-secondary mb-3'>
                  Still have questions?
                </h3>
                <p className='text-gray text-base mb-2'>
                  Can't find the answer you're looking for? You can book an appointment with our team.
                </p>
                <p className='text-sm font-semibold text-secondary/80 mb-4'>
                  These FAQs or booking a consult do not constitute legal advice or create an attorney-client relationship.
                </p>
                <Link to='https://calendly.com/prometricspro/legal-consult' target='_blank'>
                  <button className='bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg'>
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Get Template Card */}
          <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex items-start gap-4'>
              <div className='bg-primary/10 p-3 rounded-xl'>
                <FileText className='w-6 h-6 text-primary' />
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-secondary mb-3'>
                  Looking for templates to get started?
                </h3>
                <p className='text-gray text-base mb-6'>
                  Access our professional templates to streamline your immigration documentation process.
                </p>
                <Link to='/get-template'>
                  <button className='bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg'>
                    Get Template
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Profile Section */}
        <CeoProfileSection/>
      </div>
      <Footer/>
    </div>
  )
}

export default Faqs