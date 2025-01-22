import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BasicCalculator = () => {
  const [display, setDisplay] = useState("");
  const [equation, setEquation] = useState("");

  const handleNumber = (number: string) => {
    setDisplay(display + number);
  };

  const handleOperator = (operator: string) => {
    setEquation(display + operator);
    setDisplay("");
  };

  const calculateResult = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation("");
    } catch (error) {
      setDisplay("Error");
      setEquation("");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
    setEquation("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Basic Calculator</h1>
          
          <div className="mb-4">
            <Input
              type="text"
              value={equation + display}
              readOnly
              className="w-full text-right text-xl p-2"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+'].map((item, index) => (
              <Button
                key={index}
                onClick={() => {
                  if (item === '=') {
                    calculateResult();
                  } else if (['+', '-', '*', '/'].includes(item.toString())) {
                    handleOperator(item.toString());
                  } else {
                    handleNumber(item.toString());
                  }
                }}
                variant="outline"
                className="p-4 text-lg"
              >
                {item}
              </Button>
            ))}
            <Button
              onClick={clearDisplay}
              variant="destructive"
              className="col-span-4 mt-2"
            >
              Clear
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicCalculator;