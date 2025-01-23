import { Card } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

interface Calculator {
  title: string;
  description: string;
  path: string;
}

interface CalculatorInstructionsProps {
  title: string;
  instructions: string[];
  tips: string[];
  examples: string[];
  similarCalculators: Calculator[];
}

export const CalculatorInstructions = ({
  title,
  instructions,
  tips,
  examples,
  similarCalculators,
}: CalculatorInstructionsProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
          <h3 className="text-lg font-semibold mb-4 text-primary">Instructions</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {instructions.map((instruction, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                {instruction}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
          <h3 className="text-lg font-semibold mb-4 text-primary">Tips & Tricks</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
          <h3 className="text-lg font-semibold mb-4 text-primary">Examples</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {examples.map((example, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                {example}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="py-8">
        <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">Similar Calculators</h3>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {similarCalculators.map((calc, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <Link to={calc.path}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1 bg-white/50 backdrop-blur">
                    <h4 className="font-semibold mb-2 text-primary">{calc.title}</h4>
                    <p className="text-sm text-gray-600">{calc.description}</p>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};