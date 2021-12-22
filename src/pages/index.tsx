import type { GetStaticProps, NextPage } from "next";
import { GraphQLClient, gql } from "graphql-request";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";
import ContactSection from "../components/contact";
import { Project } from "../types/projects";

interface HomePageProps {
    projects: [Project];
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
    const client = new GraphQLClient(process.env.API_URL, {
        headers: {
            authorization: `Bearer ${process.env.API_TOKEN}`,
            "Application-Type": "content/json",
        },
    });

    const query = gql`
        {
            projectCollection {
                items {
                    title
                    description
                    tag
                    cover {
                        url
                    }
                    url
                }
            }
        }
    `;

    const { projectCollection } = await client.request(query);
    console.log(projectCollection.items);

    return {
        props: {
            projects: projectCollection.items,
        },
    };
};

export default HomePage;
