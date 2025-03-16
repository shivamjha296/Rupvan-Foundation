import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage
}) => {
  return (
    <div className="relative py-16 md:py-24">
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <div className="absolute inset-0 bg-gray-900 opacity-75 z-0"></div>
        </>
      )}
      
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${backgroundImage ? 'text-white' : 'text-gray-900'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">{description}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryButtonLink}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-colors"
          >
            {primaryButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Link
              to={secondaryButtonLink}
              className={`inline-flex items-center px-6 py-3 border text-base font-medium rounded-md transition-colors ${
                backgroundImage 
                  ? 'border-white text-white hover:bg-white hover:bg-opacity-10' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Phone className="mr-2 h-5 w-5" />
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 