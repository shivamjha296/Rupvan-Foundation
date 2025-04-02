import React, { useState, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    experience: '',
    interests: '',
    message: '',
    aadhar: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Get the form element
      const formEl = e.target as HTMLFormElement;
      
      // Create FormData object from the form
      const formDataObj = new FormData(formEl);
      
      // Convert FormData to URL encoded string for FormSubmit
      const formBody = new URLSearchParams(formDataObj as any).toString();
      
      // Send the form data using fetch
      const response = await fetch('https://formsubmit.co/ajax/shivamjha.1.11.2005@gmail.com', {
        method: 'POST',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      if (result.success === 'true' || result.success === true) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          experience: '',
          interests: '',
          message: '',
          aadhar: ''
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (err) {
      console.error('Failed to send email:', err);
      setIsSubmitting(false);
      setError('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://www.homecareassistancetampabay.com/wp-content/uploads/Aging-Adults-Volunteering.jpg"
            alt="Volunteers helping seniors"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Become a Volunteer
          </h1>
          <p className="text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            Make a difference in the lives of our seniors by volunteering your time and skills
          </p>
        </div>
      </div>

      {/* Volunteer Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Your volunteer application has been submitted successfully. We'll contact you soon!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-rose-600 hover:bg-rose-700 transition-colors duration-200"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Application Form</h2>
                <p className="text-lg text-gray-600">Join our team of dedicated volunteers and make a positive impact</p>
              </div>
              
              {error && (
                <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Volunteer Application" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 transition-colors duration-200 px-4 py-3 placeholder-gray-400 text-gray-900"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 transition-colors duration-200 px-4 py-3 placeholder-gray-400 text-gray-900"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 transition-colors duration-200 px-4 py-3 placeholder-gray-400 text-gray-900"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="aadhar" className="block text-sm font-semibold text-gray-700">
                      Aadhar Number
                    </label>
                    <input
                      type="text"
                      id="aadhar"
                      name="aadhar"
                      required
                      maxLength={14}
                      pattern="[0-9]{4} [0-9]{4} [0-9]{4}"
                      title="Please enter a valid 12-digit Aadhar number"
                      value={formData.aadhar}
                      onChange={(e) => {
                        const numbers = e.target.value.replace(/[^0-9]/g, '').slice(0, 12);
                        const formattedValue = numbers.replace(/(\d{4})(?=\d)/g, '$1 ');
                        setFormData(prevState => ({
                          ...prevState,
                          aadhar: formattedValue
                        }));
                      }}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 transition-colors duration-200 px-4 py-3 placeholder-gray-400 text-gray-900"
                      placeholder="XXXX XXXX XXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 transition-colors duration-200 px-4 py-3 placeholder-gray-400 text-gray-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-700">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 transition-colors duration-200 px-4 py-3 placeholder-gray-400 text-gray-900"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (1PM - 4PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700">
                      Previous Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 transition-colors duration-200 px-4 py-3 placeholder-gray-400 text-gray-900"
                      placeholder="Any previous volunteering experience"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="interests" className="block text-sm font-semibold text-gray-700">
                    Areas of Interest
                  </label>
                  <input
                    type="text"
                    id="interests"
                    name="interests"
                    required
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="e.g., Activities, Reading, Music, Arts & Crafts"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 transition-colors duration-200 px-4 py-3 placeholder-gray-400 text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Why do you want to volunteer?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 transition-colors duration-200 px-4 py-3 placeholder-gray-400 text-gray-900"
                    placeholder="Tell us about your motivation to volunteer..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white transition-all duration-200 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;