import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutStorySection from "@/components/AboutStorySection";
import AboutTeamSection from "@/components/AboutTeamSection";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-zippy-dark-blue">
      <Header />
      <AboutHero />
      <AboutStorySection />
      <AboutTeamSection />
      <AboutSection />
    </main>
  );
}
