import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import FeaturedOn from "@/components/home/FeaturedOn";
import TimeCalculation from "@/components/home/TimeCalculation";
import Features from "@/components/home/Features";
import Intro from "@/components/home/Intro";
import VideoDemo from "@/components/home/VideoDemo";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import TestimonialsWall from "@/components/home/TestimonialsWall";
import BottomCTA from "@/components/home/BottomCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      {/* 主要内容区域 */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Hero />
          <Testimonial />
          <FeaturedOn />
          <TimeCalculation />
          <Features />
          <Intro />
          <VideoDemo />
          <Pricing />
          <FAQ />
          <TestimonialsWall />
          <BottomCTA />
        </div>
      </div>
      <Footer />
    </main>
  );
}
