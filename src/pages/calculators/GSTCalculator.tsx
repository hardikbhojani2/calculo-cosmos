import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const GSTCalculator = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [result, setResult] = useState<{
    gstAmount: number;
    totalAmount: number;
  } | null>(null);

  const calculateGST = () => {
    const baseAmount = parseFloat(amount);
    const rate = parseFloat(gstRate);

    if (isNaN(baseAmount) || isNaN(rate)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers",
        variant: "destructive",
      });
      return;
    }

    const gstAmount = (baseAmount * rate) / 100;
    const totalAmount = baseAmount + gstAmount;

    setResult({
      gstAmount,
      totalAmount,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">GST Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount">Base Amount (₹)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter the base amount"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gstRate">GST Rate (%)</Label>
            <Input
              id="gstRate"
              type="number"
              value={gstRate}
              onChange={(e) => setGstRate(e.target.value)}
              placeholder="Enter the GST rate"
            />
          </div>

          <Button onClick={calculateGST} className="w-full">
            Calculate GST
          </Button>

          {result !== null && (
            <div className="mt-6 p-4 bg-primary/5 rounded-lg space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Base Amount</h3>
                <p className="text-lg font-bold">₹{parseFloat(amount).toFixed(2)}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600">GST Amount ({gstRate}%)</h3>
                <p className="text-lg font-bold text-primary">₹{result.gstAmount.toFixed(2)}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Total Amount</h3>
                <p className="text-xl font-bold text-primary">₹{result.totalAmount.toFixed(2)}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GSTCalculator;