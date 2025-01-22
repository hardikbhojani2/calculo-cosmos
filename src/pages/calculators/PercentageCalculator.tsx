import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PercentageCalculator = () => {
  const [number, setNumber] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = () => {
    if (number && percentage) {
      const value = (parseFloat(number) * parseFloat(percentage)) / 100;
      setResult(parseFloat(value.toFixed(2)));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Percentage Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Number</label>
            <Input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter number"
              className="mt-1"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Percentage</label>
            <Input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="Enter percentage"
              className="mt-1"
            />
          </div>

          <Button onClick={calculatePercentage} className="w-full">
            Calculate
          </Button>

          {result !== null && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-semibold">
                {percentage}% of {number} is: {result}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PercentageCalculator;