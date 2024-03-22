export type T_SocialLinks = {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
};

export type T_TeamMemberProps = {
    id: string;
    name: string;
    role: string;
    photo: string;
    socialLinks?: T_SocialLinks;
};