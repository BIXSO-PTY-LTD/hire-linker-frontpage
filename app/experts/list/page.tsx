import { ExpertListPage } from './index';

export const metadata = {
    title: 'Expert List',
};

const BRANDS_NAME = [
    'airbnb',
    'dropbox',
    'facebook',
    'google',
    'heroku',
    'lenovo',
    'microsoft',
    'netflix',
    'slack',
    'spotify',
    'tripadvisor',
    'vimeo',
];

export const _id = [...Array(40)].map(
    (_, index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`
);

const id = (index: number) => _id[index]

export const _brands = BRANDS_NAME.map((brand, index) => ({
    id: id(index),
    name: brand,
    image: `/assets/logo/${brand}.svg`,
}));

const ExpertListPageRoute = () => {
    return <ExpertListPage brands={_brands} />;
};

export default ExpertListPageRoute;
