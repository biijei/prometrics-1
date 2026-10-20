import Header from '../components/Header'
import Footer from '../components/Footer'
import UscisResourceCards from '../components/UscisResourceCards'

const UscisResources = () => {
  return (
    <div>
      <Header />
      <main className="mt-[90px] bg-tertiary">
        <section className="px-[5%] py-[70px] md:py-[100px]">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <div className="h-[2px] w-12 bg-primary"></div>
              <p className="text-[14px] font-medium tracking-wider text-primary">USCIS</p>
              <div className="h-[2px] w-12 bg-primary"></div>
            </div>
            <h1 className="mb-5 font-reckless text-[32px] font-medium leading-none text-secondary md:text-[48px]">
              Official USCIS Resources
            </h1>
            <p className="leading-relaxed text-gray">
              These are official U.S. Citizenship and Immigration Services pages. Each link opens in a new tab. Prometrics does not operate these sites.
            </p>
          </div>

          <UscisResourceCards />

          <div className="mx-auto mt-12 max-w-[640px] text-center">
            <p className="text-sm leading-relaxed text-gray">
              Checking a case on these sites does not create an attorney-client relationship. If you want help reading a status, book a consultation.
            </p>
            <a
              href="https://calendly.com/prometricspro/legal-consult"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-[40px] bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Book a consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default UscisResources
