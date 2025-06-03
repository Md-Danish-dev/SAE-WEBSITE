import HeroSection from "./components/hero";
import AboutUs from "./components/about";
import EventsComponent from "./components/events";
import Footer from "../footer/footer";
function Home() {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <EventsComponent />
            <Footer />
        </>
    );
}

export default Home;