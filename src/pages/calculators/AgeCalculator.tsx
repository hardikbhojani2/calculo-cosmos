import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CalculatorLayout } from "@/components/ui/calculator-layout";
import { useToast } from "@/components/ui/use-toast";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);
  const { toast } = useToast();

  const calculateAge = () => {
    try {
      const birth = new Date(birthDate);
      const today = new Date();
      
      let years = today.getFullYear() - birth.getFullYear();
      let months = today.getMonth() - birth.getMonth();
      let days = today.getDate() - birth.getDate();

      if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
      }

      if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birth.getDate());
        days = Math.floor((today.getTime() - lastMonth.getTime()) / (1000 * 60 * 60 * 24));
      }

      setAge({ years, months, days });
      toast({
        title: "Age Calculated",
        description: `You are ${years} years, ${months} months, and ${days} days old`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid date",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CalculatorLayout title="Age Calculator">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Birth Date</label>
            <Input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full"
            />
          </div>

          <Button 
            onClick={calculateAge}
            className="w-full"
          >
            Calculate Age
          </Button>

          {age && (
            <div className="mt-4 p-4 bg-secondary-100 rounded-lg">
              <p className="text-lg font-semibold">Your age is:</p>
              <p className="text-secondary-600">
                {age.years} years, {age.months} months, and {age.days} days
              </p>
            </div>
          )}
        </div>
      </CalculatorLayout>
      <Footer />
    </div>
  );
};

export default AgeCalculator;