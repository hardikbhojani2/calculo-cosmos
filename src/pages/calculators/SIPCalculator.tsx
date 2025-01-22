import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [years, setYears] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const t = parseFloat(years);
    const r = parseFloat(expectedReturn) / 100 / 12;
    
    if (!isNaN(P) && !isNaN(t) && !isNaN(r)) {
      const n = t * 12;
      const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      setResult(Math.round(FV));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-center mb-6">SIP Calculator</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Monthly Investment (₹)</label>
              <Input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
                placeholder="Enter monthly investment amount"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Time Period (Years)</label>
              <Input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                placeholder="Enter investment duration"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Expected Return (%)</label>
              <Input
                type="number"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(e.target.value)}
                placeholder="Enter expected annual return"
              />
            </div>

            <Button 
              onClick={calculateSIP}
              className="w-full"
            >
              Calculate
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-lg">
                  Expected Amount: <span className="font-semibold">₹{result.toLocaleString()}</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Total Investment: ₹{(parseFloat(monthlyInvestment) * parseFloat(years) * 12).toLocaleString()}
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

export default SIPCalculator;