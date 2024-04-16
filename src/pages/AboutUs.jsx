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
import CoreValues from '../components/CoreValues'
import OurTeam from '../components/OurTeam'
import CvTable from '../components/CvTable'

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
              <p className='text-[#F2F8FC] max-w-[444px] px-8'>Our mission is to make your US employment journey and business goals execution seamless whether by helping you in your employment-based immigration journey, tax strategy, financial planning, business strategy, HR-strategy or estate planning.</p>
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-row '>
            <div className='max-w-[600px] md:w-[400px] lg:w-[600px] h-[250px] md:h-[300px] bg-[#31281E] rounded-b-[20px] md:rounded-br-none md:rounded-l-[20px] flex flex-col justify-center items-center '>
              <p className='text-[#F2F8FC] max-w-[444px] px-8'>At Prometrics Legal Hub, we pride ourselves in our commitment to excellence and our unwavering dedication to client satisfaction. We are aware that a satisfied client is a business’ best marketing tool.</p>
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
          <h2 className='max-w-[451px] mb-8'>Care To Know How We Got Here?</h2>
          <p className='font-semibold mb-4'>Our General Counsel is the visioner behind PROMETRICS LEGAL HUB</p>
          <p className='mb-4 leading-loose'>Dr. (Mrs.) Fola Odion, JD, MBA moved to the USA on an F1 non-immigrant visa to tick one of her career goals off her box – getting an MBA which would also enable her be with her husband, who was working in Columbus, Ohio as a Project Engineer on his F1 OPT. Upon completion of her studies, the inevitable question of ‘what next’ came up. Considering the challenges highly qualified professionals with foreign degrees faced in getting white-collar jobs in the United States of America, either due to lack of permanent immigration papers (U.S ‘Green Card’) or just general skepticism of some U.S. recruiters about the value of a non-U.S. degree, Dr. Fola identified the need and like a true entrepreneur, stepped up to meet the need.</p>
          <p className='mb-4 leading-loose'>She enrolled in the U.S. Attorney licensing exams, passed it, got admitted and leveraging on her in-depth legal skills, business acumen, proactiveness, professionalism and thoroughness from working at multinational oil and gas giant, Shell plc for five years, applied that to create a business venture to address the pain points of fellow immigrants. Dr. Fola leverages her legal and analytical skills combined with her business acumen to find practical answers to nagging questions encountered by non-immigrants who seek to make the United States their permanent home and applies these skills to provide tailor-fit solutions to her network and business clients. As the saying goes, charity begins at home. Dr. Fola applied her learnings to secure permanent residence in the United States of America, understand the business and employment terrain of U.S. and is now committed to ensuring that immigrants have access to information and strategies that can position them to make the best of United States of America – the great land of opportunities.</p>
          <p className='font-medium'>And that&apos;s how we got here!</p>
        </div>

        {/* Our Core Values */}
        <CoreValues/>

        {/* Meet Our Team */}
        <div className='px-[5%] bg-[#F9FAFB] py-[100px] '>
          <div className='max-w-[654px] text-left sm:text-center mx-auto mb-20'>
            <p className='text-[14px] font-medium mb-2'>THE BRAINS BEHIND PROMETRICS LEGAL HUB</p>
            <h2>Meet Our General Counsel</h2>
          </div>
          <div className='mt-4'>
            <p className='mb-4 leading-loose'>We have a team of diverse thorough bred experienced professionals to serve your varied consultation needs. We have Ph.D. Holders, MBA Holders, Attorneys, Licensed HR Practitioners, Scientists, Engineers, and Cybersecurity Experts on our team. </p>
            <p className='mb-4 leading-loose'>Our General Counsel, Dr. (Mrs.) Fola Odion, JD, MBA is a multi-skilled, dual-qualified business attorney, licensed in New York and Nigeria as an Attorney, and registered as a Corporate Counsel in Ohio with legal experience spanning 15 years. Dr. Fola&apos;s career has been highlighted by a series of achievements in guiding prominent organizations through complex legal landscapes while driving strategic growth initiatives. She has provided strategic legal advice to shareholders and board of directors of prominent multinational companies, including Shell plc and does likewise to small and medium businesses, providing skilled guidance on contract drafting and negotiations, ensuring optimal protection of clients&apos; interests and ensuring compliance with relevant laws and regulations. Dr. Fola advises clients on complex business transactions, including mergers, acquisitions, and other restructuring schemes, with a keen focus on minimizing risks and maximizing opportunities for growth. Dr. Fola collaborates closely with business owners and executives to develop and implement innovative legal and business solutions tailored to the unique needs of businesses and individuals, and represents business clients in negotiations, mediations and dispute resolution proceedings, demonstrating strong advocacy skills.</p>
            <p className='leading-loose'>Dr. Fola has a Doctor of Philosophy degree (Ph.D.) in Business Law from University of Lagos, Nigeria, and holds an MBA from Bowling Green State University, Ohio, USA. She is a Notary Public, Fellow of the Chartered Taxation Institute, Fellow of the Corporate Governance Institute and Fellow of the Chartered Institute of Arbitrators, UK. She also holds an advanced diploma in international tax from the Chartered Institute of Taxation, UK and holds a human resources professional license (MCIPM, HRPL). She is a licensed insolvency & business restructuring practitioner</p>

          </div>

        </div>

      </div>
      <Footer/>
    </div>
  )
}
export default AboutUs