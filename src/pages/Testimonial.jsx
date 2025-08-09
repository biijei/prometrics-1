// Testimonial Page
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Users, TrendingUp } from 'lucide-react';
import TestimonialCard from '../components/Testimonials/TestimonialCard';
import { testimonialData, getIndustries } from '../components/Testimonials/TestimonialData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TestimonialPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6); // Initial load count
  const navigate = useNavigate();
  const loadMoreCount = 3; // How many to load each time

  const industries = getIndustries();

  // Filter testimonials by industry
  const filteredTestimonials = useMemo(() => {
    if (selectedIndustry === 'All') return testimonialData;
    return testimonialData.filter(testimonial => testimonial.industry === selectedIndustry);
  }, [selectedIndustry]);

  // Get visible testimonials based on load more
  const visibleTestimonials = useMemo(() => {
    return filteredTestimonials.slice(0, visibleCount);
  }, [filteredTestimonials, visibleCount]);

  const hasMore = visibleCount < filteredTestimonials.length;

  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry);
    setVisibleCount(6); // Reset visible count when filtering
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + loadMoreCount);
  };

  const handleTestimonialClick = (testimonial) => {
    navigate(
      `/testimonials/${testimonial.name.replace(/\s+/g, '-').toLowerCase()}?id=${testimonial.id}`,
      {
        state: { testimonial }
      }
    );
  };

  // Calculate stats
  const stats = {
    total: filteredTestimonials.length,
    averageRating: filteredTestimonials.length > 0 
      ? (filteredTestimonials.reduce((sum, t) => sum + t.rating, 0) / filteredTestimonials.length).toFixed(1)
      : 0,
    industries: new Set(filteredTestimonials.map(t => t.industry)).size
  };

  return (
    <div>
      <Header/>
      <div className="px-[5%] bg-[#F9FAFB] py-[50px] mt-[90px]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses across various industries achieve their goals 
              and transform their operations with our innovative solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="w-8 h-8 text-[#2A6EDB] mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stats.total}</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <TrendingUp className="w-8 h-8 text-[#F7966B] mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stats.averageRating}</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Filter className="w-8 h-8 text-[#00B2FF] mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stats.industries}</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>

          {/* Industry Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by Industry:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => handleIndustryChange(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedIndustry === industry
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry}
                  {industry !== 'All' && (
                    <span className="ml-2 text-xs opacity-75">
                      ({testimonialData.filter(t => t.industry === industry).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Current Filter Info */}
          {selectedIndustry !== 'All' && (
            <div className="mb-6 p-4 bg-border/20 border border-border rounded-lg">
              <p className="text-secondary">
                <span className="font-medium">
                  Showing {filteredTestimonials.length} testimonial{filteredTestimonials.length !== 1 ? 's' : ''}
                </span>
                {' '}from the <strong>{selectedIndustry}</strong> industry
                {visibleCount < filteredTestimonials.length && (
                  <span className="ml-2 text-sm">
                    (Displaying {visibleCount} of {filteredTestimonials.length})
                  </span>
                )}
              </p>
            </div>
          )}

          {/* Testimonials Grid */}
          {visibleTestimonials.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {visibleTestimonials.map(testimonial => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    onClick={() => handleTestimonialClick(testimonial)}
                  />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center">
                  <button
                    onClick={handleLoadMore}
                    className="bg-primary text-white px-8 py-3 rounded-lg hover:secondary transition-colors font-medium"
                  >
                    Load More Testimonials ({filteredTestimonials.length - visibleCount} remaining)
                  </button>
                </div>
              )}

              {/* End Message */}
              {!hasMore && filteredTestimonials.length > 6 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    You&apos;ve viewed all {filteredTestimonials.length} testimonial{filteredTestimonials.length !== 1 ? 's' : ''}
                    {selectedIndustry !== 'All' && ` in the ${selectedIndustry} industry`}.
                  </p>
                  {selectedIndustry !== 'All' && (
                    <button
                      onClick={() => handleIndustryChange('All')}
                      className="mt-2 text-primary hover:text-secondary font-medium"
                    >
                      View All Industries
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            /* No Results */
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Users className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No testimonials found
              </h3>
              <p className="text-gray-500 mb-4">
                No testimonials available for the selected industry.
              </p>
              <button
                onClick={() => handleIndustryChange('All')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View All Testimonials
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TestimonialPage;