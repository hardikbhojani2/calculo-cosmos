import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [years, setYears] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [result, setResult] = useState<{
    totalInvestment: number;
    totalReturns: number;
    maturityValue: number;
  } | null>(null);

  const calculateSIP = () => {
    if (monthlyInvestment && years && expectedReturn) {
      const P = parseFloat(monthlyInvestment);
      const t = parseFloat(years);
      const r = parseFloat(expectedReturn) / 100 / 12;
      const n = t * 12;

      const maturityValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const totalInvestment = P * n;
      const totalReturns = maturityValue - totalInvestment;

      setResult({
        totalInvestment: parseFloat(totalInvestment.toFixed(2)),
        totalReturns: parseFloat(totalReturns.toFixed(2)),
        maturityValue: parseFloat(maturityValue.toFixed(2)),
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">SIP Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Investment (₹)</label>
            <Input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              placeholder="Enter monthly investment amount"
              className="mt-1"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Time Period (Years)</label>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Enter investment duration"
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Expected Return (%)</label>
            <Input
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              placeholder="Enter expected annual return"
              className="mt-1"
            />
          </div>

          <Button onClick={calculateSIP} className="w-full">
            Calculate
          </Button>

          {result && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
              <p className="text-md">
                <span className="font-semibold">Total Investment:</span> ₹{result.totalInvestment}
              </p>
              <p className="text-md">
                <span className="font-semibold">Total Returns:</span> ₹{result.totalReturns}
              </p>
              <p className="text-md">
                <span className="font-semibold">Maturity Value:</span> ₹{result.maturityValue}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SIPCalculator;