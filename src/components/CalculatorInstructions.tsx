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
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                {index + 1}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};