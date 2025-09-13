import React, { useState, useEffect } from 'react';

const WebsiteSuccessChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [sectionsInView, setSectionsInView] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Replace with your actual Google Apps Script URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzd67WWppQItadexIe20B7ifM3M27SctC1ZV5w7u3cQQM38O4_zaxdNHEayxyBJqnb63A/exec';

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setSectionsInView(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    const sections = document.querySelectorAll('[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // 10-Point Website Success Checklist based on the PDF
  const checklistItems = [
    {
      id: 1,
      title: "Clear Brand Identity",
      description: "Professional logo, consistent colors, and fonts that reflect your brand personality. First impressions build trust and credibility.",
      icon: "🎨",
      category: "Foundation"
    },
    {
      id: 2,
      title: "Mobile-Friendly Design",
      description: "Responsive design that looks and works great on phones, tablets, and desktops. Over 60% of traffic comes from mobile devices.",
      icon: "📱",
      category: "Foundation"
    },
    {
      id: 3,
      title: "Fast Loading Speed",
      description: "Keep load times under 3 seconds with optimized images, clean code, and good hosting. Speed boosts user experience and Google rankings.",
      icon: "⚡",
      category: "Foundation"
    },
    {
      id: 4,
      title: "Easy Navigation",
      description: "Simple menus, logical content organization, and clear call-to-action buttons on every page. Visitors should find what they need in just a few clicks.",
      icon: "🧭",
      category: "Foundation"
    },
    {
      id: 5,
      title: "Compelling Homepage Message",
      description: "Answer three key questions: Who are you? What do you offer? Why should visitors trust you? Strong headline with supporting visuals.",
      icon: "🏠",
      category: "Foundation"
    },
    {
      id: 6,
      title: "Conversion Tools",
      description: "Include forms, click-to-call buttons, newsletter signups, or booking systems. Always make it easy for people to take the next step.",
      icon: "🎯",
      category: "Growth"
    },
    {
      id: 7,
      title: "Trust Signals",
      description: "Showcase testimonials, reviews, case studies, partner logos, and certifications. Trust badges reduce hesitation and build credibility.",
      icon: "🛡️",
      category: "Growth"
    },
    {
      id: 8,
      title: "SEO Optimization",
      description: "Use relevant keywords, write descriptive titles and meta tags, add alt text to images. Submit to Google Search Console for better visibility.",
      icon: "🔍",
      category: "Growth"
    },
    {
      id: 9,
      title: "Security & Compliance",
      description: "SSL certificate (https://), strong passwords, regular backups, privacy policy, and cookie notice for data collection compliance.",
      icon: "🔒",
      category: "Growth"
    },
    {
      id: 10,
      title: "Tracking & Continuous Improvement",
      description: "Set up Google Analytics (GA4) to track traffic and conversions. Review reports regularly and update content, offers, or design as needed.",
      icon: "📊",
      category: "Growth"
    }
  ];

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getCompletedCount = () => {
    return Object.values(checkedItems).filter(Boolean).length;
  };

  const getCompletionPercentage = () => {
    return Math.round((getCompletedCount() / checklistItems.length) * 100);
  };

  const getFoundationCount = () => {
    return checklistItems
      .filter(item => item.category === 'Foundation' && checkedItems[item.id])
      .length;
  };

  const getGrowthCount = () => {
    return checklistItems
      .filter(item => item.category === 'Growth' && checkedItems[item.id])
      .length;
  };

  const handleFormSubmit = async () => {
    if (!formData.name || !formData.email) {
      setSubmitMessage('❌ Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          leadType: 'Website Success Checklist',
          source: 'Landing Page',
          score: getCompletionPercentage(),
          checkedItems: getCompletedCount(),
          foundationScore: getFoundationCount(),
          growthScore: getGrowthCount()
        })
      });

      setSubmitMessage('✅ Success! Check your email for the complete checklist PDF with detailed explanations.');
      setFormData({ name: '', email: '' });
      setTimeout(() => {
        setShowForm(false);
        setSubmitMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('❌ Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMainSubmit = async () => {
    if (!formData.name || !formData.email) {
      setSubmitMessage('❌ Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          leadType: 'Website Success Checklist',
          source: 'Hero Section',
          score: 0,
          checkedItems: 0
        })
      });

      setSubmitMessage('✅ Success! Check your email for your Website Success Checklist PDF.');
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('❌ Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const foundationItems = checklistItems.filter(item => item.category === 'Foundation');
  const growthItems = checklistItems.filter(item => item.category === 'Growth');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section 
        id="hero-section"
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
            
            <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Website Success Checklist
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
                The Essential 10-Point Guide
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 to-gray-700/20 blur-sm rounded-lg"></div>
            </div>
            
            <p className="text-gray-100 text-md md:text-base max-w-3xl mx-auto mb-12 leading-relaxed backdrop-blur-sm">
              Foundation + Growth = Success. Our proven 10-point checklist used by agencies to ensure websites meet professional standards and convert visitors into customers.
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
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full p-4 border-2 border-gray-200 bg-white/90 text-gray-800 rounded-xl focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300 placeholder-gray-500"
                  />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full p-4 border-2 border-gray-200 bg-white/90 text-gray-800 rounded-xl focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600/20 transition-all duration-300 placeholder-gray-500"
                  />
                  <button
                    onClick={handleMainSubmit}
                    disabled={isSubmitting}
                    className="relative w-full bg-gradient-to-r from-gray-700 to-black text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">✅</span>
                    <span className="relative">{isSubmitting ? 'Sending...' : 'Get My Free Checklist Now!'}</span>
                  </button>
                </div>
                <p className="text-gray-600 mt-4 text-sm text-center">
                  🔒 Instant download. No spam, ever. Used by 500+ agencies worldwide.
                </p>
                {submitMessage && (
                  <div className={`mt-4 p-3 rounded-lg text-center text-sm ${submitMessage.includes('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitMessage}
                  </div>
                )}
              </div>
            </div>

            <div 
              onClick={() => document.getElementById('interactive-checklist').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer group"
            >
              <span className="mr-2">Try the Interactive Checklist Below</span>
              <span className="transform group-hover:translate-y-1 transition-transform">⬇️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Checklist Section */}
      <section 
        id="interactive-checklist"
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${
            sectionsInView['interactive-checklist'] !== false ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Progress Tracker */}
            <div className="relative group mb-12">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/30">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 md:mb-0">📊 Your Website Score</h3>
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Get Complete PDF Guide
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30">
                    <div className="text-4xl font-bold text-blue-300 mb-2">{getCompletionPercentage()}%</div>
                    <div className="text-sm text-blue-200">Overall Score</div>
                    <div className="text-xs text-blue-300/70 mt-1">
                      {getCompletedCount()} of {checklistItems.length} complete
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-6 rounded-xl border border-green-400/30">
                    <div className="text-4xl font-bold text-green-300 mb-2">{getFoundationCount()}/5</div>
                    <div className="text-sm text-green-200">Foundation</div>
                    <div className="text-xs text-green-300/70 mt-1">Brand, Mobile, Speed</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-xl border border-purple-400/30">
                    <div className="text-4xl font-bold text-purple-300 mb-2">{getGrowthCount()}/5</div>
                    <div className="text-sm text-purple-200">Growth</div>
                    <div className="text-xs text-purple-300/70 mt-1">Conversion, Trust, SEO</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Foundation Section */}
            <div className="relative group mb-12">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-green-700/30 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/30">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  🏗️ <span className="ml-3">Foundation (First Half of Success)</span>
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Strong brand, mobile optimization, fast speed, intuitive navigation, and powerful homepage message set the foundation for trust and engagement.
                </p>
                
                <div className="space-y-4">
                  {foundationItems.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-start p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl backdrop-blur-sm ${
                        checkedItems[item.id] 
                          ? 'bg-green-500/10 border-green-400/50 shadow-lg shadow-green-500/10' 
                          : 'bg-gray-800/30 border-gray-600/30 hover:border-gray-500/50 hover:bg-gray-700/30'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checkedItems[item.id] || false}
                        onChange={() => toggleItem(item.id)}
                        className="mt-1 mr-4 h-5 w-5 text-green-500 bg-gray-800 border-gray-600 rounded focus:ring-green-500"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <h4 className={`font-semibold text-lg ${checkedItems[item.id] ? 'line-through text-gray-400' : 'text-white'}`}>
                            {item.title}
                          </h4>
                        </div>
                        <p className={`text-sm leading-relaxed ${checkedItems[item.id] ? 'text-gray-500' : 'text-gray-300'}`}>
                          {item.description}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Growth Section */}
            <div className="relative group mb-12">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-purple-700/30 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/30">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  📈 <span className="ml-3">Growth (Second Half of Success)</span>
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Conversion tools, trust elements, SEO, security, and analytics ensure your site not only works well but keeps improving over time.
                </p>
                
                <div className="space-y-4">
                  {growthItems.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-start p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl backdrop-blur-sm ${
                        checkedItems[item.id] 
                          ? 'bg-purple-500/10 border-purple-400/50 shadow-lg shadow-purple-500/10' 
                          : 'bg-gray-800/30 border-gray-600/30 hover:border-gray-500/50 hover:bg-gray-700/30'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checkedItems[item.id] || false}
                        onChange={() => toggleItem(item.id)}
                        className="mt-1 mr-4 h-5 w-5 text-purple-500 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <h4 className={`font-semibold text-lg ${checkedItems[item.id] ? 'line-through text-gray-400' : 'text-white'}`}>
                            {item.title}
                          </h4>
                        </div>
                        <p className={`text-sm leading-relaxed ${checkedItems[item.id] ? 'text-gray-500' : 'text-gray-300'}`}>
                          {item.description}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-gradient-to-r from-blue-600/90 to-purple-700/90 backdrop-blur-xl rounded-2xl p-12 text-center border border-blue-400/30">
                <h3 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Website?</h3>
                <p className="text-xl mb-2 text-blue-100">
                  Get the complete PDF guide with detailed explanations and action steps!
                </p>
                <p className="text-lg mb-8 text-blue-200">
                  Your current score: <span className="font-bold text-yellow-300">{getCompletionPercentage()}%</span>
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
                >
                  Download Complete Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-600/50">
              <h3 className="text-2xl font-bold text-white mb-6">Get Your Complete PDF Guide</h3>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm p-4 rounded-xl mb-6 border border-blue-400/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-1">{getCompletionPercentage()}%</div>
                  <div className="text-sm text-blue-200">Your Current Score</div>
                  <div className="text-xs text-blue-300/70 mt-1">
                    Foundation: {getFoundationCount()}/5 • Growth: {getGrowthCount()}/5
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-gray-600 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border border-gray-600 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400"
                />
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 py-3 px-4 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleFormSubmit}
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Get PDF Guide'}
                  </button>
                </div>
              </div>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-lg text-center text-sm ${submitMessage.includes('Success') ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                  {submitMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteSuccessChecklist;