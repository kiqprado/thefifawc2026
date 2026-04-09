import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Times from "./pages/Times.tsx";
import Grupos from "./pages/Grupos.tsx";
import Partidas from "./pages/Partidas.tsx";
import HistoriaCopas from "./pages/HistoriaCopas.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/times" element={<Times />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/partidas" element={<Partidas />} />
          <Route path="/historia" element={<HistoriaCopas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
