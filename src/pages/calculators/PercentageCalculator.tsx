import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PercentageCalculator = () => {
  const [number, setNumber] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = () => {
    const num = parseFloat(number);
    const perc = parseFloat(percentage);
    
    if (!isNaN(num) && !isNaN(perc)) {
      setResult((num * perc) / 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Percentage Calculator</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Number</label>
              <Input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Percentage (%)</label>
              <Input
                type="number"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                placeholder="Enter percentage"
              />
            </div>

            <Button 
              onClick={calculatePercentage}
              className="w-full"
            >
              Calculate
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-lg">
                  {percentage}% of {number} is: <span className="font-semibold">{result}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PercentageCalculator;