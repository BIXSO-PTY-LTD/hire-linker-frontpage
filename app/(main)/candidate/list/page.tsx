import { ExpertListPage } from './index';
import { _mock } from '#shared/_mock';

export const metadata = {
    title: 'Expert List',
};

export const members = [...Array(8)].map((_, index) => ({
    id: _mock.id(index),
    role: _mock.role(index),
    name: _mock.fullName(index),
    photo: `/assets/images/portrait/portrait_${index + 1}.jpg`,
    socialLinks: {
        facebook: `facebook/${_mock.fullName(index)}`,
        instagram: `instagram/${_mock.fullName(index)}`,
        linkedin: `linkedin/${_mock.fullName(index)}`,
        twitter: `twitter/${_mock.fullName(index)}`,
    },
}));

const ExpertListPageRoute = () => {
    return <ExpertListPage members={members} />;
};

export default ExpertListPageRoute;
