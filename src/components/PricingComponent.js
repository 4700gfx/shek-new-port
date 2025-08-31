import React, { useEffect, useState, useCallback } from 'react';

const PricingComponent = () => {
  const [inView, setInView] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleScroll = useCallback(() => {
    const element = document.getElementById('pricing-section');
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

  const pricingTiers = [
    {
      name: "Starter",
      price: "$175 - $250",
      timeline: "1-2 Weeks",
      description: "Ideal for freelancers and local businesses with simple needs. This plan includes a single landing page designed to showcase your business, attract visitors, and make a strong first impression online.",
      features: [
        "Single Page (Home, About, Contact)",
        "Mobile Responsive Design",
        "Domain Launch Implementation",
        "Website Hosting",
        "Branding Kit",
        "15% Off on Future Projects",
        "No Post-Launch Updates"
      ],
      popular: false,
      gradient: "from-gray-700 to-gray-800",
      hoverGradient: "from-gray-800 to-gray-900",
      icon: "🚀"
    },
    {
      name: "Standard",
      price: "$275 - $350",
      timeline: "3-4 Weeks",
      description: "Perfect for service-based businesses launching their online presence. This plan helps you connect with your audience by integrating booking systems, social media, and other key touchpoints.",
      features: [
        "Single Page Website or Landing Page",
        "Mobile Responsive Design",
        "Basic SEO Implementation",
        "20% Off on Future Projects",
        "Domain Launch Implementation",
        "30-Days of Post-Launch Updates"
      ],
      popular: true,
      gradient: "from-gray-800 to-gray-900",
      hoverGradient: "from-gray-900 to-black",
      icon: "💼"
    },
    {
      name: "Growth",
      price: "$425 - $700",
      timeline: "4-6 Weeks",
      description: "Designed for growing brands expanding their services or product lines. Includes custom integrations such as Shopify, Acuity, and more to streamline operations and enhance your customers’ experience",
      features: [
        "5-7 Custom Designed Pages",
        "Advanced SEO & Analytics Setup",
        "Full Branding Kit (Logo, Colors, Fonts)",
        "Shopify/Acuqity Intergration",
        "Domain Launch Implementation",
        "Analytics Dashboard Setup",
        "3-6 Months of Post-Launch Updates"
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-700",
      hoverGradient: "from-gray-700 to-gray-800",
      icon: "📈"
    },
    {
      name: "Enterprise",
      price: "$850+",
      timeline: "8+ Weeks",
      description: "A complete digital transformation for established businesses. This plan includes branding, marketing, social media promotion, and more. It can also encompass mobile applications and other advanced solutions. Detailed offerings are tailored to your needs during a personalized consultation.",
      features: [
        "8-10 Custom Pages",
        "Fully Integrated E-Commerce",
        "Full Branding Kit & Identity",
        "Advanced SEO & Analytics",
        "6 Months of Updates & Support",
        "Priority Support & Consultation"
      ],
      popular: false,
      gradient: "from-black to-gray-900",
      hoverGradient: "from-gray-900 to-black",
      icon: "👑"
    }
  ];

  return (
    <section 
      id="pricing-section" 
      className="min-h-screen w-full max-w-7xl mx-auto py-16 px-4 lg:px-8"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1 
          className={`font-roboto font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent transition-all duration-1000 ${
            inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Choose Your Perfect Plan
        </h1>
        <p className={`text-gray-600 text-lg md:text-sm max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-200 ${
          inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
            At 4700 GFX Studios, we understand that every business has unique needs and budgets. Our tiered plans give you a clear view of the services and solutions available at different levels. If none of these plans fit your budget or requirements, feel free to reach out for a personalized consultation—we’re here to find the right solution for you.
        </p>
        <div className={`inline-flex items-center bg-gray-100 border border-gray-300 rounded-full px-6 py-3 transition-all duration-1000 delay-400 ${
          inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-gray-800 font-semibold">✨ All Plans include FREE Consultation & Project Planning Calls 📞</span>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {pricingTiers.map((tier, index) => (
          <div 
            key={index}
            className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer group ${
              tier.popular ? 'ring-4 ring-gray-400 ring-opacity-50' : ''
            } ${
              inView ? 'animate-fade-in-up opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => setSelectedPlan(selectedPlan === index ? null : index)}
          >
            {/* Popular Badge */}
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
              </div>
            )}

            {/* Card Header */}
            <div className={`bg-gradient-to-br ${tier.gradient} hover:${tier.hoverGradient} p-8 rounded-t-3xl text-white transition-all duration-500`}>
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold mb-2">{tier.price}</div>
                <div className="text-sm opacity-90 bg-white/20 rounded-full px-4 py-1 inline-block">
                  {tier.timeline}
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-8">
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {tier.description}
              </p>

                                <div className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full bg-gradient-to-r ${tier.gradient} hover:${tier.hoverGradient} text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                Get Started
              </button>

              {/* Additional Info */}
              <div className="mt-4 text-center">
                <button className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-300">
                  View Full Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className={`text-center mt-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 transition-all duration-1000 ${
        inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ animationDelay: '800ms' }}>
        <h3 className="text-3xl font-bold text-white mb-4">
          Thinking Even Bigger? Want Something Custom?
        </h3>
        <p className="text-gray-300 text-sm mb-8 max-w-2xl mx-auto">
          Every business is unique. Let’s explore a tailored solution that fits your specific needs and budget. Through a thorough consultation, we’ll identify the best combination of services to help your business grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Schedule Free Consultation
          </button>
          <button className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
            View Portfolio
          </button>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center">
            <div className="bg-gray-700 rounded-full p-3 mr-3">
              <span className="text-white text-xl">📞</span>
            </div>
            <div>
              <div className="font-semibold text-white">Free Consultation</div>
              <div className="text-sm text-gray-300">30-minute strategy call</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-gray-700 rounded-full p-3 mr-3">
              <span className="text-white text-xl">⚡</span>
            </div>
            <div>
              <div className="font-semibold text-white">Fast Turnaround</div>
              <div className="text-sm text-gray-300">Quick project delivery</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-gray-700 rounded-full p-3 mr-3">
              <span className="text-white text-xl">🎯</span>
            </div>
            <div>
              <div className="font-semibold text-white">Results Focused</div>
              <div className="text-sm text-gray-300">ROI-driven solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;