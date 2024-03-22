import { mock } from './_mock';

export const _members = [...Array(8)].map((_, index) => ({
    id: mock.id(index),
    role: mock.role(index),
    name: mock.fullName(index),
    photo: `/assets/images/portrait/portrait_${index + 1}.jpg`,
    socialLinks: {
        facebook: `facebook/${mock.fullName(index)}`,
        instagram: `instagram/${mock.fullName(index)}`,
        linkedin: `linkedin/${mock.fullName(index)}`,
        twitter: `twitter/${mock.fullName(index)}`,
    },
}));
