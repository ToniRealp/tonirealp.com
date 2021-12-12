import type { NextPage } from "next";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";

const HomePage: NextPage = () => {
    return (
        <div className="bg-gray-50 h-full">
            <Navbar />
            <About />
            <Projects />
            <Footer />
        </div>
    );
};

export default HomePage;
