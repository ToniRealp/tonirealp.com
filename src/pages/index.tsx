import type { GetStaticProps, NextPage } from "next";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";
import ContactSection from "../components/contact";
import { Project } from "../utils/types";
import getMainPage from "../utils/data";
import {useState} from "react";

interface HomePageProps {
    profilePicture: string;
    description: string;
    projects: Array<Project>;
    curriculum: string;
}

const HomePage: NextPage<HomePageProps> = ({ projects,description ,profilePicture, curriculum }: HomePageProps) => {
    const[aboutHasLoaded, setAboutHasLoaded]=useState(false)
    return (
        <div className="bg-gray-50 h-full">
            <Navbar logo={profilePicture} curriculum={curriculum} />
            <About profilePicture={profilePicture} description={description} setAboutHasLoaded={setAboutHasLoaded}/>
            <Projects projects={projects} aboutHasLoaded={aboutHasLoaded} />
            <ContactSection aboutHasLoaded={aboutHasLoaded}/>
            <Footer />
        </div>
    );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const { profilePicture, description, projects, curriculum } = await getMainPage();
    return {
        props: {
            profilePicture,
            description,
            projects,
            curriculum,
        },
    };
};

export default HomePage;
