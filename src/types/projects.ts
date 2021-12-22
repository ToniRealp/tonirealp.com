export interface Project {
    title: string;
    description: string;
    tag: string;
    cover: Cover;
    url: string;
}

interface Cover {
    url: string;
}
