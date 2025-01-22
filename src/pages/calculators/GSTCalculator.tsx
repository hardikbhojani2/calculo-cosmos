import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GSTCalculator = () => {
  const [amount, setAmount] = useState("");
  const [gstRate, setGSTRate] = useState("18");
  const [result, setResult] = useState<{
    gstAmount: number;
    totalAmount: number;
  } | null>(null);

  const calculateGST = () => {
    if (amount && gstRate) {
      const baseAmount = parseFloat(amount);
      const rate = parseFloat(gstRate);
      const gstAmount = (baseAmount * rate) / 100;
      const totalAmount = baseAmount + gstAmount;

      setResult({
        gstAmount: parseFloat(gstAmount.toFixed(2)),
        totalAmount: parseFloat(totalAmount.toFixed(2)),
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">GST Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount (₹)</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="mt-1"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">GST Rate (%)</label>
            <Select value={gstRate} onValueChange={setGSTRate}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select GST rate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5%</SelectItem>
                <SelectItem value="12">12%</SelectItem>
                <SelectItem value="18">18%</SelectItem>
                <SelectItem value="28">28%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateGST} className="w-full">
            Calculate GST
          </Button>

          {result && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
              <p className="text-md">
                <span className="font-semibold">GST Amount:</span> ₹{result.gstAmount}
              </p>
              <p className="text-md">
                <span className="font-semibold">Total Amount:</span> ₹{result.totalAmount}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GSTCalculator;