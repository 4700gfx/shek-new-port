import React, { useState, useEffect, useCallback } from 'react';

const LeadMagnetsAndForm = () => {
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    purpose: '',
    timeline: '',
    comments: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedLeadMagnet, setSelectedLeadMagnet] = useState(null);
  const [leadMagnetEmail, setLeadMagnetEmail] = useState({ name: '', email: '' });

  const handleScroll = useCallback(() => {
    const element = document.getElementById('lead-magnets');
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const threshold = windowHeight * 0.1;

    setInView(rect.top <= windowHeight - threshold && rect.bottom >= threshold);
  }, []);

  useEffect(() => {
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLeadMagnetEmailChange = (e) => {
    setLeadMagnetEmail({
      ...leadMagnetEmail,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.budget || !formData.purpose || !formData.timeline) {
      alert('Please fill in all required fields');
      return;
    }
    
    try {
      // EmailJS implementation - replace with your actual service details
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        budget: formData.budget,
        purpose: formData.purpose,
        timeline: formData.timeline,
        comments: formData.comments,
        to_email: '4700gfx@gmail.com' // Replace with your email
      };
      
      await window.emailjs.send(
        'service_ic893uk',    // Replace with your EmailJS service ID
        'template_32mvdvn',   // Replace with your EmailJS template ID
        templateParams,
        'eoH9sGvGBCGhP9bHp'     // Replace with your EmailJS public key
      );
    

      console.log('Form submitted:', formData);
      setShowSuccessModal(true);
      setFormData({
        name: '',
        email: '',
        budget: '',
        purpose: '',
        timeline: '',
        comments: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    }
  };

  const handleLeadMagnetSubmit = () => {
    if (!leadMagnetEmail.name || !leadMagnetEmail.email) {
      alert('Please provide your name and email');
      return;
    }
    
    console.log('Lead magnet requested:', { type: selectedLeadMagnet, ...leadMagnetEmail });
    alert('Download started! Check your email.');
    setSelectedLeadMagnet(null);
    setLeadMagnetEmail({ name: '', email: '' });
  };

  const handleLeadMagnetClick = (magnetType) => {
    setSelectedLeadMagnet(magnetType);
  };

  const leadMagnets = [
    {
      id: 'audit',
      icon: "🌐",
      title: 'Free Website Audit',
      subtitle: 'Mobile & Desktop Analysis',
      description: 'Get a comprehensive professional audit of your website\'s performance, user experience, and conversion potential with detailed recommendations. This will come through a video recording via Loom.',
      animation: "animate-fade-in-left"
    },
    {
      id: 'checklist',
      icon: "✅",
      title: 'Website Success Checklist',
      subtitle: 'Professional Grade Standards',
      description: 'Our proven 47-point checklist used by agencies to ensure websites meet industry standards and convert visitors into customers. This checklist is useful to asses the state of your website when time for review',
      animation: "animate-fade-in-up"
    },
    {
      id: 'ebook',
      icon: "📖",
      title: '4-Week Website Transformation',
      subtitle: 'Complete Optimization Guide',
      description: 'Transform your website into a conversion machine with our comprehensive 4-week action plan used by professional agencies. Useful for businesses with websites that want to take it to the next level.',
      animation: "animate-fade-in-right"
    }
  ];

  return (
    <section 
      id="lead-magnets" 
      className="min-h-screen w-full max-w-7xl mx-auto mb-6 mt-10 px-4 lg:px-8"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 
          className={`font-roboto font-bold text-4xl md:text-5xl lg:text-6xl mt-16 sm:mt-24 mb-4 bg-gradient-to-r from-gray-500 to-black bg-clip-text text-transparent transition-all duration-1000 ${
            inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Transform Your Website Into a Lead Generator
        </h1>
        <p className={`text-black text-md md:text-sm max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
          inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Get instant access to our expert resources and start turning more visitors into customers today. At 4700 GFX Studios, we provide high-quality tools and solutions at a price that works for businesses at every stage of growth. Explore our freebies and see how we can help your business thrive.
        </p>
      </div>

      {/* Lead Magnets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {leadMagnets.map((magnet, index) => (
          <div 
            key={magnet.id}
            className={`bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black p-6 sm:p-8 rounded-2xl flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer ${
              inView ? `${magnet.animation} opacity-100` : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
            onClick={() => handleLeadMagnetClick(magnet.id)}
          >
            <div className="text-center mb-6">
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {magnet.icon}
              </span>
              <h2 className="font-roboto font-bold text-xl sm:text-2xl text-white leading-tight mb-2">
                {magnet.title}
              </h2>
              <p className="text-gray-300 text-sm font-medium">{magnet.subtitle}</p>
            </div>
            <p className="text-gray-100 text-sm sm:text-md leading-relaxed flex-grow mb-6">
              {magnet.description}
            </p>
            <div className="mt-auto pt-4 border-t border-gray-600/30">
              <button className="text-white font-medium hover:text-gray-300 transition-colors duration-300 flex items-center group w-full justify-center">
                <span className="mr-2">📥</span>
                Download Free 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Value Proposition Section */}
      <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-1000 mb-16 ${
        inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ animationDelay: '600ms' }}>
        <div className="text-center mb-8">
          <h2 className="font-roboto font-bold text-2xl sm:text-3xl text-gray-800 mb-4">
            Why These Resources Work
          </h2>
          <p className="text-gray-600 text-base sm:text-md px-12">
            Our resources draw on strategies used by 500+ agencies to turn websites into conversion-driven machines with measurable results. Perfect for any business owner looking to evaluate and improve their online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-gray-500 to-black bg-clip-text text-transparent mb-2">500+</div>
            <p className="text-gray-700">Websites Optimized Using These Strategies</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-gray-500 to-black bg-clip-text text-transparent mb-2">25-75%</div>
            <p className="text-gray-700">Average Conversion Rate Improvement</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-gray-500 to-black bg-clip-text text-transparent mb-2">48 Hours</div>
            <p className="text-gray-700">To See Initial Results</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative py-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-lg">
          <span className="px-6 bg-white text-gray-600 font-semibold">
            Ready for a Custom Solution?
          </span>
        </div>
      </div>

      {/* Client Inquiry Form Section */}
      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-600 transition-all duration-1000 ${
        inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ animationDelay: '800ms' }}>
        <div className="text-center mb-8">
          <h2 className="font-roboto font-bold text-2xl sm:text-3xl text-white mb-4">
            Start Your Project Today
          </h2>
          <p className="text-gray-100 text-base sm:text-md max-w-2xl mx-auto">
            Share your project with us and receive a customized strategy and quote within 24 hours. Let’s bring your vision to life and start driving real results.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-gray-100 font-medium mb-3">
                <span>📄</span>
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:border-red-400 focus:outline-none transition-all duration-300 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-100 font-medium mb-3">
                <span>📧</span>
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:border-red-400 focus:outline-none transition-all duration-300 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-gray-100 font-medium mb-3">
                <span>💰</span>
                Project Budget <span className="text-red-400">*</span>
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:border-red-400 focus:outline-none transition-all duration-300"
              >
                <option value="" className="bg-gray-700">Select your budget range</option>
                <option value="under-5k" className="bg-gray-700">Under $250</option>
                <option value="5k-10k" className="bg-gray-700">$300 - $500</option>
                <option value="10k-25k" className="bg-gray-700">$550 - $700</option>
                <option value="25k-50k" className="bg-gray-700">$750 - $1,000</option>
                <option value="over-50k" className="bg-gray-700">Over $1,500 +</option>
                <option value="not-sure" className="bg-gray-700">Not Sure Yet</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-100 font-medium mb-3">
                <span>⏰</span>
                Expected Timeline <span className="text-red-400">*</span>
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:border-red-400 focus:outline-none transition-all duration-300"
              >
                <option value="" className="bg-gray-700">Select Timeline</option>
                <option value="asap" className="bg-gray-700">ASAP (Rush Project)</option>
                <option value="1-month" className="bg-gray-700">Within 3-4 Weeks</option>
                <option value="2-3-months" className="bg-gray-700">2-3 Months</option>
                <option value="3-6-months" className="bg-gray-700">3-6 Months</option>
                <option value="6-plus-months" className="bg-gray-700">6+ Months</option>
                <option value="flexible" className="bg-gray-700">Flexible Timeline</option>
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-100 font-medium mb-3">
              <span>🎯</span>
              Project Purpose <span className="text-red-400">*</span>
            </label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:border-red-400 focus:outline-none transition-all duration-300"
            >
              <option value="" className="bg-gray-700">What's your main goal?</option>
              <option value="new-website" className="bg-gray-700">Build a new website from scratch</option>
              <option value="redesign" className="bg-gray-700">Redesign existing website</option>
              <option value="optimization" className="bg-gray-700">Optimize for better conversions</option>
              <option value="ecommerce" className="bg-gray-700">Create/improve e-commerce site</option>
              <option value="mobile" className="bg-gray-700">Improve mobile experience</option>
              <option value="seo" className="bg-gray-700">Improve search engine ranking</option>
              <option value="speed" className="bg-gray-700">Improve site speed and performance</option>
              <option value="other" className="bg-gray-700">Other (please specify in comments)</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-100 font-medium mb-3">
              <span>💬</span>
              Additional Comments
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              placeholder="Tell us about your business, specific requirements, or any questions you have..."
              rows="4"
              className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:border-red-400 focus:outline-none transition-all duration-300 resize-vertical placeholder-gray-400"
            />
          </div>

          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-gray-500 to-black text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
            >
              <span>📧</span>
              Get Your Free Consultation
            </button>
            
            <p className="text-gray-300 mt-4 text-sm">
              🔒 Your information is secure and will never be shared. We'll respond within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className={`text-center mt-16 transition-all duration-1000 ${
        inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ animationDelay: '1200ms' }}>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Not Sure Which Resource Is Right for You?
        </h3>
        <p className="text-gray-600 text-md mb-8 max-w-2xl mx-auto">
          Schedule a quick consultation, and we’ll recommend the best starting point for your unique situation. We’ll review your current needs and guide you toward the services that will have the most impact for your business.
        </p>
        <button className="bg-gradient-to-r from-gray-500 to-black text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Schedule Free Consultation
        </button>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="font-roboto text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We've received your project inquiry and will send you a customized strategy and quote within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-gradient-to-r from-gray-500 to-black text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Lead Magnet Modal */}
      {selectedLeadMagnet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📥</span>
            </div>
            <h3 className="font-roboto text-2xl font-bold text-gray-800 mb-4">Almost There!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To access this resource, please provide your email address. We'll send it to you instantly and you'll also receive our weekly optimization tips.
            </p>
            
            <div className="space-y-4 mb-6">
              <input
                type="text"
                name="name"
                value={leadMagnetEmail.name}
                onChange={handleLeadMagnetEmailChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                value={leadMagnetEmail.email}
                onChange={handleLeadMagnetEmailChange}
                placeholder="your@email.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-all duration-300"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedLeadMagnet(null)}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleLeadMagnetSubmit}
                className="flex-1 bg-gradient-to-r from-gray-500 to-black text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Send It Now!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LeadMagnetsAndForm;