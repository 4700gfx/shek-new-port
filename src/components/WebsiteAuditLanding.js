import React, { useState, useEffect, useRef } from 'react';

const WebsiteAuditLanding = () => {
  const [sectionsInView, setSectionsInView] = useState({});

  // Calendly URL
  const CALENDLY_URL = "https://calendly.com/4700gfx/4700-gfx-discovery-maintenance-kick-off-call";

  // Create refs for each section
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const newInViewState = {};
        entries.forEach((entry) => {
          newInViewState[entry.target.id] = entry.isIntersecting;
        });
        setSectionsInView(prev => ({ ...prev, ...newInViewState }));
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const setSectionRef = (id) => (element) => {
    if (element) {
      sectionRefs.current[id] = element;
    }
  };

  const handleMainAuditSubmit = () => {
    // Open Calendly link in a new tab
    window.open(CALENDLY_URL, '_blank');
  };

  const handleBookConsultationClick = () => {
    // Open Calendly link in a new tab
    window.open(CALENDLY_URL, '_blank');
  };

  const handleLeadMagnetClick = (magnetType) => {
    // Navigate to the appropriate landing page
    if (magnetType === 'checklist') {
      window.open('/checklist', '_blank');
    } else if (magnetType === 'ebook') {
      window.open('/transformation-guide', '_blank');
    }
  };

  const otherLeadMagnets = [
    {
      id: 'checklist',
      icon: "✅",
      title: 'Website Success Checklist',
      subtitle: 'Professional Grade Standards',
      description: 'Our proven 47-point checklist used by agencies to ensure websites meet industry standards and convert visitors into customers. This checklist is useful to asses the state of your website when time for review',
    },
    {
      id: 'ebook',
      icon: "📖",
      title: '4-Week Website Transformation',
      subtitle: 'Complete Optimization Guide',
      description: 'Transform your website into a conversion machine with our comprehensive 4-week action plan used by professional agencies. Useful for businesses with websites that want to take it to the next level.',
    }
  ];

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gray-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gray-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section 
        id="hero-section"
        ref={setSectionRef('hero-section')}
        className="relative min-h-screen flex items-center justify-center py-16"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${
            sectionsInView['hero-section'] !== false ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mb-8">
              <span className="text-6xl mb-6 block animate-bounce">🌐</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl rounded-full"></div>
            </div>
            
            <h1 className="font-roboto font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Free Website Review & Consultation
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
                1-on-1 Strategy Session
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 to-gray-700/20 blur-sm rounded-lg"></div>
            </div>
            
            <p className="text-gray-100 text-md md:text-sm max-w-3xl mx-auto mb-12 leading-relaxed backdrop-blur-sm">
              Book a personalized 30-minute consultation where we'll review your website live and provide actionable recommendations for improving performance, user experience, and conversions. No strings attached - just valuable insights to help grow your business.
            </p>

            {/* Main CTA Form with enhanced styling */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-2xl mb-12 max-w-2xl mx-auto backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  Schedule Your Free Website Review
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 text-blue-700">
                      <span>📅</span>
                      <span className="font-medium text-sm">30-minute live consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 mt-1">
                      <span>💡</span>
                      <span className="font-medium text-sm">Personalized recommendations</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 mt-1">
                      <span>🎯</span>
                      <span className="font-medium text-sm">Action plan for improvement</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleMainAuditSubmit}
                    className="relative w-full bg-gradient-to-r from-gray-700 to-black text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">📅</span>
                    <span className="relative">Book My Free Consultation Now!</span>
                  </button>
                </div>
                <p className="text-gray-600 mt-4 text-sm text-center flex items-center justify-center gap-2">
                  <span>🔒</span> Choose your preferred time slot. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section 
        id="features-section"
        ref={setSectionRef('features-section')}
        className="py-16"
      >
        <div className={`transition-all duration-1000 ease-out ${
          sectionsInView['features-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="font-roboto font-bold text-3xl lg:text-5xl mb-4 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              What We'll Cover in Your Consultation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📱",
                title: "Mobile Responsiveness Review",
                description: "Live evaluation of how your site performs across different devices and screen sizes",
                color: "from-gray-400 to-gray-600"
              },
              {
                icon: "⚡",
                title: "Page Speed Analysis",
                description: "Real-time testing of loading times with immediate improvement recommendations",
                color: "from-gray-500 to-gray-700"
              },
              {
                icon: "🎨",
                title: "User Experience Assessment",
                description: "Professional review of navigation, layout, and overall user journey with you",
                color: "from-gray-600 to-gray-800"
              },
              {
                icon: "🔍",
                title: "SEO Quick Review",
                description: "On-the-spot evaluation of your site's search engine optimization opportunities",
                color: "from-gray-400 to-gray-700"
              },
              {
                icon: "💰",
                title: "Conversion Optimization Tips",
                description: "Identify specific opportunities to turn more visitors into customers",
                color: "from-gray-500 to-gray-800"
              },
              {
                icon: "🛠️",
                title: "Prioritized Action Plan",
                description: "Walk away with a clear roadmap of next steps for maximum impact",
                color: "from-gray-600 to-gray-900"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`relative group transition-all duration-500 hover:scale-105 ${
                  sectionsInView['features-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className={`absolute inset-0.5 bg-gradient-to-r ${item.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700/50 text-center h-full">
                  <div className="relative mb-4">
                    <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 blur-xl rounded-full transition-opacity duration-500`}></div>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-100">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section 
        id="social-proof-section"
        ref={setSectionRef('social-proof-section')}
        className="py-16"
      >
        <div className={`relative group transition-all duration-1000 ease-out ${
          sectionsInView['social-proof-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50">
            <div className="text-center mb-8">
              <h2 className="font-roboto font-bold text-2xl sm:text-4xl text-gray-100 mb-4">
                Proven Results from Our Consultations
              </h2>
              <p className="text-gray-300 text-base sm:text-md px-12">
                Our personalized website reviews have helped hundreds of businesses identify critical issues and opportunities for growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { number: "500+", label: "Websites Reviewed and Optimized" },
                { number: "25-75%", label: "Average Conversion Rate Improvement" },
                { number: "30 Min", label: "Focused, Value-Packed Sessions" }
              ].map((stat, index) => (
                <div key={index} className="p-4 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-gray-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Resources Section */}
      <section 
        id="resources-section"
        ref={setSectionRef('resources-section')}
        className="py-16"
      >
        <div className={`transition-all duration-1000 ease-out ${
          sectionsInView['resources-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h2 className="font-roboto font-bold text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
              More Free Resources
            </h2>
            <p className="text-gray-300 text-md max-w-2xl mx-auto">
              While you're here, check out our other free resources to help transform your website into a conversion machine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherLeadMagnets.map((magnet, index) => (
              <div 
                key={magnet.id}
                className={`relative group cursor-pointer transition-all duration-700 hover:scale-105 ${
                  sectionsInView['resources-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handleLeadMagnetClick(magnet.id)}
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl flex flex-col h-full shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border border-gray-200/50">
                  <div className="text-center mb-6">
                    <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                      {magnet.icon}
                    </span>
                    <h3 className="font-roboto font-bold text-xl sm:text-2xl text-gray-800 leading-tight mb-2">
                      {magnet.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">{magnet.subtitle}</p>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-md leading-relaxed flex-grow mb-6">
                    {magnet.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-300/50">
                    <button className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300 flex items-center group w-full justify-center">
                      <span className="mr-2">🔗</span>
                      Learn More 
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        id="final-cta-section"
        ref={setSectionRef('final-cta-section')}
        className="py-16 text-center"
      >
        <div className={`transition-all duration-1000 ease-out ${
          sectionsInView['final-cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
            Ready to Discover What's Holding Your Website Back?
          </h2>
          <p className="text-gray-300 text-md mb-8 max-w-2xl mx-auto">
            Book your free 30-minute consultation today and get personalized recommendations to start turning more visitors into customers.
          </p>
          <button 
            onClick={handleBookConsultationClick}
            className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Book My Free Consultation</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebsiteAuditLanding;