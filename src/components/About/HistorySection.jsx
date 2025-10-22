import React from "react";
import { Award, BookOpen, Briefcase, GraduationCap, Heart, Sparkles } from "lucide-react";

const HistorySection = () => {
  const achievements = [
    { icon: GraduationCap, text: "PhD in Business Law & MBA" },
    { icon: Award, text: "Fellow of Multiple Chartered Institutes" },
    { icon: Briefcase, text: "5 Years at Shell plc" },
    { icon: BookOpen, text: "Licensed U.S. Attorney" }
  ];

  return (
    <div className="bg-secondary px-[5%] py-[100px] bg-opacity-20 overflow-hidden">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mb-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-12 bg-primary"></div>
            <p className="text-[14px] font-medium tracking-wider text-primary">OUR HISTORY</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary max-w-2xl">
            Care To Know How We Got Here?
          </h2>
          
          {/* Intro with visual highlight */}
          <div className="bg-white border-l-4 border-primary rounded-lg p-6 mb-12 shadow-sm">
            <p className="font-semibold text-lg text-secondary flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary flex-shrink-0" />
              Our General Counsel is the visioner behind PROMETRICS LEGAL HUB
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Left Column - Achievements Cards */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Key Credentials
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-tertiary border border-primary border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray leading-relaxed">{achievement.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Success Stats */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white shadow-lg">
              <h4 className="font-bold text-lg mb-4">Success Stories</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white border-opacity-20">
                  <span className="text-sm">EB-1A Approval</span>
                  <span className="font-bold text-xl">2 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Fastest Case</span>
                  <span className="font-bold text-xl">2 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Story Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Story Paragraphs with enhanced styling */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-loose text-gray">
                  Dr. (Mrs.) Fola Odion, PhD (Law), MBA moved to the USA on an F1 non-immigrant visa to tick one of her career goals off her box – getting an MBA which would also enable her be with her husband, who was working in Columbus, Ohio as a Project Engineer on his F1 OPT. Upon completion of her studies, the inevitable question of `what next` came up. Considering the challenges highly qualified professionals with foreign degrees faced in getting white-collar jobs in the United States of America, either due to lack of permanent immigration papers (U.S `Green Card`) or just general skepticism of some U.S. recruiters about the value of a non-U.S. degree, Dr. Fola identified the need and like a true entrepreneur, stepped up to meet the need.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-loose text-gray">
                  Dr. Fola applied her expertise to win for all her siblings, the approval of their EB-1A extraordinary ability Green Cards (`Einstein Visa`). One of her siblings, an internationally trained lawyer, secured her EB-1A green card in two months of filing the EB-1A petition while her second sibling, a cybersecurity expert, secured his green card in four months of filing the EB-1A petition. She has guided F1 students to successfully establish their own businesses and leverage such businesses to gain immigration benefits.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-loose text-gray">
                  Dr. Fola has a PhD in Business Law, an MBA and is an Ohio Notary Public. In addition, she is a Fellow of the Chartered Institute of Arbitrators, UK (FCIArb), Fellow of the Institute of Chartered Secretaries and Administrators (ICSAN), Fellow of The Chartered Institute of Taxation (FCTI) and Full Member of the Chartered Institute of Personnel Management (MCIPM) with a Human Resources Professional License (HRPL).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="mb-0 leading-loose text-gray">
                  She enrolled in the U.S. Attorney licensing exams, passed it, got admitted and leveraging on her in-depth legal skills, business acumen, proactiveness, professionalism and thoroughness from working at multinational oil and gas giant, Shell plc for five years, applied that to create a business venture to address the pain points of fellow immigrants. Dr. Fola leverages her legal and analytical skills combined with her business acumen to find practical answers to nagging questions encountered by non-immigrants who seek to make the United States their permanent home and applies these skills to provide tailor-fit solutions to her network and business clients. As the saying goes, charity begins at home. Dr. Fola applied her learnings to secure permanent residence in the United States of America, understand the business and employment terrain of U.S. and is now committed to ensuring that immigrants have access to information and strategies that can position them to make the best of United States of America – the great land of opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center shadow-lg">
          <Heart className="w-12 h-12 text-white mx-auto mb-4" fill="currentColor" />
          <p className="font-bold text-2xl text-white">And that's how we got here!</p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;