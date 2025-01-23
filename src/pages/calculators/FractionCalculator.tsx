import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { useToast } from "@/hooks/use-toast";

interface Fraction {
  numerator: number;
  denominator: number;
}

const FractionCalculator = () => {
  const [fraction1, setFraction1] = useState<Fraction>({ numerator: 0, denominator: 1 });
  const [fraction2, setFraction2] = useState<Fraction>({ numerator: 0, denominator: 1 });
  const [result, setResult] = useState<Fraction | null>(null);
  const { toast } = useToast();

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const simplifyFraction = (fraction: Fraction): Fraction => {
    const divisor = gcd(Math.abs(fraction.numerator), Math.abs(fraction.denominator));
    return {
      numerator: fraction.numerator / divisor,
      denominator: fraction.denominator / divisor
    };
  };

  const calculate = (operation: string) => {
    try {
      if (fraction1.denominator === 0 || fraction2.denominator === 0) {
        throw new Error("Denominator cannot be zero");
      }

      let resultFraction: Fraction;

      switch (operation) {
        case '+':
          resultFraction = {
            numerator: fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator,
            denominator: fraction1.denominator * fraction2.denominator
          };
          break;
        case '-':
          resultFraction = {
            numerator: fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator,
            denominator: fraction1.denominator * fraction2.denominator
          };
          break;
        case '*':
          resultFraction = {
            numerator: fraction1.numerator * fraction2.numerator,
            denominator: fraction1.denominator * fraction2.denominator
          };
          break;
        case '/':
          if (fraction2.numerator === 0) {
            throw new Error("Cannot divide by zero");
          }
          resultFraction = {
            numerator: fraction1.numerator * fraction2.denominator,
            denominator: fraction1.denominator * fraction2.numerator
          };
          break;
        default:
          throw new Error("Invalid operation");
      }

      const simplified = simplifyFraction(resultFraction);
      setResult(simplified);
      toast({
        title: "Calculation Complete",
        description: `${fraction1.numerator}/${fraction1.denominator} ${operation} ${fraction2.numerator}/${fraction2.denominator} = ${simplified.numerator}/${simplified.denominator}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Invalid calculation",
      });
    }
  };

  return (
    <CalculatorLayout title="Fraction Calculator">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Fraction</label>
              <div className="space-y-2">
                <Input
                  type="number"
                  placeholder="Numerator"
                  value={fraction1.numerator}
                  onChange={(e) => setFraction1({ ...fraction1, numerator: parseInt(e.target.value) || 0 })}
                />
                <div className="border-t-2 border-primary"></div>
                <Input
                  type="number"
                  placeholder="Denominator"
                  value={fraction1.denominator}
                  onChange={(e) => setFraction1({ ...fraction1, denominator: parseInt(e.target.value) || 1 })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Second Fraction</label>
              <div className="space-y-2">
                <Input
                  type="number"
                  placeholder="Numerator"
                  value={fraction2.numerator}
                  onChange={(e) => setFraction2({ ...fraction2, numerator: parseInt(e.target.value) || 0 })}
                />
                <div className="border-t-2 border-primary"></div>
                <Input
                  type="number"
                  placeholder="Denominator"
                  value={fraction2.denominator}
                  onChange={(e) => setFraction2({ ...fraction2, denominator: parseInt(e.target.value) || 1 })}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <Button onClick={() => calculate('+')}>Add</Button>
            <Button onClick={() => calculate('-')}>Subtract</Button>
            <Button onClick={() => calculate('*')}>Multiply</Button>
            <Button onClick={() => calculate('/')}>Divide</Button>
          </div>

          {result && (
            <div className="mt-4 p-4 bg-secondary/10 rounded-lg text-center">
              <div className="text-lg font-semibold">Result:</div>
              <div className="space-y-2">
                <div>{result.numerator}</div>
                <div className="border-t-2 border-primary w-16 mx-auto"></div>
                <div>{result.denominator}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default FractionCalculator;