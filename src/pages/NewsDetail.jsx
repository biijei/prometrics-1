import { User } from "lucide-react";
import { Clock } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NewsDetailPage = () => {
  const location = useLocation();
  const news = location.state?.news; // <-- retrieve the object
  const navigate = useNavigate();


  const renderContent = (item, index) => {
    const baseClasses = "mb-4";
    
    switch (item.type) {
      case 'heading':
        return <h2 key={index} className={`${baseClasses} text-2xl font-bold text-gray-900`}>{item.content}</h2>;
      case 'paragraph':
        return <p key={index} className={`${baseClasses} text-gray-700 leading-relaxed`}>{item.content}</p>;
      case 'image':
        return (
          <div key={index} className={`${baseClasses} my-6`}>
            <img
              src={item.content}
              alt={item.alt || 'Article image'}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        );
      case 'bold':
        return <p key={index} className={`${baseClasses} font-bold text-gray-900`}>{item.content}</p>;
      case 'underline':
        return <p key={index} className={`${baseClasses} underline font-semibold text-gray-900`}>{item.content}</p>;
      default:
        return null;
    }
  };
  
  return (
    <div>
      <Header/>
      <div className="px-[5%] bg-[#F9FAFB] py-[50px] mt-[90px]">
        <article className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/news')}
            className="flex items-center gap-2 text-primary hover:text-secondary mb-6"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to News
          </button>
          
          <div className="mb-6">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full font-medium">
                {news.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(news.publishDate).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {news.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{news.title}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 font-medium">{news.author}</span>
            </div>
            
            <img
              src={news.coverImage}
              alt={news.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            />
          </div>
          
          <div className="prose max-w-none">
            {news.content.map((item, index) => renderContent(item, index))}
          </div>
        </article>
      </div>
    <Footer/>
    </div>
  );
};
export default NewsDetailPage;