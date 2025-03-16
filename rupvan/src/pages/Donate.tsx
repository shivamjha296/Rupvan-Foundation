import React from 'react';
import { CreditCard, Building, Heart, Users, Phone, Mail } from 'lucide-react';
import elderlyImage1 from '../img/Rupvan1.1.jpg';
import elderlyImage2 from '../img/Rupvan1.2.jpg';
import { useLanguage } from '../context/LanguageContext';

const Donate = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-12 bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span dangerouslySetInnerHTML={{ __html: t('donate.title').replace('Elderly', '<span class="text-rose-600">Elderly</span>') }} />
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            {t('donate.subtitle')}
          </p>
        </div>

        {/* Image Banner */}
        <div className="mt-10 relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-xl">
          <img 
            src={elderlyImage1} 
            alt="Elderly residents at Rupvan Foundation" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/70 to-transparent flex items-center">
            <div className="px-8 md:px-16 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('donate.banner.title')}
              </h2>
              <p className="text-white/90 text-sm md:text-base">
                {t('donate.banner.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Information */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-60 bg-rose-600">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-700 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="h-24 w-24 text-white" />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('donate.why.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('donate.why.description')}
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-rose-500">•</span>
                  <span>{t('donate.why.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-rose-500">•</span>
                  <span>{t('donate.why.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-rose-500">•</span>
                  <span>{t('donate.why.item3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-rose-500">•</span>
                  <span>{t('donate.why.item4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-rose-500">•</span>
                  <span>{t('donate.why.item5')}</span>
                </li>
              </ul>
              
              <div className="mt-8 flex items-center justify-center">
                <Users className="h-12 w-12 text-rose-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{t('donate.supporting')}</h3>
                  <p className="text-3xl font-bold text-rose-600">{t('donate.residents')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Donation Information */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('donate.bank.title')}</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Building className="h-6 w-6 text-rose-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-900">{t('donate.bank.account')}</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">{t('donate.bank.name')}</span> Rupvan Foundation</p>
                    <p><span className="font-medium">{t('donate.bank.number')}</span> 1234567890</p>
                    <p><span className="font-medium">{t('donate.bank.bankname')}</span> State Bank of India</p>
                    <p><span className="font-medium">{t('donate.bank.ifsc')}</span> SBIN0001234</p>
                    <p><span className="font-medium">{t('donate.bank.branch')}</span> Main Branch</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Phone className="h-6 w-6 text-rose-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-900">{t('donate.contact.title')}</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">{t('donate.contact.phone')}</span> +91 98765 43210</p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="font-medium">{t('donate.contact.email')}</span> donations@rupvanfoundation.org
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 text-rose-700">
                  <p className="font-medium">{t('donate.tax.title')}</p>
                  <p className="text-sm mt-1">{t('donate.tax.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('donate.impact.title')}</h2>
              <div className="italic text-gray-600">
                <p>{t('donate.impact.story1')}</p>
                <p className="mt-4 font-medium text-gray-900">{t('donate.impact.person1')}</p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 italic text-gray-600">
                <p>{t('donate.impact.story2')}</p>
                <p className="mt-4 font-medium text-gray-900">{t('donate.impact.person2')}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={elderlyImage2} 
              alt="Elderly residents enjoying activities" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-rose-600 text-white">
              <h3 className="text-xl font-bold mb-2">{t('donate.promise.title')}</h3>
              <p className="text-white/90">
                {t('donate.promise.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">{t('donate.cta.title')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('donate.cta.description')}
          </p>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10">
              {t('donate.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate; 