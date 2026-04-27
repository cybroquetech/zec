import Image from "next/image";

const teamMembers = [
  {
    name: "Narasimha Murthy",
    role: "CHIEF ADVISOR",
    image: "/assets/images/aboutimg1.svg",
    isLarger: false,
  },
  {
    name: "Dilip Kirani",
    role: "FOUNDER & CEO",
    image: "/assets/images/aboutimg1.svg",
    isLarger: true,
  },
  {
    name: "Nouman",
    role: "OPERATIONAL HEAD",
    image: "/assets/images/aboutimg1.svg",
    isLarger: false,
  },
  {
    name: "Barath Manoharan",
    role: "CHIEF OF TRAINING",
    image: "/assets/images/aboutimg1.svg",
    isLarger: false,
  },
];

export default function AboutTeamSection() {
  return (
    <section className="relative w-full bg-[#1C2245] py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-[#FFF8E5] font-sans text-3xl md:text-5xl font-medium tracking-wide text-center mb-16 md:mb-24">
          Meet the people behind
        </h2>

        <div className="relative max-w-[1200px] mx-auto">
          {/* Background Pattern */}
          <div className="absolute top-[10%] lg:top-[5%] left-0 w-full h-[50%] z-0 flex justify-center opacity-60 pointer-events-none">
            <Image
              src="/assets/images/aboutpattern2.svg"
              alt="Background pattern"
              fill
              className="object-contain object-top"
            />
          </div>

          {/* Team Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 items-end">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center transition-transform duration-300 ${
                  member.isLarger ? "lg:transform lg:scale-110 lg:-translate-y-4 lg:z-20" : "z-10"
                }`}
              >
                <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-lg overflow-hidden shadow-2xl mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[#FFF8E5] font-sans text-[18px] md:text-[20px] font-normal tracking-wide mb-1">
                  {member.name}
                </h3>
                <p className="text-[#FFF8E5]/80 font-sans text-[10px] md:text-[12px] uppercase tracking-[0.15em] font-light">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
