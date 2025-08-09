import { newsData } from "../components/News/NewsData";

export const getPublicNews = () => {
  return newsData.filter(news => news.id !== '1213');
};