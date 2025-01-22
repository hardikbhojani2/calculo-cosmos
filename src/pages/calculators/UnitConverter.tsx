import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const UnitConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("km");
  const [toUnit, setToUnit] = useState("m");
  const [result, setResult] = useState<number | null>(null);

  const conversions: Record<string, Record<string, number>> = {
    km: { m: 1000, km: 1, cm: 100000, mm: 1000000 },
    m: { m: 1, km: 0.001, cm: 100, mm: 1000 },
    cm: { m: 0.01, km: 0.00001, cm: 1, mm: 10 },
    mm: { m: 0.001, km: 0.000001, cm: 0.1, mm: 1 },
  };

  const convert = () => {
    if (value && fromUnit && toUnit) {
      const inputValue = parseFloat(value);
      const conversionFactor = conversions[fromUnit][toUnit];
      const convertedValue = inputValue * conversionFactor;
      setResult(parseFloat(convertedValue.toFixed(6)));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Unit Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Value</label>
            <Input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value"
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">From</label>
              <Select value={fromUnit} onValueChange={setFromUnit}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="km">Kilometer (km)</SelectItem>
                  <SelectItem value="m">Meter (m)</SelectItem>
                  <SelectItem value="cm">Centimeter (cm)</SelectItem>
                  <SelectItem value="mm">Millimeter (mm)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">To</label>
              <Select value={toUnit} onValueChange={setToUnit}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="km">Kilometer (km)</SelectItem>
                  <SelectItem value="m">Meter (m)</SelectItem>
                  <SelectItem value="cm">Centimeter (cm)</SelectItem>
                  <SelectItem value="mm">Millimeter (mm)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={convert} className="w-full">
            Convert
          </Button>

          {result !== null && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-semibold">
                {value} {fromUnit} = {result} {toUnit}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UnitConverter;