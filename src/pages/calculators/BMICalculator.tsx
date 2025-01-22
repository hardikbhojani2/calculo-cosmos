import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const BMICalculator = () => {
  const { toast } = useToast();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    const heightInM = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInM) || isNaN(weightInKg)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for height and weight",
        variant: "destructive",
      });
      return;
    }

    const bmiValue = weightInKg / (heightInM * heightInM);
    setBMI(parseFloat(bmiValue.toFixed(1)));
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">BMI Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height in centimeters"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight in kilograms"
            />
          </div>

          <Button onClick={calculateBMI} className="w-full">
            Calculate BMI
          </Button>

          {bmi !== null && (
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Your BMI Results</h3>
              <p className="text-2xl font-bold text-primary">{bmi}</p>
              <p className="text-sm text-gray-600 mt-1">
                Category: {getBMICategory(bmi)}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BMICalculator;