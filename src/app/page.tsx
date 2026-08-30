import HeroSection from "@/components/HeroSection";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <ThemeToggle />
      <HeroSection />
    </main>
  );
}
