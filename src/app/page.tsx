import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ScrollCarousel from "@/components/ScrollCarousel";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ScrollCarousel />
      <TestimonialSection />

      {/* Footer Placeholder */}
      <footer className="bg-zippy-dark text-white py-12 px-6 border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter italic">ZIPPY</span>
            <span className="text-[10px] tracking-[0.2em] opacity-50 uppercase">Equestrian Center</span>
          </div>
          <div className="flex gap-8 text-xs font-bold tracking-widest opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">INSTAGRAM</a>
            <a href="#" className="hover:opacity-100 transition-opacity">FACEBOOK</a>
            <a href="#" className="hover:opacity-100 transition-opacity">TWITTER</a>
          </div>
          <p className="text-[10px] opacity-40 uppercase tracking-widest">
            © 2026 Zippy Equestrian Center. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
