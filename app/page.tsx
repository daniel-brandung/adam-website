import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { VideoSection } from "@/components/VideoSection";
import { StatsSection } from "@/components/StatsSection";
import { CurrentSeason } from "@/components/CurrentSeason";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <VideoSection />
      <StatsSection />
      <CurrentSeason />
      <Footer />
    </main>
  );
}
