import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BasicCalculator = () => {
  const { toast } = useToast();
  const [display, setDisplay] = useState("");
  const [equation, setEquation] = useState("");

  const handleNumber = (number: string) => {
    setDisplay(display + number);
  };

  const handleOperator = (operator: string) => {
    setDisplay(display + " " + operator + " ");
  };

  const handleClear = () => {
    setDisplay("");
    setEquation("");
  };

  const handleCalculate = () => {
    try {
      // Replace × with * and ÷ with / for evaluation
      const sanitizedEquation = display.replace(/×/g, '*').replace(/÷/g, '/');
      const result = eval(sanitizedEquation);
      setEquation(display + " = ");
      setDisplay(result.toString());
    } catch (error) {
      toast({
        title: "Invalid Expression",
        description: "Please enter a valid mathematical expression",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Basic Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="text-gray-600 text-sm h-6">{equation}</div>
              <div className="text-2xl font-bold">{display}</div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              <Button variant="outline" onClick={() => handleClear()}>C</Button>
              <Button variant="outline" onClick={() => handleOperator('(')}>(</Button>
              <Button variant="outline" onClick={() => handleOperator(')')}>)</Button>
              <Button variant="outline" onClick={() => handleOperator('÷')}>÷</Button>
              
              <Button variant="outline" onClick={() => handleNumber('7')}>7</Button>
              <Button variant="outline" onClick={() => handleNumber('8')}>8</Button>
              <Button variant="outline" onClick={() => handleNumber('9')}>9</Button>
              <Button variant="outline" onClick={() => handleOperator('×')}>×</Button>
              
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
              <Button className="col-span-2" onClick={() => handleCalculate()}>=</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BasicCalculator;