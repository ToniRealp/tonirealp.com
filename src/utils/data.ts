import { gql } from "graphql-request";
import client from "../utils/graphql-client";
import { Project } from "./types";

const getMainPage = async () => {
    const query = gql`
        {
            mainPage(where: { id: "ckxkmvrgg1k9f0a19fhgxdjoe" }) {
                profilePicture {
                    url
                }
                projects {
                    title
                    description
                    tag
                    url
                    cover {
                        url
                    }
                }
                curriculum {
                    url
                }
            }
        }
    `;

    const {
        mainPage: { profilePicture, projects, curriculum },
    } = await client.request(query);

    return {
        profilePicture: profilePicture.url,
        projects: projects.map((project: Project) => {
            return {
                title: project.title,
                description: project.description,
                tag: project.tag,
                cover: project.cover,
                url: project.url,
            };
        }),
        curriculum: curriculum.url,
    };
};

export default getMainPage;
