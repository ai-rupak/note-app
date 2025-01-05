import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full hover:shadow-xl transition-shadow duration-300">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="text-center border-b border-gray-100 pb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Note App
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Your ultimate companion for organizing thoughts, ideas, and tasks effortlessly.
            </p>
          </div>

          {/* Welcome Section */}
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Welcome to <span className="font-semibold text-indigo-600">Note App</span> — 
              a platform designed to simplify your life by providing an intuitive and powerful 
              way to manage your notes in one place.
            </p>
          </div>

          {/* Features Section */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
            <ul className="space-y-2">
              {[
                'Create and organize notes with ease',
                'Search functionality to quickly find your notes',
                'Lightweight, responsive, and fast interface'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Section */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">Why Choose Note App?</h2>
            <p className="text-gray-600 leading-relaxed">
              Note App is built with simplicity and functionality in mind. Whether you're 
              jotting down quick reminders or brainstorming big ideas, our app ensures 
              you stay productive and focused.
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">Built With</h2>
            <div className="flex space-x-4">
              <span className="px-4 py-2 bg-gray-50 rounded-lg text-gray-600 text-sm">React</span>
              <span className="px-4 py-2 bg-gray-50 rounded-lg text-gray-600 text-sm">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;