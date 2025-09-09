import React, { useState, useEffect } from 'react';

const WebsiteSuccessChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [scores, setScores] = useState({ high: 0, medium: 0, low: 0 });
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on mount
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    const heroSection = document.querySelector('.hero-container');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0; // ✅ partial visibility
      setIsLeaving(!isInView);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checklistItems = [
    // ✅ your checklist items here...
  ];

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const highItems = checklistItems.filter((item) => item.priority === 'high');
    const mediumItems = checklistItems.filter((item) => item.priority === 'medium');
    const lowItems = checklistItems.filter((item) => item.priority === 'low');

    const highChecked = highItems.filter((item) => checkedItems[item.id]).length;
    const mediumChecked = mediumItems.filter((item) => checkedItems[item.id]).length;
    const lowChecked = lowItems.filter((item) => checkedItems[item.id]).length;

    setScores({ high: highChecked, medium: mediumChecked, low: lowChecked });
  }, [checkedItems, checklistItems]); // ✅ added checklistItems too

  const getTotalScore = () => {
    const totalChecked = scores.high + scores.medium + scores.low;
    const totalItems = checklistItems.length;
    return Math.round((totalChecked / totalItems) * 100);
  };

  const groupedItems = checklistItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-300';
      case 'medium':
        return 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border-orange-300';
      case 'low':
        return 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // ✅ count totals dynamically
  const totalHigh = checklistItems.filter((i) => i.priority === 'high').length;
  const totalMedium = checklistItems.filter((i) => i.priority === 'medium').length;
  const totalLow = checklistItems.filter((i) => i.priority === 'low').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Hero Section */}
      <div
        className={`hero-container bg-gradient-to-br from-gray-800 to-gray-900 w-11/12 md:w-4/5 p-6 md:p-8 my-10 mx-auto flex flex-col justify-center items-center rounded-3xl shadow-2xl ${
          !isLeaving && !isMobile ? 'animate-fadeInUp' : isMobile ? '' : 'animate-fadeOut'
        }`}
      >
        <div className="text-center">
          <h1 className="font-roboto font-medium text-4xl md:text-5xl lg:text-6xl my-4 bg-white bg-clip-text text-transparent">
            Website Success Checklist
          </h1>
          <h2 className="font-roboto font-semibold text-xl md:text-2xl lg:text-3xl my-2 text-white">
            The Complete Guide for Small Business Owners 💻
          </h2>
          <p className="font-hankenGrotesk font-normal mb-6 text-sm md:text-base text-gray-200 max-w-3xl">
            This comprehensive checklist covers the essential elements every small business website needs to succeed online. 
          </p>
          <div className="bg-gray-600 text-white px-6 py-3 rounded-full inline-block font-medium hover:bg-white hover:text-gray-900 transition duration-300 cursor-pointer">
            Ready to optimize your website? Let&apos;s get started! ⬇️
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Progress Tracker */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg border border-gray-200">
          <h3 className="text-xl font-roboto font-semibold text-gray-900 mb-4 flex items-center">
            📊 Your Progress
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
              <div className="text-2xl font-bold text-red-700">{scores.high}</div>
              <div className="text-sm text-red-600">High Priority</div>
              <div className="text-xs text-red-500">/ {totalHigh} items</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
              <div className="text-2xl font-bold text-orange-700">{scores.medium}</div>
              <div className="text-sm text-orange-600">Medium Priority</div>
              <div className="text-xs text-orange-500">/ {totalMedium} items</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-700">{scores.low}</div>
              <div className="text-sm text-green-600">Low Priority</div>
              <div className="text-xs text-green-500">/ {totalLow} items</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-700">{getTotalScore()}%</div>
              <div className="text-sm text-blue-600">Overall Score</div>
              <div className="text-xs text-blue-500">
                {scores.high + scores.medium + scores.low} / {checklistItems.length}
              </div>
            </div>
          </div>
        </div>
        {/* ✅ rest of your checklist rendering remains unchanged */}
      </div>
    </div>
  );
};

export default WebsiteSuccessChecklist;
