import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { useToast } from "@/hooks/use-toast";

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

  const renderMatrix = (matrix: Matrix, setMatrix: (matrix: Matrix) => void) => (
    <div className="grid grid-cols-2 gap-2">
      {matrix.map((row, i) =>
        row.map((val, j) => (
          <Input
            key={`${i}-${j}`}
            type="number"
            value={val}
            onChange={(e) => updateMatrix(matrix, setMatrix, i, j, e.target.value)}
            className="w-20"
          />
        ))
      )}
    </div>
  );

  return (
    <CalculatorLayout title="Matrix Calculator">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium mb-2">Matrix A</label>
            {renderMatrix(matrixA, setMatrixA)}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Matrix B</label>
            {renderMatrix(matrixB, setMatrixB)}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button onClick={addMatrices}>Add</Button>
          <Button onClick={subtractMatrices}>Subtract</Button>
          <Button onClick={multiplyMatrices}>Multiply</Button>
        </div>

        {result && (
          <div className="mt-4 p-4 bg-secondary/10 rounded-lg">
            <div className="text-lg font-semibold mb-2">Result:</div>
            <div className="grid grid-cols-2 gap-2">
              {result.map((row, i) =>
                row.map((val, j) => (
                  <div key={`result-${i}-${j}`} className="w-20 h-10 flex items-center justify-center border rounded">
                    {val}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default MatrixCalculator;