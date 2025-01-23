import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { useToast } from "@/hooks/use-toast";
import { CalculatorInstructions } from "@/components/CalculatorInstructions";

const ScientificCalculator = () => {
  const [display, setDisplay] = useState("");
  const [memory, setMemory] = useState<number>(0);
  const { toast } = useToast();

  const handleNumber = (number: string) => {
    setDisplay(prev => prev + number);
  };

  const handleOperator = (operator: string) => {
    setDisplay(prev => prev + operator);
  };

  const handleFunction = (func: string) => {
    try {
      const value = parseFloat(display);
      let result: number;

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
        case 'square':
          result = value * value;
          break;
        case 'cube':
          result = value * value * value;
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
      // Replace 'π' with Math.PI and 'e' with Math.E
      const expression = display
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E');
      const result = eval(expression);
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

  const clearMemory = () => {
    setMemory(0);
    toast({
      title: "Memory Cleared",
      description: "Memory has been reset to 0",
    });
  };

  const recallMemory = () => {
    setDisplay(prev => prev + memory.toString());
  };

  const addToMemory = () => {
    try {
      const value = eval(display);
      setMemory(prev => prev + value);
      toast({
        title: "Memory Updated",
        description: "Value added to memory",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid value for memory operation",
      });
    }
  };

  const instructions = [
    "Enter numbers using the keypad",
    "Use scientific functions for advanced calculations",
    "Memory functions (M+, MR, MC) for storing values",
  ];

  const tips = [
    "Use π for pi (3.14159...)",
    "Use e for Euler's number",
    "Angles are in degrees for trig functions",
  ];

  const examples = [
    "sin(30) = 0.5",
    "log(100) = 2",
    "√25 = 5",
  ];

  const similarCalculators = [
    {
      title: "Basic Calculator",
      description: "Simple arithmetic calculations",
      path: "/calculator/basic",
    },
    {
      title: "Matrix Calculator",
      description: "Matrix operations and calculations",
      path: "/calculator/matrix",
    },
    {
      title: "Equation Solver",
      description: "Solve complex equations",
      path: "/calculator/equation",
    },
  ];

  return (
    <CalculatorLayout title="Scientific Calculator">
      <div className="space-y-8 animate-fade-in">
        <div className="bg-white/50 backdrop-blur p-6 rounded-lg shadow-lg">
          <Input
            type="text"
            value={display}
            readOnly
            className="text-right text-xl p-4 font-mono mb-4 bg-white"
          />

          <div className="grid grid-cols-5 gap-2">
            {/* Memory Functions */}
            <Button variant="outline" onClick={clearMemory} className="col-span-1">MC</Button>
            <Button variant="outline" onClick={recallMemory} className="col-span-1">MR</Button>
            <Button variant="outline" onClick={addToMemory} className="col-span-1">M+</Button>
            <Button variant="destructive" onClick={clearDisplay} className="col-span-2">Clear</Button>

            {/* Scientific Functions */}
            <Button variant="outline" onClick={() => handleFunction('sin')}>sin</Button>
            <Button variant="outline" onClick={() => handleFunction('cos')}>cos</Button>
            <Button variant="outline" onClick={() => handleFunction('tan')}>tan</Button>
            <Button variant="outline" onClick={() => handleFunction('log')}>log</Button>
            <Button variant="outline" onClick={() => handleFunction('ln')}>ln</Button>

            <Button variant="outline" onClick={() => handleFunction('sqrt')}>√</Button>
            <Button variant="outline" onClick={() => handleFunction('square')}>x²</Button>
            <Button variant="outline" onClick={() => handleFunction('cube')}>x³</Button>
            <Button variant="outline" onClick={() => handleOperator('Math.PI')}>π</Button>
            <Button variant="outline" onClick={() => handleOperator('Math.E')}>e</Button>

            {/* Numbers and Basic Operators */}
            <Button variant="outline" onClick={() => handleNumber('7')}>7</Button>
            <Button variant="outline" onClick={() => handleNumber('8')}>8</Button>
            <Button variant="outline" onClick={() => handleNumber('9')}>9</Button>
            <Button variant="outline" onClick={() => handleOperator('/')}>/</Button>
            <Button variant="outline" onClick={() => handleOperator('^')}>^</Button>

            <Button variant="outline" onClick={() => handleNumber('4')}>4</Button>
            <Button variant="outline" onClick={() => handleNumber('5')}>5</Button>
            <Button variant="outline" onClick={() => handleNumber('6')}>6</Button>
            <Button variant="outline" onClick={() => handleOperator('*')}>×</Button>
            <Button variant="outline" onClick={() => handleOperator('(')}>(</Button>

            <Button variant="outline" onClick={() => handleNumber('1')}>1</Button>
            <Button variant="outline" onClick={() => handleNumber('2')}>2</Button>
            <Button variant="outline" onClick={() => handleNumber('3')}>3</Button>
            <Button variant="outline" onClick={() => handleOperator('-')}>-</Button>
            <Button variant="outline" onClick={() => handleOperator(')')}>)</Button>

            <Button variant="outline" onClick={() => handleNumber('0')}>0</Button>
            <Button variant="outline" onClick={() => handleNumber('.')}>.</Button>
            <Button variant="outline" onClick={() => handleOperator('%')}>%</Button>
            <Button variant="outline" onClick={() => handleOperator('+')}>+</Button>
            <Button onClick={calculateResult}>=</Button>
          </div>
        </div>

        <CalculatorInstructions
          title="Scientific Calculator"
          instructions={instructions}
          tips={tips}
          examples={examples}
          similarCalculators={similarCalculators}
        />
      </div>
    </CalculatorLayout>
  );
};

export default ScientificCalculator;