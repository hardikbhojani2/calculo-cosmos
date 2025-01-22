import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const EMICalculator = () => {
  const { toast } = useToast();
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalAmount: number;
  } | null>(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const time = parseFloat(loanTenure) * 12; // Time in months

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for all fields",
        variant: "destructive",
      });
      return;
    }

    const emi = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    const totalAmount = emi * time;
    const totalInterest = totalAmount - principal;

    setResult({
      emi,
      totalInterest,
      totalAmount,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">EMI Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
            <Input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Enter loan amount"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interestRate">Interest Rate (% per annum)</Label>
            <Input
              id="interestRate"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter annual interest rate"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanTenure">Loan Tenure (Years)</Label>
            <Input
              id="loanTenure"
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              placeholder="Enter loan tenure in years"
            />
          </div>

          <Button onClick={calculateEMI} className="w-full">
            Calculate EMI
          </Button>

          {result !== null && (
            <div className="mt-6 p-4 bg-primary/5 rounded-lg space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Monthly EMI</h3>
                <p className="text-2xl font-bold text-primary">
                  ₹{result.emi.toFixed(2)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Total Interest</h3>
                  <p className="text-lg font-bold">₹{result.totalInterest.toFixed(2)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Total Amount</h3>
                  <p className="text-lg font-bold">₹{result.totalAmount.toFixed(2)}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EMICalculator;