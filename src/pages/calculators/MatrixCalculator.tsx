import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { useToast } from "@/hooks/use-toast";
import { CalculatorInstructions } from "@/components/CalculatorInstructions";

type Matrix = number[][];

const MatrixCalculator = () => {
  const [matrixA, setMatrixA] = useState<Matrix>([[0, 0], [0, 0]]);
  const [matrixB, setMatrixB] = useState<Matrix>([[0, 0], [0, 0]]);
  const [result, setResult] = useState<Matrix | null>(null);
  const { toast } = useToast();

  const updateMatrix = (matrix: Matrix, setMatrix: (matrix: Matrix) => void, row: number, col: number, value: string) => {
    const newMatrix = matrix.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? Number(value) || 0 : c))
    );
    setMatrix(newMatrix);
  };

  const addMatrices = () => {
    try {
      const result = matrixA.map((row, i) =>
        row.map((val, j) => val + matrixB[i][j])
      );
      setResult(result);
      toast({
        title: "Calculation Complete",
        description: "Matrices added successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Matrix addition failed",
      });
    }
  };

  const subtractMatrices = () => {
    try {
      const result = matrixA.map((row, i) =>
        row.map((val, j) => val - matrixB[i][j])
      );
      setResult(result);
      toast({
        title: "Calculation Complete",
        description: "Matrices subtracted successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Matrix subtraction failed",
      });
    }
  };

  const multiplyMatrices = () => {
    try {
      const result: Matrix = [
        [0, 0],
        [0, 0]
      ];
      
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          result[i][j] = matrixA[i][0] * matrixB[0][j] + matrixA[i][1] * matrixB[1][j];
        }
      }
      
      setResult(result);
      toast({
        title: "Calculation Complete",
        description: "Matrices multiplied successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Matrix multiplication failed",
      });
    }
  };

  const determinant = (matrix: Matrix): number => {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  };

  const calculateDeterminant = (matrix: Matrix) => {
    try {
      const det = determinant(matrix);
      toast({
        title: "Determinant Calculated",
        description: `Determinant = ${det}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to calculate determinant",
      });
    }
  };

  const renderMatrix = (matrix: Matrix, setMatrix: (matrix: Matrix) => void) => (
    <div className="grid grid-cols-2 gap-2">
      {matrix.map((row, i) =>
        row.map((val, j) => (
          <Input
            key={`${i}-${j}`}
            type="number"
            value={val}
            onChange={(e) => updateMatrix(matrix, setMatrix, i, j, e.target.value)}
            className="w-20 text-center"
          />
        ))
      )}
    </div>
  );

  const instructions = [
    "Enter values in both matrices",
    "Choose an operation (add, subtract, multiply)",
    "View the result below",
  ];

  const tips = [
    "Use integers for clearer results",
    "Matrix multiplication is not commutative",
    "Check matrix dimensions before multiplying",
  ];

  const examples = [
    "Addition: [1 2] + [5 6] = [6 8]",
    "Multiplication: [1 2] × [5 6] = [17 20]",
    "Determinant: |1 2| = 1×4 - 2×3 = -2",
  ];

  const similarCalculators = [
    {
      title: "Scientific Calculator",
      description: "Advanced mathematical operations",
      path: "/calculator/scientific",
    },
    {
      title: "Statistics Calculator",
      description: "Statistical calculations and analysis",
      path: "/calculator/statistics",
    },
    {
      title: "Equation Solver",
      description: "Solve complex equations",
      path: "/calculator/equation",
    },
  ];

  return (
    <CalculatorLayout title="Matrix Calculator">
      <div className="space-y-8 animate-fade-in">
        <div className="bg-white/50 backdrop-blur p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Matrix A</label>
              {renderMatrix(matrixA, setMatrixA)}
              <Button 
                onClick={() => calculateDeterminant(matrixA)}
                className="mt-2"
                variant="outline"
              >
                Det(A)
              </Button>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Matrix B</label>
              {renderMatrix(matrixB, setMatrixB)}
              <Button 
                onClick={() => calculateDeterminant(matrixB)}
                className="mt-2"
                variant="outline"
              >
                Det(B)
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-6">
            <Button onClick={addMatrices}>Add</Button>
            <Button onClick={subtractMatrices}>Subtract</Button>
            <Button onClick={multiplyMatrices}>Multiply</Button>
          </div>

          {result && (
            <div className="mt-4 p-4 bg-white/80 rounded-lg">
              <div className="text-lg font-semibold mb-2">Result:</div>
              <div className="grid grid-cols-2 gap-2">
                {result.map((row, i) =>
                  row.map((val, j) => (
                    <div key={`result-${i}-${j}`} className="w-20 h-10 flex items-center justify-center border rounded bg-white">
                      {val}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        <CalculatorInstructions
          title="Matrix Calculator"
          instructions={instructions}
          tips={tips}
          examples={examples}
          similarCalculators={similarCalculators}
        />
      </div>
    </CalculatorLayout>
  );
};

export default MatrixCalculator;