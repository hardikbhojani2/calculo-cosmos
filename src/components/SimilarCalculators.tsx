import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

interface SimilarCalculator {
  title: string;
  description: string;
  path: string;
}

interface SimilarCalculatorsProps {
  calculators: SimilarCalculator[];
}

export const SimilarCalculators = ({ calculators }: SimilarCalculatorsProps) => {
  return (
    <div className="mt-16 animate-fade-in">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Similar Calculators</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {calculators.map((calc, index) => (
          <Link
            key={index}
            to={calc.path}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-2 hover:border-primary/20">
              <div className="flex flex-col items-center text-center h-full">
                <div className="p-3 bg-primary/5 rounded-full mb-4 group-hover:bg-primary/10 transition-colors">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{calc.title}</h3>
                <p className="text-gray-600">{calc.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};