import { ISocialLinks } from './socials';

export type T_TeamMemberProps = {
    id: string;
    name: string;
    role: string;
    photo: string;
    socialLinks?: ISocialLinks;
};
