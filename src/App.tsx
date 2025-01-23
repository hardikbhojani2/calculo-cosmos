import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BasicCalculator from "./pages/calculators/BasicCalculator";
import ScientificCalculator from "./pages/calculators/ScientificCalculator";
import FractionCalculator from "./pages/calculators/FractionCalculator";
import MatrixCalculator from "./pages/calculators/MatrixCalculator";
import StatisticsCalculator from "./pages/calculators/StatisticsCalculator";
import EquationSolver from "./pages/calculators/EquationSolver";
import BMICalculator from "./pages/calculators/BMICalculator";
import AgeCalculator from "./pages/calculators/AgeCalculator";
import PercentageCalculator from "./pages/calculators/PercentageCalculator";
import SIPCalculator from "./pages/calculators/SIPCalculator";
import EMICalculator from "./pages/calculators/EMICalculator";
import GSTCalculator from "./pages/calculators/GSTCalculator";
import UnitConverter from "./pages/calculators/UnitConverter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculator/basic" element={<BasicCalculator />} />
          <Route path="/calculator/scientific" element={<ScientificCalculator />} />
          <Route path="/calculator/fraction" element={<FractionCalculator />} />
          <Route path="/calculator/matrix" element={<MatrixCalculator />} />
          <Route path="/calculator/statistics" element={<StatisticsCalculator />} />
          <Route path="/calculator/equation" element={<EquationSolver />} />
          <Route path="/calculator/bmi" element={<BMICalculator />} />
          <Route path="/calculator/age" element={<AgeCalculator />} />
          <Route path="/calculator/percentage" element={<PercentageCalculator />} />
          <Route path="/calculator/sip" element={<SIPCalculator />} />
          <Route path="/calculator/emi" element={<EMICalculator />} />
          <Route path="/calculator/gst" element={<GSTCalculator />} />
          <Route path="/calculator/unit-converter" element={<UnitConverter />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;