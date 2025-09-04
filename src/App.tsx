import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/Hero";
import { CorePrinciples } from "@/components/CorePrinciples";
import { HomeHighlights } from "@/components/HomeHighlights";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeContact } from "@/components/HomeContact";
import { HomeNewsletter } from "@/components/HomeNewsletter";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Navigation />
      <main>
        <Hero />
        <CorePrinciples />
        <HomeHighlights />
        <HomeAbout />
        <HomeContact />
        <HomeNewsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
