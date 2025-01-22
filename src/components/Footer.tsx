import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CalcHub</h3>
            <p className="text-sm text-gray-600">
              Your one-stop solution for all calculation needs. Simple, accurate, and free to use.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/math" className="text-sm text-gray-600 hover:text-primary">
                  Math Calculators
                </Link>
              </li>
              <li>
                <Link to="/health" className="text-sm text-gray-600 hover:text-primary">
                  Health Calculators
                </Link>
              </li>
              <li>
                <Link to="/finance" className="text-sm text-gray-600 hover:text-primary">
                  Finance Calculators
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to get updates and news about new calculators.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-r-0 border-gray-200 focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-hover transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} CalcHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};