import type { GetStaticProps, NextPage } from "next";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";
import ContactSection from "../components/contact";
import { Project } from "../types/project";
import getProjects from "../data/projects";

interface HomePageProps {
    projects: Array<Project>;
}

const HomePage: NextPage<HomePageProps> = ({ projects }: HomePageProps) => {
    return (
        <div className="bg-gray-50 h-full">
            <Navbar />
            <About />
            <Projects projects={projects} />
            <ContactSection />
            <Footer />
        </div>
    );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async (context) => {
    const projects = await getProjects();
    return {
        props: {
            projects,
        },
    };
};

export default HomePage;
