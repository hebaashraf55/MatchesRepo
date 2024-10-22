import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Organizers from "./components/Organizers";
import './App.css'
import HeroSection from "./components/HeroSection";
import SkillAndSpeedSection from "./components/SkillAndSpeedSection";

import PopularNews from "./components/PopularNews";
import Matches from "./components/Matches";
import Navbar from "./components/Navbar";
import ParticipantsSection from "./components/ParticipantsSection";
import About from "./components/About";
import Gallery from "./components/Gallery";


function App() {
  return (
    <main className="main">
      <Navbar />
      <HeroSection />
      {/* <SkillAndSpeedSection /> */}
      <Matches />
      {/* <TopPlayers /> */}
      
      <PopularNews />
      {/* <ParticipantsSection /> */}
      <About />
      <Gallery />
      <Organizers />
      <Footer />
    </main>
  );
}

export default App;
