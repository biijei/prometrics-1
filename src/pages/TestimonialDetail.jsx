// TestimonialDetailPage.js
import { ChevronLeft, Star, MapPin, Building, User, Calendar, Quote, Tag } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getInitials } from '../util/getInitials';

const TestimonialDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const testimonial = location.state?.testimonial;

  if (!testimonial) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Testimonial Not Found</h1>
        <p className="text-gray-600 mb-6">The testimonial you&apos;re looking for could not be found.</p>
        <button
          onClick={() => navigate('/testimonials')}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
        >
          Back to Testimonials
        </button>
      </div>
    );
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const renderContent = (item, index) => {
    const baseClasses = "mb-6";
    
    switch (item.type) {
      case 'paragraph':
        return (
          <p key={index} className={`${baseClasses} text-gray-700 leading-relaxed text-lg`}>
            {item.content}
          </p>
        );

      case 'quote':
        return (
          <blockquote key={index} className={`${baseClasses} border-l-4 border-primary pl-6 py-4 bg-border/20 my-8`}>
            <div className="flex items-start gap-3">
              <Quote className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
              <p className="text-xl italic text-secondary leading-relaxed font-medium">
                {item.content}
              </p>
            </div>
          </blockquote>
        );

      case 'bulletPoints':
        return (
          <ul key={index} className={`${baseClasses} list-none space-y-3 text-gray-700`}>
            {item.content.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start gap-3 text-lg leading-relaxed">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                {point}
              </li>
            ))}
          </ul>
        );

      case 'numberedList':
        return (
          <ol key={index} className={`${baseClasses} space-y-3 text-gray-700`}>
            {item.content.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start gap-3 text-lg leading-relaxed">
                <span className="bg-tertiary text-primary text-sm w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0 font-medium">
                  {pointIndex + 1}
                </span>
                {point}
              </li>
            ))}
          </ol>
        );

      case 'highlight':
        return (
          <div key={index} className={`${baseClasses} bg-border/20 border-l-4 border-border p-6 my-8`}>
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              {item.content}
            </p>
          </div>
        );

      case 'mixedText':
        return (
          <p key={index} className={`${baseClasses} text-gray-700 leading-relaxed text-lg`}>
            {item.content.map((textItem, textIndex) => {
              switch (textItem.type) {
                case 'text':
                  return (
                    <span key={textIndex}>
                      {textItem.content}
                    </span>
                  );
                case 'bold':
                  return (
                    <strong key={textIndex} className="font-bold text-gray-900">
                      {textItem.content}
                    </strong>
                  );
                case 'underline':
                  return (
                    <span key={textIndex} className="underline font-medium">
                      {textItem.content}
                    </span>
                  );
                case 'italic':
                  return (
                    <em key={textIndex} className="italic">
                      {textItem.content}
                    </em>
                  );
                default:
                  return textItem.content;
              }
            })}
          </p>
        );

      case 'divider':
        return (
          <hr key={index} className={`${baseClasses} border-gray-300 my-8`} />
        );

      default:
        return null;
    }
  };
  
  return (
    <div>
      <Header/>
      <div className="px-[5%] bg-[#F9FAFB] py-[50px] mt-[90px]">
        <article className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-secondary hover:primary mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Testimonials
          </button>
          
          {/* Header Section */}
          <header className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Avatar and Basic Info */}
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-border shadow-md"
                  />) : (
                  <div className="w-16 h-16 bg-tertiary text-2xl text-primary border border-primary rounded-full flex items-center justify-center uppercase font-semibold">
                    {getInitials(`${testimonial.name}`)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {testimonial.name}
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">
                    {testimonial.position}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700 font-medium">
                      {testimonial.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Rating and Meta Info */}
              <div className="lg:text-right">
                <div className="flex lg:justify-end items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">
                    {testimonial.rating}/5
                  </span>
                </div>
                <div className="flex lg:justify-end items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">
                    {new Date(testimonial.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  {testimonial.industry}
                </span>
              </div>
            </div>
          </header>

          {/* Excerpt Highlight */}
          <div className="bg-gradient-to-r from-border/20 to-purple-50 border-l-4 border-primary p-8 mb-8 rounded-r-lg">
            <Quote className="w-8 h-8 text-secondary mb-4" />
            <p className="text-2xl text-gray-800 leading-relaxed font-medium italic">
              &quot;{testimonial.excerpt}&quot;
            </p>
          </div>
          
          {/* Full Testimonial Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-primary" />
              Full Testimonial
            </h2>
            
            <div className="prose prose-lg max-w-none">
              {testimonial.fullTestimonial && testimonial.fullTestimonial.map((item, index) => 
                renderContent(item, index)
              )}
            </div>
          </div>

          {/* Tags Section */}
          {testimonial.tags && testimonial.tags.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Tag className="w-5 h-5 text-primary" />
                Key Highlights
              </h3>
              <div className="flex flex-wrap gap-3">
                {testimonial.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Footer Section */}
          <footer className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-border"
                  />) : (
                  <div className="w-16 h-16 bg-tertiary text-2xl text-primary border border-primary rounded-full flex items-center justify-center uppercase font-semibold">
                    {getInitials(`${testimonial.name}`)}
                  </div>
                )}
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/testimonials')}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  More Testimonials
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                >
                  Work With Us
                </button>
              </div>
            </div>
          </footer>
        </article>
      </div>
      <Footer/>
    </div>
  );
};

export default TestimonialDetailPage;