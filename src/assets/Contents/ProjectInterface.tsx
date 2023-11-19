export interface ProjectMember {
    [key: string]: string | string[];
}

export interface ProjectBlockProps {
    id: string;
    name: string;
    thumbnail: string;
    logo: string;
    cohort: string;
    platform: string;
    slogan: string;
    description: string;
    githubLink: string[];
    serviceLink: string;
    member: ProjectMember;
}
