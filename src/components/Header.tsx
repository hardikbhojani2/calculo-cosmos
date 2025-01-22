import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: 'Math', path: '/math' },
    { name: 'Health', path: '/health' },
    { name: 'Finance', path: '/finance' },
    { name: 'Date & Time', path: '/date-time' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">CalcHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search calculators..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search calculators..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              {categories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};