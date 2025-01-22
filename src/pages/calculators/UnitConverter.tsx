import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const UnitConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("km");
  const [toUnit, setToUnit] = useState("m");
  const [result, setResult] = useState<number | null>(null);

  const conversions: Record<string, number> = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mile: 1609.34,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254
  };

  const convertUnit = () => {
    const inputValue = parseFloat(value);
    
    if (!isNaN(inputValue)) {
      // Convert to meters first
      const meters = inputValue * conversions[fromUnit];
      // Then convert to target unit
      const result = meters / conversions[toUnit];
      setResult(parseFloat(result.toFixed(6)));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Unit Converter</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Value</label>
              <Input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter value to convert"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">From</label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="km">Kilometer</option>
                  <option value="m">Meter</option>
                  <option value="cm">Centimeter</option>
                  <option value="mm">Millimeter</option>
                  <option value="mile">Mile</option>
                  <option value="yard">Yard</option>
                  <option value="foot">Foot</option>
                  <option value="inch">Inch</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">To</label>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="km">Kilometer</option>
                  <option value="m">Meter</option>
                  <option value="cm">Centimeter</option>
                  <option value="mm">Millimeter</option>
                  <option value="mile">Mile</option>
                  <option value="yard">Yard</option>
                  <option value="foot">Foot</option>
                  <option value="inch">Inch</option>
                </select>
              </div>
            </div>

            <Button 
              onClick={convertUnit}
              className="w-full"
            >
              Convert
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-lg">
                  {value} {fromUnit} = <span className="font-semibold">{result} {toUnit}</span>
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

export default UnitConverter;