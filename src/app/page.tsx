import Header from "@/components/Header";
import HeroAnimated from "@/components/HeroAnimated";
import AgencySection from "@/components/AgencySection";
import ResultsSection from "@/components/ResultsSection";
import ClientLogos from "@/components/ClientLogos";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import HallOfFamers from "@/components/HallOfFamers";
import CommitmentSection from "@/components/CommitmentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white">
      <Header />
      <HeroAnimated />
      <AgencySection />
      <ResultsSection />
      <ClientLogos />
      <ServicesSection />
      <StatsSection />
      <PrinciplesSection />
      <HallOfFamers />
      <CommitmentSection />
      <Footer />
    </main>
  );
}