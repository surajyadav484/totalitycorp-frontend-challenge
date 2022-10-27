import BannerComponent from "./components/BannerComponent";
import ContactSection from "./components/contact-section/ContactSection";
import FeaturedGamesComponent from "./components/featured-games/FeaturedGamesComponent";
import Header from "./components/header/Header";
import MainComponent from "./components/main/MainComponent";
import UtilityBar from "./components/UtilityBar";

function App() {
  return (
    <div className="App">
      {/* <UtilityBar /> */}
      <Header />
      <MainComponent />
      <FeaturedGamesComponent />
      <BannerComponent />
      <ContactSection />
    </div>
  );
}

export default App;
