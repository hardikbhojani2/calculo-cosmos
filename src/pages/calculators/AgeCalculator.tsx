import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const AgeCalculator = () => {
  const { toast } = useToast();
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const calculateAge = () => {
    const birth = new Date(birthDate);
    const today = new Date();

    if (isNaN(birth.getTime())) {
      toast({
        title: "Invalid Date",
        description: "Please enter a valid birth date",
        variant: "destructive",
      });
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Age Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="birthDate">Birth Date</Label>
            <Input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>

          <Button onClick={calculateAge} className="w-full">
            Calculate Age
          </Button>

          {age !== null && (
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Your Age is</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">{age.years}</p>
                  <p className="text-sm text-gray-600">Years</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{age.months}</p>
                  <p className="text-sm text-gray-600">Months</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{age.days}</p>
                  <p className="text-sm text-gray-600">Days</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeCalculator;