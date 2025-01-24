import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { useToast } from "@/hooks/use-toast";
import { CalculatorInstructions } from "@/components/CalculatorInstructions";
import { SimilarCalculators } from "@/components/SimilarCalculators";

const BasicCalculator = () => {
  const [display, setDisplay] = useState("");
  const [equation, setEquation] = useState("");
  const { toast } = useToast();

  const handleNumber = (number: string) => {
    setDisplay(display + number);
  };

  const handleOperator = (operator: string) => {
    if (display) {
      setEquation(display + operator);
      setDisplay("");
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(equation + display);
      if (!isFinite(result)) {
        throw new Error("Invalid calculation");
      }
      setDisplay(result.toString());
      setEquation("");
      toast({
        title: "Calculation complete",
        description: `Result: ${result}`,
      });
    } catch (error) {
      setDisplay("Error");
      setEquation("");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid calculation",
      });
    }
  };

  const clearDisplay = () => {
    setDisplay("");
    setEquation("");
  };

  const similarCalculators = [
    {
      title: "Scientific Calculator",
      description: "Advanced calculations with scientific functions",
      path: "/calculator/scientific"
    },
    {
      title: "Percentage Calculator",
      description: "Calculate percentages and ratios",
      path: "/calculator/percentage"
    },
    {
      title: "Fraction Calculator",
      description: "Work with fractions and mixed numbers",
      path: "/calculator/fraction"
    }
  ];

  const instructions = {
    title: "How to Use Basic Calculator",
    description: "Follow these simple steps to perform calculations efficiently",
    steps: [
      {
        title: "Enter Numbers",
        description: "Click the number buttons or use your keyboard to input values"
      },
      {
        title: "Choose Operation",
        description: "Select the mathematical operation (+, -, ×, ÷) you want to perform"
      },
      {
        title: "Get Result",
        description: "Press the equals (=) button or Enter key to see your calculation result"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <CalculatorLayout title="Basic Calculator">
            <div className="space-y-4">
              <Input
                type="text"
                value={equation + display}
                readOnly
                className="text-right text-xl p-2 font-mono"
              />

              <div className="grid grid-cols-4 gap-2">
                {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+'].map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => {
                      if (item === '=') {
                        calculateResult();
                      } else if (['+', '-', '*', '/'].includes(item.toString())) {
                        handleOperator(item.toString());
                      } else {
                        handleNumber(item.toString());
                      }
                    }}
                    variant={item === '=' ? "default" : "outline"}
                    className="p-4 text-lg h-14"
                  >
                    {item}
                  </Button>
                ))}
                <Button
                  onClick={clearDisplay}
                  variant="destructive"
                  className="col-span-4 mt-2 h-14"
                >
                  Clear
                </Button>
              </div>
            </div>
          </CalculatorLayout>

          <div className="mt-16">
            <CalculatorInstructions {...instructions} />
          </div>

          <SimilarCalculators calculators={similarCalculators} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicCalculator;