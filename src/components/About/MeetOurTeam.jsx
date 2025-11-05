import React from "react";
import { Award, BookOpen, Briefcase, GraduationCap, Scale, Users, Shield, Globe } from "lucide-react";

const MeetOurTeam = () => {
  const teamExpertise = [
    { icon: GraduationCap, label: "Ph.D. Holders" },
    { icon: Briefcase, label: "MBA Holders" },
    { icon: Scale, label: "Attorneys" },
    { icon: Users, label: "HR Practitioners" },
    { icon: BookOpen, label: "Scientists" },
    { icon: Shield, label: "Engineers" },
    { icon: Globe, label: "Cybersecurity Experts" }
  ];

  const credentials = [
    "Ph.D. in Business Law - University of Lagos, Nigeria",
    "MBA - Bowling Green State University, Ohio, USA",
    "Licensed Attorney in New York, Texas, and Nigeria",
    "Registered Corporate Counsel in Ohio",
    "Notary Public",
    "Fellow of the Chartered Taxation Institute",
    "Fellow of the Corporate Governance Institute",
    "Fellow of the Chartered Institute of Arbitrators, UK",
    "Advanced Diploma in International Tax - Chartered Institute of Taxation, UK",
    "Human Resources Professional License (MCIPM, HRPL)",
    "Licensed Insolvency & Business Restructuring Practitioner"
  ];

  const highlights = [
    { number: "15+", label: "Years Legal Experience" },
    { number: "3", label: "Bar Admissions" },
    { number: "11+", label: "Professional Credentials" }
  ];

  return (
    <div className="px-[5%] bg-[#F9FAFB] py-[100px] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="max-w-[654px] text-left sm:text-center mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <p className="text-[14px] font-medium tracking-wider text-primary">
              THE BRAINS BEHIND PROMETRICS LEGAL HUB
            </p>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            Meet Our General Counsel
          </h2>
        </div>

        {/* Team Expertise Banner */}
        <div className="bg-white rounded-2xl p-8 mb-12 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-secondary">Our Diverse Team of Experts</h3>
          </div>
          <p className="mb-6 leading-loose text-gray text-justify">
            We have a team of diverse thorough bred experienced professionals to serve your varied consultation needs. We have Ph.D. Holders, MBA Holders, Attorneys, Licensed HR Practitioners, Scientists, Engineers, and Cybersecurity Experts on our team.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {teamExpertise.map((expert, index) => {
              const Icon = expert.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-tertiary border border-primary border-opacity-20 hover:border-opacity-40 hover:shadow-md transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-medium text-center text-secondary">{expert.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats and Credentials */}
          <div className="lg:col-span-1 space-y-6">
            {/* Highlight Stats */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white shadow-lg">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Award className="w-5 h-5" />
                At a Glance
              </h4>
              <div className="space-y-4">
                {highlights.map((stat, index) => (
                  <div key={index} className="text-center pb-4 last:pb-0 border-b border-white border-opacity-20 last:border-0">
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials List */}
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <h4 className="font-bold text-lg text-secondary mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Credentials
              </h4>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                {credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-2 rounded-lg hover:bg-tertiary transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-xs text-gray leading-relaxed">{credential}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Biography */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header Card */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-primary shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 rounded-full border-2 border-primary flex-shrink-0">
                  <span className="text-primary font-bold text-2xl">FO</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    Dr. (Mrs.) Fola Odion
                  </h3>
                  <p className="text-primary font-semibold mb-1">PhD (Law), MBA</p>
                  <p className="text-sm text-gray">General Counsel | Multi-Skilled, Dual-Qualified Business Attorney</p>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-primary" />
                <h4 className="font-bold text-lg text-secondary">Professional Experience</h4>
              </div>
              <p className="mb-6 leading-loose text-gray text-justify">
                Our General Counsel, Dr. (Mrs.) Fola Odion, PhD (Law), MBA is a multi-skilled, dual-qualified business attorney, licensed in New York and Nigeria as an Attorney, and registered as a Corporate Counsel in Ohio with legal experience spanning 15 years. Dr. Fola`s career has been highlighted by a series of achievements in guiding prominent organizations through complex legal landscapes while driving strategic growth initiatives. She has provided strategic legal advice to shareholders and board of directors of prominent multinational companies, including Shell plc and does likewise to small and medium businesses, providing skilled guidance on contract drafting and negotiations, ensuring optimal protection of clients` interests and ensuring compliance with relevant laws and regulations. Dr. Fola advises clients on complex business transactions, including mergers, acquisitions, and other restructuring schemes, with a keen focus on minimizing risks and maximizing opportunities for growth. Dr. Fola collaborates closely with business owners and executives to develop and implement innovative legal and business solutions tailored to the unique needs of businesses and individuals, and represents business clients in negotiations, mediations and dispute resolution proceedings, demonstrating strong advocacy skills.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h4 className="font-bold text-lg text-secondary">Education & Qualifications</h4>
              </div>
              <p className="leading-loose text-gray text-justify">
                Dr. Fola has a Doctor of Philosophy degree (Ph.D.) in Business Law from University of Lagos, Nigeria, and holds an MBA from Bowling Green State University, Ohio, USA. She is a Notary Public, Fellow of the Chartered Taxation Institute, Fellow of the Corporate Governance Institute and Fellow of the Chartered Institute of Arbitrators, UK. She also holds an advanced diploma in international tax from the Chartered Institute of Taxation, UK and holds a human resources professional license (MCIPM, HRPL). She is a licensed insolvency & business restructuring practitioner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;