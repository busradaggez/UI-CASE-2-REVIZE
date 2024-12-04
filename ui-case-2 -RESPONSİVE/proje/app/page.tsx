import AboutPage from "@/pages/About";
import './globals.css';
import AppFeaturesPage from "@/pages/AppFeatures";
import SwiperPage from "@/pages/Swiper";
import TeamPage from "@/pages/Team";
import FooterPage from "@/pages/Footer";
import HeroPage from "@/pages/Hero";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroPage />
      <AboutPage />
      <AppFeaturesPage />
      <SwiperPage />
      <TeamPage />
      <FooterPage />
    </div>


  );
};


