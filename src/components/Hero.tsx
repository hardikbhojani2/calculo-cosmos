import { Search } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your Ultimate Calculator Hub
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Access hundreds of free calculators for math, health, finance, and more. Simple, accurate, and always free.
        </p>
        
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for any calculator..."
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:border-primary"
            />
            <button className="absolute right-2 top-2 p-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
              <Search size={24} />
            </button>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="text-sm text-gray-500">Popular searches:</span>
          <button className="text-sm text-primary hover:text-primary-hover">BMI Calculator</button>
          <button className="text-sm text-primary hover:text-primary-hover">Age Calculator</button>
          <button className="text-sm text-primary hover:text-primary-hover">Percentage Calculator</button>
        </div>
      </div>
    </div>
  );
};