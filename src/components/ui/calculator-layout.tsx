import { Card } from "@/components/ui/card";

interface CalculatorLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const CalculatorLayout = ({ title, children }: CalculatorLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md mx-auto overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">{title}</h1>
            {children}
          </div>
        </Card>
      </main>
    </div>
  );
};