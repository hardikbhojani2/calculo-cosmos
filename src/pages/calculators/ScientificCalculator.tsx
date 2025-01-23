import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { useToast } from "@/hooks/use-toast";

const ScientificCalculator = () => {
  const [display, setDisplay] = useState("");
  const { toast } = useToast();

  const handleNumber = (value: string) => {
    setDisplay(prev => prev + value);
  };

  const handleOperator = (operator: string) => {
    setDisplay(prev => prev + operator);
  };

  const handleFunction = (func: string) => {
    try {
      let result;
      const value = parseFloat(display);
      
      switch(func) {
        case 'sin':
          result = Math.sin(value * Math.PI / 180);
          break;
        case 'cos':
          result = Math.cos(value * Math.PI / 180);
          break;
        case 'tan':
          result = Math.tan(value * Math.PI / 180);
          break;
        case 'log':
          result = Math.log10(value);
          break;
        case 'ln':
          result = Math.log(value);
          break;
        case 'sqrt':
          result = Math.sqrt(value);
          break;
        default:
          result = value;
      }
      
      setDisplay(result.toString());
      toast({
        title: "Calculation Complete",
        description: `${func}(${value}) = ${result}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid calculation",
      });
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
      toast({
        title: "Calculation Complete",
        description: `Result: ${result}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid calculation",
      });
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  return (
    <CalculatorLayout title="Scientific Calculator">
      <div className="space-y-4">
        <Input
          type="text"
          value={display}
          readOnly
          className="text-right text-xl p-2 font-mono"
        />

        <div className="grid grid-cols-4 gap-2">
          {/* Scientific Functions */}
          <Button variant="outline" onClick={() => handleFunction('sin')}>sin</Button>
          <Button variant="outline" onClick={() => handleFunction('cos')}>cos</Button>
          <Button variant="outline" onClick={() => handleFunction('tan')}>tan</Button>
          <Button variant="outline" onClick={() => handleFunction('log')}>log</Button>
          
          <Button variant="outline" onClick={() => handleFunction('ln')}>ln</Button>
          <Button variant="outline" onClick={() => handleFunction('sqrt')}>√</Button>
          <Button variant="outline" onClick={() => handleOperator('^')}>^</Button>
          <Button variant="outline" onClick={() => handleOperator('(')}>(</Button>
          
          <Button variant="outline" onClick={() => handleOperator(')')}>)</Button>
          <Button variant="outline" onClick={() => handleOperator('Math.PI')}>π</Button>
          <Button variant="outline" onClick={() => handleOperator('Math.E')}>e</Button>
          <Button variant="outline" onClick={() => handleOperator('/')}>÷</Button>

          {/* Numbers and Basic Operators */}
          <Button variant="outline" onClick={() => handleNumber('7')}>7</Button>
          <Button variant="outline" onClick={() => handleNumber('8')}>8</Button>
          <Button variant="outline" onClick={() => handleNumber('9')}>9</Button>
          <Button variant="outline" onClick={() => handleOperator('*')}>×</Button>

          <Button variant="outline" onClick={() => handleNumber('4')}>4</Button>
          <Button variant="outline" onClick={() => handleNumber('5')}>5</Button>
          <Button variant="outline" onClick={() => handleNumber('6')}>6</Button>
          <Button variant="outline" onClick={() => handleOperator('-')}>-</Button>

          <Button variant="outline" onClick={() => handleNumber('1')}>1</Button>
          <Button variant="outline" onClick={() => handleNumber('2')}>2</Button>
          <Button variant="outline" onClick={() => handleNumber('3')}>3</Button>
          <Button variant="outline" onClick={() => handleOperator('+')}>+</Button>

          <Button variant="outline" onClick={() => handleNumber('0')}>0</Button>
          <Button variant="outline" onClick={() => handleNumber('.')}>.</Button>
          <Button onClick={calculateResult} className="col-span-2">=</Button>

          <Button
            variant="destructive"
            onClick={clearDisplay}
            className="col-span-4 mt-2"
          >
            Clear
          </Button>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default ScientificCalculator;