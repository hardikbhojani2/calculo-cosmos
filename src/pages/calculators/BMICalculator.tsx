import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { useToast } from "@/components/ui/use-toast";
import { CalculatorInstructions } from "@/components/CalculatorInstructions";
import { SimilarCalculators } from "@/components/SimilarCalculators";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(2)));
      toast({
        title: "BMI Calculated",
        description: `Your BMI is ${bmiValue.toFixed(2)}`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter valid height and weight values",
      });
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  const instructions = {
    title: "How to Use BMI Calculator",
    description: "Calculate your Body Mass Index (BMI) to assess your weight category",
    steps: [
      {
        title: "Enter Height",
        description: "Input your height in centimeters (e.g., 170 cm)"
      },
      {
        title: "Enter Weight",
        description: "Input your weight in kilograms (e.g., 70 kg)"
      },
      {
        title: "Get Results",
        description: "Click 'Calculate BMI' to see your BMI and weight category"
      }
    ]
  };

  const similarCalculators = [
    {
      title: "Body Fat Calculator",
      description: "Calculate your body fat percentage",
      path: "/calculator/body-fat"
    },
    {
      title: "Calorie Calculator",
      description: "Calculate daily calorie needs",
      path: "/calculator/calorie"
    },
    {
      title: "Ideal Weight Calculator",
      description: "Find your ideal weight range",
      path: "/calculator/ideal-weight"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <CalculatorLayout title="BMI Calculator">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Height (cm)</label>
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height in centimeters"
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Weight (kg)</label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in kilograms"
              className="w-full"
            />
          </div>

          <Button 
            onClick={calculateBMI}
            className="w-full"
          >
            Calculate BMI
          </Button>

          {bmi !== null && (
            <div className="mt-4 p-4 bg-secondary-100 rounded-lg">
              <p className="text-lg font-semibold">Your BMI: {bmi}</p>
              <p className="text-secondary-600">Category: {getBMICategory(bmi)}</p>
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

export default BMICalculator;
