import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { useToast } from "@/hooks/use-toast";
import { CalculatorInstructions } from "@/components/CalculatorInstructions";
import { SimilarCalculators } from "@/components/SimilarCalculators";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface QuadraticResult {
  x1: number;
  x2: number;
  discriminant: number;
}

const EquationSolver = () => {
  const [coefficients, setCoefficients] = useState({
    a: "",
    b: "",
    c: "",
  });
  const [result, setResult] = useState<QuadraticResult | null>(null);
  const { toast } = useToast();

  const solveQuadratic = () => {
    try {
      const a = parseFloat(coefficients.a);
      const b = parseFloat(coefficients.b);
      const c = parseFloat(coefficients.c);

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error("Please enter valid coefficients");
      }

      if (a === 0) {
        throw new Error("Coefficient 'a' cannot be zero for a quadratic equation");
      }

      const discriminant = b * b - 4 * a * c;
      let x1: number;
      let x2: number;

      if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      } else if (discriminant === 0) {
        x1 = x2 = -b / (2 * a);
      } else {
        throw new Error("No real roots (discriminant < 0)");
      }

      setResult({ x1, x2, discriminant });
      toast({
        title: "Equation Solved",
        description: "Quadratic equation solved successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Invalid calculation",
      });
    }
  };

  const instructions = {
    title: "How to Use Quadratic Equation Solver",
    description: "Solve quadratic equations in the form ax² + bx + c = 0",
    steps: [
      {
        title: "Enter Coefficients",
        description: "Input values for a, b, and c in the equation ax² + bx + c = 0"
      },
      {
        title: "Check Values",
        description: "Ensure coefficient 'a' is not zero for a valid quadratic equation"
      },
      {
        title: "View Solutions",
        description: "Click 'Solve Equation' to find the roots (x values)"
      }
    ]
  };

  const similarCalculators = [
    {
      title: "Linear Equation Solver",
      description: "Solve linear equations",
      path: "/calculator/linear-equation"
    },
    {
      title: "Matrix Calculator",
      description: "Perform matrix operations",
      path: "/calculator/matrix"
    },
    {
      title: "Function Grapher",
      description: "Visualize mathematical functions",
      path: "/calculator/function-graph"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <CalculatorLayout title="Quadratic Equation Solver">
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Enter coefficients for ax² + bx + c = 0
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm mb-1">a</label>
                      <Input
                        type="number"
                        value={coefficients.a}
                        onChange={(e) => setCoefficients({ ...coefficients, a: e.target.value })}
                        placeholder="a"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">b</label>
                      <Input
                        type="number"
                        value={coefficients.b}
                        onChange={(e) => setCoefficients({ ...coefficients, b: e.target.value })}
                        placeholder="b"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">c</label>
                      <Input
                        type="number"
                        value={coefficients.c}
                        onChange={(e) => setCoefficients({ ...coefficients, c: e.target.value })}
                        placeholder="c"
                      />
                    </div>
                  </div>
                </div>

                <Button onClick={solveQuadratic} className="w-full">
                  Solve Equation
                </Button>
              </div>

              {result && (
                <div className="space-y-4 p-4 bg-secondary/10 rounded-lg">
                  <div className="grid gap-2">
                    <div className="flex justify-between">
                      <span className="font-medium">x₁:</span>
                      <span>{result.x1.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">x₂:</span>
                      <span>{result.x2.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Discriminant:</span>
                      <span>{result.discriminant.toFixed(4)}</span>
                    </div>
                  </div>
                </div>
              )}
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

export default EquationSolver;