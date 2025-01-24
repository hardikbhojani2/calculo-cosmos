import { Card } from "@/components/ui/card";
import { CalculatorInstructions } from "@/components/CalculatorInstructions";
import { SimilarCalculators } from "@/components/SimilarCalculators";

interface CalculatorLayoutProps {
  title: string;
  children: React.ReactNode;
  instructions?: {
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  similarCalculators?: Array<{
    title: string;
    description: string;
    path: string;
  }>;
}

export const CalculatorLayout = ({
  title,
  children,
  instructions,
  similarCalculators,
}: CalculatorLayoutProps) => {
  return (
    <main className="flex-grow py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {instructions && (
          <CalculatorInstructions
            title={instructions.title}
            description={instructions.description}
            steps={instructions.steps}
          />
        )}
        
        <Card className="p-6">
          <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
          {children}
        </Card>

        {similarCalculators && similarCalculators.length > 0 && (
          <SimilarCalculators calculators={similarCalculators} />
        )}
      </div>
    </main>
  );
};