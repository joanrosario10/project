import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Page not found</p>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        <Home size={18} />
        <span>Back to Home</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;