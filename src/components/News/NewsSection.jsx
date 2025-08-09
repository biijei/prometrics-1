import { useNavigate } from "react-router-dom";
import NewsCard from "./NewsCard";
import { getPublicNews } from "../../util/getPublicNews";

const NewsSection = () => {
  const publicNews = getPublicNews();
  const navigate = useNavigate();

  const handleNewsClick = (newsItem) => {
    navigate(
      `/news/${newsItem.title.replace(/\s+/g, '-').toLowerCase()}?id=${newsItem.id}`,
      {
        state: { news: newsItem } // <-- store the object here
      }
    );
    
  };

  return(
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
        <p className="text-gray-600">Stay updated with the most recent developments</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publicNews.slice(0, 3).map(news => (
            <NewsCard
              key={news.id}
              news={news}
              onClick={() => handleNewsClick(news)}
            />
        ))}
      </div>
    </section>
  );
}
export default NewsSection;