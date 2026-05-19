import NavBar from "../components/NavBar.jsx";
import AboutSection from "../components/AboutSection.jsx";
import CrewSection from "../components/CrewSection.jsx";
import CastSection from "../components/CastSection.jsx";
import AwardSection from "../components/AwardSection.jsx";
import CreditSection from "../components/CreditSection.jsx";
import GallerySection from "../components/GallerySection.jsx";
import FooterSection from "../components/FooterSection.jsx";

const Home = () => {
    return (
        <div className="layout">
            <NavBar />
            <main>
                <AboutSection />
                <CrewSection />
                <CastSection />
                <AwardSection />
                <CreditSection />
                <GallerySection />
            </main>
            <FooterSection />
        </div>
    )
}

export default Home;