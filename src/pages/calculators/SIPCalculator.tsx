import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SIPCalculator = () => {
  const { toast } = useToast();
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedReturn) / (12 * 100); // Monthly rate
    const t = parseFloat(timePeriod) * 12; // Time in months

    if (isNaN(P) || isNaN(r) || isNaN(t)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for all fields",
        variant: "destructive",
      });
      return;
    }

    // SIP calculation formula: FV = P * ((1 + r)^t - 1) * (1 + r)/r
    const amount = P * ((Math.pow(1 + r, t) - 1) * (1 + r)) / r;
    setResult(Math.round(amount));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">SIP Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="monthlyInvestment">Monthly Investment (₹)</Label>
            <Input
              id="monthlyInvestment"
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              placeholder="Enter monthly investment amount"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
            <Input
              id="expectedReturn"
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              placeholder="Enter expected annual return"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timePeriod">Time Period (Years)</Label>
            <Input
              id="timePeriod"
              type="number"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              placeholder="Enter time period in years"
            />
          </div>

          <Button onClick={calculateSIP} className="w-full">
            Calculate
          </Button>

          {result !== null && (
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Results</h3>
              <p className="text-2xl font-bold text-primary">
                ₹{result.toLocaleString('en-IN')}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Total value after {timePeriod} years
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SIPCalculator;