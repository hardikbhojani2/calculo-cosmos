import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const PercentageCalculator = () => {
  const { toast } = useToast();
  const [number, setNumber] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = () => {
    const num = parseFloat(number);
    const perc = parseFloat(percentage);

    if (isNaN(num) || isNaN(perc)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers",
        variant: "destructive",
      });
      return;
    }

    setResult((num * perc) / 100);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Percentage Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="number">Number</Label>
            <Input
              id="number"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter the number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="percentage">Percentage (%)</Label>
            <Input
              id="percentage"
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="Enter the percentage"
            />
          </div>

          <Button onClick={calculatePercentage} className="w-full">
            Calculate
          </Button>

          {result !== null && (
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Result</h3>
              <p className="text-2xl font-bold text-primary">
                {result.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {percentage}% of {number} is {result.toFixed(2)}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PercentageCalculator;