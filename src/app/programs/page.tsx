import Header from "@/components/Header";
import ProgramsHero from "@/components/ProgramsHero";
import ProgramsJourney from "@/components/ProgramsJourney";
import ProgramsCardsSection from "@/components/ProgramsCardsSection";
import Footer from "@/components/Footer";

export default function ProgramsPage() {
  return (
    <main className="relative min-h-screen bg-zippy-dark-blue">
      <Header />
      <ProgramsHero />
      <ProgramsJourney />
      <ProgramsCardsSection />
      <Footer />
    </main>
  );
}
