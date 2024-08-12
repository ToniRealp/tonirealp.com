import type { GetStaticProps, NextPage } from "next";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";
import ContactSection from "../components/contact";
import { Project } from "../utils/types";
import getMainPage from "../utils/data";
import {useState} from "react";
import Head from "next/head";

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
            <Head>
                <title>Toni Realp</title>
                <meta property="og:title" content="Homepage" key="title" />
                <meta property="og:description" content="Toni Realp portfolio" key="description" />
                <meta property="og:url" content="https://www.tonirealp.com" key="url" />
                <meta property="og:image" content={profilePicture} key="image" />
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏀</text></svg>"
                    type="image/jpg"
                    sizes="46x64"
                />
            </Head>
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