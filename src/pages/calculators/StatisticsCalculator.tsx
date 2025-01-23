import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { useToast } from "@/hooks/use-toast";

interface StatisticsResult {
  mean: number;
  median: number;
  mode: number[];
  standardDeviation: number;
  variance: number;
}

const StatisticsCalculator = () => {
  const [numbers, setNumbers] = useState<string>("");
  const [result, setResult] = useState<StatisticsResult | null>(null);
  const { toast } = useToast();

  const calculateStatistics = () => {
    try {
      const nums = numbers.split(",").map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
      
      if (nums.length === 0) {
        throw new Error("Please enter valid numbers separated by commas");
      }

      // Calculate mean
      const mean = nums.reduce((a, b) => a + b) / nums.length;

      // Calculate median
      const sorted = [...nums].sort((a, b) => a - b);
      const median = sorted.length % 2 === 0
        ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
        : sorted[Math.floor(sorted.length / 2)];

      // Calculate mode
      const frequency: { [key: number]: number } = {};
      nums.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
      });
      const maxFrequency = Math.max(...Object.values(frequency));
      const mode = Object.entries(frequency)
        .filter(([, freq]) => freq === maxFrequency)
        .map(([num]) => parseFloat(num));

      // Calculate variance and standard deviation
      const variance = nums.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / nums.length;
      const standardDeviation = Math.sqrt(variance);

      setResult({
        mean,
        median,
        mode,
        standardDeviation,
        variance
      });

      toast({
        title: "Calculation Complete",
        description: "Statistics calculated successfully",
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
    <CalculatorLayout title="Statistics Calculator">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Enter numbers (separated by commas)
          </label>
          <Input
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="e.g., 1, 2, 3, 4, 5"
            className="mb-4"
          />
          <Button onClick={calculateStatistics} className="w-full">
            Calculate
          </Button>
        </div>

        {result && (
          <div className="space-y-4 p-4 bg-secondary/10 rounded-lg">
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span className="font-medium">Mean:</span>
                <span>{result.mean.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Median:</span>
                <span>{result.median.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Mode:</span>
                <span>{result.mode.join(", ")}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Standard Deviation:</span>
                <span>{result.standardDeviation.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Variance:</span>
                <span>{result.variance.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default StatisticsCalculator;