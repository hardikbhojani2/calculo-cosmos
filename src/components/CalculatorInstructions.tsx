import { Card } from "@/components/ui/card";

interface InstructionStep {
  title: string;
  description: string;
}

interface CalculatorInstructionsProps {
  title: string;
  description: string;
  steps: InstructionStep[];
}

export const CalculatorInstructions = ({
  title,
  description,
  steps,
}: CalculatorInstructionsProps) => {
  return (
    <div className="mb-12 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">{title}</h2>
      <p className="text-gray-600 mb-8 text-lg">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card 
            key={index} 
            className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};