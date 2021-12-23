import { gql } from "graphql-request";
import client from "../utils/graphql-client";
import { ContentfulProjectCollection, Project } from "../types/project";

const getProjects = async (): Promise<Array<Project>> => {
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

    const {
        projectCollection: { items },
    } = await client.request<ContentfulProjectCollection>(query);

    return items.map((project) => {
        return {
            title: project.title,
            description: project.description,
            tag: project.tag,
            cover: project.cover,
            url: project.url,
        };
    });
};

export default getProjects;
