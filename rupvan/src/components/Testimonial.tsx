import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  role, 
  image 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center text-center">
      <Quote className="h-10 w-10 text-rose-500 mb-4" />
      
      <p className="text-gray-700 text-lg mb-6 italic">"{quote}"</p>
      
      <div className="flex flex-col items-center">
        {image && (
          <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
            <img 
              src={image} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial; 