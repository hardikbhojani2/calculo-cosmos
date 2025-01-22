import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);

  const calculateEMI = () => {
    if (loanAmount && interestRate && tenure) {
      const P = parseFloat(loanAmount);
      const r = parseFloat(interestRate) / 12 / 100;
      const n = parseFloat(tenure) * 12;

      const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - P;

      setResult({
        emi: parseFloat(emi.toFixed(2)),
        totalInterest: parseFloat(totalInterest.toFixed(2)),
        totalPayment: parseFloat(totalPayment.toFixed(2)),
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">EMI Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Amount (₹)</label>
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Enter loan amount"
              className="mt-1"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter annual interest rate"
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Tenure (Years)</label>
            <Input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="Enter loan tenure"
              className="mt-1"
            />
          </div>

          <Button onClick={calculateEMI} className="w-full">
            Calculate EMI
          </Button>

          {result && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
              <p className="text-md">
                <span className="font-semibold">Monthly EMI:</span> ₹{result.emi}
              </p>
              <p className="text-md">
                <span className="font-semibold">Total Interest:</span> ₹{result.totalInterest}
              </p>
              <p className="text-md">
                <span className="font-semibold">Total Payment:</span> ₹{result.totalPayment}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EMICalculator;