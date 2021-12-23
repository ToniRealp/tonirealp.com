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

export interface ContentfulProjectCollection {
    projectCollection: {
        items: [
            {
                title: string;
                description: string;
                tag: string;
                cover: {
                    url: string;
                };
                url: string;
            }
        ];
    };
}
