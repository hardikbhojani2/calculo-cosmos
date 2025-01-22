import { Calculator, Heart, Calendar, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

const calculators = [
  {
    title: 'Basic Calculator',
    description: 'Perform basic mathematical operations with ease',
    icon: Calculator,
    path: '/calculator/basic',
    category: 'Math',
  },
  {
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index',
    icon: Heart,
    path: '/calculator/bmi',
    category: 'Health',
  },
  {
    title: 'Age Calculator',
    description: 'Calculate age between two dates',
    icon: Calendar,
    path: '/calculator/age',
    category: 'Date & Time',
  },
  {
    title: 'Percentage Calculator',
    description: 'Calculate percentages quickly and easily',
    icon: Percent,
    path: '/calculator/percentage',
    category: 'Math',
  },
];

export const CalculatorGrid = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Calculators</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.path}
              to={calc.path}
              className="group p-6 bg-white rounded-xl border border-gray-200 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/5 rounded-full mb-4 group-hover:bg-primary/10 transition-colors">
                  <calc.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{calc.title}</h3>
                <p className="text-sm text-gray-600">{calc.description}</p>
                <span className="mt-4 text-xs font-medium text-primary/60">
                  {calc.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};