import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import Edition2026Section from "@/components/Edition2026Section";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HistorySection />
      <Edition2026Section />
      <footer className="py-8 text-center border-t border-border">
        <p className="font-body text-sm text-muted-foreground">
          Copa do Mundo FIFA 2026™ — EUA, México & Canadá
        </p>
      </footer>
    </main>
  );
};

export default Index;
