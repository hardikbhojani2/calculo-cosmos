import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { CalculatorInstructions } from "@/components/CalculatorInstructions";
import { SimilarCalculators } from "@/components/SimilarCalculators";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalAmount: number;
  } | null>(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    
    if (!isNaN(P) && !isNaN(r) && !isNaN(n)) {
      const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      const totalAmount = emi * n;
      const totalInterest = totalAmount - P;
      
      setResult({
        emi: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalAmount: Math.round(totalAmount)
      });
    }
  };

  const similarCalculators = [
    {
      title: "SIP Calculator",
      description: "Calculate your Systematic Investment Plan returns",
      path: "/calculator/sip"
    },
    {
      title: "Loan Calculator",
      description: "Calculate loan payments and interest",
      path: "/calculator/loan"
    },
    {
      title: "Mortgage Calculator",
      description: "Calculate mortgage payments and amortization",
      path: "/calculator/mortgage"
    }
  ];

  const instructions = {
    title: "How to Use EMI Calculator",
    description: "Calculate your Equated Monthly Installments in simple steps",
    steps: [
      {
        title: "Enter Loan Amount",
        description: "Input the principal loan amount you wish to borrow"
      },
      {
        title: "Set Interest Rate",
        description: "Enter the annual interest rate offered by your lender"
      },
      {
        title: "Choose Tenure",
        description: "Select the loan tenure in years to calculate EMI"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <CalculatorLayout title="EMI Calculator">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Loan Amount (₹)</label>
                <Input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="Enter loan amount"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Interest Rate (% per annum)</label>
                <Input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="Enter interest rate"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Loan Tenure (Years)</label>
                <Input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  placeholder="Enter loan tenure"
                />
              </div>

              <Button 
                onClick={calculateEMI}
                className="w-full"
              >
                Calculate EMI
              </Button>

              {result && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
                  <p className="text-lg">
                    Monthly EMI: <span className="font-semibold">₹{result.emi.toLocaleString()}</span>
                  </p>
                  <p className="text-gray-600">
                    Total Interest: ₹{result.totalInterest.toLocaleString()}
                  </p>
                  <p className="text-gray-600">
                    Total Amount: ₹{result.totalAmount.toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </CalculatorLayout>

          <SimilarCalculators calculators={similarCalculators} />
          
          <div className="mt-16">
            <CalculatorInstructions {...instructions} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EMICalculator;