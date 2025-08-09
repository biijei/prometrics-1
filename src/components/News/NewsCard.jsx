import { Clock } from "lucide-react";
import { User } from "lucide-react";
import { Calendar } from "lucide-react";
import { ArrowRight } from "lucide-react";

const NewsCard = ({ news, onClick, showExcerpt = true }) => (
  <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <img
      src={news.coverImage}
      alt={news.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
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
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
        {news.title}
      </h3>
      
      {showExcerpt && (
        <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{news.author}</span>
        </div>
        <button
          onClick={onClick}
          className="flex items-center gap-1 text-primary hover:text-secondary font-medium"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </article>
);

export default NewsCard;