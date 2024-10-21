import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Organizers from "./components/Organizers";
import './App.css'
import HeroSection from "./components/HeroSection";
import SkillAndSpeedSection from "./components/SkillAndSpeedSection";
import TopPlayers from "./components/TopPlayers";
import PopularNews from "./components/PopularNews";
import Matches from "./components/Matches";
import Navbar from "./components/Navbar";
import ParticipantsSection from "./components/ParticipantsSection";
import About from "./components/About";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillAndSpeedSection />
      <Matches />
      {/* <TopPlayers /> */}
      
      <PopularNews />
      <ParticipantsSection />
      <About />
      <Organizers />
      <Footer />
    </>
  );
}

export default App;
