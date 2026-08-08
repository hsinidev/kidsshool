import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import FacilitiesGrid from "@/components/FacilitiesGrid";
import AnimatedCounters from "@/components/AnimatedCounters";
import ProgramsSection from "@/components/ProgramsSection";
import TeachersSection from "@/components/TeachersSection";
import ActivitiesGallery from "@/components/ActivitiesGallery";
import NewsSection from "@/components/NewsSection";
import VisualTeaching from "@/components/VisualTeaching";
import AgeGroups from "@/components/AgeGroups";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

import { BubbleTrailCursor, MagicDoodlePad } from "@/components/MagicSpells";

export default function Home() {
  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <FacilitiesGrid />
        <AnimatedCounters />
        <ProgramsSection />
        <TeachersSection />
        <ActivitiesGallery />
        <NewsSection />
        <VisualTeaching />
        <AgeGroups />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
