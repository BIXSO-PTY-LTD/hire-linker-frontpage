import { mock } from './_mock';

// ----------------------------------------------------------------------

const NAME = [
  'Apple iPhone',
  'Samsung Galaxy',
  'Nike Air Max',
  'Adidas Ultraboost',
  'Sony PlayStation',
  'Microsoft Surface',
  'Tesla Model S',
  'Amazon Echo',
  'Google Pixel',
  'Bose QuietComfort',
  'Canon EOS',
  'HP Spectre',
  'LG OLED',
  'Rolex Submariner',
  'Chanel No.5',
  'Louis Vuitton Speedy',
  'Gucci Ace',
  'Ray-Ban Aviator',
  'Herschel Little America',
  'Le Creuset Dutch Oven',
  'Yeti Tumbler',
  'Patagonia Nano Puff',
  'Lululemon Align Leggings',
  'Allbirds Wool Runners',
];

const CATEGORIES = [
  'Electronics',
  'Fashion and Apparel',
  'Home and Garden',
  'Beauty and Personal Care',
  'Health and Wellness',
  'Toys and Games',
  'Sports and Outdoors',
  'Baby and Kids',
  'Automotive and Industrial',
  'Pet Supplies',
  'Food and Beverage',
  'Office and School Supplies',
  'Jewelry and Accessories',
  'Arts and Crafts',
  'Books and Media',
  'Travel and Luggage',
  'Gifts and Flowers',
  'Musical Instruments',
  'Party Supplies',
  'Business and Industrial Supplies',
  'Tools and Hardware',
  'Electronics Accessories',
  'Furniture and Decor',
  'Computer and Software',
];

const DESCRIPTION = `
<p>Aenean viverra rhoncus pede. Etiam feugiat lorem non metus. Quisque malesuada placerat nisl.</p>

<br/>
<ul>
  <li> Updated with a more matte texture, perfect for casual styling. </li>
  <li> Durable water-repellent coating. </li>
  <li> dsdsds </li>
  <li> dsdsds </li>
  <li> Anti-static lining. </li>
</ul>
<br/>

<p>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money..</p>
`;

// ----------------------------------------------------------------------

export const _productsTable = [...Array(12)].map((_, index) => ({
  id: mock.id(index),
  orderId: `#011120${index + 1}`,
  item: NAME[index],
  deliveryDate: mock.time(index),
  price: mock.number.price(index),
  status: ['Completed', 'To Process', 'Cancelled', 'Return'][index] || 'Completed',
}));

export const _productsCarousel = [...Array(4)].map((_, index) => ({
  id: mock.id(index),
  title: mock.productName(index),
  caption: mock.description(index),
  coverUrl: mock.image.product(index),
  label: 'Opening Sale Discount 50%',
}));

export const _productsCompare = [
  'Apple iPhone 12 Pro',
  'Apple iPhone 13 Pro',
  'Apple iPhone 14 Pro',
].map((name, index) => ({
  id: mock.id(index),
  name,
  price: mock.number.price(index),
  coverUrl: mock.image.product(4),
  ratingNumber: mock.number.rating(index),
  details: (index === 0 && [
    'Super Retina XDR (OLED)',
    'Up to 29 hours video playback',
    'A14 Bionic',
    'True Tone',
    'IP68',
    '2017',
  ]) || ['Super Retina XDR (OLED)', '', 'A14 Bionic', '', 'IP68', '2017'],
}));

export const _products = [...Array(24)].map((_, index) => ({
  id: mock.id(index),
  stock: 100,
  name: NAME[index],
  description: DESCRIPTION,
  category: CATEGORIES[index],
  price: mock.number.price(index),
  sold: mock.number.nativeM(index),
  caption: mock.description(index),
  coverUrl: mock.image.product(index),
  ratingNumber: mock.number.rating(index),
  totalReviews: mock.number.nativeL(index),
  label: ['sale', 'new', 'sale', 'sale'][index] || '',
  priceSale:
    [
      mock.number.price(1),
      mock.number.price(2),
      mock.number.price(3),
      mock.number.price(4),
      mock.number.price(5),
    ][index] || 0,
  images: [
    mock.image.product(1),
    mock.image.product(2),
    mock.image.product(3),
    mock.image.product(4),
    mock.image.product(5),
    mock.image.product(6),
    mock.image.product(7),
    mock.image.product(8),
  ],
}));
