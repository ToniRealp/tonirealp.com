import type { NextPage } from "next";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";
import ContactSection from "../components/contact";

const HomePage: NextPage = () => {
    return (
        <div className="bg-gray-50 h-full">
            <Navbar />
            <About />
            <Projects />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default HomePage;
