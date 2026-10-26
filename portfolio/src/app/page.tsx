import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PrintResume from "@/components/PrintResume";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <ScrollProgress />

      {/* Floating Colorful Ambient Mesh Glow in background */}
      <AmbientBackground />

      {/* Screen Portfolio Presentation */}
      <div className="print:hidden flex flex-col min-h-screen relative z-10">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Clean Physical / PDF Resume for Window Print */}
      <PrintResume />
    </>
  );
}
