import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

type ConversionCategory = {
  name: string;
  units: string[];
  convert: (value: number, from: string, to: string) => number;
};

const categories: ConversionCategory[] = [
  {
    name: "Length",
    units: ["Meters", "Kilometers", "Miles", "Feet", "Inches"],
    convert: (value, from, to) => {
      // Convert to meters first
      const inMeters = {
        Meters: value,
        Kilometers: value * 1000,
        Miles: value * 1609.34,
        Feet: value * 0.3048,
        Inches: value * 0.0254,
      }[from];

      // Convert from meters to target unit
      return inMeters / {
        Meters: 1,
        Kilometers: 1000,
        Miles: 1609.34,
        Feet: 0.3048,
        Inches: 0.0254,
      }[to];
    },
  },
  {
    name: "Weight",
    units: ["Kilograms", "Grams", "Pounds", "Ounces"],
    convert: (value, from, to) => {
      // Convert to grams first
      const inGrams = {
        Kilograms: value * 1000,
        Grams: value,
        Pounds: value * 453.592,
        Ounces: value * 28.3495,
      }[from];

      // Convert from grams to target unit
      return inGrams / {
        Kilograms: 1000,
        Grams: 1,
        Pounds: 453.592,
        Ounces: 28.3495,
      }[to];
    },
  },
];

const UnitConverter = () => {
  const { toast } = useToast();
  const [category, setCategory] = useState(categories[0]);
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState(category.units[0]);
  const [toUnit, setToUnit] = useState(category.units[1]);
  const [result, setResult] = useState<number | null>(null);

  const handleCategoryChange = (categoryName: string) => {
    const newCategory = categories.find((c) => c.name === categoryName) || categories[0];
    setCategory(newCategory);
    setFromUnit(newCategory.units[0]);
    setToUnit(newCategory.units[1]);
    setResult(null);
  };

  const convert = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid number",
        variant: "destructive",
      });
      return;
    }

    const converted = category.convert(numValue, fromUnit, toUnit);
    setResult(converted);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Unit Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Category</Label>
            <Select
              value={category.name}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger>
                <SelectValue>{category.name}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.name} value={cat.name}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="value">Value</Label>
            <Input
              id="value"
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value to convert"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>From</Label>
              <Select
                value={fromUnit}
                onValueChange={setFromUnit}
              >
                <SelectTrigger>
                  <SelectValue>{fromUnit}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {category.units.map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>To</Label>
              <Select
                value={toUnit}
                onValueChange={setToUnit}
              >
                <SelectTrigger>
                  <SelectValue>{toUnit}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {category.units.map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={convert} className="w-full">
            Convert
          </Button>

          {result !== null && (
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Result</h3>
              <p className="text-2xl font-bold text-primary">
                {result.toFixed(4)} {toUnit}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {value} {fromUnit} = {result.toFixed(4)} {toUnit}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UnitConverter;