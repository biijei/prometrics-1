// TestimonialCard.js
import { Star, MapPin, Building, User, ArrowRight } from 'lucide-react';

const TestimonialCard = ({ testimonial, onClick }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-border">
      <div className="p-6">
        {/* Header with Avatar and Basic Info */}
        <div className="flex items-start gap-4 mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-border"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600 truncate">
              {testimonial.position}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Building className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500 truncate">
                {testimonial.company}
              </span>
            </div>
          </div>
        </div>

        {/* Industry and Location */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
            {testimonial.industry}
          </span>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {testimonial.location}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {renderStars(testimonial.rating)}
          </div>
          <span className="text-sm text-gray-600">
            ({testimonial.rating}/5)
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
          &quot;{testimonial.excerpt}&quot;
        </p>

        {/* Tags */}
        {testimonial.tags && (
          <div className="flex flex-wrap gap-1 mb-4">
            {testimonial.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {testimonial.tags.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                +{testimonial.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer with Date and Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-[#c4c4c4]">
          <span className="text-sm text-gray-500">
            {new Date(testimonial.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
          <button
            onClick={onClick}
            className="flex items-center gap-1 text-primary hover:text-secondary font-medium text-sm transition-colors"
          >
            Read Full Story <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;