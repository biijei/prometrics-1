import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import practicingCeo from '../assets/images/practicing-ceo.png'
import practicingCeo1 from '../assets/images/ceo-profile.png'
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
        <HeroSection 
          subtitile='FAQs' 
          titile='Ask Us Questions' 
          menu='FAQs' bgimage='aboutbg'
          link = 'https://calendly.com/prometricspro/legal-consult'
        />

        {/* FAQ */}
        <div className='px-[5%] pt-[100px] pb-[50px]'>
          <div className='max-w-[654px] text-left md:text-center mx-auto mb-20'>
            <p className='text-[14px] font-medium mb-2'>FAQs</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className='flex flex-col md:flex-row items-center md:items-start justify-center flex-wrap gap-x-7 gap-y-8 mb-8'>
            {faqs.map(({question, answer, link, key}) => (
              <div key={key} className='w-[300px] lg:w-[385px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-border p-6'>
                <h4 className='font-semibold mb-4'>{question}</h4>
                <p className='text-[14px] text-justify'>{answer}</p>
                <Link 
                  to={link}
                  target='_blank'
                  className='text-secondary font-medium text-[14px] mt-4 inline-block underline'
                >Learn more</Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ bar */}
        <div className='md:mx-[5%] rounded-[16px] bg-white flex flex-col md:flex-row justify-between md:items-center min-h-[125px] px-8 md:px-[32px] py-[32px] mb-[30px]'>
          <div>
            <p className='text-[23px] text-[#15110D] font-semibold mb-4 '>Still have questions?</p>
            <p className='text-[18px] mb-2'>Can’t find the answer you’re looking for? Please book an appointment with our team.</p>
            <p className='font-semibold'>This FAQs or booking a consult does not constitute legal advice or constitute an attorney-client/relationship.</p>
          </div>
          <Link to="https://calendly.com/prometricspro/legal-consult" target='_blank'>
            <button className='forward-button bg-primary w-[150px] h-[42px] rounded-[8px] font-semibold text-white mt-4 md:mt-0 '>
              <span>Book Now</span>
            </button>
          </Link>
        </div>

        {/* Template bar */}
        <div className='md:mx-[5%] rounded-[16px] bg-white flex flex-col md:flex-row justify-between md:items-center min-h-[125px] px-8 md:px-[32px] py-[32px] mb-[150px]'>
          <div>
            <p className='text-[23px] text-[#15110D] font-semibold mb-4 '>Looking for templates to get started?</p>
          </div>
          <Link to="/get-template">
            <button className='forward-button bg-primary w-[150px] h-[42px] rounded-[8px] font-semibold text-white mt-4 md:mt-0 '>
              <span>Get Template</span>
            </button>
          </Link>
        </div>

        {/* CEO profile */}
        <div className='px-[5%] md:mx-[5%] pt-[50px] md:py-0 bg-[#E2E7ED] my-[50px] rounded-[24px] flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-[60px] '>
          <div className='max-w-[530px] '>
            <p className=' text-[18px] md:text-[23px] text-[#555758] leading-tight mb-8'> Prometrics represents clients in employment consult, employment based immigration consult, estate planning, tax planning, business planning and notariization.</p>
            <p className='text-[23px] md:text-[28px] font-semibold mb-2 '>Dr. Fola Odion, PhD (Law), MBA</p>
            <p className='text-[16px] md:text-[18px] md:[20px] font-medium mb-8 '>Ph.D. in Law l MBA l General Counsel</p>
            <div className='flex gap-x-2'>
              <a href="https://www.facebook.com/prometricspro?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Prometrics Facebook" /></a>
              <a href="https://x.com/prometricspro?s=21" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Prometrics twitter" /></a>
              <a href="https://www.instagram.com/prometricspro/?igsh=MTc1dXd0a2tlYTZreg%3D%3D" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Prometrics instagram" /></a>
              <a href="https://www.linkedin.com/company/prometrics-professional-hub/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="Prometrics linkedIn" /></a>
            </div>
          </div>
          <div className='md:h-[435px]'>
            <img src={practicingCeo1} alt="Practing CEO of Promrtrics" className='relative md:top-[-100px]' />
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

const faqs = [
  {
    question: "I'm on OPT and my visa is expired — can I still travel?",
    answer: "You can stay in the U.S. while on optional practical training (OPT) even if your F-1 visa stamp is expired. However, if you leave the U.S., you must have a valid F-1 visa to re-enter. You will also need a valid OPT EAD card, an endorsed I-20 for travel (signed within the last 6 months), and a job offer or proof of employment to re-enter USA.",
    link: "https://www.ice.gov/sevis/travel"
  },
  {
    question: "What is the H-1B cap-gap extension and how does it work?",
    answer: "The cap-gap extension allows F-1 students with pending or approved H-1B petitions to remain in the U.S. and work beyond the expiration of their OPT until their H-1B begins on October 1 or any later date that the H-1B is approved up to April 1 of the following year. Cap-gap extension bridges the period between the end of OPT and start of H-1B status.",
    link: "https://studyinthestates.dhs.gov/students/complete/h-1b-status-and-the-cap-gap-extension"
  },
  {
    question: "Can I travel while on cap-gap OPT extension?",
    answer: "Traveling during the cap-gap period is risky. If your H-1B is pending and you leave the U.S., your change-of-status request may be considered abandoned. It’s safer to remain in the U.S. until the petition is approved and the H-1B takes effect.",
    link: "https://www"
  },
  {
    question: "What documents do I need to re-enter if on OPT with expired visa?",
    answer: "To re-enter the U.S. while on OPT, you’ll need: a valid EAD card, endorsed I-20 (signed within 6 months), valid passport (6 months into the future), job offer letter, and a valid F-1 visa. If the visa is expired, you must apply for a new one before re-entry.",
    link: "https://www.ice.gov/sevis/travel"
  },
  {
    question: "What is automatic visa revalidation and does it apply?",
    answer: "It allows certain nonimmigrants (including F-1 holders) to re-enter the U.S. with an expired visa after a visit of less than 30 days to Canada, Mexico, or adjacent islands. It doesn’t apply if you apply for a new visa or are from certain restricted countries.",
    link: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-expiration-date/auto-revalidate.html"
  },
  {
    question: "Can I work on an F-2 visa?",
    answer: "No. F-2 visa holders cannot work in the U.S. under any condition. They must change to a work-authorized status such as F-1, H-1B, or O-1 to be eligible for employment.",
    link: "https://www.uscis.gov/policy-manual/volume-2-part-f-chapter-9"
  },
  {
    question: "Can an F-2 visa holder study in the U.S.?",
    answer: "Yes. F-2 spouses can study part-time, and F-2 children can attend full-time elementary or secondary school. Full-time study at the postsecondary level (after high school) requires a change to F-1.",
    link: "https://www.uscis.gov/policy-manual/volume-2-part-f-chapter-9"
  },
  {
    question: "I got EB-2 NIW I-140 approval—can I travel before filing I-485 or getting Advance Parole?",
    answer: "Yes, if you're in valid nonimmigrant status (like F-1 or H-1B) and with a valid visa to re-enter, you may travel. But if you file I-485 and then travel without Advance Parole, your AOS may be considered abandoned if your non-immigrant status is not in the H or L visa category.",
    link: "https://www.uscis.gov/green-card/while-your-green-card-application-is-pending-with-uscis"
  },
  {
    question: "Can I apply for a green card while on OPT?",
    answer: "Yes. You can file an I-140 self-petition under EB-2 NIW or EB-1A while on OPT. You must maintain valid F-1 status until your green card is approved.",
    link: "https://www.uscis.gov/green-card/how-to-apply-for-a-green-card"
  },
  {
    question: "Do I have to maintain my F-1 status while green card application is pending?",
    answer: "Yes, until you receive your green card approval, you must maintain lawful nonimmigrant status like F-1, unless you're in a dual-intent visa category like H-1B.",
    link: "https://www.uscis.gov/green-card/while-your-green-card-application-is-pending-with-uscis"
  },
  {
    question: "Can I work while my green card application is pending?",
    answer: "Yes, but only if you have valid work authorization. If you’ve filed Form I-485 and are eligible (e.g. your priority date is current), you can apply for an EAD (Employment Authorization Document) using Form I-765. Once approved, you can work legally while your green card is pending.",
    link: "https://www.uscis.gov/i-765"
  },
  {
    question: "Can I apply for OPT while my I-485 (marriage-based) is pending?",
    answer: "Yes, you can if you are on a student status (F1) and eligible for OPT. OPT will ensure you retain an independent status (F1) while your I-485 is pending so that you do not fall out of status in the event your I-485 gets denied.",
    link: "https://www.uscis.gov/i-485"
  },
  {
    question: "What are the wait times/backlogs for EB-2 / other categories?",
    answer: "Wait times vary based on country of chargeability. For most countries, EB-2 may have a backlog of 2+ years. The U.S. Department of State's Visa Bulletin provides monthly updates.",
    link: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html"
  },
  {
    question: "Does H-1B status need to come before starting green card process?",
    answer: "No. You can pursue permanent residence while on F-1, OPT, or other statuses. H-1B is used because of its 'dual intent' nature, but it's not mandatory.",
    link: "https://www.uscis.gov/working-in-the-united-states/permanent-workers"
  },
  {
    question: "Does USPS forwarding your mail notify USCIS of changes?",
    answer: "No. USPS forwarding does not update your address with USCIS. You must file Form AR-11 with USCIS within 10 days of moving to stay compliant.",
    link: "https://www.uscis.gov/ar-11"
  },
  {
    question: "What if I’m out of work on EB-2 or EB-3 and waiting due to retrogression?",
    answer: "You must maintain a valid status. If your I-140 is approved and you’ve filed I-485 but your priority date is no longer current, you can remain in the U.S. but cannot work unless you have a valid EAD.",
    link: "https://www.uscis.gov/green-card/green-card-processes-and-procedures/visa-availability-priority-dates"
  },
  {
    question: "Can I apply for EB-1 after EB-2 NIW approval?",
    answer: "Yes. EB-1 and EB-2 are separate categories. If your credentials improve, you can file a new I-140 under EB-1 even if your EB-2 NIW was approved.",
    link: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1"
  },
  {
    question: "Is it safe to file for asylum after applying under EB categories?",
    answer: "It depends. If you have a legitimate fear of persecution, you can file for asylum. However, doing so after pursuing employment-based options may raise credibility concerns with USCIS.",
    link: "https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum"
  },
  {
    question: "I filed I-130 for my son—now he’s married. Does it affect his case?",
    answer: "Yes. If you're a green card holder, your petition becomes ineligible if your child marries. If you're a U.S. citizen, the petition moves from F1 to F3 category, which has a longer wait.",
    link: "https://www.uscis.gov/policy-manual/volume-6-part-b-chapter-5"
  },
  {
    question: "Can multiple address changes delay my asylum case?",
    answer: "Yes. Not updating your address with USCIS and EOIR (if applicable) can lead to missed notices and delays. Always submit Form AR-11 within 10 days of moving.",
    link: "https://www.uscis.gov/ar-11"
  },
  {
    question: "What is dual intent and how does it affect OPT or H-1B holders?",
    answer: "Dual intent allows individuals to hold nonimmigrant status (like H-1B or L-1) while having the intention to apply for a green card. F-1/OPT does NOT have dual intent, so filing I-140 while on F-1 may raise issues during visa renewal or international travel.",
    link: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/faqs-for-individuals-in-h-1b-nonimmigrant-status"
  },
  {
    question: "Can I get an EB-2 NIW without a job offer?",
    answer: "Yes. EB-2 NIW waives the job offer and labor certification requirement. You must show that your work benefits the U.S. and you’re well-positioned to advance it.",
    link: "https://www.uscis.gov/policy-manual/volume-6-part-f-chapter-5"
  },
  {
    question: "What if I change jobs after I-140 is approved?",
    answer: "If your I-140 is approved and your I-485 has been pending for 180+ days, you can port to a same or similar job using AC21 portability. If no I-485 is filed, a new I-140 may be needed.",
    link: "https://www.uscis.gov/working-in-the-united-states/how-uscis-determines-same-or-similar-occupational-classifications-for-job-portability-under-ac21"
  },
  {
    question: "Can STEM OPT students work multiple jobs?",
    answer: "Yes, but each employer must be enrolled in E-Verify and submit a training plan (Form I-983). All jobs must relate to the STEM degree and meet USCIS requirements.",
    link: "https://studyinthestates.dhs.gov/stem-opt-hub"
  },
  {
    question: "Can I file EB-1A and EB-2 NIW at the same time?",
    answer: "Yes. You can file multiple I-140 petitions under different categories. Each petition is evaluated independently. It’s often done to maximize chances or pursue faster processing.",
    link: "https://www.uscis.gov/i-140"
  },
  {
    question: "How long does EB-2 NIW and EB-1A take to get approved?",
    answer: "Regular processing time for EB-2 NIW or EB-1A can typically range between 4–18+ months, depending on USCIS workload and service center. Premium processing is available for EB2-NIW and can expedite adjudication to 45 business days (which is about 65 calendar days). EB-1A adjudication under premium processing timelines is 15 business days (which is about 21 calendar days).",
    link: "https://egov.uscis.gov/processing-times/"
  },
  {
    question: "What does 'well positioned to advance the proposed endeavor' mean?",
    answer: "USCIS looks for evidence of your qualifications, experience, prior success, and relevance of your work to show you can carry out the endeavor in the U.S. This may include degrees, publications, funding, media, or endorsements.",
    link: "https://www.uscis.gov/policy-manual/volume-6-part-f-chapter-5"
  },
  {
    question: "Can I work on CPT and apply for EB green card?",
    answer: "Yes, but CPT is not a dual intent status. You must be careful if applying for a green card while on CPT as it may create issues during change-of-status, visa renewal or adjustment of status.",
    link: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment"
  },
  {
    question: "Do I need an attorney to file EB-2 NIW or EB-1A?",
    answer: "No, but it’s recommended. These are high-evidence petitions. Poorly drafted filings can lead to RFEs or denials. Attorneys help align your evidence with USCIS standards.",
    link: "https://www.uscis.gov/forms/filing-guidance/checklist-of-required-initial-evidence-for-form-i-140-for-informational-purposes-only"
  },
  {
    question: "Can I apply for H-1B while on STEM OPT?",
    answer: "Yes. You can apply for the H-1B lottery while on STEM OPT. If selected, you may qualify for cap-gap extension until H-1B begins on October 1.",
    link: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/extension-of-post-completion-optional-practical-training-opt-and-f-1-status-for-eligible-students"
  },
  {
    question: "Is my OPT time counted against my H-1B stay?",
    answer: "No. OPT and H-1B are separate. H-1B status has a 6-year maximum (initial 3 years + 3-year extension) unless eligible for additional H-1B extension(s) in certain cases and does not count prior time spent on F-1 OPT.",
    link: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/faqs-for-individuals-in-h-1b-nonimmigrant-status"
  },
  {
    question: "Can I do freelance work on OPT or STEM OPT?",
    answer: "You can on OPT if it is related to your degree. The regulations allow self-employment, independent work for hire and other independent contractor type work on OPT. For STEM OPT, the extant regulations require a bona fide employer-employee relationship (with supervision, training plan, and E-Verify for STEM). This makes it impracticable for freelance work to be viable with STEM OPT. Freelance work during STEM OPT could also trigger additional scrutiny or challenges during a change of status or adjustment of status process.",
    link: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students"
  },
  {
    question: "Can I travel while my EB petition is pending?",
    answer: "Yes, generally if you’re in valid nonimmigrant status (like F-1 or H-1B) and have an unexpired visa to reenter, you can travel. But do f you’ve filed I-485, don’t leave without Advance Parole unless you’re in H-1B or L-1 status whose visa status permits dual intent, otherwise you may not be able to re-enter USA on such unexpired non-immigrant visa.",
    link: "https://www.uscis.gov/i-131"
  },
  {
    question: "How do I prove national importance for EB-2 NIW?",
    answer: "You must show your work has significant impact on a national scope beyond your employer—like influencing an industry, public health, technology, or underserved communities.",
    link: "https://www.uscis.gov/policy-manual/volume-6-part-f-chapter-5"
  },
  {
    question: "Can I stay in the U.S. after OPT if I’m waiting for green card?",
    answer: "Only if you have a valid status (e.g., STEM OPT extension, H-1B) or authorized stay like a pending I-485. Once OPT ends, you cannot remain unless covered by another status or grace period. Also, these days, even with a pending I-485, if there is no independent non-immigrant status, USCIS may still issue open a notice to appear (NTA) in immigration court for deportation proceedings.",
    link: "https://www.uscis.gov/green-card/how-to-apply-for-a-green-card"
  },
  {
    question: "What is the 60-day grace period after OPT ends?",
    answer: "You can remain in the U.S. for up to 60 days after OPT expires to prepare for departure, apply to a new program, or change status. You cannot work during this period.",
    link: "https://www.uscis.gov/policy-manual/volume-2-part-f-chapter-5"
  },
  {
    question: "Can I work remotely for a foreign company while on OPT?",
    answer: "No. OPT employment must be for a U.S.-based employer. Working remotely for a foreign company while on OPT is not considered valid OPT employment.",
    link: "https://www.ice.gov/sevis/employment"
  },
  {
    question: "Can I enroll in another program after OPT ends?",
    answer: "Yes. You can enroll in a new academic program and obtain a new I-20. You must do this within the 60-day grace period after OPT ends to maintain legal status.",
    link: "https://studyinthestates.dhs.gov"
  },
  {
    question: "Can I get EB-1A approval without publications?",
    answer: "Yes, You can present evidence in other regulatory criteria.",
    link: "https://www.uscis.gov/policy-manual/volume-6-part-f-chapter-2 "
  },
   {
    question: "Can I file I-485 without an I-140 approval?",
    answer: "You can file them together (concurrent filing) if your visa category is current. Otherwise, you must wait for your priority date to be current before you file (even if the I-140 is still pending and not yet approved).",
    link: "https://www.uscis.gov/forms/filing-guidance/concurrent-filing-of-form-i-485"
  },
  {
    question: "Can I change petitioning employer after I-485 is filed?",
    answer: "Yes, after 180 days of a pending I-485 and I-140 approval, you may change to a same or similar position using portability provisions. This does not apply to derivative beneficiaries or self-petition categories like EB2-NIW or EB-1A. Such self-petitioners or their eligible dependents (derivative beneficiaries) can work for any employer with a valid C09 category EAD.",
    link: "https://www.uscis.gov/i-485supj#:~:text=If%20you%20are%20requesting%20job,Supplement%20J%20as%20supporting%20evidence."
  },
  {
    question: "What is a Request for Evidence (RFE)?",
    answer: "An RFE is a formal request by USCIS asking for additional documents or clarification before making a decision. It’s common in EB petitions. Always respond within the deadline with strong evidence.",
    link: "https://www.uscis.gov/policy-manual/volume-1-part-e-chapter-6"
  },
  {
    question: "How long does USCIS take to process I-485?",
    answer: "Processing varies by field office and workload. Typical ranges are 6–24+ months. Check the USCIS processing time tool for updates.",
    link: "https://egov.uscis.gov/processing-times/"
  },
  {
    question: "Can I expedite my I-140 or I-485?",
    answer: "You can request expedited processing in rare, urgent situations or use premium processing (for I-140 only, not I-485). Expedite requires proof of severe financial loss, emergencies, national interest or clear USCIS error.",
    link: "https://www.uscis.gov/forms/filing-guidance/how-to-make-an-expedite-request"
  },
  {
    question: "Can I withdraw a pending Form I-140?",
    answer: "Yes, you can withdraw a pending Form I-140 for any reason by writing to the USCIS office where the petition is pending, clearly stating your intent to withdraw and including identifying information like your receipt number, petitioner’s name, address and phone number, beneficiary name and beneficiary’s alien number (A-number). However, if the petitioner requests to withdraw a Form I-140 that has already been approved for at least 180 days, or if an associated Form I-485 has been pending for at least 180 days, USCIS will not revoke the approved Form I-140 and the beneficiary will retain the priority date. The job offer is considered withdrawn, but the I-140 remains approved for portability unless USCIS revokes it on other grounds.",
    link: "https://www.uscis.gov/forms/all-forms/petition-filing-and-processing-procedures-for-form-i-140-immigrant-petition-for-alien-workers"
  },
  {
    question: "What are my options after OPT or STEM OPT ends?",
    answer: "You must stop working immediately if no other valid work authorization exists (such as cap-gap extension or other EAD). You may have a 60-day grace period to change status, adjust status or leave the U.S. If your SEVIS record has not been terminated, you can re-enroll in school for another course of studies. If the SEVIS record is terminated before re-enrollment, you can apply for an F-1 reinstatement.",
    link: "https://www.uscis.gov/policy-manual/volume-2-part-f-chapter-5"
  },
  {
    question: "Can I apply for EB-2 NIW during CPT?",
    answer: "Yes, if you meet the requirements.",
    link: "https://www.uscis.gov/policy-manual/volume-6-part-f-chapter-5"
  },
  {
    question: "What’s the best time to apply for EB-2 NIW?",
    answer: "The best time is while the F-1 status is still valid. This could be during F-1 studies, during STEM OPT, or before OPT ends. This gives you time to build evidence, handle RFEs if needed, and extend or transition status before F-1 expires.",
    link: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2"
  },
  {
    question: "Can I apply for multiple green card categories at once?",
    answer: "Yes. You can file multiple I-140s (e.g., EB-1A and EB-2 NIW). USCIS reviews each separately, and you can adjust status to green card holder under whichever becomes current first.",
    link: "https://www.uscis.gov/green-card/green-card-eligibility-categories"
  },
  {
    question: "Can my spouse work if I’m on OPT or STEM OPT?",
    answer: "No. F-2 dependents are not eligible for work. They could become eligible through other independent means such as pending adjustment (C09 category) or if the F-1 spouse transitions to H-1B status with an approved I-140 (C26 category). If the F-2 dependent changes to H-1B status, they may work as an H-1B worker.",
    link: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations-and-fashion-models"
  },
  {
    question: "What are options for H-1B workers after termination of employment?",
    answer: "H-1B workers who lose their jobs, whether voluntarily or involuntarily, generally have a 60-day grace period (or until the end of their authorized stay, whichever comes first) to take action. Options include transferring to a new employer via H-1B portability, changing to another eligible nonimmigrant status, extending H-1B beyond six years with a pending or approved I-140, or applying for adjustment of status, a compelling circumstances EAD, or other relief. If no action is taken, the worker and dependents must leave the U.S.",
    link: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/faqs-for-individuals-in-h-1b-nonimmigrant-status"
  },
  {
    question: "What is the I-140 Filing Address?",
    answer: "USCIS provides specific lockbox addresses based on the beneficiary’s intended work location and whether you’re filing I-140 alone or with additional form(s).",
    link: "https://www.uscis.gov/forms/all-forms/direct-filing-addresses-for-form-i-140-immigrant-petition-for-alien-worker"
  },
  {
    question: "What are tips for filing/assembling petition package?",
    answer: "USCIS advises applicants to use the latest edition of forms, complete all required fields, sign the form, and include the correct filing fee. Documents should be legible, in English (or translated), and arranged in proper order. For I-140 petitions, ensure the current version is used, signed by the petitioner, sent to the correct address, and includes all required supplements and supporting evidence.",
    link: "https://www.uscis.gov/forms/filing-guidance/tips-for-filing-forms-by-mail"
  },
]

export default Faqs