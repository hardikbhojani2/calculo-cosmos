import { 
  Calculator, Heart, Calendar, Percent, DollarSign, PiggyBank, 
  Scale, Ruler, Brain, Timer, Thermometer, Battery, Droplet,
  Gauge, Wind, Sunrise, Cloud, Umbrella, Zap, Activity,
  Leaf, TreePine, Mountain, Waves, Clock, Watch, Hourglass,
  AlarmClock, Calculator as CalcIcon, Wallet, CreditCard,
  Landmark, TrendingUp, LineChart, BarChart, PieChart,
  Grid as GridIcon, Binary as BinaryIcon, Utensils as UtensilsIcon, Baby as BabyIcon, 
  HeartPulse, Home as HomeIcon, Briefcase as BriefcaseIcon, Globe as GlobeIcon, 
  Square as SquareIcon, Box, Compass as CompassIcon, Calculator as FunctionIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const calculators = [
  // Math Category
  {
    title: 'Basic Calculator',
    description: 'Perform basic mathematical operations with ease',
    icon: Calculator,
    path: '/calculator/basic',
    category: 'Math',
  },
  {
    title: 'Scientific Calculator',
    description: 'Advanced calculations with trigonometric and logarithmic functions',
    icon: Brain,
    path: '/calculator/scientific',
    category: 'Math',
  },
  {
    title: 'Percentage Calculator',
    description: 'Calculate percentages, markups, and discounts',
    icon: Percent,
    path: '/calculator/percentage',
    category: 'Math',
  },
  {
    title: 'Fraction Calculator',
    description: 'Add, subtract, multiply and divide fractions',
    icon: CalcIcon,
    path: '/calculator/fraction',
    category: 'Math',
  },
  {
    title: 'Matrix Calculator',
    description: 'Perform matrix operations and calculations',
    icon: GridIcon,
    path: '/calculator/matrix',
    category: 'Math',
  },
  {
    title: 'Statistics Calculator',
    description: 'Calculate mean, median, mode, and standard deviation',
    icon: BarChart,
    path: '/calculator/statistics',
    category: 'Math',
  },
  {
    title: 'Equation Solver',
    description: 'Solve linear and quadratic equations',
    icon: FunctionIcon,
    path: '/calculator/equation',
    category: 'Math',
  },
  {
    title: 'Number Base Converter',
    description: 'Convert between binary, decimal, hexadecimal',
    icon: BinaryIcon,
    path: '/calculator/base-converter',
    category: 'Math',
  },

  // Health Category
  {
    title: 'BMI Calculator',
    description: 'Calculate Body Mass Index and health recommendations',
    icon: Heart,
    path: '/calculator/bmi',
    category: 'Health',
  },
  {
    title: 'BMR Calculator',
    description: 'Calculate Basal Metabolic Rate for nutrition planning',
    icon: Activity,
    path: '/calculator/bmr',
    category: 'Health',
  },
  {
    title: 'Body Fat Calculator',
    description: 'Estimate body fat percentage using various methods',
    icon: Scale,
    path: '/calculator/body-fat',
    category: 'Health',
  },
  {
    title: 'Calorie Calculator',
    description: 'Track daily caloric needs and expenditure',
    icon: UtensilsIcon,
    path: '/calculator/calorie',
    category: 'Health',
  },
  {
    title: 'Pregnancy Calculator',
    description: 'Calculate due date and pregnancy milestones',
    icon: BabyIcon,
    path: '/calculator/pregnancy',
    category: 'Health',
  },
  {
    title: 'Blood Pressure Calculator',
    description: 'Analyze blood pressure readings and categories',
    icon: Heart,
    path: '/calculator/blood-pressure',
    category: 'Health',
  },
  {
    title: 'Target Heart Rate',
    description: 'Calculate optimal heart rate zones for exercise',
    icon: HeartPulse,
    path: '/calculator/heart-rate',
    category: 'Health',
  },
  {
    title: 'Ovulation Calculator',
    description: 'Track fertility window and menstrual cycle',
    icon: Calendar,
    path: '/calculator/ovulation',
    category: 'Health',
  },

  // Finance Category
  {
    title: 'EMI Calculator',
    description: 'Calculate loan EMI payments and amortization schedule',
    icon: DollarSign,
    path: '/calculator/emi',
    category: 'Finance',
  },
  {
    title: 'SIP Calculator',
    description: 'Plan investments with detailed SIP calculations',
    icon: PiggyBank,
    path: '/calculator/sip',
    category: 'Finance',
  },
  {
    title: 'GST Calculator',
    description: 'Calculate GST amounts and final prices',
    icon: Calculator,
    path: '/calculator/gst',
    category: 'Finance',
  },
  {
    title: 'Income Tax Calculator',
    description: 'Estimate income tax liability and deductions',
    icon: Wallet,
    path: '/calculator/income-tax',
    category: 'Finance',
  },
  {
    title: 'Compound Interest',
    description: 'Calculate compound interest with periodic additions',
    icon: TrendingUp,
    path: '/calculator/compound-interest',
    category: 'Finance',
  },
  {
    title: 'Mortgage Calculator',
    description: 'Calculate mortgage payments and amortization',
    icon: HomeIcon,
    path: '/calculator/mortgage',
    category: 'Finance',
  },
  {
    title: 'ROI Calculator',
    description: 'Calculate return on investment and profitability',
    icon: LineChart,
    path: '/calculator/roi',
    category: 'Finance',
  },
  {
    title: 'Currency Converter',
    description: 'Convert between different currencies with live rates',
    icon: CreditCard,
    path: '/calculator/currency',
    category: 'Finance',
  },

  // Time Category
  {
    title: 'Age Calculator',
    description: 'Calculate precise age between dates',
    icon: Calendar,
    path: '/calculator/age',
    category: 'Time',
  },
  {
    title: 'Time Duration',
    description: 'Calculate time difference between two points',
    icon: Clock,
    path: '/calculator/duration',
    category: 'Time',
  },
  {
    title: 'Date Calculator',
    description: 'Add or subtract days from dates',
    icon: Calendar,
    path: '/calculator/date',
    category: 'Time',
  },
  {
    title: 'Working Days',
    description: 'Calculate working days between dates',
    icon: BriefcaseIcon,
    path: '/calculator/working-days',
    category: 'Time',
  },
  {
    title: 'Time Zone Converter',
    description: 'Convert times between different time zones',
    icon: GlobeIcon,
    path: '/calculator/timezone',
    category: 'Time',
  },
  {
    title: 'Countdown Timer',
    description: 'Calculate time until future events',
    icon: Timer,
    path: '/calculator/countdown',
    category: 'Time',
  },
  {
    title: 'Schedule Planner',
    description: 'Calculate optimal meeting times across zones',
    icon: Calendar,
    path: '/calculator/schedule',
    category: 'Time',
  },
  {
    title: 'Time Card Calculator',
    description: 'Calculate work hours and overtime',
    icon: Clock,
    path: '/calculator/timecard',
    category: 'Time',
  },

  // Measurement Category
  {
    title: 'Unit Converter',
    description: 'Convert between different units of measurement',
    icon: Ruler,
    path: '/calculator/unit-converter',
    category: 'Measurement',
  },
  {
    title: 'Area Calculator',
    description: 'Calculate area of various shapes',
    icon: SquareIcon,
    path: '/calculator/area',
    category: 'Measurement',
  },
  {
    title: 'Volume Calculator',
    description: 'Calculate volume of 3D shapes',
    icon: Box,
    path: '/calculator/volume',
    category: 'Measurement',
  },
  {
    title: 'Length Converter',
    description: 'Convert between length units',
    icon: Ruler,
    path: '/calculator/length',
    category: 'Measurement',
  },
  {
    title: 'Weight Converter',
    description: 'Convert between weight units',
    icon: Scale,
    path: '/calculator/weight',
    category: 'Measurement',
  },
  {
    title: 'Temperature Converter',
    description: 'Convert between temperature scales',
    icon: Thermometer,
    path: '/calculator/temperature',
    category: 'Measurement',
  },
  {
    title: 'Speed Calculator',
    description: 'Convert between speed units',
    icon: Gauge,
    path: '/calculator/speed',
    category: 'Measurement',
  },
  {
    title: 'Pressure Calculator',
    description: 'Convert between pressure units',
    icon: CompassIcon,
    path: '/calculator/pressure',
    category: 'Measurement',
  },
];

export const CalculatorGrid = () => {
  // Group calculators by category
  const calculatorsByCategory = calculators.reduce((acc, calculator) => {
    if (!acc[calculator.category]) {
      acc[calculator.category] = [];
    }
    acc[calculator.category].push(calculator);
    return acc;
  }, {} as Record<string, typeof calculators>);

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Professional Calculator Suite
        </h2>
        
        {Object.entries(calculatorsByCategory).map(([category, categoryCalculators]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-primary/80 border-b pb-2">
              {category} Calculators
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryCalculators.map((calc) => (
                <Link
                  key={calc.path}
                  to={calc.path}
                  className="group p-6 bg-white rounded-xl border border-gray-200 shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-primary/20"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/5 rounded-full mb-4 group-hover:bg-primary/10 transition-colors">
                      <calc.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{calc.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{calc.description}</p>
                    <span className="text-xs font-medium text-primary/60 bg-primary/5 px-3 py-1 rounded-full">
                      {calc.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
