import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Showreel from "@/components/layout/Showreel";
import VideoGallery from "@/components/layout/VideoGallery";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Services";
import Process from "@/components/layout/Process";
import AboutPreview from "@/components/layout/About";
import Contact from "@/components/layout/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <Showreel />
        <VideoGallery />
        <Projects />
        <Services />
        <Process />
        <AboutPreview />
      </main>
      <Contact />
    </>
  );
}
