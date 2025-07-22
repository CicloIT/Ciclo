import Benefits from "../components/lcgestion/Benefits";
import Contact from "../components/lcgestion/Contact";
import Features from "../components/lcgestion/Features";
import Footer from "../components/lcgestion/Footer";
import HeaderLc from "../components/lcgestion/HeaderLc";
import Hero from "../components/lcgestion/Hero";

export default function LcGestionPage() {
  return (
    <div className="min-h-screen">
        <HeaderLc/>
        <main>
            <Hero/>
            <Features/>
            <Benefits/>
            <Contact/>
        </main>
        <Footer/>
    </div>
  );
}