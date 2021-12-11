import type { NextPage } from "next";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";

const HomePage: NextPage = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Projects />
        </div>
    );
};

export default HomePage;
