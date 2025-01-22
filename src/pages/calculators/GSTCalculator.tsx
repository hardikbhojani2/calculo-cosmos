import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const GSTCalculator = () => {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [result, setResult] = useState<{
    gstAmount: number;
    totalAmount: number;
  } | null>(null);

  const calculateGST = () => {
    const baseAmount = parseFloat(amount);
    const rate = parseFloat(gstRate);
    
    if (!isNaN(baseAmount) && !isNaN(rate)) {
      const gstAmount = (baseAmount * rate) / 100;
      const totalAmount = baseAmount + gstAmount;
      
      setResult({
        gstAmount: parseFloat(gstAmount.toFixed(2)),
        totalAmount: parseFloat(totalAmount.toFixed(2))
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-center mb-6">GST Calculator</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Amount (₹)</label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount before GST"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">GST Rate (%)</label>
              <Input
                type="number"
                value={gstRate}
                onChange={(e) => setGstRate(e.target.value)}
                placeholder="Enter GST rate"
              />
            </div>

            <Button 
              onClick={calculateGST}
              className="w-full"
            >
              Calculate GST
            </Button>

            {result && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
                <p className="text-gray-600">
                  Base Amount: ₹{parseFloat(amount).toLocaleString()}
                </p>
                <p className="text-gray-600">
                  GST Amount: ₹{result.gstAmount.toLocaleString()}
                </p>
                <p className="text-lg font-semibold">
                  Total Amount: ₹{result.totalAmount.toLocaleString()}
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

export default GSTCalculator;