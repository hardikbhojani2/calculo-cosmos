import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInYears, differenceInMonths, differenceInDays, parse } from "date-fns";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = () => {
    if (birthDate) {
      const birthDateObj = new Date(birthDate);
      const today = new Date();

      const years = differenceInYears(today, birthDateObj);
      const months = differenceInMonths(today, birthDateObj) % 12;
      const days = differenceInDays(today, birthDateObj) % 30;

      setAge({ years, months, days });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Age Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Birth Date</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <Button onClick={calculateAge} className="w-full">
            Calculate Age
          </Button>

          {age && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-semibold">Your age is:</p>
              <p className="text-md">
                {age.years} years, {age.months} months, and {age.days} days
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeCalculator;