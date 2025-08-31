import React, { useState, useEffect, useRef } from 'react';

const ChecklistLanding = () => {
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

  const handleMainChecklistSubmit = () => {
    if (!leadMagnetEmail.name || !leadMagnetEmail.email) {
      alert('Please provide your name and email');
      return;
    }

    console.log('Website checklist requested:', leadMagnetEmail);
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
      id: 'audit',
      icon: "🌐",
      title: 'Free Website Audit',
      subtitle: 'Mobile & Desktop Analysis',
      description: "Get a comprehensive professional audit of your website's performance, user experience, and conversion potential with detailed recommendations. This will come through a video recording via Loom.",
    },
    {
      id: 'ebook',
      icon: "📖",
      title: '4-Week Website Transformation',
      subtitle: 'Complete Optimization Guide',
      description: 'Transform your website into a conversion machine with our comprehensive 4-week action plan used by professional agencies. Useful for businesses with websites that want to take it to the next level.',
    }
  ];

  const checklistCategories = [
    { icon: "🎨", title: "Design & Visual Appeal", points: "8 critical checkpoints", description: "Professional design standards, color schemes, typography, and visual hierarchy", color: "from-gray-400 to-gray-600" },
    { icon: "📱", title: "Mobile Responsiveness", points: "6 essential tests", description: "Cross-device compatibility, touch interface, and mobile-specific optimizations", color: "from-gray-500 to-gray-700" },
    { icon: "⚡", title: "Speed & Performance", points: "7 performance metrics", description: "Loading times, image optimization, and technical performance standards", color: "from-gray-600 to-gray-800" },
    { icon: "🧭", title: "Navigation & UX", points: "9 usability factors", description: "User journey, menu structure, and intuitive navigation principles", color: "from-gray-400 to-gray-700" },
    { icon: "💰", title: "Conversion Elements", points: "8 conversion boosters", description: "Call-to-actions, forms, trust signals, and persuasion techniques", color: "from-gray-500 to-gray-800" },
    { icon: "🔍", title: "SEO Fundamentals", points: "9 SEO essentials", description: "On-page optimization, meta data, and search engine visibility basics", color: "from-gray-600 to-gray-900" }
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
        className="relative min-h-screen flex items-center justify-center py-16 mx-4"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${
            sectionsInView['hero-section'] !== false ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mb-8">
              <span className="text-6xl mb-6 block animate-bounce">✅</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-3xl rounded-full"></div>
            </div>
            
            <h1 className="font-roboto font-bold text-4xl md:text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Website Success Checklist
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
                Professional Grade Standards
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 to-gray-700/20 blur-sm rounded-lg"></div>
            </div>
            
            <p className="text-gray-100 text-md md:text-base max-w-3xl mx-auto mb-12 leading-relaxed backdrop-blur-sm">
              Our proven 47-point checklist used by agencies to ensure websites meet industry standards and convert visitors into customers. This checklist is useful to assess the state of your website when it's time for review.
            </p>

            {/* Main CTA Form */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-2xl mb-12 max-w-2xl mx-auto backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  Download Your Free Checklist
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={leadMagnetEmail.name}
                    onChange={handleLeadMagnetEmailChange}
                    placeholder="Your Full Name"
                    className="w-full p-4 border-2 border-gray-200 bg-white/90 text-gray-800 rounded-xl focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300 placeholder-gray-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={leadMagnetEmail.email}
                    onChange={handleLeadMagnetEmailChange}
                    placeholder="your@email.com"
                    className="w-full p-4 border-2 border-gray-200 bg-white/90 text-gray-800 rounded-xl focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300 placeholder-gray-500"
                    required
                  />
                  <button
                    onClick={handleMainChecklistSubmit}
                    className="relative w-full bg-gradient-to-r from-gray-700 to-black text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">✅</span>
                    <span className="relative">Get My Free Checklist Now!</span>
                  </button>
                </div>
                <p className="text-gray-600 mt-4 text-sm text-center">
                  🔒 Instant download. No spam, ever. Used by 500+ agencies worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
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
              What's Inside the 47-Point Checklist
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Each section includes detailed checkpoints with clear pass/fail criteria, so you know exactly where your website stands and what needs improvement.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {checklistCategories.map((category, index) => (
              <div 
                key={index} 
                className={`relative group transition-all duration-500 hover:scale-105 ${
                  sectionsInView['features-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className={`absolute inset-0.5 bg-gradient-to-r ${category.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700/50 text-center hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-full">
                  <div className="relative mb-4">
                    <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 blur-xl rounded-full transition-opacity duration-500`}></div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-100">{category.title}</h3>
                  <p className="text-gray-400 text-sm font-medium mb-3">{category.points}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits-section"
        ref={setSectionRef('benefits-section')}
        className="py-16"
      >
        <div className={`relative group transition-all duration-1000 ease-out ${
          sectionsInView['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50">
            <div className="text-center mb-12">
              <h2 className="font-roboto font-bold text-2xl sm:text-4xl text-gray-100 mb-4">
                Why This Checklist Works
              </h2>
              <p className="text-gray-300 text-base sm:text-md max-w-3xl mx-auto">
                This isn't just another generic checklist. It's the exact same standards we use for our client projects, refined through hundreds of successful website launches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                { icon: "🏆", title: "Agency-Grade Standards", description: "The same criteria professional agencies use for client deliverables" },
                { icon: "📊", title: "Measurable Results", description: "Clear pass/fail criteria so you know exactly where you stand" },
                { icon: "💡", title: "Actionable Insights", description: "Each checkpoint includes specific recommendations for improvement" },
                { icon: "⚡", title: "Quick Assessment", description: "Complete evaluation of your website in under 30 minutes" },
                { icon: "🎯", title: "Prioritized Actions", description: "Know which issues to tackle first for maximum impact" },
                { icon: "💰", title: "ROI Focused", description: "Every checkpoint is tied to conversion and revenue potential" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4">
                  <span className="text-3xl flex-shrink-0">{benefit.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-100">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center pt-8 border-t border-gray-600">
              {[
                { number: "500+", label: "Agencies Using This Checklist" },
                { number: "47", label: "Critical Checkpoints Covered" },
                { number: "30 Min", label: "Average Completion Time" }
              ].map((stat, index) => (
                <div key={index} className="p-4 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-gray-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section 
        id="howto-section"
        ref={setSectionRef('howto-section')}
        className="py-16"
      >
        <div className={`transition-all duration-1000 ease-out ${
          sectionsInView['howto-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h2 className="font-roboto font-bold text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              How to Use Your Checklist
            </h2>
            <p className="text-gray-300 text-md max-w-2xl mx-auto">
              Follow these simple steps to get a comprehensive assessment of your website's performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { step: "1", title: "Download & Print", description: "Get your checklist and print it out for easy reference during your review" },
              { step: "2", title: "Section by Section", description: "Work through each of the 6 main sections systematically" },
              { step: "3", title: "Check & Score", description: "Mark pass/fail for each checkpoint and calculate your section scores" },
              { step: "4", title: "Prioritize & Act", description: "Focus on the highest-impact improvements first for maximum ROI" }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-500 ${
                  sectionsInView['howto-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-100">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
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
            <h2 className="font-roboto font-bold text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              More Free Resources
            </h2>
            <p className="text-gray-300 text-md max-w-2xl mx-auto">
              Complete your website optimization toolkit with our other free resources.
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
                <div className="absolute inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
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
                  <p className="text-gray-700 text-sm sm:text-md leading-relaxed flex-grow mb-6">{magnet.description}</p>
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
            Ready to See How Your Website Measures Up?
          </h2>
          <p className="text-gray-300 text-md mb-8 max-w-2xl mx-auto">
            Download our professional-grade checklist and discover exactly what's needed to turn your website into a conversion machine.
          </p>
          <button
            onClick={() => document.getElementById('hero-section').scrollIntoView({ behavior: 'smooth' })}
            className="relative bg-gradient-to-r from-gray-700 to-black text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Get My Free Checklist Now</span>
          </button>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-40"></div>
            <div className="relative bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-gray-200/50">
              <div className="text-5xl mb-4 animate-bounce">✅</div>
              <h3 className="font-bold text-xl mb-4">Success!</h3>
              <p className="text-gray-700 mb-6">Your free checklist has been sent to your email.</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-gradient-to-r from-gray-700 to-black text-white font-bold py-3 px-6 rounded-xl hover:from-gray-600 hover:to-gray-800 transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Selected Lead Magnet Modal */}
      {selectedLeadMagnet && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-40"></div>
            <div className="relative bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-gray-200/50">
              <h3 className="font-bold text-xl mb-4">Get Your Free Resource</h3>
              <p className="text-gray-700 mb-4">Enter your name and email to start your download:</p>
              <input
                type="text"
                name="name"
                value={leadMagnetEmail.name}
                onChange={handleLeadMagnetEmailChange}
                placeholder="Your Full Name"
                className="w-full p-4 border-2 border-gray-200 rounded-xl mb-4 focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={leadMagnetEmail.email}
                onChange={handleLeadMagnetEmailChange}
                placeholder="your@email.com"
                className="w-full p-4 border-2 border-gray-200 rounded-xl mb-4 focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300"
                required
              />
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleOtherLeadMagnetSubmit}
                  className="bg-gradient-to-r from-gray-700 to-black text-white font-bold py-3 px-6 rounded-xl hover:from-gray-600 hover:to-gray-800 transition-all duration-300 hover:scale-105"
                >
                  Download
                </button>
                <button
                  onClick={() => setSelectedLeadMagnet(null)}
                  className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-xl hover:bg-gray-300 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChecklistLanding;