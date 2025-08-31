import React, { useState, useEffect, useRef } from 'react';

const WebsiteAuditLanding = () => {
  const [sectionsInView, setSectionsInView] = useState({});
  const [leadMagnetEmail, setLeadMagnetEmail] = useState({ name: '', email: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedLeadMagnet, setSelectedLeadMagnet] = useState(null);

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

  const handleLeadMagnetEmailChange = (e) => {
    setLeadMagnetEmail({
      ...leadMagnetEmail,
      [e.target.name]: e.target.value
    });
  };

  const handleMainAuditSubmit = () => {
    if (!leadMagnetEmail.name || !leadMagnetEmail.email) {
      alert('Please provide your name and email');
      return;
    }
    
    console.log('Website audit requested:', leadMagnetEmail);
    setShowSuccessModal(true);
    setLeadMagnetEmail({ name: '', email: '' });
  };

  const handleOtherLeadMagnetSubmit = () => {
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
              Free Website Audit
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
                Mobile & Desktop Analysis
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 to-gray-700/20 blur-sm rounded-lg"></div>
            </div>
            
            <p className="text-gray-100 text-md md:text-sm max-w-3xl mx-auto mb-12 leading-relaxed backdrop-blur-sm">
              Get a comprehensive professional audit of your website's performance, user experience, and conversion potential with detailed recommendations. This will come through a video recording via Loom - completely free, no strings attached.
            </p>

            {/* Main CTA Form with enhanced styling */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-2xl mb-12 max-w-2xl mx-auto backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  Get Your Free Website Audit
                </h3>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={leadMagnetEmail.name}
                      onChange={handleLeadMagnetEmailChange}
                      placeholder="Your Full Name"
                      className="w-full p-4 border-2 border-gray-200 bg-white/90 text-gray-800 rounded-xl focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300 placeholder-gray-500"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <div className="w-2 h-2 bg-gray-400 rounded-full opacity-0 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={leadMagnetEmail.email}
                      onChange={handleLeadMagnetEmailChange}
                      placeholder="your@email.com"
                      className="w-full p-4 border-2 border-gray-200 bg-white/90 text-gray-800 rounded-xl focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300 placeholder-gray-500"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <div className="w-2 h-2 bg-gray-400 rounded-full opacity-0 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleMainAuditSubmit}
                    className="relative w-full bg-gradient-to-r from-gray-700 to-black text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">🎯</span>
                    <span className="relative">Get My Free Audit Now!</span>
                  </button>
                </div>
                <p className="text-gray-600 mt-4 text-sm text-center flex items-center justify-center gap-2">
                  <span>🔒</span> Your information is secure. We'll deliver your audit within 48 hours.
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
              What You'll Get in Your Audit
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📱",
                title: "Mobile Responsiveness Analysis",
                description: "Complete evaluation of how your site performs across all devices and screen sizes",
                color: "from-gray-400 to-gray-600"
              },
              {
                icon: "⚡",
                title: "Page Speed & Performance",
                description: "Detailed analysis of loading times and recommendations for speed improvements",
                color: "from-gray-500 to-gray-700"
              },
              {
                icon: "🎨",
                title: "User Experience Review",
                description: "Professional assessment of navigation, layout, and overall user journey",
                color: "from-gray-600 to-gray-800"
              },
              {
                icon: "🔍",
                title: "SEO Quick Assessment",
                description: "Basic evaluation of your site's search engine optimization potential",
                color: "from-gray-400 to-gray-700"
              },
              {
                icon: "💰",
                title: "Conversion Optimization",
                description: "Identify opportunities to turn more visitors into customers",
                color: "from-gray-500 to-gray-800"
              },
              {
                icon: "🛠️",
                title: "Action Plan & Priorities",
                description: "Clear roadmap with prioritized recommendations for maximum impact",
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
                Proven Results from Our Audits
              </h2>
              <p className="text-gray-300 text-base sm:text-md px-12">
                Our comprehensive audits have helped hundreds of businesses identify critical issues and opportunities for growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { number: "500+", label: "Websites Audited and Optimized" },
                { number: "25-75%", label: "Average Conversion Rate Improvement" },
                { number: "48 Hours", label: "Average Delivery Time" }
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
                      <span className="mr-2">📥</span>
                      Download Free 
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
            Get your comprehensive website audit today and start turning more visitors into customers. No cost, no commitment - just valuable insights.
          </p>
          <button 
            onClick={() => document.getElementById('hero-section').scrollIntoView({ behavior: 'smooth' })}
            className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Get My Free Audit Now</span>
          </button>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-40"></div>
            <div className="relative bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-green-200/50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-3xl animate-bounce">✅</span>
                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
              </div>
              <h3 className="font-roboto text-2xl font-bold text-gray-800 mb-4">Audit Request Received!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you! We'll analyze your website and send your comprehensive audit via Loom video within 48 hours. Check your email for updates.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Other Lead Magnet Modal */}
      {selectedLeadMagnet && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-40"></div>
            <div className="relative bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-blue-200/50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📥</span>
              </div>
              <h3 className="font-roboto text-2xl font-bold text-gray-800 mb-4">Almost There!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To access this resource, please provide your email address. We'll send it to you instantly.
              </p>
              
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  name="name"
                  value={leadMagnetEmail.name}
                  onChange={handleLeadMagnetEmailChange}
                  placeholder="Your Name"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  value={leadMagnetEmail.email}
                  onChange={handleLeadMagnetEmailChange}
                  placeholder="your@email.com"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedLeadMagnet(null)}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-300 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleOtherLeadMagnetSubmit}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Send It Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteAuditLanding;