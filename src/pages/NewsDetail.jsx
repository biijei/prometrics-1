// NewsDetailPage.js
import { ChevronLeft, Calendar, Clock, User, Quote } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const news = location.state?.news;

  if (!news) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">News Article Not Found</h1>
        <button
          onClick={() => navigate('/news')}
          className="text-primary hover:text-secondary"
        >
          Back to News
        </button>
      </div>
    );
  }

  const renderContent = (item, index) => {
    const baseClasses = "mb-4";
    
    switch (item.type) {
      case 'heading':
        return (
          <h2 key={index} className={`${baseClasses} text-2xl font-bold text-gray-900 mt-8 mb-6`}>
            {item.content}
          </h2>
        );

      case 'paragraph':
        return (
          <p key={index} className={`${baseClasses} text-gray-700 leading-relaxed text-lg`}>
            {item.content}
          </p>
        );

      case 'image':
        return (
          <div key={index} className={`${baseClasses} my-8`}>
            <img
              src={item.content}
              alt={item.alt || 'Article image'}
              className="w-full rounded-lg shadow-md"
            />
            {item.caption && (
              <p className="text-sm text-gray-500 text-center mt-2 italic">
                {item.caption}
              </p>
            )}
          </div>
        );

      case 'bold':
        return (
          <p key={index} className={`${baseClasses} font-bold text-gray-900 text-lg`}>
            {item.content}
          </p>
        );

      case 'underline':
        return (
          <p key={index} className={`${baseClasses} underline font-semibold text-gray-900 text-lg`}>
            {item.content}
          </p>
        );

      case 'italic':
        return (
          <p key={index} className={`${baseClasses} italic text-gray-700 text-lg`}>
            {item.content}
          </p>
        );

      case 'bulletPoints':
        return (
          <ul key={index} className={`${baseClasses} list-disc list-inside space-y-2 text-gray-700 ml-4`}>
            {item.content.map((point, pointIndex) => (
              <li key={pointIndex} className="text-lg leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        );

      case 'numberedList':
        return (
          <ol key={index} className={`${baseClasses} list-decimal list-inside space-y-2 text-gray-700 ml-4`}>
            {item.content.map((point, pointIndex) => (
              <li key={pointIndex} className="text-lg leading-relaxed">
                {point}
              </li>
            ))}
          </ol>
        );

      case 'quote':
        return (
          <blockquote key={index} className={`${baseClasses} border-l-4 border-primary pl-6 py-4 bg-border/20 my-6`}>
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-lg italic text-secondary leading-relaxed">
                {item.content}
              </p>
            </div>
          </blockquote>
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

      case 'highlight':
        return (
          <div key={index} className={`${baseClasses} bg-border/20 border-l-4 border-border p-4 my-6`}>
            <p className="text-gray-800 text-lg leading-relaxed">
              {item.content}
            </p>
          </div>
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
            className="flex items-center gap-2 text-primary hover:text-secondary mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to News
          </button>
          
          {/* Article Header */}
          <header className="mb-8">
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="bg-primary text-white px-3 py-1 rounded-full font-medium">
                {news.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(news.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {news.readTime}
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {news.title}
            </h1>
            
            {/* Author */}
            <div className="flex items-center gap-3 mb-8">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 font-medium text-lg">
                {news.author}
              </span>
            </div>
            
            {/* Cover Image */}
            <img
              src={news.coverImage}
              alt={news.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            />
            
            {/* Excerpt */}
            <div className="bg-gray-50 border-l-4 border-primary p-6 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
                {news.excerpt}
              </p>
            </div>
          </header>
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {news.content && news.content.map((item, index) => renderContent(item, index))}
          </div>
          
          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{news.author}</p>
                  <p className="text-sm text-gray-500">
                    Published on {new Date(news.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => navigate('/news')}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
              >
                More News
              </button>
            </div>
          </footer>
        </article>
      </div>
      <Footer/>
    </div>
  );
};

export default NewsDetailPage;