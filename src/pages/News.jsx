import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ChevronLeft, Filter } from "lucide-react";
import NewsCard from "../components/News/NewsCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getPublicNews } from "../util/getPublicNews";

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const itemsPerPage = 6;
  const navigate = useNavigate();
  const publicNews = getPublicNews();

  // Get unique categories
   const getCategories = () => {const categories = [...new Set(publicNews.map(news => news.category))];
    return ['All', ...categories];
  };
  
  const categories = getCategories();
  
  const filteredNews = useMemo(() => {
    if (selectedCategory === 'All') return publicNews;
    return publicNews.filter(news => news.category === selectedCategory);
  }, [selectedCategory, publicNews]);
  
  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredNews, currentPage]);
  
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleNewsClick = (newsItem) => {
    navigate(
      `/news/${newsItem.title.replace(/\s+/g, '-').toLowerCase()}?id=${newsItem.id}`,
      {
        state: { news: newsItem } // <-- store the object here
      }
    );
    
  };
  
  return (
    <div>
      <Header/>
      <div className="px-[5%] bg-[#F9FAFB] py-[50px] mt-[90px]">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">News & Reports</h1>
          <p>
            Stay informed with the latest news, updates, and changes in U.S. immigration laws that could impact your EB-1A or EB-2 NIW visa application.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedNews.map(news => (
            <NewsCard
              key={news.id}
              news={news}
              onClick={() => handleNewsClick(news)}
            />
          ))}
        </div>
        
        {/* No Results Message */}
        {paginatedNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No news found for the selected category.</p>
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'border border-primary hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};
export default NewsPage;