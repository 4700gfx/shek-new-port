import React, { useState, useEffect, useRef } from 'react';

const EbookLanding = () => {
  const [sectionsInView, setSectionsInView] = useState({});
  const [leadMagnetEmail, setLeadMagnetEmail] = useState({ name: '', email: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedLeadMagnet, setSelectedLeadMagnet] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create refs for each section
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  // Google Sheets Integration Configuration
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby6SHwV8Yd_9qUrB0OueuFmeWQtAg-o1DVxzu0UiKg8G4ip02k_F9rGvg1pqEUBwA1o2A/exec';

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

  // Function to submit data to Google Sheets
  const submitToGoogleSheets = async (data) => {
    try {
      // Check if URL is configured
      if (GOOGLE_APPS_SCRIPT_URL === 'YOUR_DEPLOYED_WEB_APP_URL_HERE') {
        throw new Error('Please configure your Google Apps Script URL');
      }

      console.log('Submitting data to Google Sheets:', data);

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          leadType: data.leadType,
          timestamp: new Date().toISOString(),
          source: 'Landing Page'
        })
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const result = await response.json();
      console.log('Response result:', result);
      
      if (!result.success) {
        throw new Error(result.error || 'Unknown error occurred');
      }
      
      return result;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      
      // More specific error messages
      if (error.message.includes('fetch')) {
        throw new Error('Network error. Please check your internet connection and try again.');
      } else if (error.message.includes('CORS')) {
        throw new Error('Configuration error. Please contact support.');
      } else if (error.message.includes('Failed to fetch')) {
        throw new Error('Unable to reach the server. Please try again in a moment.');
      } else {
        throw error;
      }
    }
  };

  const handleMainEbookSubmit = async () => {
    if (!leadMagnetEmail.name || !leadMagnetEmail.email) {
      alert('Please provide your name and email');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitToGoogleSheets({
        name: leadMagnetEmail.name,
        email: leadMagnetEmail.email,
        leadType: '4-Week Transformation Guide'
      });

      console.log('4-Week transformation guide requested:', leadMagnetEmail);
      setShowSuccessModal(true);
      setLeadMagnetEmail({ name: '', email: '' });
    } catch (error) {
      alert('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtherLeadMagnetSubmit = async () => {
    if (!leadMagnetEmail.name || !leadMagnetEmail.email) {
      alert('Please provide your name and email');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitToGoogleSheets({
        name: leadMagnetEmail.name,
        email: leadMagnetEmail.email,
        leadType: selectedLeadMagnet === 'audit' ? 'Free Website Audit' : 'Website Success Checklist'
      });

      console.log('Lead magnet requested:', { type: selectedLeadMagnet, ...leadMagnetEmail });
      alert('Download started! Check your email.');
      setSelectedLeadMagnet(null);
      setLeadMagnetEmail({ name: '', email: '' });
    } catch (error) {
      alert('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLeadMagnetClick = (magnetType) => {
    setSelectedLeadMagnet(magnetType);
  };

  // For testing - you can temporarily use this to test the connection
  const testGoogleAppsScriptConnection = async () => {
    try {
      console.log('Testing connection to:', GOOGLE_APPS_SCRIPT_URL);
      
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'GET'
      });
      
      console.log('Test response status:', response.status);
      const text = await response.text();
      console.log('Test response text:', text);
      
      if (response.ok) {
        alert('✅ Connection successful! Your Google Apps Script is working.');
      } else {
        alert('❌ Connection failed. Check your URL and deployment.');
      }
    } catch (error) {
      console.error('Connection test failed:', error);
      alert('❌ Connection test failed: ' + error.message);
    }
  };

  const otherLeadMagnets = [
    {
      id: 'audit',
      icon: "🌐",
      title: 'Free Website Audit',
      subtitle: 'Mobile & Desktop Analysis',
      description: 'Get a comprehensive professional audit of your website performance, user experience, and conversion potential with detailed recommendations. This will come through a video recording via Loom.',
    },
    {
      id: 'checklist',
      icon: "✅",
      title: 'Website Success Checklist',
      subtitle: 'Professional Grade Standards',
      description: 'Our proven 47-point checklist used by agencies to ensure websites meet industry standards and convert visitors into customers. This checklist is useful to asses the state of your website when time for review.',
    }
  ];

  const weeklyBreakdown = [
    {
      week: "Week 1",
      title: "Foundation & Quick Wins",
      icon: "🔍",
      focus: "Audit & Strategy",
      tasks: [
        "Complete comprehensive website audit",
        "Analyze current conversion funnel",
        "Identify top 3 optimization opportunities",
        "Set measurable improvement goals"
      ]
    },
    {
      week: "Week 2", 
      title: "Conversion Psychology",
      icon: "🎨",
      focus: "Leverage Psychology to Drive Action",
      tasks: [
        "Optimize page layouts for conversions",
        "Improve mobile responsiveness",
        "Enhance visual hierarchy",
        "Streamline navigation structure"
      ]
    },
    {
      week: "Week 3",
      title: "Advanced Optimization & Testing",
      icon: "💰",
      focus: "Data-Driven Conversion Improvements",
      tasks: [
        "Rewrite key landing page copy",
        "Optimize call-to-action buttons",
        "Add social proof and testimonials",
        "Create urgency and scarcity elements"
      ]
    },
    {
      week: "Week 4",
      title: "Automation & Long Term Growth Systems",
      icon: "📊",
      focus: "Scale Your Success With Smart Systems",
      tasks: [
        "Implement tracking and analytics",
        "A/B test critical elements",
        "Optimize for search engines",
        "Monitor and measure results"
      ]
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
              <span className="text-6xl mb-6 block animate-bounce">📖</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-3xl rounded-full"></div>
            </div>
            
            <h1 className="font-roboto font-bold text-4xl md:text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent leading-tight">
              4-Week Website Transformation
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
                Complete Optimization Guide
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 to-gray-700/20 blur-sm rounded-lg"></div>
            </div>
            
            <p className="text-gray-100 text-md md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed backdrop-blur-sm">
              Transform your website into a conversion machine with our comprehensive 4-week action plan used by professional agencies. Perfect for businesses with existing websites that want to take it to the next level.
            </p>

            {/* Main CTA Form */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-2xl mb-12 max-w-2xl mx-auto backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  Get Your Free 4-Week Action Plan
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={leadMagnetEmail.name}
                    onChange={handleLeadMagnetEmailChange}
                    placeholder="Your Full Name"
                    disabled={isSubmitting}
                    className="w-full p-4 border-2 border-gray-200 bg-white/90 text-gray-800 rounded-xl focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300 placeholder-gray-500 disabled:opacity-50"
                  />
                  <input
                    type="email"
                    name="email"
                    value={leadMagnetEmail.email}
                    onChange={handleLeadMagnetEmailChange}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                    className="w-full p-4 border-2 border-gray-200 bg-white/90 text-gray-800 rounded-xl focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300 placeholder-gray-500 disabled:opacity-50"
                  />
                  
                  {/* Temporary test button - remove after testing */}
                  {GOOGLE_APPS_SCRIPT_URL === 'YOUR_DEPLOYED_WEB_APP_URL_HERE' && (
                    <div className="bg-yellow-100 border border-yellow-400 rounded-xl p-4">
                      <p className="text-yellow-800 text-sm font-medium mb-2">
                        ⚠️ Please configure your Google Apps Script URL first
                      </p>
                      <p className="text-yellow-700 text-xs">
                        Replace 'YOUR_DEPLOYED_WEB_APP_URL_HERE' with your actual deployed web app URL
                      </p>
                    </div>
                  )}
                  
                  {GOOGLE_APPS_SCRIPT_URL !== 'YOUR_DEPLOYED_WEB_APP_URL_HERE' && (
                    <button
                      onClick={testGoogleAppsScriptConnection}
                      className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-xl text-sm hover:bg-blue-600 transition-all duration-300"
                    >
                      🔍 Test Connection First
                    </button>
                  )}
                  
                  <button
                    onClick={handleMainEbookSubmit}
                    disabled={isSubmitting || GOOGLE_APPS_SCRIPT_URL === 'YOUR_DEPLOYED_WEB_APP_URL_HERE'}
                    className="relative w-full bg-gradient-to-r from-gray-700 to-black text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    {isSubmitting ? (
                      <>
                        <div className="relative animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span className="relative">Processing...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative">🚀</span>
                        <span className="relative">Start My Transformation Now!</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-gray-600 mt-4 text-sm text-center">
                  🔒 Instant download. The same process that's generated millions in revenue for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Breakdown Section */}
      <section 
        id="weekly-section"
        ref={setSectionRef('weekly-section')}
        className="py-16"
      >
        <div className={`transition-all duration-1000 ease-out ${
          sectionsInView['weekly-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="font-roboto font-bold text-3xl lg:text-5xl mb-4 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              Your 4-Week Transformation Journey
            </h2>
            <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
              Each week builds on the previous one, creating a systematic approach that delivers measurable results. Follow the plan exactly as we've designed it for maximum impact.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {weeklyBreakdown.map((week, index) => (
              <div 
                key={index} 
                className={`relative group transition-all duration-700 hover:scale-[1.02] ${
                  sectionsInView['weekly-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="lg:w-1/4 text-center lg:text-left">
                      <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">{week.icon}</span>
                      <h3 className="font-roboto font-bold text-2xl text-gray-100 mb-2">{week.week}</h3>
                      <h4 className="text-xl text-gray-200 mb-2">{week.title}</h4>
                      <p className="text-gray-400 font-medium">{week.focus}</p>
                    </div>
                    <div className="lg:w-3/4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {week.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center gap-3 p-3 bg-gray-700/50 backdrop-blur-sm rounded-lg border border-gray-600/30 hover:bg-gray-700/70 transition-all duration-300">
                            <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                            <span className="text-gray-200 text-sm">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section 
        id="features-section"
        ref={setSectionRef('features-section')}
        className="py-16"
      >
        <div className={`relative group transition-all duration-1000 ease-out ${
          sectionsInView['features-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50">
            <div className="text-center mb-12">
              <h2 className="font-roboto font-bold text-2xl sm:text-4xl text-gray-100 mb-4">
                Everything You Need for Success
              </h2>
              <p className="text-gray-300 text-base sm:text-md max-w-3xl mx-auto">
                This isn't just theory – it's a practical, step-by-step system with all the tools, templates, and resources you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: "📋",
                  title: "Weekly Action Plans",
                  description: "Detailed daily tasks with specific instructions and timelines"
                },
                {
                  icon: "📊",
                  title: "Analytics Templates",
                  description: "Ready-to-use tracking sheets to measure your progress"
                },
                {
                  icon: "🎯",
                  title: "Conversion Checklists", 
                  description: "Page-by-page optimization checklists for every element"
                },
                {
                  icon: "💬",
                  title: "Copy Templates",
                  description: "High-converting headlines, CTAs, and page copy examples"
                },
                {
                  icon: "🔧",
                  title: "Technical Guides",
                  description: "Step-by-step instructions for implementing changes"
                },
                {
                  icon: "📈",
                  title: "Success Metrics",
                  description: "KPIs and benchmarks to track your transformation results"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <span className="text-4xl mb-4 block hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                  <h3 className="font-bold text-lg mb-3 text-gray-100">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center pt-8 border-t border-gray-600">
              {[
                { number: "28 Days", label: "Complete Transformation Timeline" },
                { number: "50+ Pages", label: "Comprehensive Guide & Resources" },
                { number: "$10K+", label: "Value of Professional Strategies" }
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

      {/* Perfect For Section */}
      <section 
        id="benefits-section"
        ref={setSectionRef('benefits-section')}
        className="py-16"
      >
        <div className={`transition-all duration-1000 ease-out ${
          sectionsInView['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h2 className="font-roboto font-bold text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              Perfect For Businesses That Want
            </h2>
            <p className="text-gray-300 text-md max-w-2xl mx-auto">
              This guide is specifically designed for business owners who are ready to take their website to the next level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: "🎯",
                title: "More Qualified Leads",
                description: "Turn your website traffic into actual business inquiries and sales"
              },
              {
                icon: "💰",
                title: "Higher Conversion Rates",
                description: "Get more value from your existing traffic without spending more on ads"
              },
              {
                icon: "📱",
                title: "Better Mobile Experience",
                description: "Capture the 60% of visitors browsing on mobile devices"
              },
              {
                icon: "⚡",
                title: "Faster Loading Times",
                description: "Reduce bounce rates and improve search engine rankings"
              },
              {
                icon: "🏆",
                title: "Professional Appearance",
                description: "Build trust and credibility with a polished, modern website"
              },
              {
                icon: "📈",
                title: "Measurable Results",
                description: "Track real improvements in traffic, leads, and revenue"
              }
            ].map((goal, index) => (
              <div 
                key={index} 
                className={`relative group transition-all duration-500 hover:scale-105 ${
                  sectionsInView['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl text-gray-800 shadow-xl border border-gray-200/50">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{goal.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{goal.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </div>
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
              Start With These Free Resources
            </h2>
            <p className="text-gray-300 text-md max-w-2xl mx-auto">
              Not sure if you're ready for the full transformation? Start with our other free tools to assess your current situation.
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
            Ready to Transform Your Website in Just 4 Weeks?
          </h2>
          <p className="text-gray-300 text-md mb-8 max-w-2xl mx-auto">
            Download your complete action plan and start seeing real results. The same system used by professional agencies to generate millions in revenue.
          </p>
          <button 
            onClick={() => document.getElementById('hero-section').scrollIntoView({ behavior: 'smooth' })}
            className="relative bg-gradient-to-r from-gray-700 to-black text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Get My Free Action Plan Now</span>
          </button>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-40"></div>
            <div className="relative bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-gray-200/50">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl animate-bounce">🚀</span>
              </div>
              <h3 className="font-roboto text-2xl font-bold text-gray-800 mb-4">Success!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your information has been submitted successfully! You'll receive your 4-Week Website Transformation Guide via email shortly.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-gradient-to-r from-gray-700 to-black text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
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
            <div className="absolute inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-40"></div>
            <div className="relative bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-gray-200/50">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
                  disabled={isSubmitting}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300 disabled:opacity-50"
                />
                <input
                  type="email"
                  name="email"
                  value={leadMagnetEmail.email}
                  onChange={handleLeadMagnetEmailChange}
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300 disabled:opacity-50"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedLeadMagnet(null)}
                  disabled={isSubmitting}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-300 transition-all duration-300 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleOtherLeadMagnetSubmit}
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-gray-700 to-black text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    'Send It Now!'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EbookLanding;